import "./TopSearch.css";
import { useDataSourceContext } from "../../hooks";

function TopSearch() {
  // Get data from Context
  const listInfo = useDataSourceContext("topSearchMainListInfo");

  const updateDOMMainListPart = (datas) =>
    datas.map((data, index) => (
      <a key={data.id} href={data.href} className="top-search__main__link">
        <div className="top-search__main__product">
          <img
            src={data.productImage}
            className="top-search__main__product__img"
            alt=""
          />
          <img
            src="/assests/img/container/top-search/top-label.png"
            className="top-search__main__product__top-label-img"
            alt=""
          />
          {index !== 0 && (
            <div className="top-search__main__product__statistic">
              Bán{" "}
              <span className="top-search__main__product__statistic__price">
                {data.price}
              </span>
              k+ / tháng
            </div>
          )}
        </div>
        <div className="top-search__main__footer">
          <span className="top-search__main__footer__text">{data.text}</span>
        </div>
      </a>
    ));

  return (
    <div className="top-search">
      <div className="top-search__heading">
        <span className="top-search__heading__title">TÌM KIẾM HÀNG ĐẦU</span>
        <a
          href="https://shopee.vn/top_products?catId=VN_BITL0_625"
          className="top-search__heading__view-all-btn"
        >
          Xem tất cả
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>

      <div className="top-search__main">
        <div className="top-search__main-part">
          <div className="top-search__main__list">
            {listInfo && updateDOMMainListPart(listInfo)}
          </div>
        </div>

        <button className="navigation-btn navigation-btn__previous top-search__main__previous-btn">
          <i className="fas fa-chevron-left navigation-btn__icon"></i>
        </button>
        <button className="navigation-btn navigation-btn__next top-search__main__next-btn">
          <i className="fas fa-chevron-right navigation-btn__icon"></i>
        </button>
      </div>
    </div>
  );
}

export default TopSearch;
