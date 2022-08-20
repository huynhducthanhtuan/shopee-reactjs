import "./HeaderCommonInfo.css";
import {
  HeaderAppGalleryIcon,
  HeaderAppStoreIcon,
  HeaderGooglePlayIcon,
  HeaderQRCodeImage,
  HeaderNotificationWhenNotLoginIcon,
} from "assets/images";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useDataSourceContext } from "hooks";

function HeaderCommonInfo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const notificationQuantityRef = useRef();

  const { headerNotificationPopupWhenLoggedInListInfo } =
    useDataSourceContext();
  const notificationQuantity =
    headerNotificationPopupWhenLoggedInListInfo &&
    headerNotificationPopupWhenLoggedInListInfo.length;

  const renderPopupWhenLoggedInList = (datas) =>
    datas.map((data, index) => {
      const { href, itemImage, itemTitle, itemDescription } = data;

      return (
        <li
          key={index}
          className="header__notification__popup--when-logged-in__item"
        >
          <a
            href={href}
            className="header__notification__popup--when-logged-in__link"
          >
            <div className="header__notification__popup--when-logged-in__item__img">
              <img src={itemImage} alt="" />
            </div>
            <div className="header__notification__popup--when-logged-in__item__content">
              <h3 className="header__notification__popup--when-logged-in__item__title">
                {itemTitle}
              </h3>
              <p className="header__notification__popup--when-logged-in__item__description">
                {itemDescription}
              </p>
            </div>
          </a>
        </li>
      );
    });
  const handleMouseLeaveNotificationQuantity = () => {
    if (notificationQuantityRef.current) {
      notificationQuantityRef.current.style.display = "none";
    }
  };

  return (
    <div className="header__common-info">
      <div className="header__links">
        <div className="header__links-seller-channel">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://banhang.shopee.vn/"
            className="header__links-seller__link"
          >
            Kênh Người Bán
          </a>
        </div>

        <div className="header__links-become-a-shopee-seller">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://shopee.vn/m/sell-on-shopee"
            className="header__links-become-a-shopee-seller__link"
          >
            Trở Thành Người Bán Shopee
          </a>
        </div>

        <div className="header__links-app-download">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://shopee.vn/web"
            className="header__links-app-download__link"
          >
            Tải Ứng Dụng
          </a>
          <div className="header__links-app-download-popup">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://shopee.vn/web"
            >
              <img
                src={HeaderQRCodeImage}
                className="header__app-download__qr-img"
                alt=""
              />
              <div className="header__links-app-download-popup__box">
                <div>
                  <img
                    src={HeaderAppStoreIcon}
                    className="header__app-download__app-store-img"
                    alt=""
                  />
                  <img
                    src={HeaderGooglePlayIcon}
                    className="header__app-download__google_play-img"
                    alt=""
                  />
                </div>
                <img
                  src={HeaderAppGalleryIcon}
                  className="header__app-download__app_gallery-img"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>

        <div className="header__links-socials">
          <span>Kết Nối</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com/ShopeeVN"
            className="header__links-socials__facebook"
            title="Kết nối Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/Shopee_VN"
            className="header__links-socials__instagram"
            title="Kết nối Instagram"
          >
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
      </div>

      <div className="header__notify-and-account">
        <div
          onMouseLeave={handleMouseLeaveNotificationQuantity}
          className="header__notification"
        >
          <a
            href="https://shopee.vn/user/notifications/order"
            className="header__notification__link"
          >
            <svg
              viewBox="3 2.5 14 14"
              x="0"
              y="0"
              className="header__notification__link-icon"
            >
              <path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z"></path>
              <path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z"></path>
            </svg>
            <span>Thông Báo</span>
            {isLoggedIn && (
              <span
                ref={notificationQuantityRef}
                onMouseLeave={handleMouseLeaveNotificationQuantity}
                className="header__notification__quantity"
              >
                {notificationQuantity}
              </span>
            )}
          </a>
          <div className="header__notification__popup">
            {isLoggedIn ? (
              <div
                style={{ display: "block" }}
                className="header__notification__popup--when-logged-in"
              >
                <h4 className="header__notification__popup--when-logged-in__heading">
                  Thông báo mới nhận
                </h4>
                <ul className="header__notification__popup--when-logged-in__list">
                  {headerNotificationPopupWhenLoggedInListInfo &&
                    renderPopupWhenLoggedInList(
                      headerNotificationPopupWhenLoggedInListInfo
                    )}
                </ul>
                <a
                  href="https://shopee.vn/user/notifications/order"
                  className="header__notification__popup--when-logged-in__view-all-btn"
                >
                  Xem tất cả
                </a>
              </div>
            ) : (
              <div
                style={{ display: "block" }}
                className="header__notification__popup--when-not-login"
              >
                <div className="header__notification__popup--when-not-login__main">
                  <img
                    src={HeaderNotificationWhenNotLoginIcon}
                    className="header__notification__popup--when-not-login__main__img"
                    alt=""
                  />
                  <span className="header__notification__popup--when-not-login__main__text">
                    Đăng nhập để xem Thông Báo
                  </span>
                </div>
                <div className="header__notification__popup--when-not-login__buttons">
                  <Link
                    to="/register"
                    className="header__notification__popup--when-not-login__btn header__notification__popup--when-not-login__register-btn"
                  >
                    <span>Đăng Ký</span>
                  </Link>
                  <Link
                    to="/login"
                    className="header__notification__popup--when-not-login__btn header__notification__popup--when-not-login__login-btn"
                  >
                    <span>Đăng Nhập</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="header__support">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://help.shopee.vn/vn/s/"
            className="header__support__link"
          >
            <svg
              height="16"
              viewBox="0 0 16 16"
              width="16"
              className="header__support__link-icon"
            >
              <g fill="none" fillRule="evenodd" transform="translate(1)">
                <circle cx="7" cy="8" r="7" stroke="currentColor"></circle>
                <path
                  fill="currentColor"
                  d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
                ></path>
              </g>
            </svg>
            <span>Hỗ Trợ</span>
          </a>
        </div>

        <div className="header__register">
          <Link to="/register" className="header__register__btn">
            <span>Đăng Ký</span>
          </Link>
        </div>

        <div className="header__login">
          <Link to="/login" className="header__login__btn">
            <span>Đăng Nhập</span>
          </Link>
        </div>

        <div className="header__user-account">
          <a
            href="https://shopee.vn/user/purchase/"
            className="header__user-account__link"
          >
            <div className="header__user-account__link__icon">
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className="shopee-svg-icon icon-headshot"
              >
                <g>
                  <circle
                    cx="7.5"
                    cy="4.5"
                    fill="none"
                    r="3.8"
                    strokeMiterlimit="10"
                  ></circle>
                  <path
                    d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                    fill="none"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                  ></path>
                </g>
              </svg>
            </div>
            <span className="header__user-account__username">
              huynhducthanhtuan
            </span>
          </a>
          <div className="header__user-account__popup">
            <ul className="header__user-account__popup-list">
              <li className="header__user-account__popup-item">
                <a href="https://shopee.vn/user/account/profile">
                  Tài khoản của tôi
                </a>
              </li>
              <li className="header__user-account__popup-item">
                <a href="https://shopee.vn/user/purchase/">Đơn mua</a>
              </li>
              <li className="header__user-account__popup-item header__logout-btn">
                <a>Đăng xuất</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCommonInfo;
