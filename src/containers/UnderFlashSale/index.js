import "./UnderFlashSale.css";
import { useContext } from "react";
import { DataSourceContext, DataSourceContextConsumer } from "../../contexts";

function UnderFlashSale() {
  //#region Get data from Context
  const dataSourceContext = useContext(DataSourceContext);
  const partInfo = dataSourceContext
    ? dataSourceContext.underFlashSalePartInfo
    : null;
  //#endregion

  //#region Function handlers
  const updateDOMPart = (datas) => {
    return datas.map((data) => (
      <a key={data.id} href={data.href} className="under-flash-sale__link">
        <img src={data.image} className="under-flash-sale__img" />
      </a>
    ));
  };
  //#endregion

  return (
    <DataSourceContextConsumer>
      {() => (
        <div className="under-flash-sale">
          <div className="under-flash-sale__part">
            {partInfo && updateDOMPart(partInfo)}
          </div>
        </div>
      )}
    </DataSourceContextConsumer>
  );
}

export default UnderFlashSale;
