import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DataSourceContext, ModalStatusContextProvider } from "./contexts";
import {
  HomePage,
  RegisterPage,
  LoginPage,
  NotFoundPage,
  LoadingPage,
} from "./pages";

function App() {
  // Hooks
  const [isReady, setIsReady] = useState(false);

  // Get data from context
  const dataSourceContext = useContext(DataSourceContext);

  // Handle side effects
  useEffect(() => {
    dataSourceContext && setIsReady(true);
  }, [dataSourceContext]);

  return isReady ? (
    <div id="app">
      <Routes>
        <Route
          path="/"
          element={
            <ModalStatusContextProvider>
              <HomePage />
            </ModalStatusContextProvider>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  ) : (
    <LoadingPage />
  );
}

export default App;
