import { RegisterBackgroundImage } from "assets/images";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { handlePreventDefault, checkValidPhoneNumber } from "helpers";

function ContentPart({ setShowConfirmationPart, setUserPhoneNumber }) {
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const inputRef = useRef();
  const nextBtnRef = useRef();
  const inputTextInvalidPhoneNumberRef = useRef();
  const inputIconValidPhoneNumberRef = useRef();

  const showError = () => {
    inputRef.current.classList.add(
      "register-page__content-form__input--invalid-phone-number"
    );

    inputTextInvalidPhoneNumberRef.current.style.display = "block";
    inputIconValidPhoneNumberRef.current.style.display = "none";

    nextBtnRef.current.style.opacity = "0.7";
    nextBtnRef.current.style.cursor = "not-allowed";
  };

  const hideError = () => {
    inputRef.current.classList.remove(
      "register-page__content-form__input--invalid-phone-number"
    );

    inputTextInvalidPhoneNumberRef.current.style.display = "none";
    inputIconValidPhoneNumberRef.current.style.display = "block";

    nextBtnRef.current.style.opacity = "1";
    nextBtnRef.current.style.cursor = "pointer";
  };

  const handleKeyDownInput = (event) => {
    if (event.code === "Enter") {
      handlePreventDefault(event);
    }

    setTimeout(() => {
      if (event.code !== "Enter") {
        if (checkValidPhoneNumber(event.target.value)) {
          setIsValidPhoneNumber(true);
          hideError();
        } else {
          setIsValidPhoneNumber(false);
          showError();
        }
      } else {
        if (checkValidPhoneNumber(event.target.value)) {
          setIsValidPhoneNumber(true);
          nextBtnRef.current.click();
        } else {
          setIsValidPhoneNumber(false);
          showError();
        }
      }
    }, 0);
  };

  const handleClickNextBtn = (event) => {
    handlePreventDefault(event);

    if (isValidPhoneNumber) {
      setUserPhoneNumber(inputRef.current.value);
      setShowConfirmationPart(true);
    }
  };

  const handleMouseOverNextBtn = (event) => {
    if (event.target.style.cursor === "pointer") {
      event.target.style.opacity = "0.92";
    } else {
      handlePreventDefault(event);
    }
  };

  const handleMouseLeaveNextBtn = (event) => {
    if (event.target.style.cursor === "pointer") {
      event.target.style.opacity = "1";
    } else {
      handlePreventDefault(event);
    }
  };

  return (
    <div className="register-page__content">
      <div
        className="register-page__content-part"
        style={{
          background: `url(${RegisterBackgroundImage}) no-repeat center`,
        }}
      >
        <form className="register-page__content-form">
          <div className="register-page__content-form__heading">Đăng Ký</div>
          <div className="register-page__content-form__part">
            <input
              ref={inputRef}
              onKeyDown={handleKeyDownInput}
              placeholder="Số điện thoại"
              className="register-page__content-form__input"
              autoFocus
            />
            <div
              ref={inputTextInvalidPhoneNumberRef}
              className="register-page__content-form__input-text--invalid-phone-number"
            >
              Số điện thoại không hợp lệ
            </div>
            
            <svg
              fill="none"
              viewBox="0 0 16 16"
              ref={inputIconValidPhoneNumberRef}
              className="register-page__content-form__input-icon--valid-phone-number"
            >
              <path
                fill="none"
                stroke="#6C0"
                d="M8 15A7 7 0 108 1a7 7 0 000 14z"
                clipRule="evenodd"
              ></path>
              <path
                stroke="none"
                fill="#6C0"
                fillRule="evenodd"
                d="M11.621 6.406l-3.98 4.059c-.266.266-.719.244-1.012-.049-.293-.293-.314-.746-.048-1.012l3.98-4.059c.266-.266.719-.245 1.012.048.293.293.314.747.048 1.013z"
                clipRule="evenodd"
              ></path>
              <path
                stroke="none"
                fill="#6C0"
                fillRule="evenodd"
                d="M3.803 7.997l2.81 2.532c.267.267.72.245 1.013-.048.293-.293.315-.746.048-1.012l-2.81-2.532c-.267-.267-.72-.245-1.013.048-.293.293-.314.746-.048 1.012z"
                clipRule="evenodd"
              ></path>
            </svg>
            <button
              ref={nextBtnRef}
              onClick={(event) => handleClickNextBtn(event)}
              onMouseOver={handleMouseOverNextBtn}
              onMouseLeave={handleMouseLeaveNextBtn}
              className="register-page__content-form__next-btn"
            >
              TIẾP THEO
            </button>

            <div className="register-page__content-form__separate-part">
              <div></div>
              <div className="register-page__content-form__separate-part__text">
                HOẶC
              </div>
              <div></div>
            </div>
            <div className="register-page__content-form__other-ways">
              <button
                onClick={(event) => handlePreventDefault(event)}
                className="register-page__content-form__other-ways__facebook"
              >
                <img src="/assests/img/register-page/facebook.png" alt="" />
              </button>
              <button
                onClick={(event) => handlePreventDefault(event)}
                className="register-page__content-form__other-ways__google"
              >
                <img src="/assests/img/register-page/google.png" alt="" />
              </button>
              <button
                onClick={(event) => handlePreventDefault(event)}
                className="register-page__content-form__other-ways__apple"
              >
                <img src="/assests/img/register-page/apple.png" alt="" />
              </button>
            </div>
            <div className="register-page__content-form__terms-and-policy">
              <span>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://shopee.vn/legaldoc/termsOfService/?__classNameic__=1"
              >
                Điều khoản dịch vụ
              </a>
              &{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://shopee.vn/legaldoc/privacy/?__classNameic__=1"
              >
                Chính sách bảo mật
              </a>
            </div>
            <div className="register-page__content-form__ask-for-login">
              <span className="register-page__content-form__ask-for-login__text">
                Bạn đã có tài khoản?
              </span>
              <Link
                to="/login"
                className="register-page__content-form__ask-for-login__login-btn"
              >
                Đăng nhập
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContentPart;
