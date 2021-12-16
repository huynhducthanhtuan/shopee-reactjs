import { useContext } from "react";
import { DataSourceContext } from "../../../../Context/DataSourceContext";

function UnderFlashSale() {
  // Get data from Context
  const dataSourceContextValue = useContext(DataSourceContext);
  const underFlashSalePartInfo = dataSourceContextValue
    ? dataSourceContextValue.underFlashSalePartInfo
    : null;

  // Function handlers
  const updateInDOMUnderFlashSalePart = (datas) => {
    return datas.map((data) => (
      <a key={data.id} href={data.href} className="under-flash-sale__link">
        <img src={data.image} className="under-flash-sale__img" />
      </a>
    ));
  };

  return (
    <div className="under-flash-sale">
      <div className="under-flash-sale__part">
        {underFlashSalePartInfo &&
          updateInDOMUnderFlashSalePart(underFlashSalePartInfo)}
      </div>
    </div>
  );
}

export default UnderFlashSale;
