// import express from "express";
// import cors from "cors";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DataSourceContextProvider } from "./Context/DataSourceContext";
import App from "./App";
import Modal from "./components/Modal";
import MotionPartChat from "./components/MotionPartChat";

// Solve CORS problem when fetch API
// const app = express();
// app.use(cors({ origin: "*" }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataSourceContextProvider>
        <App />
        <Modal />
        <MotionPartChat />
      </DataSourceContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
