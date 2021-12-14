import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function ShopeeMall() {
  const shopeeMallHeadingTextRef = useRef();

  // updateInDOMShopeeMallHeadingText
  useEffect(() => {
    fetch("/db/db.json")
      .then((response) => response.json())

      .then((datas) => {
        const divTags = datas.shopeeMallHeadingTextInfo.map((data) => {
          return React.createElement("div", {
            key: data.id,
            children: [
              React.createElement("img", {
                className: "shopee-mall__heading__text__icon",
                src: data.image,
              }),
              React.createElement("span", {
                className: "shopee-mall__heading__text__title",
                children: data.title,
              }),
            ],
          });
        });

        ReactDOM.render(divTags, shopeeMallHeadingTextRef.current);
      });
  }, []);

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
              alt=""
              className="shopee-mall__heading__img"
            />
          </a>
        </div>
        <div
          ref={shopeeMallHeadingTextRef}
          className="shopee-mall__heading__text"
        ></div>
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
            <ul className="shopee-mall__main__product-list"></ul>
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
