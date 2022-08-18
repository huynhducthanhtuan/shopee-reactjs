import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDataSourceContext } from "./hooks";
import { ModalStatusContextProvider } from "./contexts";
import {
  HomePage,
  RegisterPage,
  LoginPage,
  NotFoundPage,
  LoadingPage,
} from "./pages";

function App() {
  const [isReady, setIsReady] = useState(false);

  // Get data from context
  const dataSourceContext = useDataSourceContext();

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
