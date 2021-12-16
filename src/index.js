import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Modal from "./components/Modal";
import MotionPartChat from "./components/MotionPartChat";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <DataSourceContext.Provider value={}> */}
      <App />
      <Modal />
      <MotionPartChat />
      {/* </DataSourceContext.Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
