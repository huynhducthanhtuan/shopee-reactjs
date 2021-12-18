import { useContext } from "react";
import {
  DataSourceContext,
  DataSourceContextConsumer,
} from "../../../../Context/DataSourceContext";

function ShopeeMall() {
  //#region Get data from Context
  const dataSourceContextValue = useContext(DataSourceContext);
  const shopeeMallHeadingTextInfo = dataSourceContextValue
    ? dataSourceContextValue.shopeeMallHeadingTextInfo
    : null;
  const shopeeMallMainProductListInfo = dataSourceContextValue
    ? dataSourceContextValue.shopeeMallMainProductListInfo
    : null;
  //#endregion

  //#region Function handlers
  const updateInDOMShopeeMallHeadingText = (datas) => {
    return datas.map((data) => (
      <div key={data.id}>
        <img src={data.image} className="shopee-mall__heading__text__icon" />
        <span className="shopee-mall__heading__text__title">{data.title}</span>
      </div>
    ));
  };
  const updateInDOMShopeeMallMainProductList = (datas) => {
    const shopeeMallMainProductListLength = datas.length;
    const shopeeMallMainProductListItemsLength =
      shopeeMallMainProductListLength * 2;

    return datas.map((data, index) => (
      <li key={index} className="shopee-mall__main__product-item">
        {data.map((dataChild, index) => {
          // check for special case: last li tag
          return dataChild.id !== shopeeMallMainProductListItemsLength ? (
            <a
              key={index}
              href={dataChild.href}
              className="shopee-mall__main__product-item__link"
            >
              <img
                src={dataChild.image}
                className="shopee-mall__main__product-item__link__img"
              />
              <span className="shopee-mall__main__product-item__link__text">
                {dataChild.text}
              </span>
            </a>
          ) : (
            <div
              key={index}
              className="shopee-mall__main__product-item__link__exception"
            >
              <a
                href="https://shopee.vn/mall"
                className="shopee-mall__heading__view-all-btn"
              >
                Xem tất cả
                <div>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </a>
            </div>
          );
        })}
      </li>
    ));
  };
  //#endregion

  return (
    <DataSourceContextConsumer>
      {() => (
        <div className="shopee-mall">
          <div className="shopee-mall__heading">
            <div className="shopee-mall__heading__part">
              <a
                href="https://shopee.vn/mall"
                className="shopee-mall__heading__link"
              >
                <img
                  src="/assests/img/container/shopee-mall/heading/icon.png"
                  className="shopee-mall__heading__img"
                />
              </a>
            </div>
            <div className="shopee-mall__heading__text">
              {shopeeMallHeadingTextInfo &&
                updateInDOMShopeeMallHeadingText(shopeeMallHeadingTextInfo)}
            </div>
            <a
              href="https://shopee.vn/mall"
              className="shopee-mall__heading__view-all-btn"
            >
              <span>Xem tất cả</span>
              <div>
                <i className="fas fa-chevron-right"></i>
              </div>
            </a>
          </div>
          <div className="shopee-mall__main">
            <div className="shopee-mall__main__motion">
              <a
                href="https://shopee.vn/m/uu-dai-provence"
                className="shopee-mall__main__motion__link"
              >
                <img
                  src="/assests/img/container/shopee-mall/motion-part/1.png"
                  alt=""
                  className="shopee-mall__main__motion__img"
                />
              </a>
              <div className="shopee-mall__main__motion__queue">
                <div className="shopee-mall__main__motion__queue-item shopee-mall__main__motion__queue-item--current"></div>
                <div className="shopee-mall__main__motion__queue-item"></div>
                <div className="shopee-mall__main__motion__queue-item"></div>
                <div className="shopee-mall__main__motion__queue-item"></div>
              </div>
            </div>
            <div className="shopee-mall__main__product">
              <div className="shopee-mall__main__product-part">
                <ul className="shopee-mall__main__product-list">
                  {shopeeMallMainProductListInfo &&
                    updateInDOMShopeeMallMainProductList(
                      shopeeMallMainProductListInfo
                    )}
                </ul>
              </div>

              <button className="navigation-btn navigation-btn__previous shopee-mall__main__product__previous-btn">
                <i className="fas fa-chevron-left navigation-btn__icon"></i>
              </button>
              <button className="navigation-btn navigation-btn__next shopee-mall__main__product__next-btn">
                <i className="fas fa-chevron-right navigation-btn__icon"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </DataSourceContextConsumer>
  );
}

export default ShopeeMall;
