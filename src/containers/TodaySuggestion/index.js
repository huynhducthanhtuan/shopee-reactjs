import "./TodaySuggestion.css";
import { useContext } from "react";
import { DataSourceContext, DataSourceContextConsumer } from "../../contexts";

function TodaySuggestion() {
  //#region Get data from Context
  const dataSourceContextValue = useContext(DataSourceContext);
  const todaySuggestionMainTabMainInfo = dataSourceContextValue
    ? dataSourceContextValue.todaySuggestionMainTabMainInfo
    : null;
  const todaySuggestionMainTabSuperSale88Info = dataSourceContextValue
    ? dataSourceContextValue.todaySuggestionMainTabSuperSale88Info
    : null;
  //#endregion

  //#region Function handlers
  const renderFavouriteLabel = (dataChild) => {
    let favouriteLabelActiveClass = "";
    let favouriteLabelInnerHTML = "";

    if (dataChild.favouriteLabel) {
      switch (dataChild.favouriteLabel) {
        case "Yêu thích": {
          favouriteLabelActiveClass =
            "today-suggestion__main-product__favourite-label--yeuthich";
          favouriteLabelInnerHTML = "Yêu thích";
          break;
        }
        case "Yêu thích+": {
          favouriteLabelActiveClass =
            "today-suggestion__main-product__favourite-label--yeuthichplus";
          favouriteLabelInnerHTML = (
            <img
              src="/assests/img/container/today-suggestion/yeuthichplus.png"
              className="today-suggestion__main-product__favourite-label--yeuthichplus__img"
            />
          );
          break;
        }
        case "Mall": {
          favouriteLabelActiveClass =
            "today-suggestion__main-product__favourite-label--mall";
          favouriteLabelInnerHTML = (
            <img
              src="/assests/img/container/today-suggestion/mall.png"
              className="today-suggestion__main-product__favourite-label--mall__img"
            />
          );
          break;
        }
        default: {
        }
      }
    }

    return (
      <div
        className={
          "today-suggestion__main-product__favourite-label " +
          favouriteLabelActiveClass
        }
      >
        {favouriteLabelInnerHTML}
      </div>
    );
  };

  const updateInDOMTodaySuggestionMainTabMain = (
    todaySuggestionMainTabMainInfo
  ) => {
    return todaySuggestionMainTabMainInfo.map((data, dataIndex) => (
      <div key={dataIndex} className="today-suggestion__main-list">
        {data.map((dataChild, dataChildIndex) => (
          <div key={dataChildIndex} className="today-suggestion__main-item">
            <a
              key={dataChildIndex}
              href={dataChild.productLink}
              className="today-suggestion__main-product"
            >
              <div>
                <img
                  src={dataChild.productImage}
                  className="today-suggestion__main-product__product-img"
                />
                {dataChild.frameImage && (
                  <img
                    src={dataChild.frameImage}
                    className="today-suggestion__main-product__frame-img"
                  />
                )}
                <div className="today-suggestion__main-product__part">
                  <span className="today-suggestion__main-product__name">
                    {dataChild.name}
                  </span>
                  {dataChild.saleOffText && (
                    <div className="today-suggestion__main-product__sale-off">
                      <img
                        src="/assests/img/container/today-suggestion/left-serrated.png"
                        className="today-suggestion__main-product__sale-off__left-serrated"
                      />
                      <span className="today-suggestion__main-product__sale-off__text">
                        {dataChild.saleOffText}
                      </span>
                      <img
                        src="/assests/img/container/today-suggestion/right-serrated.png"
                        className="today-suggestion__main-product__sale-off__right-serrated"
                      />
                    </div>
                  )}
                  <div className="today-suggestion__main-product__price-and-selled-quantity">
                    <span className="today-suggestion__main-product__price">
                      {dataChild.price}
                    </span>
                    <span className="today-suggestion__main-product__selled-quantity">
                      {dataChild.selledQuantity}
                    </span>
                  </div>
                </div>
                {renderFavouriteLabel(dataChild)}
                {dataChild.saleOffLabelPercent && (
                  <div className="today-suggestion__main-product__sale-off-label">
                    <span className="today-suggestion__main-product__sale-off-label__percent">
                      {dataChild.saleOffLabelPercent}
                    </span>
                    <span className="today-suggestion__main-product__sale-off-label__text">
                      giảm
                    </span>
                  </div>
                )}
                {dataChild.sponsorLabel && (
                  <div className="today-suggestion__main-product__sponsor-label">
                    Tài Trợ
                  </div>
                )}
                <div className="today-suggestion__main-product__hover-label">
                  Tìm sản phẩm tương tự
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    ));
  };

  const updateInDOMTodaySuggestionMainTabSuperSale88 = (
    todaySuggestionMainTabSuperSale88Info
  ) => {
    return todaySuggestionMainTabSuperSale88Info.map((data, dataIndex) => (
      <div key={dataIndex} className="today-suggestion__main-list">
        {data.map((dataChild, dataChildIndex) => (
          <div key={dataChildIndex} className="today-suggestion__main-item">
            <a
              href={dataChild.productLink}
              className="today-suggestion__main-product"
            >
              <div>
                <img
                  src={dataChild.productImage}
                  className="today-suggestion__main-product__product-img"
                />
                {dataChild.frameImage && (
                  <img
                    src={dataChild.frameImage}
                    className="today-suggestion__main-product__frame-img"
                  />
                )}
                <div className="today-suggestion__main-product__part">
                  <span className="today-suggestion__main-product__name">
                    {dataChild.name}
                  </span>
                  {dataChild.saleOffText && (
                    <div className="today-suggestion__main-product__sale-off">
                      <img
                        src="/assests/img/container/today-suggestion/left-serrated.png"
                        className="today-suggestion__main-product__sale-off__left-serrated"
                      />
                      <span className="today-suggestion__main-product__sale-off__text">
                        {dataChild.saleOffText}
                      </span>
                      <img
                        src="/assests/img/container/today-suggestion/right-serrated.png"
                        className="today-suggestion__main-product__sale-off__right-serrated"
                      />
                    </div>
                  )}
                  <div className="today-suggestion__main-product__price-and-selled-quantity">
                    <span className="today-suggestion__main-product__price">
                      {dataChild.price}
                    </span>
                    <span className="today-suggestion__main-product__selled-quantity">
                      {dataChild.selledQuantity}
                    </span>
                  </div>
                </div>
                {renderFavouriteLabel(dataChild)}
                {dataChild.saleOffLabelPercent && (
                  <div className="today-suggestion__main-product__sale-off-label">
                    <span className="today-suggestion__main-product__sale-off-label__percent">
                      {dataChild.saleOffLabelPercent}
                    </span>
                    <span className="today-suggestion__main-product__sale-off-label__text">
                      giảm
                    </span>
                  </div>
                )}
                {dataChild.sponsorLabel && (
                  <div className="today-suggestion__main-product__sponsor-label">
                    Tài Trợ
                  </div>
                )}
                <div className="today-suggestion__main-product__hover-label">
                  Tìm sản phẩm tương tự
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    ));
  };
  //#endregion

  return (
    <DataSourceContextConsumer>
      {() => (
        <div className="today-suggestion">
          <div className="today-suggestion__heading">
            <a className="today-suggestion__heading-tab-main today-suggestion__heading-tab--active">
              <span>GỢI Ý HÔM NAY</span>
            </a>
            <a className="today-suggestion__heading-tab-super-sale-8-8">
              <img src="/assests/img/container/today-suggestion/heading-label.png" />
            </a>
          </div>
          <div className="today-suggestion__main">
            <div
              style={{ display: "block", height: "254rem" }}
              className="today-suggestion__main__tab-main"
            >
              {todaySuggestionMainTabMainInfo &&
                updateInDOMTodaySuggestionMainTabMain(
                  todaySuggestionMainTabMainInfo
                )}
            </div>
            <div
              style={{ display: "none", height: "318rem" }}
              className="today-suggestion__main__tab-super-sale-8-8"
            >
              {todaySuggestionMainTabSuperSale88Info &&
                updateInDOMTodaySuggestionMainTabSuperSale88(
                  todaySuggestionMainTabSuperSale88Info
                )}
            </div>
            <a
              href="https://shopee.vn/daily_discover?pageNumber=2"
              className="today-suggestion__main__view-all-btn"
            >
              Xem thêm
            </a>
          </div>
        </div>
      )}
    </DataSourceContextConsumer>
  );
}

export default TodaySuggestion;
