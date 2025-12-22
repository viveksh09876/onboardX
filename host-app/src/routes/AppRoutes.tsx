import { Suspense } from "react";
import { MainApp } from "../modules/mainApp";
import { AnalystApp } from "../modules/analystApp";
import { QCApp } from "../modules/qcApp";
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
                  <Route
                    path="main/*"
                    element={
                      <RoleGuard allowedRoles={[ROLES.USER]}>
                        <Suspense fallback={<div>Loading Main App...</div>}>
                          <MainApp />
                        </Suspense>
                      </RoleGuard>
                    }
                  />
                  <Route
                    path="analyst/*"
                    element={
                      <RoleGuard allowedRoles={[ROLES.ANALYST]}>
                        <Suspense fallback={<div>Loading Analyst App...</div>}>
                          <AnalystApp />
                        </Suspense>
                      </RoleGuard>
                    }
                  />
                  <Route
                    path="qc/*"
                    element={
                      <RoleGuard allowedRoles={[ROLES.QC]}>
                        <Suspense fallback={<div>Loading QC App...</div>}>
                          <QCApp />
                        </Suspense>
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
