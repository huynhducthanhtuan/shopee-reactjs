import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, RegisterPage, LoginPage } from "./pages";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
