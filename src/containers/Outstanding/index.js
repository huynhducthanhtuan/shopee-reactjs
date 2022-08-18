import "./Outstanding.css";
import { useDataSourceContext } from "../../hooks";

function Outstanding() {
  // Get data from Context
  const hotSellingProductsInfo = useDataSourceContext(
    "outstandingHotSellingProductsInfo"
  );
  const hotBrandsInfo = useDataSourceContext("outstandingHotBrandsInfo");

  const updateDOMHotSellingProductsPart = ([info, list]) => (
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
        {list.map((data) => (
          <a
            key={data.id}
            href={data.href}
            className="outstanding__hot-selling-products__item"
          >
            <img
              src={data.image}
              className="outstanding__hot-selling-products__img"
              alt=""
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
        ))}
      </div>
    </>
  );
  const updateDOMHotBrandsPart = ([info, list]) => (
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
        {list.map((data) => (
          <a
            key={data.id}
            href={data.href}
            className="outstanding__hot-brands__item"
          >
            <img
              src={data.image}
              className="outstanding__hot-brands__img"
              alt=""
            />
            <div className="">
              <img
                src={data.subImage}
                className="outstanding__hot-brands__sub-img"
                alt=""
              />
            </div>
            <span className="outstanding__hot-brands__text">{data.text}</span>
          </a>
        ))}
      </div>
    </>
  );

  return (
    <div className="outstanding">
      <div className="outstanding__header">
        <img
          src="/assests/img/container/outstanding/picture_header.png"
          className="outstanding__picture-header"
          alt=""
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
          alt=""
        />
      </div>
    </div>
  );
}

export default Outstanding;
