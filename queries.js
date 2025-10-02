/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClinic = /* GraphQL */ `
  query GetClinic($id: ID!) {
    getClinic(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listClinics = /* GraphQL */ `
  query ListClinics(
    $filter: ModelClinicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClinics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClinicInfraMetadata = /* GraphQL */ `
  query GetClinicInfraMetadata($id: ID!) {
    getClinicInfraMetadata(id: $id) {
      id
      name
      email
      groupName
      apiKey
      apiUrl
      tableName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listClinicInfraMetadata = /* GraphQL */ `
  query ListClinicInfraMetadata(
    $filter: ModelClinicInfraMetadataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClinicInfraMetadata(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        groupName
        apiKey
        apiUrl
        tableName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClinicInfraResult = /* GraphQL */ `
  query GetClinicInfraResult($id: ID!) {
    getClinicInfraResult(id: $id) {
      id
      createdAt
      updatedAt
      message
      groupName
      apiUrl
      apiKey
      tableName
      bucketName
      loginLink
      defaultPassword
      __typename
    }
  }
`;
export const listClinicInfraResults = /* GraphQL */ `
  query ListClinicInfraResults(
    $filter: ModelClinicInfraResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClinicInfraResults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        message
        groupName
        apiUrl
        apiKey
        tableName
        bucketName
        loginLink
        defaultPassword
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBillingRecord = /* GraphQL */ `
  query GetBillingRecord($id: ID!) {
    getBillingRecord(id: $id) {
      id
      clinicId
      clinicName
      apiCalls
      dbReads
      dbWrites
      s3UsageMB
      totalAmount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBillingRecords = /* GraphQL */ `
  query ListBillingRecords(
    $filter: ModelBillingRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBillingRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clinicId
        clinicName
        apiCalls
        dbReads
        dbWrites
        s3UsageMB
        totalAmount
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
