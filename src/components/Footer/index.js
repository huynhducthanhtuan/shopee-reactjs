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

export {
  Footer,
  FooterText,
  FooterDirectory,
  FooterLink,
  FooterPolicyAndTerms,
};
