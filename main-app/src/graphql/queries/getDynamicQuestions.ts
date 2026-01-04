import { gql } from "@apollo/client";

export const GET_DYNAMIC_QUESTIONS = gql`
  query GetDynamicQuestions($screen: String!, $previousData: JSON) {
    getDynamicQuestions(screen: $screen, previousData: $previousData) {
      questionId
      labelKey
      type
      options {
        labelKey: label
        value: code
      }
      conditions {
        fieldId
        equals
      }
      answer
    }
  }
`;
