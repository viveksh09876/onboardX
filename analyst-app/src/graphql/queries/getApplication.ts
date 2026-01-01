import { gql } from "@apollo/client";

export const GET_APPLICATION = gql`
  query GetApplication($applicationId: String!) {
    getApplication(applicationId: $applicationId) {
      applicationId
      currentVersion
      status
      formData
      metadata
    }
  }
`;
