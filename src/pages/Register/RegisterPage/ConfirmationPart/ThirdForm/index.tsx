import { Link } from 'react-router-dom';
import { COUNT_DOWN_SECONDS } from 'constants/index';
import React, { useState, useRef, useEffect } from 'react';

function ThirdForm({ phoneNumber }) {
  const [countDownSecond, setCountDownSecond] = useState(COUNT_DOWN_SECONDS);
  const countDownSecondsNumberRef = useRef();

  useEffect(() => {
    // Count down
    let timerId = setInterval(() => {
      setCountDownSecond((prevState) => {
        if (prevState === 1) {
          clearInterval(timerId);
          window.location.href = '/';
        }
        return prevState - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <form className="register-page__confirmation__third-form">
      <div className="register-page__confirmation__third-form__header">
        Đăng Ký Thành Công
      </div>

      <div className="register-page__confirmation__third-form__content">
        <div className="register-page__confirmation__third-form__content-success-icon">
          <svg fill="none" viewBox="0 0 16 16">
            <path
              fill="none"
              stroke="#6c0"
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
        </div>

        <div className="register-page__confirmation__third-form__content-first-notify">
          <div className="register-page__confirmation__third-form__content-first-notify__text">
            Bạn đã tạo thành công tài khoản Shopee với số {phoneNumber}
          </div>
          <div className="register-page__confirmation__third-form__content-first-notify__user-phone-number"></div>
        </div>

        <div className="register-page__confirmation__third-form__content-second-notify">
          <div className="register-page__confirmation__third-form__content-second-notify__text">
            Bạn sẽ được chuyển hướng đến Shopee trong
          </div>
          <div className="register-page__confirmation__third-form__content-second-notify__count-down">
            <span
              ref={countDownSecondsNumberRef}
              className="register-page__confirmation__third-form__content-second-notify__seconds-number"
            >
              {countDownSecond}
            </span>{' '}
            giây
          </div>
        </div>

        <Link
          to="/"
          className="register-page__confirmation__third-form__content-back-to-shopee-btn"
        >
          Quay Lại Shopee
        </Link>
      </div>
    </form>
  );
}

export default ThirdForm;
