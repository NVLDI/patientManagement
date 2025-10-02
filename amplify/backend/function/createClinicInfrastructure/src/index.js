const {
  CognitoIdentityProviderClient,
  CreateGroupCommand,
  AdminCreateUserCommand,
  AdminAddUserToGroupCommand
} = require('@aws-sdk/client-cognito-identity-provider');

const {
  S3Client,
  CreateBucketCommand,
  PutBucketEncryptionCommand,
  PutBucketPolicyCommand,
} = require('@aws-sdk/client-s3');

const {
  AppSyncClient,
  CreateGraphqlApiCommand,
  CreateApiKeyCommand,
} = require('@aws-sdk/client-appsync');

const {
  DynamoDBClient,
  CreateTableCommand,
  PutItemCommand,
} = require('@aws-sdk/client-dynamodb');

// ⚡ Generate short unique ID
const generateShortId = () =>
  'xxxxxx'.replace(/[x]/g, () => (Math.random() * 36 | 0).toString(36));

const userPoolId = process.env.USER_POOL_ID;
const registryTableName = process.env.INFRA_TABLE_NAME;
const billingTableName = process.env.BILLING_TABLE_NAME;

exports.handler = async (event) => {
  const clinic = event.arguments.input;
  const slug = clinic.name.replace(/\s+/g, '-').toLowerCase();
  const shortId = generateShortId();
  const suffix = `${slug}-${shortId}`;

  const groupName = `group-${suffix}`;
  const bucketName = `bucket-${suffix}`;
  const tableName = `table-${suffix}`;
  const apiName = `api-${suffix}`;

  const cognito = new CognitoIdentityProviderClient();
  const appsync = new AppSyncClient();
  const dynamodb = new DynamoDBClient();
  const s3 = new S3Client();

  try {
    // Default password (temporary)
    const defaultPassword = "Clinic@123";

    // 1️⃣ Create the clinic user in Cognito (Cognito sends verification email)
    await cognito.send(new AdminCreateUserCommand({
      UserPoolId: userPoolId,
      Username: clinic.email,
      TemporaryPassword: defaultPassword,
      UserAttributes: [
        { Name: "email", Value: clinic.email },
        { Name: "email_verified", Value: "false" }
      ]
    }));

    // 2️⃣ Create AppSync API
    const apiResponse = await appsync.send(new CreateGraphqlApiCommand({
      name: apiName,
      authenticationType: 'API_KEY',
    }));
    const apiId = apiResponse.graphqlApi.apiId;
    const apiUrl = apiResponse.graphqlApi.uris?.GRAPHQL;

    // 3️⃣ Create API Key
    const keyResponse = await appsync.send(new CreateApiKeyCommand({
      apiId,
      description: `API key for ${clinic.name}`,
    }));
    const apiKey = keyResponse.apiKey.id;

    // 4️⃣ DynamoDB Table for clinic
    await dynamodb.send(new CreateTableCommand({
      TableName: tableName,
      AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
      KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
      BillingMode: 'PAY_PER_REQUEST',
    }));

    // 5️⃣ S3 Bucket
    await s3.send(new CreateBucketCommand({ Bucket: bucketName }));
    await s3.send(new PutBucketEncryptionCommand({
      Bucket: bucketName,
      ServerSideEncryptionConfiguration: {
        Rules: [{ ApplyServerSideEncryptionByDefault: { SSEAlgorithm: 'AES256' } }],
      },
    }));
    await s3.send(new PutBucketPolicyCommand({
      Bucket: bucketName,
      Policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
          Sid: "DenyUnEncryptedObjectUploads",
          Effect: "Deny",
          Principal: "*",
          Action: "s3:PutObject",
          Resource: `arn:aws:s3:::${bucketName}/*`,
          Condition: { StringNotEquals: { "s3:x-amz-server-side-encryption": "AES256" } },
        }],
      }),
    }));

    // 6️⃣ Save to registry table
    const now = new Date().toISOString();
    const id = `meta-${generateShortId()}`;

    await dynamodb.send(new PutItemCommand({
      TableName: registryTableName,
      Item: {
        id: { S: id },
        name: { S: clinic.name },
        email: { S: clinic.email || '' },
        groupName: { S: groupName },
        apiKey: { S: apiKey },
        apiUrl: { S: apiUrl },
        tableName: { S: tableName },
        bucketName: { S: bucketName },
        loginLink: { S: `myapp://ClinicLogin?email=${encodeURIComponent(clinic.email)}` },
        defaultPassword: { S: defaultPassword },
        createdAt: { S: now },
        updatedAt: { S: now },
      },
    }));

    // 7️⃣ Create billing record with 0 usage
    const billingId = `billing-${shortId}`;
    await dynamodb.send(new PutItemCommand({
      TableName: billingTableName,
      Item: {
        id: { S: billingId },
        clinicId: { S: id },
        clinicName: { S: clinic.name },
        apiCalls: { N: "0" },
        dbReads: { N: "0" },
        dbWrites: { N: "0" },
        s3UsageMB: { N: "0" },
        totalAmount: { N: "0" },
        createdAt: { S: now },
      },
    }));

    // 8️⃣ Create Cognito Group at the end
    await cognito.send(new CreateGroupCommand({
      GroupName: groupName,
      UserPoolId: userPoolId,
    }));

    // 9️⃣ Add the user to the new group
    await cognito.send(new AdminAddUserToGroupCommand({
      UserPoolId: userPoolId,
      Username: clinic.email,
      GroupName: groupName,
    }));

    return {
      id,
      createdAt: now,
      updatedAt: now,
      message: 'Infrastructure created successfully',
      groupName,
      apiKey,
      apiUrl,
      tableName,
      bucketName,
      loginLink: `myapp://ClinicLogin?email=${encodeURIComponent(clinic.email)}`,
      defaultPassword
    };

  } catch (error) {
    console.error('❌ Infra setup failed:', error);
    throw error;
  }
};
