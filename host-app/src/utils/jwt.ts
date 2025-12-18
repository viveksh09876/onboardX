import { jwtDecode } from "jwt-decode";
import type { AuthUser } from "../store/slices/authSlice";

interface JwtPayload {
  id: string;
  email: string;
  role: AuthUser["role"];
  exp: number;
}

export const decodeToken = (token: string): AuthUser | null => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);

    return {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    };
  } catch {
    return null;
  }
};
