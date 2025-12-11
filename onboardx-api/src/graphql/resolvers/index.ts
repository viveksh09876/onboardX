import GraphQLJSON from "graphql-type-json";
import { requireAuth, requireRole } from "../auth";
import { GraphQLContext } from "../context";
import { resolveDynamicQuestions } from "../../services/dynamicQuerstionEngine";
import { getApplicationVersion as fetchApplicationVersion } from "../../services/applicationVersionService";

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
            const user = requireAuth(context);
            const { screen, previousData } = args;
            const questionSet = await context.models.DynamicQuestionSet.findOne({ screen });
            if (!questionSet) return [];

            const resolved = resolveDynamicQuestions(questionSet, previousData);
            return resolved;
        },

        getApplicationVersion: async (
            _parent: unknown,
            args: { id: string, version: number },
            context: GraphQLContext
        ) => {
            requireRole(context, ["QC"]);
            const { id, version } = args;
            const appVer = await fetchApplicationVersion(id, version);
            if (!appVer) return null;
            return appVer.formData ?? null;
        }
    }
};

export default resolvers;