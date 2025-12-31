import { gql } from "@apollo/client";

export const SAVE_DRAFT = gql`
  mutation SaveDraft($input: SaveDraftInput!) {
    saveDraft(input: $input) {
      applicationId
      version
      status
    }
  }
`;

export const SUBMIT_APPLICATION = gql`
  mutation SubmitApplication($input: SubmitInput!) {
    submitApplication(input: $input) {
      applicationId
      version
      status
    }
  }
`;
