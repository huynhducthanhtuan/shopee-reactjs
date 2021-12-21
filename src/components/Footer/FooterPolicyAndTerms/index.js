import "./FooterPolicyAndTerms.css";
import { useContext } from "react";
import { DataSourceContext, DataSourceContextConsumer } from "../../../context";

function FooterPolicyAndTerms() {
  //#region Get data from Context
  const dataSourceContextValue = useContext(DataSourceContext);
  const footerPolicyTermsPartTitleInfo = dataSourceContextValue
    ? dataSourceContextValue.footerPolicyTermsPartTitleInfo
    : null;
  const footerPolicyTermsPartCertificateInfo = dataSourceContextValue
    ? dataSourceContextValue.footerPolicyTermsPartCertificateInfo
    : null;
  const footerPolicyTermsPartCompanyInfoInfo = dataSourceContextValue
    ? dataSourceContextValue.footerPolicyTermsPartCompanyInfoInfo
    : null;
  //#endregion

  //#region Function handlers
  const updateInDOMFooterPolicyTermsPartTitle = (datas) => {
    const divTags = datas.map((data) => {
      return (
        <div key={data.id} className="footer__policy-terms__part__title__part">
          <a
            href={data.href}
            className="footer__policy-terms__part__title__link"
          >
            {data.innerHTML}
          </a>
        </div>
      );
    });
    return divTags;
  };
  const updateInDOMFooterPolicyTermsPartCertificate = (datas) => {
    const aTags = datas.map((data) => {
      return (
        <a
          key={data.id}
          target="_blank"
          rel="noopener noreferrer"
          href={data.href}
          className="footer__policy-terms__part__certificate__link"
        >
          <img src={data.image} />
        </a>
      );
    });
    return aTags;
  };
  const updateInDOMFooterPolicyTermsPartCompanyInfo = (datas) => {
    const spanTags = datas.map((data, index) => {
      return (
        <span
          key={index}
          className="footer__policy-terms__part__company-info__text"
        >
          {data}
        </span>
      );
    });
    return spanTags;
  };
  //#endregion

  return (
    <DataSourceContextConsumer>
      {() => (
        <div className="footer__policy-terms">
          <div className="footer__policy-terms__part">
            <div className="footer__policy-terms__part__title">
              {footerPolicyTermsPartTitleInfo &&
                updateInDOMFooterPolicyTermsPartTitle(
                  footerPolicyTermsPartTitleInfo
                )}
            </div>
            <div className="footer__policy-terms__part__certificate">
              {footerPolicyTermsPartCertificateInfo &&
                updateInDOMFooterPolicyTermsPartCertificate(
                  footerPolicyTermsPartCertificateInfo
                )}
            </div>
            <div className="footer__policy-terms__part__company-info">
              {footerPolicyTermsPartCompanyInfoInfo &&
                updateInDOMFooterPolicyTermsPartCompanyInfo(
                  footerPolicyTermsPartCompanyInfoInfo
                )}
            </div>
          </div>
        </div>
      )}
    </DataSourceContextConsumer>
  );
}

export default FooterPolicyAndTerms;
