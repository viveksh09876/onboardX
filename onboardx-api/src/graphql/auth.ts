import { GraphQLError } from 'graphql';
import { AuthPayload } from '../types/authTypes';

function assert(condition: boolean, message: string, code = "FORBIDDEN", status = 403) {
    if (!condition) {
        throw new GraphQLError(message, {
            extensions: {
                code,
                http: { status }
            }
        });
    }
}


export function requireAuth(context: any) {
    const user = context.user;
    assert(user, "Authentication required", "UNAUTHENTICATED", 401);
    return user;
}

export function requireRole(context: any, allowedRoles: string[]): AuthPayload {
    const user = requireAuth(context);
    assert(allowedRoles.includes(user.role), `User role ${user.role} not permitted`, "FORBIDDEN", 403);
    return user;
}