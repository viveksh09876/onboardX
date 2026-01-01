import { gql } from "@apollo/client";

export const GET_APPLICATION_VERSIONS = gql`
  query GetApplicationVersions($applicationId: String!) {
    getApplicationVersions(applicationId: $applicationId) {
      version
      status
      formData
      metadata
      analystComment
    }
  }
`;
