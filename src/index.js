import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DataSourceContextProvider } from "contexts";
import { GlobalStyles } from "components";
import App from "App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles>
        <DataSourceContextProvider>
          <App />
        </DataSourceContextProvider>
      </GlobalStyles>
    </BrowserRouter>
  </React.StrictMode>
);
