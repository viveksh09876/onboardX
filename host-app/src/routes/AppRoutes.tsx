import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "../components/common/ProtectedRoute";
import Loader from "../components/common/Loader";

// Pages
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";

// MFEs
const MainApp = lazy(() => import("mainApp/App"));
const AnalystApp = lazy(() => import("analystApp/App"));
const QCApp = lazy(() => import("qcApp/App"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />

        {/* Default */}
        <Route path="/" element={<Navigate to="/main" replace />} />

        {/* Main App */}
        <Route
          path="/main/*"
          element={
            <ProtectedRoute roles={["USER"]}>
              <MainApp />
            </ProtectedRoute>
          }
        />

        {/* Analyst */}
        <Route
          path="/analyst/*"
          element={
            <ProtectedRoute roles={["ANALYST"]}>
              <AnalystApp />
            </ProtectedRoute>
          }
        />

        {/* QC */}
        <Route
          path="/qc/*"
          element={
            <ProtectedRoute roles={["QC"]}>
              <QCApp />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
