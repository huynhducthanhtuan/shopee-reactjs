import RegisterPage from "./RegisterPage";
import Footer from "../../components/Footer";

function Register({ dataSource }) {
  return (
    <>
      <RegisterPage />
      <Footer dataSource={dataSource} />
    </>
  );
}

export default Register;
