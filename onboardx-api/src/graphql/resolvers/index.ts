import GraphQLJSON from "graphql-type-json";

const resolvers = {
    JSON: GraphQLJSON,

    Query: {
        getCountries: async () => {
            return [
                { code: "IN", name: "India" },
                { code: "US", name: "United States" }
            ]
        },

        getDynamicQuestions: async (_parent: unknown, _args: unknown, _context: unknown) => {
            return [];
        },

        getApplicationVersion: async (_parent: unknown, _args: unknown, _context: unknown) => {
            return [];
        }
    }
};

export default resolvers;