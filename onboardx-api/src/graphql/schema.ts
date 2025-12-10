import { gql } from 'graphql-tag';

const typeDefs = gql`
    scalar JSON

    type ReferenceItem {
        code: String!
        name: String!
    }

    type Option {
        code: String!
        label: String!
    }

    type User {
        id: ID!
        email: String!
        role: String!
        name: String
    }

    type AdditionalQuestion {
        questionId: ID!
        type: String!
        label: String
        labelKey: String
        options: [Option]
        conditions: JSON
        validation: JSON
        answer: JSON
    }

    type Query {
        getCountries: [ReferenceItem!]!
        getDynamicQuestions(screen: String!, previousData: JSON): [AdditionalQuestion!]!
        getApplicationVersion(id: ID!, version: Int!): JSON
    }
`;

export default typeDefs;