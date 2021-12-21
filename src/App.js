import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, RegisterPage, LoginPage } from "./pages";
import MotionPart from "./components/MotionPart";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <MotionPart />
    </div>
  );
}

export default App;
