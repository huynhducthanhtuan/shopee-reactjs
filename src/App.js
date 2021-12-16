import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { DataSourceContext, Provider } from "./Context/DataSourceContext";
import HomePage from "./Pages/Home";
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";

function App() {
  // Hooks
  const [dataSource, setDataSource] = useState([]);

  // Fetch data and pass it to child components
  useEffect(() => {
    fetch("/db/db.json")
      .then((response) => response.json())
      .then((datas) => {
        setDataSource(datas);
      });
  }, []);

  return (
    <Provider>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage dataSource={dataSource} />} />
          <Route
            path="/register"
            element={<RegisterPage dataSource={dataSource} />}
          />
          <Route
            path="/login"
            element={<LoginPage dataSource={dataSource} />}
          />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
