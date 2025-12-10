import GraphQLJSON from "graphql-type-json";
import { requireAuth, requireRole } from "../auth";

const resolvers = {
    JSON: GraphQLJSON,

    Query: {
        getCountries: async () => {
            return [
                { code: "IN", name: "India" },
                { code: "US", name: "United States" }
            ]
        },

        getDynamicQuestions: async (
            _parent: unknown,
            args: { screen: string, previousData?: any },
            context: any
        ) => {
            requireAuth(context)
            return [];
        },

        getApplicationVersion: async (
            _parent: unknown,
            args: { id: string, version: number },
            context: any
        ) => {
            requireRole(context, ["QC"])
            return [];
        }
    }
};

export default resolvers;