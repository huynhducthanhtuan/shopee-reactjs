import "./UnderFlashSale.css";
import { useDataSourceContext } from "hooks";

function UnderFlashSale() {
  const partInfo = useDataSourceContext("underFlashSalePartInfo");

  const renderUnderFlashSalePart = (datas) =>
    datas.map((data) => {
      const { id, href, image } = data;

      return (
        <a key={id} href={href} className="under-flash-sale__link">
          <img src={image} className="under-flash-sale__img" alt="" />
        </a>
      );
    });

  return (
    <div className="under-flash-sale">
      <div className="under-flash-sale__part">
        {partInfo && renderUnderFlashSalePart(partInfo)}
      </div>
    </div>
  );
}

export default UnderFlashSale;
