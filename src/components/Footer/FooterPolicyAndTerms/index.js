import "./FooterPolicyAndTerms.css";
import { useDataSourceContext } from "hooks";

function FooterPolicyAndTerms() {
  const {
    footerPolicyTermsPartTitleInfo,
    footerPolicyTermsPartCertificateInfo,
    footerPolicyTermsPartCompanyInfoInfo,
  } = useDataSourceContext();

  const renderTitlePart = (datas) => {
    const divTags = datas.map((data) => {
      const { id, href, innerHTML } = data;

      return (
        <div key={id} className="footer__policy-terms__part__title__part">
          <a href={href} className="footer__policy-terms__part__title__link">
            {innerHTML}
          </a>
        </div>
      );
    });

    return divTags;
  };
  const renderCertificatePart = (datas) => {
    const aTags = datas.map((data) => {
      const { id, href, image } = data;

      return (
        <a
          key={id}
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          className="footer__policy-terms__part__certificate__link"
        >
          <img src={image} alt="" />
        </a>
      );
    });

    return aTags;
  };
  const renderCompanyInfoPart = (datas) => {
    const spanTags = datas.map((data, index) => (
      <span
        key={index}
        className="footer__policy-terms__part__company-info__text"
      >
        {data}
      </span>
    ));

    return spanTags;
  };

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
