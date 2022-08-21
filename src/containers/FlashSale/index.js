import "./FlashSale.css";
import {
  FlashSaleHotIcon,
  FlashSaleHeaderImage,
  FlashSaleSelledBarImage,
} from "assets/images";
import { useDataSourceContext } from "hooks";

function FlashSale() {
  const { flashSaleMainListInfo } = useDataSourceContext();

  const renderFlashSaleMainList = (datas) =>
    datas.map((data, index) => {
      const {
        href,
        bubbleImage,
        frameImage,
        price,
        selledStatus,
        selledPartWidthPercent,
        saleOffPercent,
      } = data;

      return (
        <a key={index} href={href} className="flash-sale__main__link">
          <img
            src={bubbleImage}
            className="flash-sale__main__bubble-img"
            alt=""
          />
          <img
            src={frameImage}
            className="flash-sale__main__frame-img"
            alt=""
          />
          <span className="flash-sale__main__price">{price}</span>

          <div className="flash-sale__main__percent-bar">
            <div className="flash-sale__main__percent-bar__text">
              <span className="flash-sale__main__percent-bar__selled-status">
                {selledStatus}
              </span>
            </div>
            <div className="flash-sale__main__percent-bar__total-part"></div>
            <div
              className="flash-sale__main__percent-bar__selled-part"
              style={{
                width: `${selledPartWidthPercent}%`,
                background: `url(${FlashSaleSelledBarImage}) no-repeat center / cover`,
              }}
            ></div>
            {selledPartWidthPercent >= 70 && (
              <div
                className="flash-sale__main__percent-bar--hot"
                style={{
                  background: `url(${FlashSaleHotIcon}) no-repeat center / contain`,
                }}
              ></div>
            )}
          </div>
          
          <div className="flash-sale__main__sale-off-label">
            <span className="flash-sale__main__sale-off-label__percent">
              {saleOffPercent}
            </span>
            <span className="flash-sale__main__sale-off-label__text">GIẢM</span>
          </div>
        </a>
      );
    });

  return (
    <div className="flash-sale">
      <div className="flash-sale__heading">
        <img
          src={FlashSaleHeaderImage}
          className="flash-sale__heading__img"
          alt=""
        />
        <a
          href="https://shopee.vn/flash_sale?promotionId=2020501378"
          className="flash-sale__heading__btn flash-sale__heading__view-all-btn"
        >
          Xem tất cả
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>

      <div className="flash-sale__main">
        <div className="flash-sale__main__part">
          <div className="flash-sale__main__list">
            {flashSaleMainListInfo &&
              renderFlashSaleMainList(flashSaleMainListInfo)}
          </div>
        </div>

        <button className="navigation-btn navigation-btn__previous flash-sale__main__previous-btn">
          <i className="fas fa-chevron-left navigation-btn__icon"></i>
        </button>
        <button className="navigation-btn navigation-btn__next flash-sale__main__next-btn">
          <i className="fas fa-chevron-right navigation-btn__icon"></i>
        </button>
      </div>
    </div>
  );
}

export default FlashSale;
