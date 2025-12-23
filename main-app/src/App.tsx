import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="personal" replace />} />
      <Route path="personal" element={<div>Personal Screen</div>} />
      <Route path="business" element={<div>Business Screen</div>} />
      <Route path="teams" element={<div>Teams Screen</div>} />
      <Route path="products" element={<div>Products Screen</div>} />
    </Routes>
  );
};

export default App;
