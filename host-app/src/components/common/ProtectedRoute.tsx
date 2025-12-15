import { Navigate, useLocation } from "react-router-dom";


interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isAuthenticated = false;
    const location = useLocation();

    if (!isAuthenticated) {
      return (
        <Navigate 
          to="/login"
          replace
          state={{ from: location }}
        />
      )
    }

    return <>{children}</>
};

export default ProtectedRoute;