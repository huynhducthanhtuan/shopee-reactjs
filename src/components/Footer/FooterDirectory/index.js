import { useContext } from "react";
import { DataSourceContext, DataSourceContextConsumer } from "../../../context";

function FooterDirectory() {
  //#region Get data from Context
  const dataSourceContextValue = useContext(DataSourceContext);
  const footerDirectoryListInfo = dataSourceContextValue
    ? dataSourceContextValue.footerDirectoryListInfo
    : null;
  //#endregion

  //#region Function handlers
  const updateInDOMFooterDirectoryList = (datas) => {
    return datas.map((data, index) => (
      <li key={index} className="footer__directory__item">
        {data.map((dataChild, index) => (
          <div key={index} className="footer__directory__item__part">
            <a
              key={index}
              href={dataChild.heading.href}
              className="footer__directory__item__part__heading"
            >
              {dataChild.heading.innerHTML}
            </a>
            <div className="footer__directory__item__part__list">
              {dataChild.footerDirectoryItemPartListInfo.map(
                (dataGrandChild, index) => (
                  <a
                    key={index}
                    className="footer__directory__item__part__item"
                    href={dataGrandChild.href}
                  >
                    {dataGrandChild.innerHTML}
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </li>
    ));
  };
  //#endregion

  return (
    <DataSourceContextConsumer>
      {() => (
        <div className="footer__directory">
          <span className="footer__directory__heading">Danh Mục</span>
          <ul className="footer__directory__list">
            {footerDirectoryListInfo &&
              updateInDOMFooterDirectoryList(footerDirectoryListInfo)}
          </ul>
        </div>
      )}
    </DataSourceContextConsumer>
  );
}

export default FooterDirectory;
