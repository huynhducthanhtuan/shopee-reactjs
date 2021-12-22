import "./FlashSale.css";
import { useContext } from "react";
import { DataSourceContext, DataSourceContextConsumer } from "../../contexts";

function FlashSale() {
  //#region Get data from Context
  const dataSourceContextValue = useContext(DataSourceContext);
  const flashSaleMainListInfo = dataSourceContextValue
    ? dataSourceContextValue.flashSaleMainListInfo
    : null;
  //#endregion

  //#region Function handlers
  const updateInDOMDirectoryMainList = (datas) => {
    return datas.map((data) => (
      <a key={data.id} href={data.href} className="flash-sale__main__link">
        <img src={data.bubbleImage} className="flash-sale__main__bubble-img" />
        <img src={data.frameImage} className="flash-sale__main__frame-img" />
        <span className="flash-sale__main__price">{data.price}</span>
        <div className="flash-sale__main__percent-bar">
          <div className="flash-sale__main__percent-bar__text">
            <span className="flash-sale__main__percent-bar__selled-status">
              {data.selledStatus}
            </span>
          </div>
          <div className="flash-sale__main__percent-bar__total-part"></div>
          <div
            className="flash-sale__main__percent-bar__selled-part"
            style={{
              width: `${data.selledPartWidthPercent}%`,
              background: `url("/assests/img/container/flash-sale/selled-bar.png") no-repeat center / cover`,
            }}
          ></div>
          {data.selledPartWidthPercent >= 70 && (
            <div
              className="flash-sale__main__percent-bar--hot"
              style={{
                background: `url("/assests/img/container/flash-sale/hot.png") no-repeat center / contain`,
              }}
            ></div>
          )}
        </div>
        <div className="flash-sale__main__sale-off-label">
          <span className="flash-sale__main__sale-off-label__percent">
            {data.saleOffPercent}
          </span>
          <span className="flash-sale__main__sale-off-label__text">GIẢM</span>
        </div>
      </a>
    ));
  };
  //#endregion

  return (
    <DataSourceContextConsumer>
      {() => (
        <div className="flash-sale">
          <div className="flash-sale__heading">
            <img
              src="/assests/img/container/flash-sale/header-img.png"
              className="flash-sale__heading__img"
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
                  updateInDOMDirectoryMainList(flashSaleMainListInfo)}
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
      )}
    </DataSourceContextConsumer>
  );
}

export default FlashSale;
