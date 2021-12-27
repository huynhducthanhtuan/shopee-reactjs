import "./FooterPolicyAndTerms.css";
import { useContext } from "react";
import {
  DataSourceContext,
  DataSourceContextConsumer,
} from "../../../contexts";

function FooterPolicyAndTerms() {
  //#region Get data from Context
  const dataSourceContext = useContext(DataSourceContext);
  const titleInfo = dataSourceContext
    ? dataSourceContext.footerPolicyTermstitleInfo
    : null;
  const certificateInfo = dataSourceContext
    ? dataSourceContext.footerPolicyTermsPartCertificateInfo
    : null;
  const companyInfoInfo = dataSourceContext
    ? dataSourceContext.footerPolicyTermsPartCompanyInfoInfo
    : null;
  //#endregion

  //#region Function handlers
  const updateInDOMTitlePart = (datas) => {
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
  const updateInDOMCertificatePart = (datas) => {
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
  const updateInDOMCompanyInfoPart = (datas) => {
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
      )}
    </DataSourceContextConsumer>
  );
}

export default FooterPolicyAndTerms;
