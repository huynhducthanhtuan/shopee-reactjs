import "./TodaySuggestion.css";
import { useRef, useState, useEffect } from "react";
import { useDataSourceContext } from "hooks";

function TodaySuggestion() {
  const todaySuggestionRef = useRef();
  const headingTabMainRef = useRef();
  const headingTabSuperSaleRef = useRef();
  const tabMainRef = useRef();
  const tabSuperSaleRef = useRef();
  const viewAllBtnRef = useRef();
  const [scrollDistance, setScrollDistance] = useState(0);

  const tabMainInfo = useDataSourceContext("todaySuggestionMainTabMainInfo");
  const tabSuperSaleInfo = useDataSourceContext(
    "todaySuggestionMainTabSuperSaleInfo"
  );

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
              alt=""
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
              alt=""
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
  const updateDOMTabMainPart = (tabMainInfo) =>
    tabMainInfo.map((data, dataIndex) => (
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
                  alt=""
                />
                {dataChild.frameImage && (
                  <img
                    src={dataChild.frameImage}
                    className="today-suggestion__main-product__frame-img"
                    alt=""
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
                        alt=""
                      />
                      <span className="today-suggestion__main-product__sale-off__text">
                        {dataChild.saleOffText}
                      </span>
                      <img
                        src="/assests/img/container/today-suggestion/right-serrated.png"
                        className="today-suggestion__main-product__sale-off__right-serrated"
                        alt=""
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
  const updateDOMTabSuperSalePart = (tabSuperSaleInfo) =>
    tabSuperSaleInfo.map((data, dataIndex) => (
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
                  alt=""
                />
                {dataChild.frameImage && (
                  <img
                    src={dataChild.frameImage}
                    className="today-suggestion__main-product__frame-img"
                    alt=""
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
                        alt=""
                      />
                      <span className="today-suggestion__main-product__sale-off__text">
                        {dataChild.saleOffText}
                      </span>
                      <img
                        src="/assests/img/container/today-suggestion/right-serrated.png"
                        className="today-suggestion__main-product__sale-off__right-serrated"
                        alt=""
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
  const toggleActiveHeadingTab = (activeTab) => {
    switch (activeTab) {
      case "main": {
        headingTabSuperSaleRef.current.classList.remove(
          "today-suggestion__heading-tab--active"
        );
        headingTabMainRef.current.classList.add(
          "today-suggestion__heading-tab--active"
        );
        break;
      }
      case "supersale": {
        headingTabMainRef.current.classList.remove(
          "today-suggestion__heading-tab--active"
        );
        headingTabSuperSaleRef.current.classList.add(
          "today-suggestion__heading-tab--active"
        );
        break;
      }
      default:
        break;
    }
  };
  const handleClickHeadingTabMain = () => {
    toggleActiveHeadingTab("main");

    // config for this case
    todaySuggestionRef.current.style.height = "263rem";
    tabSuperSaleRef.current.style.display = "none";
    tabMainRef.current.style.display = "block";
    viewAllBtnRef.current.href =
      "https://shopee.vn/daily_discover?pageNumber=2";

    // scroll to this part
    window.scrollTo(0, scrollDistance);
  };
  const handleClickHeadingTabSuperSale = () => {
    toggleActiveHeadingTab("supersale");

    // config for this case
    todaySuggestionRef.current.style.height = "324rem";
    tabMainRef.current.style.display = "none";
    tabSuperSaleRef.current.style.display = "block";
    viewAllBtnRef.current.href = "https://shopee.vn/double_eleven_big_sale/2";

    // scroll to this part
    window.scrollTo(0, scrollDistance);
  };

  useEffect(
    () => setScrollDistance(todaySuggestionRef.current.offsetTop - 120),
    []
  );

  return (
    <div ref={todaySuggestionRef} className="today-suggestion">
      <div className="today-suggestion__heading">
        <a
          ref={headingTabMainRef}
          onClick={handleClickHeadingTabMain}
          className="today-suggestion__heading-tab-main today-suggestion__heading-tab--active"
        >
          <span>GỢI Ý HÔM NAY</span>
        </a>
        <a
          ref={headingTabSuperSaleRef}
          onClick={handleClickHeadingTabSuperSale}
          className="today-suggestion__heading-tab-super-sale"
        >
          <img
            src="/assests/img/container/today-suggestion/heading-label.png"
            alt=""
          />
        </a>
      </div>
      <div className="today-suggestion__main">
        <div ref={tabMainRef} className="today-suggestion__main__tab-main">
          {tabMainInfo && updateDOMTabMainPart(tabMainInfo)}
        </div>
        <div
          ref={tabSuperSaleRef}
          className="today-suggestion__main__tab-super-sale"
        >
          {tabSuperSaleInfo && updateDOMTabSuperSalePart(tabSuperSaleInfo)}
        </div>
        <a
          ref={viewAllBtnRef}
          href="https://shopee.vn/daily_discover?pageNumber=2"
          className="today-suggestion__main__view-all-btn"
        >
          Xem thêm
        </a>
      </div>
    </div>
  );
}

export default TodaySuggestion;
