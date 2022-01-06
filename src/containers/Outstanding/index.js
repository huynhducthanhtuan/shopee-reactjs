import "./Outstanding.css";
import { useContext } from "react";
import { DataSourceContext } from "../../contexts";

function Outstanding() {
  //#region Get data from Context
  const dataSourceContext = useContext(DataSourceContext);
  const hotSellingProductsInfo = dataSourceContext
    ? dataSourceContext.outstandingHotSellingProductsInfo
    : null;
  const hotBrandsInfo = dataSourceContext
    ? dataSourceContext.outstandingHotBrandsInfo
    : null;
  //#endregion

  //#region Function handlers
  const updateDOMHotSellingProductsPart = ([info, list]) => {
    return (
      <>
        <div className="outstanding__hot-selling-products__info">
          <h4 className="outstanding__hot-selling-products__info__heading">
            {info.heading}
          </h4>
          <a
            href={info.href}
            className="outstanding__hot-selling-products__info__view-more-btn"
          >
            Xem thêm <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        <div className="outstanding__hot-selling-products__list">
          {list.map((data) => {
            return (
              <a
                key={data.id}
                href={data.href}
                className="outstanding__hot-selling-products__item"
              >
                <img
                  src={data.image}
                  className="outstanding__hot-selling-products__img"
                />
                <span className="outstanding__hot-selling-products__price">
                  {data.price}
                </span>
                <div className="outstanding__hot-selling-products__sale-off-label">
                  <span className="outstanding__hot-selling-products__sale-off-label__percent">
                    {data.percent}
                  </span>
                  <span className="outstanding__hot-selling-products__sale-off-label__text">
                    GIẢM
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </>
    );
  };
  const updateDOMHotBrandsPart = ([info, list]) => {
    return (
      <>
        <div className="outstanding__hot-brands__info">
          <h4 className="outstanding__hot-brands__info__heading">
            {info.heading}
          </h4>
          <a
            href={info.href}
            className="outstanding__hot-brands__info__view-more-btn"
          >
            Xem thêm <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        <div className="outstanding__hot-brands__list">
          {list.map((data) => {
            return (
              <a
                key={data.id}
                href={data.href}
                className="outstanding__hot-brands__item"
              >
                <img
                  src={data.image}
                  className="outstanding__hot-brands__img"
                />
                <div className="">
                  <img
                    src={data.subImage}
                    className="outstanding__hot-brands__sub-img"
                  />
                </div>
                <span className="outstanding__hot-brands__text">
                  {data.text}
                </span>
              </a>
            );
          })}
        </div>
      </>
    );
  };
  //#endregion

  return (
    <div className="outstanding">
      <div className="outstanding__header">
        <img
          src="/assests/img/container/outstanding/picture_header.png"
          className="outstanding__picture-header"
        />
      </div>
      <div
        className="outstanding__body"
        style={{
          background: `url(
                "/assests/img/container/outstanding/picture_body.png"
              ) no-repeat center/ cover`,
        }}
      >
        <div>
          <div className="outstanding__hot-selling-products">
            {hotSellingProductsInfo &&
              updateDOMHotSellingProductsPart([
                hotSellingProductsInfo.info,
                hotSellingProductsInfo.list,
              ])}
          </div>
          <div className="outstanding__hot-brands">
            {hotBrandsInfo &&
              updateDOMHotBrandsPart([hotBrandsInfo.info, hotBrandsInfo.list])}
          </div>
        </div>
      </div>
      <div className="outstanding__footer">
        <img
          src="/assests/img/container/outstanding/picture_footer.png"
          className="outstanding__picture-footer"
        />
      </div>
    </div>
  );
}

export default Outstanding;
