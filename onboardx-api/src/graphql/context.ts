import { AuthPayload } from "../types/authTypes";
import models from "../models";

export interface GraphQLContext {
    user: AuthPayload | null,
    models: typeof models;
}