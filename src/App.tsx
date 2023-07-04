import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDataSourceContext } from 'hooks/index';
import { ModalStatusContextProvider } from 'contexts/index';
import {
  HomePage,
  RegisterPage,
  LoginPage,
  NotFoundPage,
  LoadingPage
} from 'pages/index';

function App() {
  const [isReady, setIsReady] = useState(false);
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
