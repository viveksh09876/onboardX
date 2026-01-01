import { Routes, Route, Navigate } from "react-router-dom";
import QCReviewScreen from "./screens/QCReviewScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="review" replace />} />
      <Route path="review/:applicationId" element={<QCReviewScreen />} />
    </Routes>
  );
};

export default App;
