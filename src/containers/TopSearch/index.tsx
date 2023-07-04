import './TopSearch.css';
import React, { useRef } from 'react';
import { useDataSourceContext } from 'hooks';
import { TopSearchTopLabelIcon } from 'assets/images';

function TopSearch() {
  const mainListRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const previousButtonRef = useRef<HTMLButtonElement>(null);

  let listIndexCurrent = 1;

  const { topSearchMainListInfo: mainListInfo } = useDataSourceContext();

  const renderTopSearchMainList = (datas) =>
    datas.map((data, index) => {
      const { href, productImage, price, text } = data;

      return (
        <a key={index} href={href} className="top-search__main__link">
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
                Bán{' '}
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

  const handleClickNextButton = () => {
    if (listIndexCurrent === 1) {
      listIndexCurrent = 2;
      nextButtonRef.current.style.display = 'block';
      previousButtonRef.current.style.display = 'block';

      mainListRef.current.style.transform = 'translate(-120rem, 0)';
      mainListRef.current.style.transition = 'all 500ms ease 0s';
    } else {
      if (listIndexCurrent === 2) {
        listIndexCurrent = 3;
        nextButtonRef.current.style.display = 'block';
        previousButtonRef.current.style.display = 'block';

        mainListRef.current.style.transform = 'translate(-240rem, 0)';
        mainListRef.current.style.transition = 'all 500ms ease 0s';
      } else {
        if (listIndexCurrent === 3) {
          listIndexCurrent = 4;
          nextButtonRef.current.style.display = 'none';
          previousButtonRef.current.style.display = 'block';

          mainListRef.current.style.transform = 'translate(-360rem, 0)';
          mainListRef.current.style.transition = 'all 500ms ease 0s';
        }
      }
    }
  };

  const handleClickPreviousButton = () => {
    if (listIndexCurrent === 2) {
      listIndexCurrent = 1;
      previousButtonRef.current.style.display = 'none';
      nextButtonRef.current.style.display = 'block';

      mainListRef.current.style.transform = 'translate(0, 0)';
      mainListRef.current.style.transition = 'all 500ms ease 0s';
    } else {
      if (listIndexCurrent === 3) {
        listIndexCurrent = 2;
        previousButtonRef.current.style.display = 'block';
        nextButtonRef.current.style.display = 'block';

        mainListRef.current.style.transform = 'translate(-120rem, 0)';
        mainListRef.current.style.transition = 'all 500ms ease 0s';
      } else {
        if (listIndexCurrent === 4) {
          listIndexCurrent = 3;
          previousButtonRef.current.style.display = 'block';
          nextButtonRef.current.style.display = 'block';

          mainListRef.current.style.transform = 'translate(-240rem, 0)';
          mainListRef.current.style.transition = 'all 500ms ease 0s';
        }
      }
    }
  };

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
          <div ref={mainListRef} className="top-search__main__list">
            {mainListInfo && renderTopSearchMainList(mainListInfo)}
          </div>
        </div>

        <button
          ref={previousButtonRef}
          onClick={handleClickPreviousButton}
          className="navigation-btn navigation-btn__previous top-search__main__previous-btn"
        >
          <i className="fas fa-chevron-left navigation-btn__icon"></i>
        </button>
        <button
          ref={nextButtonRef}
          onClick={handleClickNextButton}
          className="navigation-btn navigation-btn__next top-search__main__next-btn"
        >
          <i className="fas fa-chevron-right navigation-btn__icon"></i>
        </button>
      </div>
    </div>
  );
}

export default TopSearch;
