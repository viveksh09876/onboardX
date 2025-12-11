import GraphQLJSON from "graphql-type-json";
import { requireAuth, requireRole } from "../auth";
import { GraphQLContext } from "../context";

const resolvers = {
    JSON: GraphQLJSON,

    Query: {
        getCountries: async (_parent: unknown, _args: unknown, context: GraphQLContext) => {
            // Public endpoint — no authentication needed
            return context.models.ReferenceData.find({ type: "COUNTRY" }).lean();
        },

        getDynamicQuestions: async (
            _parent: unknown,
            args: { screen: string, previousData?: any },
            context: GraphQLContext
        ) => {
            requireAuth(context)
            return [];
        },

        getApplicationVersion: async (
            _parent: unknown,
            args: { id: string, version: number },
            context: GraphQLContext
        ) => {
            requireRole(context, ["QC"])
            return [];
        }
    }
};

export default resolvers;