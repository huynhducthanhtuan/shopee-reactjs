import "./ShopeeMall.css";
import { useContext } from "react";
import { DataSourceContext } from "../../contexts";

function ShopeeMall() {
  // Get data from Context
  const dataSourceContext = useContext(DataSourceContext);
  const headingTextInfo = dataSourceContext
    ? dataSourceContext.shopeeMallHeadingTextInfo
    : null;
  const productListInfo = dataSourceContext
    ? dataSourceContext.shopeeMallMainProductListInfo
    : null;
  const mainMotionLinkInfo = dataSourceContext
    ? dataSourceContext.shopeeMallMainMotionLinkInfo
    : null;

  // Function handlers
  const updateDOMHeadingTextPart = (datas) => {
    return datas.map((data) => (
      <div key={data.id}>
        <img
          src={data.image}
          className="shopee-mall__heading__text__icon"
          alt=""
        />
        <span className="shopee-mall__heading__text__title">{data.title}</span>
      </div>
    ));
  };
  const updateDOMProductListPart = (datas) => {
    const shopeeMallMainProductListLength = datas.length;
    const shopeeMallMainProductListItemsLength =
      shopeeMallMainProductListLength * 2;

    return datas.map((data, index) => (
      <li key={index} className="shopee-mall__main__product-item">
        {data.map((dataChild, index) => {
          const { id, href, image, text } = dataChild;

          // check for special case: last li tag
          return id !== shopeeMallMainProductListItemsLength ? (
            <a
              key={index}
              href={href}
              className="shopee-mall__main__product-item__link"
            >
              <img
                src={image}
                className="shopee-mall__main__product-item__link__img"
                alt=""
              />
              <span className="shopee-mall__main__product-item__link__text">
                {text}
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
  const updateDOMMainMotionPart = (datas) => {
    return datas.map((data) => {
      const { id, href, image } = data;

      return (
        <div key={id}>
          <a href={href} className="shopee-mall__main__motion__link">
            <img
              src={image}
              className="shopee-mall__main__motion__img"
              alt=""
            />
          </a>
        </div>
      );
    });
  };

  return (
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
              alt=""
            />
          </a>
        </div>
        <div className="shopee-mall__heading__text">
          {headingTextInfo && updateDOMHeadingTextPart(headingTextInfo)}
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
        <div className="shopee-mall__main__motion one-time">
          <a
            href="https://shopee.vn/m/uu-dai-provence"
            className="shopee-mall__main__motion__link"
          >
            <img
              src="/assests/img/container/shopee-mall/motion-part/1.png"
              className="shopee-mall__main__motion__img"
              alt=""
            />
          </a>
          {/* {mainMotionLinkInfo &&
                updateDOMMainMotionPart(mainMotionLinkInfo)} */}
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
              {productListInfo && updateDOMProductListPart(productListInfo)}
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
  );
}

export default ShopeeMall;
