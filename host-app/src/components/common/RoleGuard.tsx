import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import type { UserRole } from "../../store/slices/authSlice";
import { hasRole } from "../../utils/roles";

interface RoleGuardProps {
  allowedRoles: UserRole[];
  children: React.ReactNode;
}

const RoleGuard: React.FC<RoleGuardProps> = ({
  allowedRoles,
  children,
}) => {
  const userRole = useAppSelector((state) => state.auth.user?.role);

  if (!hasRole(userRole, allowedRoles)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default RoleGuard;