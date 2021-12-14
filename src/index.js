import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Modal from "./components/Modal";
import MotionPartChat from "./components/MotionPartChat";

/* Logic JS */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Modal />
      <MotionPartChat />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
