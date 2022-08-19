import "./Register.css";
import RegisterPage from "./RegisterPage";
import { FooterLink, FooterPolicyAndTerms } from "components/Footer";

function Register() {
  return (
    <>
      <RegisterPage />
      <FooterLink />
      <FooterPolicyAndTerms />
    </>
  );
}

export default Register;
