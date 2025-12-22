import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/common/ProtectedRoute";
import RoleGuard from "../components/common/RoleGuard";
import { ROLES } from "../utils/roles";
import AppLayout from "../components/layout/AppLayout";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <RoleGuard allowedRoles={[ROLES.USER]}>
                    <div>Main Application (MFE)</div>
                  </RoleGuard>
                  <Route
                    path="analyst/*"
                    element={
                      <RoleGuard allowedRoles={[ROLES.ANALYST]}>
                        <div>Analyst Portal (MFE)</div>
                      </RoleGuard>
                    }
                  />
                  <Route
                    path="qc/*"
                    element={
                      <RoleGuard allowedRoles={[ROLES.QC]}>
                        <div>QC Portal (MFE)</div>
                      </RoleGuard>
                    }
                  />
                  <Route path="*" element={<div>Page not found</div>} />
                </Routes>
              </AppLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
