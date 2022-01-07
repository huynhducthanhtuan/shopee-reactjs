//#region SETTING CONFIG (config)
// get localStorage object
var systemConfig = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};

// add each key: value into localStorage object
function setConfig(key, value) {
  systemConfig[key] = value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(systemConfig));
}

function handleSettingInitialConfig() {
  // get today day
  var todayDay = new Date().getDate();

  // if this key already exists in localStorage
  if (systemConfig.lastVisitDay) {
    // auto delete all data in localStorage after one day
    if (systemConfig.lastVisitDay != todayDay) {
      headerSearchHistoryListInfo = [];

      // delete all data in localStorage
      localStorage.clear();

      // update variable systemConfig
      systemConfig = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

      // set new date for lastVisitDay
      setConfig("lastVisitDay", todayDay);
    }
  } else {
    // set default value
    setConfig("lastVisitDay", todayDay);
  }

  // set default value if this key doesn't exist in localStorage
  if (!systemConfig.headerSearchHistoryListInfo) {
    setConfig("headerSearchHistoryListInfo", []);
  }
  if (!systemConfig.isLoggedIn) {
    setConfig("isLoggedIn", false);
  }
  if (!systemConfig.userAccount) {
    setConfig("userAccount", {});
  }

  // update array headerSearchHistoryListInfo from localStorage
  headerSearchHistoryListInfo = systemConfig.headerSearchHistoryListInfo;

  updateInDOMHeaderSearchHistoryList();
}
//#endregion

//#region I. REGISTER PAGE

//#region Click to go to REGISTER PAGE
function loadRegisterPage() {
  setTimeout(() => {
    registerPage.style.display = "block";
    registerPageContent.style.display = "block";
    registerPageConfirmation.style.display = "none";

    // other parts
    loginPage.style.display = "none";
    header.style.display = "none";
    container.style.display = "none";
    footerText.style.display = "none";
    footerDirectory.style.display = "none";
    motionPartSubBanner.style.display = "none";
    motionPartChat.style.display = "none";
    modal.style.display = "none";
    pageLoadBanner.style.display = "none";
    giftBannerPopup.style.display = "none";

    // set dault value in this input
    registerPageContentFormInput.value = "";

    // hide notify error and inputs's errors
    registerPageContentFormInput.classList.remove(
      "register-page__content-form__input--invalid-phone-number"
    );
    registerPageContentFormInputTextInvalidPhoneNumber.style.display = "none";
    registerPageContentFormInputIconValidPhoneNumber.style.display = "none";

    // set not-allowed this button
    registerPageContentFormNextBtn.style.opacity = "0.7";
    registerPageContentFormNextBtn.style.cursor = "not-allowed";

    window.scrollTo(0, 0);
  }, 500);
}

headerRegisterBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // get current website offsetHeight
  initialPageOffsetHeight =
    -html.getBoundingClientRect().y + header.style.height;
  loadRegisterPage();

  // set auto focus for this input
  setTimeout(() => {
    registerPageContentFormInput.focus();
  }, 500);
});

headerNotificationPopupWhenNotLoginRegisterBtn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    // get current website offsetHeight
    initialPageOffsetHeight =
      -html.getBoundingClientRect().y + header.style.height;
    loadRegisterPage();

    // set auto focus for this input
    setTimeout(() => {
      registerPageContentFormInput.focus();
    }, 500);
  }
);
//#endregion

//#region -> CONTENT PART

//#region (f) set / unset RegisterPageConfirmationStepItemActive
function setRegisterPageConfirmationStepItemActive(nthChild) {
  var registerPageConfirmationStepItem = $(
    `.register-page__confirmation__step-item:nth-child(${nthChild})`
  );
  registerPageConfirmationStepItem.children[0].style.backgroundColor = "#6c0";
  registerPageConfirmationStepItem.children[0].style.borderColor = "#6c0";
  registerPageConfirmationStepItem.children[0].style.color = "#fff";

  // Special case (the last element): have svg tag
  if (nthChild == 5) {
    registerPageConfirmationStepItem.children[0].children[0].style.fill =
      "#fff";
  }

  // span.register-page__confirmation__step-item-name
  registerPageConfirmationStepItem.children[1].style.color = "#6c0";
}

function unsetRegisterPageConfirmationStepItemActive(nthChild) {
  var registerPageConfirmationStepItem = $(
    `.register-page__confirmation__step-item:nth-child(${nthChild})`
  );
  registerPageConfirmationStepItem.children[0].style.backgroundColor = "#fff";
  registerPageConfirmationStepItem.children[0].style.borderColor =
    "rgba(0,0,0,.26)";
  registerPageConfirmationStepItem.children[0].style.color = "rgba(0,0,0,.26)";

  // span.register-page__confirmation__step-item-name
  registerPageConfirmationStepItem.children[1].style.color =
    "rgba(0, 0, 0, 0.26)";

  // Special case (the last element): have svg tag
  if (nthChild == 5) {
    registerPageConfirmationStepItem.children[0].children[0].style.fill =
      "rgba(0, 0, 0, 0.26)";
  }
}
//#endregion

//#region (f) set / unset RegisterPageConfirmationStepLineActive
function setRegisterPageConfirmationStepLineActive(nthChild) {
  var registerPageConfirmationStepLine = $(
    `.register-page__confirmation__step-line:nth-child(${nthChild})`
  );

  var registerPageConfirmationStepLineLine = $(`
        .register-page__confirmation__step-line:nth-child(${nthChild}) > .register-page__confirmation__step-line__line`);
  var registerPageConfirmationStepLineIcon = $(`
        .register-page__confirmation__step-line:nth-child(${nthChild}) > .register-page__confirmation__step-line__icon`);

  registerPageConfirmationStepLineLine.style.backgroundColor =
    "rgb(102, 204, 0)";
  registerPageConfirmationStepLineIcon.style.color = "rgb(102, 204, 0)";
}

function unsetRegisterPageConfirmationStepLineActive(nthChild) {
  var registerPageConfirmationStepLine = $(
    `.register-page__confirmation__step-line:nth-child(${nthChild})`
  );

  var registerPageConfirmationStepLineLine = $(`
        .register-page__confirmation__step-line:nth-child(${nthChild}) > .register-page__confirmation__step-line__line`);
  var registerPageConfirmationStepLineIcon = $(`
        .register-page__confirmation__step-line:nth-child(${nthChild}) > .register-page__confirmation__step-line__icon`);

  registerPageConfirmationStepLineLine.style.backgroundColor =
    "rgba(0,0,0,.26)";
  registerPageConfirmationStepLineIcon.style.color = "rgba(0,0,0,.26)";
}
//#endregion

//#region getAndUpdateConfirmationCodes
(function getAndUpdateConfirmationCodes() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      confirmationCodes = datas.confirmationCodes;
    });
})();
//#endregion

//#region EventListeners
registerPageContentFormInput.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    e.preventDefault();
  }

  setTimeout(() => {
    if (e.code != "Enter") {
      if (e.target.value.length == 10) {
        // 1.check value[0] = 0 && value[1] != 0 ??
        var checkFirstAndSecondLetter =
          e.target.value[0].charCodeAt() == 48 &&
          e.target.value[1].charCodeAt() >= 49 &&
          e.target.value[1].charCodeAt() <= 57;

        // 2.check value[2] -> value[9] all is a integer character in range 0-9 ??
        var newPhoneNumber = e.target.value.slice(2).split("");
        checkValidPhoneNumberRegister = newPhoneNumber.every((a) => {
          return a.match(/[0-9]/g) && a.match(/[0-9]/g).length == 1;
        });

        // 3.checkValidPhoneNumberRegister value
        if (checkFirstAndSecondLetter && checkValidPhoneNumberRegister) {
          checkValidPhoneNumberRegister = true;

          // hide error
          registerPageContentFormInput.classList.remove(
            "register-page__content-form__input--invalid-phone-number"
          );
          registerPageContentFormInputTextInvalidPhoneNumber.style.display =
            "none";
          registerPageContentFormInputIconValidPhoneNumber.style.display =
            "block";

          // change opacity of button 'Tiếp theo', cursor: pointer
          registerPageContentFormNextBtn.style.opacity = "1";
          registerPageContentFormNextBtn.style.cursor = "pointer";
        } else {
          checkValidPhoneNumberRegister = false;
        }
      } else {
        checkValidPhoneNumberRegister = false;

        // show error
        registerPageContentFormInput.classList.add(
          "register-page__content-form__input--invalid-phone-number"
        );
        registerPageContentFormInputTextInvalidPhoneNumber.style.display =
          "block";
        registerPageContentFormInputIconValidPhoneNumber.style.display = "none";

        // change opacity of button 'Tiếp theo', cursor: not-allowed
        registerPageContentFormNextBtn.style.opacity = "0.7";
        registerPageContentFormNextBtn.style.cursor = "not-allowed";
      }
    } else {
      if (!checkValidPhoneNumberRegister) {
        // show error
        registerPageContentFormInput.classList.add(
          "register-page__content-form__input--invalid-phone-number"
        );
        registerPageContentFormInputTextInvalidPhoneNumber.style.display =
          "block";
        registerPageContentFormInputIconValidPhoneNumber.style.display = "none";
      } else {
        registerPageContentFormNextBtn.click();
      }
    }
  }, 0);
});

registerPageContentFormNextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (checkValidPhoneNumberRegister) {
    // Event mousedown
    var currentInputValue = registerPageContentFormInput.value;
    registerPageContentFormInput.value = `(+84) ${currentInputValue.slice(-9)}`;

    setTimeout(() => {
      registerPageContent.style.display = "none";
      registerPageConfirmation.style.display = "flex";

      // set-unset registerPageConfirmationStepItemActive, registerPageConfirmationStepLineActive
      setRegisterPageConfirmationStepItemActive(1);
      unsetRegisterPageConfirmationStepLineActive(2);
      unsetRegisterPageConfirmationStepItemActive(3);
      unsetRegisterPageConfirmationStepLineActive(4);
      unsetRegisterPageConfirmationStepItemActive(5);

      registerPageConfirmationFirstForm.style.height = "49.4rem";
      registerPageConfirmationFirstFormContentNotifyError.style.display =
        "none";
      registerPageConfirmationFirstFormContentInput.value = "";

      registerPageHeader.style.boxShadow = "0 6px 6px rgb(0 0 0 / 6%)";
      registerPageConfirmationFirstForm.style.height = "49.4rem";
      registerPageConfirmationFirstFormContentUserPhoneNumber.innerHTML =
        registerPageContentFormInput.value;

      registerPageConfirmationFirstForm.style.display = "block";
      registerPageConfirmationSecondForm.style.display = "none";
      registerPageConfirmationThirdForm.style.display = "none";

      registerPageConfirmationFirstFormContentConfirmBtn.style.opacity = "0.7";
      registerPageConfirmationFirstFormContentConfirmBtn.style.cursor =
        "not-allowed";

      // random confirmation code
      setTimeout(() => {
        currentConfirmationCode =
          confirmationCodes[
            Math.floor(Math.random() * confirmationCodes.length)
          ];
        alert(`Mã xác nhận của bạn là "${currentConfirmationCode}"`);
      }, 800);

      // set auto focus for this input
      setTimeout(() => {
        registerPageConfirmationFirstFormContentInput.focus();
      }, 500);
    }, 500);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  } else {
    e.preventDefault();
  }
});

registerPageContentFormNextBtn.addEventListener("mousedown", (e) => {
  e.preventDefault();

  if (checkValidPhoneNumberRegister) {
    var currentInputValue = registerPageContentFormInput.value;
    registerPageContentFormInput.value = `(+84) ${currentInputValue.slice(-9)}`;
  }
});

registerPageContentFormNextBtn.addEventListener("mouseover", (e) => {
  if (e.target.style.cursor == "pointer") {
    e.target.style.opacity = "0.92";
  } else {
    e.preventDefault();
  }
});

registerPageContentFormNextBtn.addEventListener("mouseleave", (e) => {
  if (e.target.style.cursor == "pointer") {
    e.target.style.opacity = "1";
  } else {
    e.preventDefault();
  }
});

//#region Not related
registerPageContentFormAskForLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    loadLoginPage();

    // set auto focus for this input
    setTimeout(() => {
      loginPageContentFormFirstInput.focus();
    }, 500);

    window.scrollTo(0, 0);
  }, 200);
});
//#endregion
//#endregion

//#endregion

//#region -> 1ST CONFIRMATION

//#region EventListeners
registerPageConfirmationFirstFormHeaderBackBtn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    loadRegisterPage();
    registerPageConfirmationFirstFormContentUserPhoneNumber.innerHTML =
      registerPageContentFormInput.value;

    // set-unset registerPageConfirmationStepItemActive, registerPageConfirmationStepLineActive
    unsetRegisterPageConfirmationStepItemActive(1);
    unsetRegisterPageConfirmationStepLineActive(2);
    unsetRegisterPageConfirmationStepItemActive(3);
    unsetRegisterPageConfirmationStepLineActive(4);
    unsetRegisterPageConfirmationStepItemActive(5);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }
);

registerPageConfirmationFirstFormContentInput.addEventListener(
  "keydown",
  (e) => {
    if (e.code == "Enter") {
      e.preventDefault();
    }

    setTimeout(() => {
      if (e.target.value.length == 6) {
        if (e.code == "Enter") {
          registerPageConfirmationFirstFormContentConfirmBtn.click();
        }

        // change opacity of button 'XÁC NHẬN', cursor: pointer
        registerPageConfirmationFirstFormContentConfirmBtn.style.opacity = "1";
        registerPageConfirmationFirstFormContentConfirmBtn.style.cursor =
          "pointer";
      } else {
        if (e.code == "Enter") {
          e.preventDefault();
        }

        // change opacity of button 'XÁC NHẬN', cursor: not-allowed
        registerPageConfirmationFirstFormContentConfirmBtn.style.opacity =
          "0.7";
        registerPageConfirmationFirstFormContentConfirmBtn.style.cursor =
          "not-allowed";
      }
    }, 0);
  }
);

registerPageConfirmationFirstFormContentConfirmBtn.addEventListener(
  "mouseover",
  (e) => {
    if (e.target.style.cursor == "pointer") {
      e.target.style.opacity = "0.92";
    } else {
      e.preventDefault();
    }
  }
);

registerPageConfirmationFirstFormContentConfirmBtn.addEventListener(
  "mouseleave",
  (e) => {
    if (e.target.style.cursor == "pointer") {
      e.target.style.opacity = "1";
    } else {
      e.preventDefault();
    }
  }
);

registerPageConfirmationFirstFormContentHelpResendBtn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    registerPageConfirmationFirstFormContentInput.value = "";

    // random confirmation code
    setTimeout(() => {
      currentConfirmationCode =
        confirmationCodes[Math.floor(Math.random() * confirmationCodes.length)];
      alert(`Mã xác nhận của bạn là "${currentConfirmationCode}"`);
    }, 1000);

    // set auto focus for this input
    setTimeout(() => {
      registerPageConfirmationFirstFormContentInput.focus();
    }, 500);
  }
);
//#endregion

// Check for next step
registerPageConfirmationFirstFormContentConfirmBtn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    setTimeout(() => {
      if (registerPageConfirmationFirstFormContentInput.value.length == 6) {
        if (
          registerPageConfirmationFirstFormContentInput.value ==
          currentConfirmationCode
        ) {
          // set-unset registerPageConfirmationStepItemActive, registerPageConfirmationStepLineActive
          setRegisterPageConfirmationStepItemActive(1);
          setRegisterPageConfirmationStepLineActive(2);
          setRegisterPageConfirmationStepItemActive(3);
          unsetRegisterPageConfirmationStepLineActive(4);
          unsetRegisterPageConfirmationStepItemActive(5);

          registerPageConfirmationFirstForm.style.display = "none";
          registerPageConfirmationSecondForm.style.display = "block";
          registerPageConfirmationSecondFormContentInput.value =
            "Wa.3n.en,mr6@YwT";
          registerPageConfirmationFirstForm.style.height = "49.4rem";
          registerPageConfirmationFirstFormContentNotifyError.style.display =
            "none";
          registerPageConfirmationFirstFormContentInput.value = "";
        } else {
          // show error
          registerPageConfirmationFirstForm.style.height = "55.3rem";
          registerPageConfirmationFirstFormContentNotifyError.style.display =
            "flex";
        }
      }
    }, 500);
  }
);

//#endregion

//#region -> 2ND CONFIRMATION

//#region EventListeners
registerPageConfirmationSecondFormContentInputStatusBtn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    if (registerPageConfirmationSecondFormContentInput.type == "text") {
      registerPageConfirmationSecondFormContentInputStatusBtnShowing.style.display =
        "none";
      registerPageConfirmationSecondFormContentInputStatusBtnHiding.style.display =
        "block";
      registerPageConfirmationSecondFormContentInput.type = "password";
    } else {
      if (registerPageConfirmationSecondFormContentInput.type == "password") {
        registerPageConfirmationSecondFormContentInputStatusBtnShowing.style.display =
          "block";
        registerPageConfirmationSecondFormContentInputStatusBtnHiding.style.display =
          "none";
        registerPageConfirmationSecondFormContentInput.type = "text";
      }
    }
  }
);

registerPageConfirmationSecondFormContentInput.addEventListener(
  "keydown",
  (e) => {
    var check1 = false,
      check2 = false,
      check3 = false;

    if (e.code == "Enter") {
      e.preventDefault();
    }

    setTimeout(() => {
      if (e.code != "Enter") {
        // 1.Check if each character is 'lowercase character' ?
        check1 = e.target.value.split("").some((a) => {
          return a.match(/[a-z]/g) && a.match(/[a-z]/g).length == 1;
        });

        // 2.Check if each character is 'uppercase character' ?
        check2 = e.target.value.split("").some((a) => {
          return a.match(/[A-Z]/g) && a.match(/[A-Z]/g).length == 1;
        });

        // 3.Check if length in range 6-18
        if (e.target.value.length >= 8 && e.target.value.length <= 16) {
          check3 = true;
        }

        var checkArray = [check1, check2, check3];
        var registerPageConfirmationSecondFormContentChecksClassName = [
          "register-page__confirmation__second-form__content__check--lowercase",
          "register-page__confirmation__second-form__content__check--uppercase",
          "register-page__confirmation__second-form__content__check--length",
        ];

        for (var i = 0; i < checkArray.length; i++) {
          var registerPageConfirmationSecondFormContentCheckText =
            $(`.${registerPageConfirmationSecondFormContentChecksClassName[i]}
                    > .register-page__confirmation__second-form__content__check-text`);

          var registerPageConfirmationSecondFormContentCheckCorrectIcon =
            $(`.${registerPageConfirmationSecondFormContentChecksClassName[i]}
                    > .register-page__confirmation__second-form__content__check-correct-icon`);

          var registerPageConfirmationSecondFormContentCheckWrongIcon =
            $(`.${registerPageConfirmationSecondFormContentChecksClassName[i]}
                    > .register-page__confirmation__second-form__content__check-wrong-icon`);

          if (checkArray[i]) {
            registerPageConfirmationSecondFormContentCheckText.style.color =
              "#6c0";
            registerPageConfirmationSecondFormContentCheckCorrectIcon.style.display =
              "block";
            registerPageConfirmationSecondFormContentCheckWrongIcon.style.display =
              "none";
          } else {
            registerPageConfirmationSecondFormContentCheckText.style.color =
              "#ff424f";
            registerPageConfirmationSecondFormContentCheckCorrectIcon.style.display =
              "none";
            registerPageConfirmationSecondFormContentCheckWrongIcon.style.display =
              "block";
          }
        }

        // If data entry operations is Success or Fail
        if (check1 && check2 && check3) {
          checkForRegisterPageConfirmationFormContentThirdStep = true;

          registerPageConfirmationSecondFormContentInputPart.classList.remove(
            "register-page__confirmation__second-form__content__input-part--wrong-value"
          );
          registerPageConfirmationSecondFormContentInput.classList.remove(
            "register-page__confirmation__second-form__content__input--invalid"
          );

          // change opacity and cursor of 'ĐĂNG KÝ' button
          registerPageConfirmationSecondFormContentRegisterBtn.style.opacity =
            "1";
          registerPageConfirmationSecondFormContentRegisterBtn.style.cursor =
            "pointer";
        } else {
          checkForRegisterPageConfirmationFormContentThirdStep = false;

          registerPageConfirmationSecondFormContentInputPart.classList.add(
            "register-page__confirmation__second-form__content__input-part--wrong-value"
          );
          registerPageConfirmationSecondFormContentInput.classList.add(
            "register-page__confirmation__second-form__content__input--invalid"
          );

          // change opacity and cursor of 'ĐĂNG KÝ' button
          registerPageConfirmationSecondFormContentRegisterBtn.style.opacity =
            "0.7";
          registerPageConfirmationSecondFormContentRegisterBtn.style.cursor =
            "not-allowed";
        }
      } else {
        registerPageConfirmationSecondFormContentRegisterBtn.click();
      }
    }, 0);
  }
);

registerPageConfirmationSecondFormContentRegisterBtn.addEventListener(
  "mouseover",
  (e) => {
    e.target.style.cursor == "pointer"
      ? (e.target.style.opacity = "0.92")
      : e.preventDefault();
  }
);

registerPageConfirmationSecondFormContentRegisterBtn.addEventListener(
  "mouseleave",
  (e) => {
    e.target.style.cursor == "pointer"
      ? (e.target.style.opacity = "1")
      : e.preventDefault();
  }
);

registerPageConfirmationSecondFormContentRegisterBtn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    var countdownInterval;

    if (checkForRegisterPageConfirmationFormContentThirdStep == true) {
      // -> Add the account user just registered to localStorage
      var userAccount = {
        phoneNumber: registerPageContentFormInput.value,
        password: registerPageConfirmationSecondFormContentInput.value,
      };
      setConfig("userAccount", userAccount);

      registerPageConfirmationThirdFormContentBackToShopeeBtn.addEventListener(
        "click",
        (e) => {
          e.preventDefault();

          // stop setInterval()
          clearInterval(countdownInterval);

          setTimeout(() => {
            loadInitialPageNoModal();
          }, 1000);
        }
      );

      setTimeout(() => {
        // set-unset registerPageConfirmationStepItemActive, registerPageConfirmationStepLineActive
        setRegisterPageConfirmationStepItemActive(1);
        setRegisterPageConfirmationStepLineActive(2);
        setRegisterPageConfirmationStepItemActive(3);
        setRegisterPageConfirmationStepLineActive(4);
        setRegisterPageConfirmationStepItemActive(5);

        registerPageConfirmationSecondForm.style.display = "none";
        registerPageConfirmationThirdForm.style.display = "block";

        registerPageConfirmationThirdFormContentFirstNotifyUserPhoneNumber.innerHTML =
          registerPageContentFormInput.value;

        // Set default second
        var currentSecond = 7;
        registerPageConfirmationThirdFormContentSecondNotifySecondsNumber.innerHTML =
          currentSecond;

        // Countdown
        countdownInterval = setInterval(() => {
          registerPageConfirmationThirdFormContentSecondNotifySecondsNumber.innerHTML =
            currentSecond--;

          if (currentSecond == 0) {
            loadInitialPageNoModal();

            // stop setInterval()
            clearInterval(countdownInterval);
          }
        }, 1000);
      }, 1000);
    } else {
      e.preventDefault();
    }
  }
);

registerPageConfirmationSecondFormHeaderBackBtn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    // set-unset registerPageConfirmationStepItemActive, registerPageConfirmationStepLineActive
    setRegisterPageConfirmationStepItemActive(1);
    unsetRegisterPageConfirmationStepLineActive(2);
    unsetRegisterPageConfirmationStepItemActive(3);
    unsetRegisterPageConfirmationStepLineActive(4);
    unsetRegisterPageConfirmationStepItemActive(5);

    registerPageConfirmationSecondForm.style.display = "none";
    registerPageConfirmationFirstForm.style.display = "block";
    registerPageConfirmationFirstForm.style.height = "49.4rem";
    registerPageConfirmationFirstFormContentNotifyError.style.display = "none";
    registerPageConfirmationFirstFormContentInput.value = "";

    registerPageConfirmationFirstFormContentConfirmBtn.style.opacity = "0.7";
    registerPageConfirmationFirstFormContentConfirmBtn.style.cursor =
      "not-allowed";

    // set auto focus for this input
    setTimeout(() => {
      registerPageConfirmationFirstFormContentInput.focus();
    }, 500);
  }
);
// #endregion

//#endregion
//#endregion

//#region II. LOGIN PAGE

function loadLoginPage() {
  setTimeout(() => {
    loginPage.style.display = "block";
    registerPage.style.display = "none";

    header.style.display = "none";
    container.style.display = "none";
    footerText.style.display = "none";
    footerDirectory.style.display = "none";
    motionPartSubBanner.style.display = "none";
    motionPartChat.style.display = "none";
    modal.style.display = "none";
    pageLoadBanner.style.display = "none";
    giftBannerPopup.style.display = "none";

    // hide notify error and inputs's errors
    loginPageContentFormNotifyError.style.display = "none";
    loginPageContentFormFirstInputPartInvalid.style.display = "none";
    loginPageContentFormFirstInput.classList.remove(
      "login-page__content-form__first-input--invalid"
    );
    loginPageContentFormSecondInputPartInvalid.style.display = "none";
    loginPageContentFormSecondInput.classList.remove(
      "login-page__content-form__second-input--invalid"
    );
    loginPageContentFormSecondInputMain.classList.remove(
      "login-page__content-form__second-input-main--invalid"
    );

    // set dault value in two inputs
    loginPageContentFormFirstInput.value = "";
    loginPageContentFormSecondInput.value = "";

    // set false for two inputs and not-allowed login button
    checkValidPhoneNumberLogin = false;
    checkValidPasswordLogin = false;
    loginPageContentFormLoginBtn.style.opacity = "0.7";
    loginPageContentFormLoginBtn.style.cursor = "not-allowed";

    window.scrollTo(0, 0);
  }, 500);
}

function loginSuccess() {
  // Disabled
  registerPage.style.display = "none";
  loginPage.style.display = "none";
  headerLinksBecomeAShopeeSeller.style.display = "none";
  headerNotificationPopupWhenNotLogin.style.display = "none";
  headerNotificationLink.href = "https://shopee.vn/user/notifications/order";
  headerNotificationLink.style.cursor = "pointer";
  headerRegister.style.display = "none";
  headerLogin.style.display = "none";
  headerCartLink.href = "https://shopee.vn/cart";
  headerCartLink.style.cursor = "pointer";
  giftBanner.style.display = "none";

  // Visible
  header.style.display = "block";
  container.style.display = "block";
  footerText.style.display = "block";
  footerDirectory.style.display = "block";
  headerNotificationQuantity.style.display = "block";
  headerNotificationPopupWhenLoggedIn.style.display = "block";
  headerUserAccount.style.display = "block";
  motionPartChat.style.display = "block";
  motionPartSubBanner.style.display = "block";

  // modal, body
  body.style.overflow = "visible";
  app.style.position = "absolute";
  content.style.position = "relative";
  content.style.top = "0";

  window.scrollTo(0, 0);
}

//#region click to Login / Logout / Register
headerLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // get current website offsetHeight
  initialPageOffsetHeight =
    -html.getBoundingClientRect().y + header.style.height;
  loadLoginPage();

  // set auto focus for this input
  setTimeout(() => {
    loginPageContentFormFirstInput.focus();
  }, 500);
});

headerNotificationPopupWhenNotLoginLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // get current website offsetHeight
  initialPageOffsetHeight =
    -html.getBoundingClientRect().y + header.style.height;
  loadLoginPage();

  // set auto focus for this input
  setTimeout(() => {
    loginPageContentFormFirstInput.focus();
  }, 500);
});

headerLogoutBtn.onclick = () => {
  setTimeout(() => {
    setConfig("isLoggedIn", false);
    loadInitialPageNoModal();
  }, 1000);
};

loginPageContentFormAskForRegisterRegisterBtn.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    loadRegisterPage();

    // set auto focus for this input
    setTimeout(() => {
      registerPageContentFormInput.focus();
    }, 500);

    window.scrollTo(0, 0);
  }, 200);
});
//#endregion

//#region EventListeners
loginPageContentFormFirstInput.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    e.preventDefault();
  }

  setTimeout(() => {
    if (e.code != "Enter") {
      if (e.target.value.length == 10) {
        // 1.check value[0] = 0 && value[1] != 0 ??
        var checkFirstAndSecondLetter =
          e.target.value[0].charCodeAt() == 48 &&
          e.target.value[1].charCodeAt() >= 49 &&
          e.target.value[1].charCodeAt() <= 57;

        // 2.check value[2] -> value[9] all is a integer character in range 0-9 ??
        var newPhoneNumber = e.target.value.slice(2).split("");
        checkValidPhoneNumberLogin = newPhoneNumber.every((a) => {
          return a.match(/[0-9]/g) && a.match(/[0-9]/g).length == 1;
        });

        // 3.checkValidPhoneNumberLogin value
        if (checkFirstAndSecondLetter && checkValidPhoneNumberLogin) {
          checkValidPhoneNumberLogin = true;

          // hide error
          loginPageContentFormFirstInputPartInvalid.style.display = "none";
          loginPageContentFormFirstInput.classList.remove(
            "login-page__content-form__first-input--invalid"
          );

          if (checkValidPasswordLogin) {
            // allowed button
            loginPageContentFormLoginBtn.style.opacity = "1";
            loginPageContentFormLoginBtn.style.cursor = "pointer";
          }
        } else {
          checkValidPhoneNumberLogin = false;

          // show error
          loginPageContentFormFirstInputPartInvalid.style.display = "block";
          loginPageContentFormFirstInput.classList.add(
            "login-page__content-form__first-input--invalid"
          );

          // not-allowed button
          loginPageContentFormLoginBtn.style.opacity = "0.7";
          loginPageContentFormLoginBtn.style.cursor = "not-allowed";
        }
      } else {
        checkValidPhoneNumberLogin = false;

        // show error
        loginPageContentFormFirstInputPartInvalid.style.display = "block";
        loginPageContentFormFirstInput.classList.add(
          "login-page__content-form__first-input--invalid"
        );

        // not-allowed button
        loginPageContentFormLoginBtn.style.opacity = "0.7";
        loginPageContentFormLoginBtn.style.cursor = "not-allowed";
      }
    } else {
      if (!checkValidPhoneNumberLogin) {
        e.preventDefault();

        // show error
        loginPageContentFormFirstInputPartInvalid.style.display = "block";
        loginPageContentFormFirstInput.classList.add(
          "login-page__content-form__first-input--invalid"
        );

        // not-allowed button
        loginPageContentFormLoginBtn.style.opacity = "0.7";
        loginPageContentFormLoginBtn.style.cursor = "not-allowed";
      } else {
        if (checkValidPasswordLogin) {
          // allowed button
          loginPageContentFormLoginBtn.style.opacity = "1";
          loginPageContentFormLoginBtn.style.cursor = "pointer";

          console.log("btn click");
          loginPageContentFormLoginBtn.click();
        } else {
          e.preventDefault();
          // not-allowed button
          loginPageContentFormLoginBtn.style.opacity = "0.7";
          loginPageContentFormLoginBtn.style.cursor = "not-allowed";
        }
      }
    }
  }, 0);
});

loginPageContentFormSecondInput.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    e.preventDefault();
  }

  setTimeout(() => {
    if (e.code != "Enter") {
      if (e.target.value.length >= 8 && e.target.value.length <= 16) {
        checkValidPasswordLogin = true;

        //hide error
        loginPageContentFormSecondInputPartInvalid.style.display = "none";
        loginPageContentFormSecondInput.classList.remove(
          "login-page__content-form__second-input--invalid"
        );
        loginPageContentFormSecondInputMain.classList.remove(
          "login-page__content-form__second-input-main--invalid"
        );

        if (checkValidPhoneNumberLogin) {
          // allowed button
          loginPageContentFormLoginBtn.style.opacity = "1";
          loginPageContentFormLoginBtn.style.cursor = "pointer";
        }
      } else {
        checkValidPasswordLogin = false;

        //show error
        loginPageContentFormSecondInputPartInvalid.style.display = "block";
        loginPageContentFormSecondInput.classList.add(
          "login-page__content-form__second-input--invalid"
        );
        loginPageContentFormSecondInputMain.classList.add(
          "login-page__content-form__second-input-main--invalid"
        );

        // not-allowed button
        loginPageContentFormLoginBtn.style.opacity = "0.7";
        loginPageContentFormLoginBtn.style.cursor = "not-allowed";
      }
    } else {
      if (!checkValidPasswordLogin) {
        e.preventDefault();

        //show error
        loginPageContentFormSecondInputPartInvalid.style.display = "block";
        loginPageContentFormSecondInput.classList.add(
          "login-page__content-form__second-input--invalid"
        );
        loginPageContentFormSecondInputMain.classList.add(
          "login-page__content-form__second-input-main--invalid"
        );

        // not-allowed button
        loginPageContentFormLoginBtn.style.opacity = "0.7";
        loginPageContentFormLoginBtn.style.cursor = "not-allowed";
      } else {
        if (checkValidPhoneNumberLogin) {
          // allowed button
          loginPageContentFormLoginBtn.style.opacity = "1";
          loginPageContentFormLoginBtn.style.cursor = "pointer";

          console.log("btn click");
          loginPageContentFormLoginBtn.click();
        } else {
          e.preventDefault();
          // not-allowed button
          loginPageContentFormLoginBtn.style.opacity = "0.7";
          loginPageContentFormLoginBtn.style.cursor = "not-allowed";
        }
      }
    }
  }, 0);
});

loginPageContentFormSecondInputStatusBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (loginPageContentFormSecondInput.type == "text") {
    loginPageContentFormSecondInputStatusBtnShowing.style.display = "none";
    loginPageContentFormSecondInputStatusBtnHiding.style.display = "block";
    loginPageContentFormSecondInput.type = "password";
  } else {
    if (loginPageContentFormSecondInput.type == "password") {
      loginPageContentFormSecondInputStatusBtnShowing.style.display = "block";
      loginPageContentFormSecondInputStatusBtnHiding.style.display = "none";
      loginPageContentFormSecondInput.type = "text";
    }
  }
});

loginPageContentFormLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (checkValidPhoneNumberLogin && checkValidPasswordLogin) {
    // Mousedown event
    var currentPhoneNumberInputValue = loginPageContentFormFirstInput.value;
    loginPageContentFormFirstInput.value = `(+84) ${currentPhoneNumberInputValue.slice(
      -9
    )}`;

    // check from localStorage
    if (
      loginPageContentFormFirstInput.value ==
        systemConfig.userAccount.phoneNumber &&
      loginPageContentFormSecondInput.value == systemConfig.userAccount.password
    ) {
      loginPageContentForm.style.height = "48.2rem";
      loginPageContentFormNotifyError.style.display = "none";

      setTimeout(() => {
        setConfig("isLoggedIn", true);
        loginSuccess();
      }, 1500);
    } else {
      setTimeout(() => {
        loginPageContentForm.style.height = "55.3rem";
        loginPageContentFormNotifyError.style.display = "flex";
      }, 500);
    }
  }
});

loginPageContentFormLoginBtn.addEventListener("mousedown", (e) => {
  e.preventDefault();
  if (checkValidPhoneNumberLogin && checkValidPasswordLogin) {
    var currentPhoneNumberInputValue = loginPageContentFormFirstInput.value;
    loginPageContentFormFirstInput.value = `(+84) ${currentPhoneNumberInputValue.slice(
      -9
    )}`;
  }
});

loginPageContentFormLoginBtn.addEventListener("mouseover", (e) => {
  e.target.style.cursor == "pointer"
    ? (e.target.style.opacity = "0.92")
    : e.preventDefault();
});

loginPageContentFormLoginBtn.addEventListener("mouseleave", (e) => {
  e.target.style.cursor == "pointer"
    ? (e.target.style.opacity = "1")
    : e.preventDefault();
});
//#endregion

//#endregion

//#region headerSearchFrameInput (keydown)
headerSearchFrameInput.addEventListener("keydown", (e) => {
  // update this nodelist
  headerSearchHistoryItemLinks = $$(".header__search-history-item__link");

  switch (e.code) {
    case "Enter": {
      e.preventDefault();
      headerSearchFrameBtn.click();
      break;
    }
    case "ArrowUp": {
      // 1. update headerSearchHistoryItemLength
      var headerSearchHistoryItemLength = headerSearchHistoryItemLinks.length;

      // 2. set next index:
      // if initial position (in input) or being active on first element
      if (
        headerSearchHistoryItemIndex == 0 ||
        headerSearchHistoryItemIndex == 1
      ) {
        headerSearchHistoryItemIndex = headerSearchHistoryItemLength;
      } else {
        headerSearchHistoryItemIndex--;
      }

      // 3. add class hover on next element
      removeHeaderSearchHistoryItemLinksHover();
      headerSearchHistoryItemLinks[
        headerSearchHistoryItemIndex - 1
      ].classList.add("header__search-history-item__link--hover");

      // 4. show current text in headerSearchFrameInput is innerText of headerSearchHistoryItemCurrent
      var headerSearchHistoryItemCurrent = $(`
                .header__search-history-item:nth-child(${headerSearchHistoryItemIndex}) > .header__search-history-item__link`);
      headerSearchFrameInput.value =
        headerSearchHistoryItemCurrent.innerText.trim();

      break;
    }
    case "ArrowDown": {
      // 1. update headerSearchHistoryItemLength
      var headerSearchHistoryItemLength = headerSearchHistoryItemLinks.length;

      // 2. set next index:
      // when being active on last element
      if (headerSearchHistoryItemIndex == headerSearchHistoryItemLength) {
        headerSearchHistoryItemIndex = 1;
      } else {
        headerSearchHistoryItemIndex++;
      }

      // 3. add class hover on next element
      removeHeaderSearchHistoryItemLinksHover();
      headerSearchHistoryItemLinks[
        headerSearchHistoryItemIndex - 1
      ].classList.add("header__search-history-item__link--hover");

      // 4. show current text in headerSearchFrameInput is innerText of headerSearchHistoryItemCurrent
      var headerSearchHistoryItemCurrent = $(`
                .header__search-history-item:nth-child(${headerSearchHistoryItemIndex}) > .header__search-history-item__link`);
      headerSearchFrameInput.value =
        headerSearchHistoryItemCurrent.innerText.trim();

      break;
    }
  }
});
//#endregion
