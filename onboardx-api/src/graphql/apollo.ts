import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import bodyParser from "body-parser";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { verifyToken } from "../utils/jwt";
import models from "../models";
import { GraphQLContext } from "./context";


export async function setupApollo(app: any) {
  // 1. Build schema
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  // 2. Create Apollo server
  const apolloServer = new ApolloServer({
    schema,
  });

  // 3. Start Apollo server
  await apolloServer.start();

  // 4. Mount Apollo GraphQL endpoint
  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressMiddleware(apolloServer, {
      context: async ({ req }): Promise<GraphQLContext> => {
        const authHeader = req.headers.authorization || "";
        const token = authHeader.startsWith("Bearer ")
          ? authHeader.split(" ")[1]
          : null;
        const user = token ? verifyToken(token) : null;

        return { user, models };
      },
    })
  );

  console.log("Apollo GraphQL ready at /graphql");
}
