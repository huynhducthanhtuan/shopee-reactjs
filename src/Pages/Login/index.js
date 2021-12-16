import LoginPage from "./LoginPage";
import Footer from "../../components/Footer";

function Login({ dataSource }) {
  return (
    <>
      <LoginPage />
      <Footer dataSource={dataSource} />
    </>
  );
}

export default Login;
