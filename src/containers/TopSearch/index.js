import "./TopSearch.css";
import { TopSearchTopLabelIcon } from "assets/images";
import { useDataSourceContext } from "hooks";

function TopSearch() {
  const listInfo = useDataSourceContext("topSearchMainListInfo");

  const renderMainList = (datas) =>
    datas.map((data, index) => {
      const { id, href, productImage, price, text } = data;

      return (
        <a key={id} href={href} className="top-search__main__link">
          <div className="top-search__main__product">
            <img
              src={productImage}
              className="top-search__main__product__img"
              alt=""
            />
            <img
              src={TopSearchTopLabelIcon}
              className="top-search__main__product__top-label-img"
              alt=""
            />
            {index !== 0 && (
              <div className="top-search__main__product__statistic">
                Bán{" "}
                <span className="top-search__main__product__statistic__price">
                  {price}
                </span>
                k+ / tháng
              </div>
            )}
          </div>
          <div className="top-search__main__footer">
            <span className="top-search__main__footer__text">{text}</span>
          </div>
        </a>
      );
    });

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
            {listInfo && renderMainList(listInfo)}
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
