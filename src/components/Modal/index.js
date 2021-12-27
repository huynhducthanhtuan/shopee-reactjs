import "./Modal.css";
import { useState, useRef, useContext } from "react";
import { ModalStatusContext } from "../../contexts";

function Modal() {
  //#region Hooks
  const giftBannerPopupRef = useRef();
  const giftBannerPopupCloseBtnRef = useRef();
  //#endregion

  //#region Get data from Context
  const modalStatusContext = useContext(ModalStatusContext);
  const { showModal, setShowModal } = modalStatusContext;
  //#endregion

  //#region Function handlers
  const handleClickModal = () => {
    setTimeout(() => {
      // hide modal
      setShowModal(false);

      // enable scrolling
      document.querySelector("body").style.overflow = "visible";
      document.querySelector("#app").style.position = "absolute";
    }, 100);
  };
  const handleClickGiftBannerPopup = (e) => {
    e.stopPropagation();
  };
  const handleClickGiftBannerPopupCloseBtn = (e) => {
    e.stopPropagation();
    document.querySelector("#modal").click();
  };
  //#endregion

  return (
    <div id="modal" onClick={handleClickModal}>
      <div className="modal__overlay"></div>

      <div className="modal__body">
        <div
          ref={giftBannerPopupRef}
          onClick={(e) => handleClickGiftBannerPopup(e)}
          style={{ display: "block" }}
          className="gift-banner__popup"
        >
          <img
            src="/assests/img/not-logged-in/gift-banner__popup/label.png"
            className="gift-banner__popup__label"
          />
          <button
            ref={giftBannerPopupCloseBtnRef}
            onClick={(e) => handleClickGiftBannerPopupCloseBtn(e)}
            className="gift-banner__popup__close-btn"
          >
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
                    className="gift-banner__popup__main-left-part__img"
                  />
                </a>
              </div>
            </div>
            <div className="gift-banner__popup__main-right-part">
              <img
                src="/assests/img/header/header__links-app-download/qr.png"
                className="gift-banner__popup__main-right-part__qr-img"
              />
              <div className="gift-banner__popup__main-right-part__others-img">
                <img
                  src="/assests/img/header/header__links-app-download/google_play.png"
                  className="gift-banner__popup__main-right-part__google-play-img"
                />
                <img
                  src="/assests/img/header/header__links-app-download/app_store.png"
                  className="gift-banner__popup__main-right-part__app-store-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "none" }} className="page-load-banner">
          <button className="page-load-banner__close-btn">
            <i className="fas fa-times"></i>
          </button>
          <a
            href="https://shopee.vn/m/rohto-official"
            className="page-load-banner__link"
          >
            <img
              src="/assests/img/banner.png"
              className="page-load-banner__img"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
