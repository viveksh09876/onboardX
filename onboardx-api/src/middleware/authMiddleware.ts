import { verifyToken } from "../utils/jwt";
import { UserRole } from "../models/User";
import { AuthPayload } from "../types/authTypes";
import { Request, Response, NextFunction } from "express";

export function authMiddleware(requiredRoles?: UserRole[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({ message: "Unauthorized!" });
            }

            const parts = authHeader.split(" ");
            if (parts.length !== 2 || parts[0] !== "Bearer") {
                return res.status(401).json({ message: "Invalid authorization format!" });
            }

            const token = parts[1];
            const decoded = verifyToken(token);

            if (!decoded) {
                return res.status(401).json({ message: "Invalid token" });
            }

            req.user = decoded as AuthPayload;

            if (requiredRoles && !requiredRoles.includes(req.user.role)) {
                return res.status(403).json({ message: "Access forbidden!" });
            }

            next();
        } catch(err) {
            console.log(err);
            return res.status(500).json({ message: "Something went wrong!" });
        }
    }
}