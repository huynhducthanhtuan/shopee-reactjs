import './UnderFlashSale.css';
import React from 'react';
import { UnderFlashSaleInfo } from 'types';
import { useDataSourceContext } from 'hooks';

function UnderFlashSale() {
  const { underFlashSalePartInfo } = useDataSourceContext();

  const renderUnderFlashSalePart = (datas: UnderFlashSaleInfo[]) =>
    datas.map((data: UnderFlashSaleInfo, index: number) => {
      const { href, image } = data;
      return (
        <a key={index} href={href} className="under-flash-sale__link">
          <img src={image} className="under-flash-sale__img" alt="" />
        </a>
      );
    });

  return (
    <div className="under-flash-sale">
      <div className="under-flash-sale__part">
        {underFlashSalePartInfo &&
          renderUnderFlashSalePart(underFlashSalePartInfo)}
      </div>
    </div>
  );
}

export default UnderFlashSale;
