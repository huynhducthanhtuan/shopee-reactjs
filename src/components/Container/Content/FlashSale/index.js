function FlashSale() {
  return (
    <div className="flash-sale">
      <div className="flash-sale__heading">
        <img
          src="/assests/img/container/flash-sale/header-img.png"
          alt=""
          className="flash-sale__heading__img"
        />
        <a
          href="https://shopee.vn/flash_sale?promotionId=2020501378"
          className="flash-sale__heading__btn flash-sale__heading__view-all-btn"
        >
          Xem tất cả
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      <div className="flash-sale__main">
        <div className="flash-sale__main__part">
          <div className="flash-sale__main__list"></div>
        </div>

        <button className="navigation-btn navigation-btn__previous flash-sale__main__previous-btn">
          <i className="fas fa-chevron-left navigation-btn__icon"></i>
        </button>
        <button className="navigation-btn navigation-btn__next flash-sale__main__next-btn">
          <i className="fas fa-chevron-right navigation-btn__icon"></i>
        </button>
      </div>
    </div>
  );
}

export default FlashSale;
