import "./UnderFlashSale.css";
import { useContext } from "react";
import { DataSourceContext, DataSourceContextConsumer } from "../../context";

function UnderFlashSale() {
  //#region Get data from Context
  const dataSourceContextValue = useContext(DataSourceContext);
  const underFlashSalePartInfo = dataSourceContextValue
    ? dataSourceContextValue.underFlashSalePartInfo
    : null;
  //#endregion

  //#region Function handlers
  const updateInDOMUnderFlashSalePart = (datas) => {
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
            {underFlashSalePartInfo &&
              updateInDOMUnderFlashSalePart(underFlashSalePartInfo)}
          </div>
        </div>
      )}
    </DataSourceContextConsumer>
  );
}

export default UnderFlashSale;
