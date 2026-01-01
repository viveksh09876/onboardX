import { gql } from "@apollo/client";

export const QC_DECISION = gql`
  mutation QCDecision($input: QCDecisionInput!) {
    qcDecision(input: $input) {
      applicationId
      version
      status
    }
  }
`;
