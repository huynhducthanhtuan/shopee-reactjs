import FooterText from "./FooterText";
import FooterDirectory from "./FooterDirectory";
import FooterLink from "./FooterLink";
import FooterPolicyAndTerms from "./FooterPolicyAndTerms";

function Footer() {
    return (
        <footer id="footer">
            <FooterText />
            <FooterDirectory />
            <FooterLink />
            <FooterPolicyAndTerms />
        </footer>
    );
}

export default Footer;
export { FooterText, FooterDirectory, FooterLink, FooterPolicyAndTerms };
