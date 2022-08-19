import "./UnderFlashSale.css";
import { useDataSourceContext } from "hooks";

function UnderFlashSale() {
  const partInfo = useDataSourceContext("underFlashSalePartInfo");

  const updateDOMPart = (datas) =>
    datas.map((data) => (
      <a key={data.id} href={data.href} className="under-flash-sale__link">
        <img src={data.image} className="under-flash-sale__img" alt="" />
      </a>
    ));

  return (
    <div className="under-flash-sale">
      <div className="under-flash-sale__part">
        {partInfo && updateDOMPart(partInfo)}
      </div>
    </div>
  );
}

export default UnderFlashSale;
