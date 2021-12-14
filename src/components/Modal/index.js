function Modal() {
  return (
    <div id="modal">
      <div className="modal__overlay"></div>

      <div className="modal__body">
        <div className="page-load-banner">
          <button className="page-load-banner__close-btn">
            <i className="fas fa-times"></i>
          </button>
          <a
            href="https://shopee.vn/m/rohto-official"
            className="page-load-banner__link"
          >
            <img
              src="/assests/img/banner.png"
              alt=""
              className="page-load-banner__img"
            />
          </a>
        </div>

        <div className="gift-banner__popup">
          <img
            src="/assests/img/not-logged-in/gift-banner__popup/label.png"
            alt=""
            className="gift-banner__popup__label"
          />
          <button className="gift-banner__popup__close-btn">
            <i className="fas fa-times"></i>
          </button>
          <div className="gift-banner__popup__main">
            <div className="gift-banner__popup__main-left-part">
              <div className="gift-banner__popup__main-left-part__heading1">
                Tải ứng dụng Shopee để nhận ngay Quà Tặng từ chúng tớ nhé!
              </div>
              <div className="gift-banner__popup__main-left-part__heading2">
                Nhận quà tặng và các deal độc quyền ngay bây giờ.
              </div>
              <div className="gift-banner__popup__main-left-part__downloads">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://apps.apple.com/VN/app/id959841449?mt=8"
                  className="gift-banner__popup__main-left-part__link"
                >
                  <img
                    src="/assests/img/not-logged-in/gift-banner__popup/app-store-banner.png"
                    alt=""
                    className="gift-banner__popup__main-left-part__img"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.shopee.vn&referrer=af_tranid%3D48q29QFeIlcFvhfPK1EQVQ%26pid%3Dweb_referral%26af_web_id%3Dbdd50c1b-f561-4699-aacb-46cef157b1b6-c"
                  className="gift-banner__popup__main-left-part__link"
                >
                  <img
                    src="/assests/img/not-logged-in/gift-banner__popup/google-play-banner.png"
                    alt=""
                    className="gift-banner__popup__main-left-part__img"
                  />
                </a>
              </div>
            </div>
            <div className="gift-banner__popup__main-right-part">
              <img
                src="/assests/img/header/header__links-app-download/qr.png"
                alt=""
                className="gift-banner__popup__main-right-part__qr-img"
              />
              <div className="gift-banner__popup__main-right-part__others-img">
                <img
                  src="/assests/img/header/header__links-app-download/google_play.png"
                  alt=""
                  className="gift-banner__popup__main-right-part__google-play-img"
                />
                <img
                  src="/assests/img/header/header__links-app-download/app_store.png"
                  alt=""
                  className="gift-banner__popup__main-right-part__app-store-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
