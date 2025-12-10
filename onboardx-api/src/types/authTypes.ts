export interface AuthPayload {
    id: string,
    email: string,
    role: string,
    name?: string,
    iat?: number,
    exp?: number
}