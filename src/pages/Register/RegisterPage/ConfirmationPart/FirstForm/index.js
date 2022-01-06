import { useState, useRef, useEffect, useContext } from "react";
import { DataSourceContext } from "../../../../../contexts";

function FirstForm({
  userPhoneNumber,
  setShowConfirmationPart,
  setShowFirstForm,
  setShowSecondForm,
}) {
  //#region Hooks
  const formRef = useRef();
  const formContentInputRef = useRef();
  const formContentNotifyErrorRef = useRef();
  const formContentConfirmBtnRef = useRef();
  const formContentUserPhoneNumberRef = useRef();
  //#endregion

  //#region Get data from Context
  const dataSourceContext = useContext(DataSourceContext);
  const confirmationCodes = dataSourceContext
    ? dataSourceContext.confirmationCodes
    : null;
  //#endregion

  //#region Function handlers
  const handleClickHeaderBackBtn = () => {
    setShowConfirmationPart(false);
  };
  const handleClickConfirmBtn = () => {
    setShowFirstForm(false);
    setShowSecondForm(true);
  };
  //#endregion

  return (
    <form ref={formRef} className="register-page__confirmation__first-form">
      <div className="register-page__confirmation__first-form__header">
        <button
          onClick={handleClickHeaderBackBtn}
          className="register-page__confirmation__first-form__header__back-btn"
        >
          <svg viewBox="0 0 22 17">
            <g
              stroke="none"
              strokeWidth="1"
              fillRule="evenodd"
              transform="translate(-3, -6)"
            >
              <path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z"></path>
            </g>
          </svg>
        </button>
        <span className="register-page__confirmation__first-form__header__text">
          Vui Lòng Nhập Mã Xác Minh
        </span>
      </div>

      <div className="register-page__confirmation__first-form__content">
        <div className="register-page__confirmation__first-form__content__notify-error">
          <div className="register-page__confirmation__first-form__content__notify-error__icon">
            <svg viewBox="0 0 16 16" className="">
              <path
                fill="none"
                stroke="#FF424F"
                d="M8 15A7 7 0 108 1a7 7 0 000 14z"
                clipRule="evenodd"
              ></path>
              <rect
                stroke="none"
                width="7"
                height="1.5"
                x="6.061"
                y="5"
                fill="#FF424F"
                rx=".75"
                transform="rotate(45 6.06 5)"
              ></rect>
              <rect
                stroke="none"
                width="7"
                height="1.5"
                fill="#FF424F"
                rx=".75"
                transform="scale(-1 1) rotate(45 -11.01 -9.51)"
              ></rect>
            </svg>
          </div>
          <span
            ref={formContentNotifyErrorRef}
            className="register-page__confirmation__first-form__content__notify-error__text"
          >
            Uiiiii, có lỗi mất rồi.
          </span>
        </div>
        <div className="register-page__confirmation__first-form__content__notify">
          Mã xác minh của bạn sẽ được gửi bằng tin nhắn đến
        </div>
        <div
          ref={formContentUserPhoneNumberRef}
          className="register-page__confirmation__first-form__content__user-phone-number"
        >
          {userPhoneNumber}
        </div>
        <input
          autoFocus
          type="tel"
          maxLength="6"
          autoComplete="one-time-code"
          ref={formContentInputRef}
          className="register-page__confirmation__first-form__content__input"
        />
        <div className="register-page__confirmation__first-form__content__input-signal">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="register-page__confirmation__first-form__content__help">
          <span className="register-page__confirmation__first-form__content__help-question">
            Bạn không nhận được mã?
          </span>
          <div className="register-page__confirmation__first-form__content__help-btns">
            <button className="register-page__confirmation__first-form__content__help-resend-btn">
              Gửi lại
            </button>
            <span>hoặc</span>
            <button className="register-page__confirmation__first-form__content__help-other-way-btn">
              thử bằng phương thức xác minh khác
            </button>
          </div>
        </div>
        <button
          ref={formContentConfirmBtnRef}
          onClick={handleClickConfirmBtn}
          className="register-page__confirmation__first-form__content__confirm-btn"
        >
          XÁC NHẬN
        </button>
      </div>
    </form>
  );
}
export default FirstForm;
