/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClinic = /* GraphQL */ `
  subscription OnCreateClinic($filter: ModelSubscriptionClinicFilterInput) {
    onCreateClinic(filter: $filter) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateClinic = /* GraphQL */ `
  subscription OnUpdateClinic($filter: ModelSubscriptionClinicFilterInput) {
    onUpdateClinic(filter: $filter) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteClinic = /* GraphQL */ `
  subscription OnDeleteClinic($filter: ModelSubscriptionClinicFilterInput) {
    onDeleteClinic(filter: $filter) {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateClinicInfraMetadata = /* GraphQL */ `
  subscription OnCreateClinicInfraMetadata(
    $filter: ModelSubscriptionClinicInfraMetadataFilterInput
  ) {
    onCreateClinicInfraMetadata(filter: $filter) {
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
export const onUpdateClinicInfraMetadata = /* GraphQL */ `
  subscription OnUpdateClinicInfraMetadata(
    $filter: ModelSubscriptionClinicInfraMetadataFilterInput
  ) {
    onUpdateClinicInfraMetadata(filter: $filter) {
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
export const onDeleteClinicInfraMetadata = /* GraphQL */ `
  subscription OnDeleteClinicInfraMetadata(
    $filter: ModelSubscriptionClinicInfraMetadataFilterInput
  ) {
    onDeleteClinicInfraMetadata(filter: $filter) {
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
export const onCreateClinicInfraResult = /* GraphQL */ `
  subscription OnCreateClinicInfraResult(
    $filter: ModelSubscriptionClinicInfraResultFilterInput
  ) {
    onCreateClinicInfraResult(filter: $filter) {
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
export const onUpdateClinicInfraResult = /* GraphQL */ `
  subscription OnUpdateClinicInfraResult(
    $filter: ModelSubscriptionClinicInfraResultFilterInput
  ) {
    onUpdateClinicInfraResult(filter: $filter) {
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
export const onDeleteClinicInfraResult = /* GraphQL */ `
  subscription OnDeleteClinicInfraResult(
    $filter: ModelSubscriptionClinicInfraResultFilterInput
  ) {
    onDeleteClinicInfraResult(filter: $filter) {
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
export const onCreateBillingRecord = /* GraphQL */ `
  subscription OnCreateBillingRecord(
    $filter: ModelSubscriptionBillingRecordFilterInput
  ) {
    onCreateBillingRecord(filter: $filter) {
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
export const onUpdateBillingRecord = /* GraphQL */ `
  subscription OnUpdateBillingRecord(
    $filter: ModelSubscriptionBillingRecordFilterInput
  ) {
    onUpdateBillingRecord(filter: $filter) {
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
export const onDeleteBillingRecord = /* GraphQL */ `
  subscription OnDeleteBillingRecord(
    $filter: ModelSubscriptionBillingRecordFilterInput
  ) {
    onDeleteBillingRecord(filter: $filter) {
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
