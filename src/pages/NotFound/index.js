import { useEffect } from "react";
import { Header } from "../../components";
import {
  FooterHeaderInNotFoundPage,
  FooterLink,
  FooterPolicyAndTerms,
} from "../../components/Footer";

function NotFound() {
  const updateWebsiteTitle = () => {
    document.title = "Shopee";
  };

  // Handle side effects
  useEffect(() => {
    updateWebsiteTitle();
  }, []);

  return (
    <>
      <Header inNotFoundPage="true" />
      <FooterHeaderInNotFoundPage />
      <FooterLink />
      <FooterPolicyAndTerms />
    </>
  );
}

export default NotFound;
