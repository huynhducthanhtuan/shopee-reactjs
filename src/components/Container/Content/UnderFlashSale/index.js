import React, { useState, useEffect } from "react";

function UnderFlashSale() {
  //#region Hooks
  const [underFlashSalePartInfo, setUnderFlashSalePartInfo] = useState();
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

  //#region Handle side effect
  useEffect(() => {
    fetch("/db/db.json")
      .then((response) => response.json())
      .then((datas) => {
        setUnderFlashSalePartInfo(datas.underFlashSalePartInfo);
      });
  }, []);
  //#endregion

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
