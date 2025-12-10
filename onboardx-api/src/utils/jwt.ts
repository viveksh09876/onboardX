import jwt from 'jsonwebtoken';
import { AuthPayload } from '../types/authTypes';

const JWT_SECRET = process.env.JWT_SECRET || "";

//generate jwt token
export function generateToken(payload: AuthPayload): string {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: "8h"
    })
}

//verify incoming token
export function verifyToken(token: string): AuthPayload | null {
    try {
        return jwt.verify(token, JWT_SECRET) as AuthPayload
    } catch(err) {
        return null;
    }
}