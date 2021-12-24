import "./TodaySuggestion.css";
import { useRef, useState, useEffect, useContext } from "react";
import { DataSourceContext, DataSourceContextConsumer } from "../../contexts";

function TodaySuggestion() {
  //#region Hooks
  const todaySuggestionRef = useRef();
  const todaySuggestionHeadingTabMainRef = useRef();
  const todaySuggestionHeadingTabSuperSaleRef = useRef();
  const todaySuggestionMainTabMainRef = useRef();
  const todaySuggestionMainTabSuperSaleRef = useRef();
  const todaySuggestionMainViewAllBtnRef = useRef();
  const [scrollDistance, setScrollDistance] = useState(0);
  //#endregion

  //#region Get data from Context
  const dataSourceContextValue = useContext(DataSourceContext);
  const todaySuggestionMainTabMainInfo = dataSourceContextValue
    ? dataSourceContextValue.todaySuggestionMainTabMainInfo
    : null;
  const todaySuggestionMainTabSuperSaleInfo = dataSourceContextValue
    ? dataSourceContextValue.todaySuggestionMainTabSuperSaleInfo
    : null;
  //#endregion

  //#region Function handlers
  const renderFavouriteLabel = (data) => {
    let favouriteLabelActiveClass = "";
    let favouriteLabelInnerHTML = "";

    if (data.favouriteLabel) {
      switch (data.favouriteLabel) {
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
  const updateInDOMTodaySuggestionMainTabSuperSale = (
    todaySuggestionMainTabSuperSaleInfo
  ) => {
    return todaySuggestionMainTabSuperSaleInfo.map((data, dataIndex) => (
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
  const toggleActiveTodaySuggestionHeadingTab = (activeTab) => {
    switch (activeTab) {
      case "main": {
        todaySuggestionHeadingTabSuperSaleRef.current.classList.remove(
          "today-suggestion__heading-tab--active"
        );
        todaySuggestionHeadingTabMainRef.current.classList.add(
          "today-suggestion__heading-tab--active"
        );
        break;
      }
      case "supersale": {
        todaySuggestionHeadingTabMainRef.current.classList.remove(
          "today-suggestion__heading-tab--active"
        );
        todaySuggestionHeadingTabSuperSaleRef.current.classList.add(
          "today-suggestion__heading-tab--active"
        );
        break;
      }
      default: {
      }
    }
  };
  const clickTodaySuggestionHeadingTabMain = () => {
    toggleActiveTodaySuggestionHeadingTab("main");

    // config for this case
    todaySuggestionRef.current.style.height = "263rem";
    todaySuggestionMainTabSuperSaleRef.current.style.display = "none";
    todaySuggestionMainTabMainRef.current.style.display = "block";
    todaySuggestionMainViewAllBtnRef.current.href =
      "https://shopee.vn/daily_discover?pageNumber=2";

    // scroll to this part
    window.scrollTo(0, scrollDistance);
  };
  const clickTodaySuggestionHeadingTabSuperSale = () => {
    toggleActiveTodaySuggestionHeadingTab("supersale");

    // config for this case
    todaySuggestionRef.current.style.height = "324rem";
    todaySuggestionMainTabMainRef.current.style.display = "none";
    todaySuggestionMainTabSuperSaleRef.current.style.display = "block";
    todaySuggestionMainViewAllBtnRef.current.href =
      "https://shopee.vn/double_eleven_big_sale/2";

    // scroll to this part
    window.scrollTo(0, scrollDistance);
  };
  //#endregion

  //#region Handle side effects
  useEffect(() => {
    setScrollDistance(todaySuggestionRef.current.offsetTop - 120);
  }, []);
  //#endregion

  return (
    <DataSourceContextConsumer>
      {() => (
        <div ref={todaySuggestionRef} className="today-suggestion">
          <div className="today-suggestion__heading">
            <a
              ref={todaySuggestionHeadingTabMainRef}
              onClick={clickTodaySuggestionHeadingTabMain}
              className="today-suggestion__heading-tab-main today-suggestion__heading-tab--active"
            >
              <span>GỢI Ý HÔM NAY</span>
            </a>
            <a
              ref={todaySuggestionHeadingTabSuperSaleRef}
              onClick={clickTodaySuggestionHeadingTabSuperSale}
              className="today-suggestion__heading-tab-super-sale"
            >
              <img src="/assests/img/container/today-suggestion/heading-label.png" />
            </a>
          </div>
          <div className="today-suggestion__main">
            <div
              ref={todaySuggestionMainTabMainRef}
              className="today-suggestion__main__tab-main"
            >
              {todaySuggestionMainTabMainInfo &&
                updateInDOMTodaySuggestionMainTabMain(
                  todaySuggestionMainTabMainInfo
                )}
            </div>
            <div
              ref={todaySuggestionMainTabSuperSaleRef}
              className="today-suggestion__main__tab-super-sale"
            >
              {todaySuggestionMainTabSuperSaleInfo &&
                updateInDOMTodaySuggestionMainTabSuperSale(
                  todaySuggestionMainTabSuperSaleInfo
                )}
            </div>
            <a
              ref={todaySuggestionMainViewAllBtnRef}
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
