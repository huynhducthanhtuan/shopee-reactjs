import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';
import React, { useState, useEffect } from 'react';

function ConfirmationPart({
  phoneNumber,
  headerPartRef,
  setShowConfirmationPart
}) {
  const [showFirstForm, setShowFirstForm] = useState(true);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showThirdForm, setShowThirdForm] = useState(false);

  useEffect(() => {
    // Update header boxShadow
    headerPartRef.current.style.boxShadow = '0 6px 6px rgb(0 0 0 / 6%)';
  }, []);

  return (
    <div className="register-page__confirmation">
      <div className="register-page__confirmation-part">
        <div className="register-page__confirmation__step-list">
          <div className="register-page__confirmation__step-item ">
            <div className="register-page__confirmation__step-item-number">
              1
            </div>
            <span className="register-page__confirmation__step-item-name">
              Xác Minh Số Điện Thoại
            </span>
          </div>
          <div className="register-page__confirmation__step-line">
            <div className="register-page__confirmation__step-line__line"></div>
            <div className="register-page__confirmation__step-line__icon">
              <i className="fas fa-angle-right"></i>
            </div>
          </div>
          <div className="register-page__confirmation__step-item">
            <div className="register-page__confirmation__step-item-number">
              2
            </div>
            <span className="register-page__confirmation__step-item-name">
              Tạo Mật Khẩu
            </span>
          </div>
          <div className="register-page__confirmation__step-line">
            <div className="register-page__confirmation__step-line__line"></div>
            <div className="register-page__confirmation__step-line__icon">
              <i className="fas fa-angle-right"></i>
            </div>
          </div>
          <div className="register-page__confirmation__step-item">
            <div className="register-page__confirmation__step-item-number">
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className=""
              >
                <g>
                  <path d="m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z"></path>
                </g>
              </svg>
            </div>
            <span className="register-page__confirmation__step-item-name">
              Hoàn Thành
            </span>
          </div>
        </div>

        {showFirstForm && (
          <FirstForm
            phoneNumber={phoneNumber}
            setShowConfirmationPart={setShowConfirmationPart}
            setShowFirstForm={setShowFirstForm}
            setShowSecondForm={setShowSecondForm}
          />
        )}
        {showSecondForm && (
          <SecondForm
            setShowFirstForm={setShowFirstForm}
            setShowSecondForm={setShowSecondForm}
            setShowThirdForm={setShowThirdForm}
          />
        )}
        {showThirdForm && <ThirdForm phoneNumber={phoneNumber} />}
      </div>
    </div>
  );
}

export default ConfirmationPart;
