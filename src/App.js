import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, RegisterPage, LoginPage, NotFoundPage } from "./pages";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
