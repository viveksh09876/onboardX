import { gql } from "@apollo/client";

export const GET_DYNAMIC_QUESTIONS = gql`
  query GetDynamicQuestions($domain: String!, $input: JSON!) {
    getDynamicQuestions(domain: $domain, input: $input) {
      questionId
      labelKey
      type
      options {
        labelKey
        value
      }
      conditions {
        fieldId
        equals
      }
      answer
    }
  }
`;
