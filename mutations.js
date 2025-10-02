/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateClinicInfraMetadata = /* GraphQL */ `
  mutation UpdateClinicInfraMetadata(
    $input: UpdateClinicInfraMetadataInput!
    $condition: ModelClinicInfraMetadataConditionInput
  ) {
    updateClinicInfraMetadata(input: $input, condition: $condition) {
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
export const createClinicInfraResult = /* GraphQL */ `
  mutation CreateClinicInfraResult(
    $input: CreateClinicInfraResultInput!
    $condition: ModelClinicInfraResultConditionInput
  ) {
    createClinicInfraResult(input: $input, condition: $condition) {
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
export const updateClinicInfraResult = /* GraphQL */ `
  mutation UpdateClinicInfraResult(
    $input: UpdateClinicInfraResultInput!
    $condition: ModelClinicInfraResultConditionInput
  ) {
    updateClinicInfraResult(input: $input, condition: $condition) {
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
export const deleteClinicInfraResult = /* GraphQL */ `
  mutation DeleteClinicInfraResult(
    $input: DeleteClinicInfraResultInput!
    $condition: ModelClinicInfraResultConditionInput
  ) {
    deleteClinicInfraResult(input: $input, condition: $condition) {
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
export const createBillingRecord = /* GraphQL */ `
  mutation CreateBillingRecord(
    $input: CreateBillingRecordInput!
    $condition: ModelBillingRecordConditionInput
  ) {
    createBillingRecord(input: $input, condition: $condition) {
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
export const deleteBillingRecord = /* GraphQL */ `
  mutation DeleteBillingRecord(
    $input: DeleteBillingRecordInput!
    $condition: ModelBillingRecordConditionInput
  ) {
    deleteBillingRecord(input: $input, condition: $condition) {
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
export const createClinic = /* GraphQL */ `
  mutation CreateClinic(
    $input: CreateClinicInput!
    $condition: ModelClinicConditionInput
  ) {
    createClinic(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateClinic = /* GraphQL */ `
  mutation UpdateClinic(
    $input: UpdateClinicInput!
    $condition: ModelClinicConditionInput
  ) {
    updateClinic(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteClinic = /* GraphQL */ `
  mutation DeleteClinic(
    $input: DeleteClinicInput!
    $condition: ModelClinicConditionInput
  ) {
    deleteClinic(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createClinicInfraMetadata = /* GraphQL */ `
  mutation CreateClinicInfraMetadata(
    $input: CreateClinicInfraMetadataInput!
    $condition: ModelClinicInfraMetadataConditionInput
  ) {
    createClinicInfraMetadata(input: $input, condition: $condition) {
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
export const deleteClinicInfraMetadata = /* GraphQL */ `
  mutation DeleteClinicInfraMetadata(
    $input: DeleteClinicInfraMetadataInput!
    $condition: ModelClinicInfraMetadataConditionInput
  ) {
    deleteClinicInfraMetadata(input: $input, condition: $condition) {
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
export const updateBillingRecord = /* GraphQL */ `
  mutation UpdateBillingRecord(
    $input: UpdateBillingRecordInput!
    $condition: ModelBillingRecordConditionInput
  ) {
    updateBillingRecord(input: $input, condition: $condition) {
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
export const createClinicInfrastructure = /* GraphQL */ `
  mutation CreateClinicInfrastructure($input: CreateClinicInput!) {
    createClinicInfrastructure(input: $input) {
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
