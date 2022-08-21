import "./FooterPolicyAndTerms.css";
import { useDataSourceContext } from "hooks";

function FooterPolicyAndTerms() {
  const {
    footerPolicyTermsPartTitleInfo,
    footerPolicyTermsPartCertificateInfo,
    footerPolicyTermsPartCompanyInfoInfo,
  } = useDataSourceContext();

  const renderTitlePart = (datas) =>
    datas.map((data, index) => {
      const { href, innerHTML } = data;
      return (
        <div key={index} className="footer__policy-terms__part__title__part">
          <a href={href} className="footer__policy-terms__part__title__link">
            {innerHTML}
          </a>
        </div>
      );
    });

  const renderCertificatePart = (datas) =>
    datas.map((data, index) => {
      const { href, image } = data;
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__policy-terms__part__certificate__link"
        >
          <img src={image} alt="" />
        </a>
      );
    });

  const renderCompanyInfoPart = (datas) =>
    datas.map((data, index) => (
      <span
        key={index}
        className="footer__policy-terms__part__company-info__text"
      >
        {data}
      </span>
    ));

  return (
    <div className="footer__policy-terms">
      <div className="footer__policy-terms__part">
        <div className="footer__policy-terms__part__title">
          {footerPolicyTermsPartTitleInfo &&
            renderTitlePart(footerPolicyTermsPartTitleInfo)}
        </div>

        <div className="footer__policy-terms__part__certificate">
          {footerPolicyTermsPartCertificateInfo &&
            renderCertificatePart(footerPolicyTermsPartCertificateInfo)}
        </div>

        <div className="footer__policy-terms__part__company-info">
          {footerPolicyTermsPartCompanyInfoInfo &&
            renderCompanyInfoPart(footerPolicyTermsPartCompanyInfoInfo)}
        </div>
      </div>
    </div>
  );
}

export default FooterPolicyAndTerms;
