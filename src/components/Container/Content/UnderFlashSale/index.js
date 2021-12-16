import React, { useState, useEffect } from "react";

function UnderFlashSale({ dataSource }) {
  // Get data from parent component
  const underFlashSalePartInfo = dataSource.underFlashSalePartInfo;

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
