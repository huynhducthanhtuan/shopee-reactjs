import "./Login.css";
import LoginPage from "./LoginPage";
import { FooterLink, FooterPolicyAndTerms } from "components/Footer";

function Login() {
    return (
        <>
            <LoginPage />
            <FooterLink />
            <FooterPolicyAndTerms />
        </>
    );
}

export default Login;
