import { Link } from "react-router-dom";
import { useState, useRef } from "react";

function ContentPart({ setShowConfirmationPart }) {
  //#region Hooks
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const inputRef = useRef();
  const nextBtnRef = useRef();
  //#endregion

  //#region Function handlers
  const handlePreventDefault = (e) => {
    e.preventDefault();
  };
  const checkPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length == 10) {
      // 1.check phoneNumber[0] = 0 && phoneNumber[1] != 0 ?
      const checkFirstTwoLetters =
        phoneNumber[0].charCodeAt() == 48 &&
        phoneNumber[1].charCodeAt() >= 49 &&
        phoneNumber[1].charCodeAt() <= 57;

      // 2.check phoneNumber[2->9] all is a integer character in range 0-9 ?
      const newPhoneNumber = phoneNumber.slice(2).split("");
      const checkAllLetters = newPhoneNumber.every(
        (a) => a.match(/[0-9]/g) && a.match(/[0-9]/g).length == 1
      );

      // 3.return result
      const result = checkFirstTwoLetters && checkAllLetters;
      return result;
    } else {
      return false;
    }
  };
  const handleKeyDownInput = (e) => {
    if (e.code == "Enter") {
      e.preventDefault();
    }
    setTimeout(() => {
      if (e.code != "Enter") {
        if (checkPhoneNumber(e.target.value)) {
          setIsValidPhoneNumber(true);
          //#region hide error
          // registerPageContentFormInput.classList.remove(
          //   "register-page__content-form__input--invalid-phone-number"
          // );
          // registerPageContentFormInputTextInvalidPhoneNumber.style.display =
          //   "none";
          // registerPageContentFormInputIconValidPhoneNumber.style.display =
          //   "block";

          // // change opacity of button 'Tiếp theo', cursor: pointer
          // nextBtnRef.current.style.opacity = "1";
          // nextBtnRef.current.style.cursor = "pointer";
          //#endregion
        } else {
          setIsValidPhoneNumber(false);
          //#region show error
          // registerPageContentFormInput.classList.add(
          //   "register-page__content-form__input--invalid-phone-number"
          // );
          // registerPageContentFormInputTextInvalidPhoneNumber.style.display =
          //   "block";
          // registerPageContentFormInputIconValidPhoneNumber.style.display =
          //   "none";

          // // change opacity of button 'Tiếp theo', cursor: not-allowed
          // nextBtnRef.current.style.opacity = "0.7";
          // nextBtnRef.current.style.cursor = "not-allowed";
          //#endregion
        }
      } else {
        if (checkPhoneNumber(e.target.value)) {
          nextBtnRef.current.click();
        } else {
          //#region show error
          // registerPageContentFormInput.classList.add(
          //   "register-page__content-form__input--invalid-phone-number"
          // );
          // registerPageContentFormInputTextInvalidPhoneNumber.style.display =
          //   "block";
          // registerPageContentFormInputIconValidPhoneNumber.style.display =
          //   "none";
          //#endregion
        }
      }
    }, 0);
  };
  const handleClickNextBtn = (e) => {
    e.preventDefault();

    if (isValidPhoneNumber) {
      setShowConfirmationPart(true);
    }
  };
  //#endregion

  return (
    <div className="register-page__content">
      <div
        className="register-page__content-part"
        style={{
          background: `url(
            "/assests/img/register-page/background-content.png"
          ) no-repeat center`,
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
            <div className="register-page__content-form__input-text--invalid-phone-number">
              Số điện thoại không hợp lệ
            </div>
            <svg
              fill="none"
              viewBox="0 0 16 16"
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
              onClick={(e) => handleClickNextBtn(e)}
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
                onClick={(e) => handlePreventDefault(e)}
                className="register-page__content-form__other-ways__facebook"
              >
                <img src="/assests/img/register-page/facebook.png" />
              </button>
              <button
                onClick={(e) => handlePreventDefault(e)}
                className="register-page__content-form__other-ways__google"
              >
                <img src="/assests/img/register-page/google.png" />
              </button>
              <button
                onClick={(e) => handlePreventDefault(e)}
                className="register-page__content-form__other-ways__apple"
              >
                <img src="/assests/img/register-page/apple.png" />
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
