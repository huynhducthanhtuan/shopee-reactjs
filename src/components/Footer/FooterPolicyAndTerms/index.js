import "./FooterPolicyAndTerms.css";
import { useDataSourceContext } from "hooks";

function FooterPolicyAndTerms() {
  const titleInfo = useDataSourceContext("footerPolicyTermstitleInfo");
  const certificateInfo = useDataSourceContext(
    "footerPolicyTermsPartCertificateInfo"
  );
  const companyInfoInfo = useDataSourceContext(
    "footerPolicyTermsPartCompanyInfoInfo"
  );

  const updateInDOMTitlePart = (datas) => {
    const divTags = datas.map((data) => (
      <div key={data.id} className="footer__policy-terms__part__title__part">
        <a href={data.href} className="footer__policy-terms__part__title__link">
          {data.innerHTML}
        </a>
      </div>
    ));

    return divTags;
  };
  const updateInDOMCertificatePart = (datas) => {
    const aTags = datas.map((data) => (
      <a
        key={data.id}
        target="_blank"
        rel="noopener noreferrer"
        href={data.href}
        className="footer__policy-terms__part__certificate__link"
      >
        <img src={data.image} alt="" />
      </a>
    ));

    return aTags;
  };
  const updateInDOMCompanyInfoPart = (datas) => {
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
          {titleInfo && updateInDOMTitlePart(titleInfo)}
        </div>
        <div className="footer__policy-terms__part__certificate">
          {certificateInfo && updateInDOMCertificatePart(certificateInfo)}
        </div>
        <div className="footer__policy-terms__part__company-info">
          {companyInfoInfo && updateInDOMCompanyInfoPart(companyInfoInfo)}
        </div>
      </div>
    </div>
  );
}

export default FooterPolicyAndTerms;
