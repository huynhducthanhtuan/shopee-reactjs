import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DataSourceContextProvider } from "contexts";
import App from "App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataSourceContextProvider>
        <App />
      </DataSourceContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
