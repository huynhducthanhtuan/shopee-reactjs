import "./Outstanding.css";
import {
  OutstandingHeaderPicture,
  OutstandingBodyPicture,
  OutstandingFooterPicture,
} from "assets/images";
import { useDataSourceContext } from "hooks";

function Outstanding() {
  const { outstandingHotSellingProductsInfo, outstandingHotBrandsInfo } =
    useDataSourceContext();

  const renderHotSellingProducts = ([info, list]) => (
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
  const renderHotBrands = ([info, list]) => (
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
          const { id, href, image, subImage, text } = data;

          return (
            <a key={id} href={href} className="outstanding__hot-brands__item">
              <img
                src={image}
                className="outstanding__hot-brands__img"
                alt=""
              />
              <div className="">
                <img
                  src={subImage}
                  className="outstanding__hot-brands__sub-img"
                  alt=""
                />
              </div>
              <span className="outstanding__hot-brands__text">{text}</span>
            </a>
          );
        })}
      </div>
    </>
  );

  return (
    <div className="outstanding">
      <div className="outstanding__header">
        <img
          src={OutstandingHeaderPicture}
          className="outstanding__picture-header"
          alt=""
        />
      </div>
      <div
        className="outstanding__body"
        style={{
          background: `url(${OutstandingBodyPicture}) no-repeat center/ cover`,
        }}
      >
        <div>
          <div className="outstanding__hot-selling-products">
            {outstandingHotSellingProductsInfo &&
              renderHotSellingProducts([
                outstandingHotSellingProductsInfo.info,
                outstandingHotSellingProductsInfo.list,
              ])}
          </div>
          <div className="outstanding__hot-brands">
            {outstandingHotBrandsInfo &&
              renderHotBrands([
                outstandingHotBrandsInfo.info,
                outstandingHotBrandsInfo.list,
              ])}
          </div>
        </div>
      </div>
      <div className="outstanding__footer">
        <img
          src={OutstandingFooterPicture}
          className="outstanding__picture-footer"
          alt=""
        />
      </div>
    </div>
  );
}

export default Outstanding;
