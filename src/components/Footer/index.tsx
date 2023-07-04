import React from 'react';
import FooterText from './FooterText/index';
import FooterDirectory from './FooterDirectory/index';
import FooterLink from './FooterLink/index';
import FooterPolicyAndTerms from './FooterPolicyAndTerms/index';

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
