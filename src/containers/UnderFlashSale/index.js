import "./UnderFlashSale.css";
import { useContext } from "react";
import { DataSourceContext } from "../../contexts";

function UnderFlashSale() {
  // Get data from Context
  const dataSourceContext = useContext(DataSourceContext);
  const partInfo = dataSourceContext
    ? dataSourceContext.underFlashSalePartInfo
    : null;

  // Function handlers
  const updateDOMPart = (datas) => {
    return datas.map((data) => (
      <a key={data.id} href={data.href} className="under-flash-sale__link">
        <img src={data.image} className="under-flash-sale__img" alt="" />
      </a>
    ));
  };

  return (
    <div className="under-flash-sale">
      <div className="under-flash-sale__part">
        {partInfo && updateDOMPart(partInfo)}
      </div>
    </div>
  );
}

export default UnderFlashSale;
