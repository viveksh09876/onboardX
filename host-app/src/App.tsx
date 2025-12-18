import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useAppDispatch } from "./store/hooks";
import { bootstrapAuth } from "./utils/authBootstrap";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    bootstrapAuth(dispatch);
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
