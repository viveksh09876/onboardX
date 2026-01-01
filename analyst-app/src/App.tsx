import { Routes, Route, Navigate } from "react-router-dom";
import AnalystReviewScreen from "./screens/AnalystReviewScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="review" replace />} />
      <Route path="review/:applicationId" element={<AnalystReviewScreen />} />
    </Routes>
  );
};

export default App;
