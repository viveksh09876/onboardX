import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/common/ProtectedRoute";
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
                  <Route path="main/*" element={<div>Main Application MFE</div>} />
                  <Route path="analyst/*" element={<div>Analyst Portal MFE</div>} />
                  <Route path="qc/*" element={<div>QC Portal MFE</div>} />
                  <Route path="*" element={<div>Page not found</div>} />
                </Routes>
              </AppLayout>
            </ProtectedRoute> 
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;