import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useAppDispatch } from "./store/hooks";
import { bootstrapAuth } from "./utils/authBootstrap";
import { BrowserRouter } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    bootstrapAuth(dispatch);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
