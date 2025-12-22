import type { UserRole } from "../store/slices/authSlice";

export const ROLES = {
  USER: "USER",
  ANALYST: "ANALYST",
  QC: "QC",
} as const;

export const hasRole = (
  userRole: UserRole | undefined,
  allowedRoles: UserRole[]
): boolean => {
  if (!userRole) return false;
  return allowedRoles.includes(userRole);
};
