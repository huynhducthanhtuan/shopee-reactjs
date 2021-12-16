"use strict";

//#region VARIABLES, OBJECTS DECLARATION
//#region 1. Best Common
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const LOCALSTORAGE_KEY = "shopee";
var headerSearchHistoryListInfo = [];

var html = $("html");
var body = $("body");
var app = $("#app");
var registerPage = $("#register-page");
var loginPage = $("#login-page");
var header = $("#header");
var container = $("#container");
var content = $("#content");
var footerText = $(".footer__text");
var footerDirectory = $(".footer__directory");

var modal = $("#modal");
var headerShopeeLogo = $(".header__shopee-logo");
var initialPageOffsetHeight =
  -html.getBoundingClientRect().y + header.style.height;
//#endregion

//#region 2. Register Page
var headerRegisterBtn = $(".header__register__btn");
var registerPageHeader = $(".register-page__header");
var registerPageContent = $(".register-page__content");
var registerPageHeaderShopeeLink = $(".register-page__header-shopee__link");
var confirmationCodes = [];
var currentConfirmationCode;
var checkValidPhoneNumberRegister = false;
var checkForRegisterPageConfirmationFormContentThirdStep = true;

var registerPageContentFormInput = $(".register-page__content-form__input");
var registerPageContentFormInputTextInvalidPhoneNumber = $(
  ".register-page__content-form__input-text--invalid-phone-number"
);
var registerPageContentFormInputIconValidPhoneNumber = $(
  ".register-page__content-form__input-icon--valid-phone-number"
);
var registerPageContentFormNextBtn = $(
  ".register-page__content-form__next-btn"
);
var registerPageContentFormFacebookBtn = $(
  ".register-page__content-form__other-ways__facebook"
);
var registerPageContentFormGoogleBtn = $(
  ".register-page__content-form__other-ways__google"
);
var registerPageContentFormAppleBtn = $(
  ".register-page__content-form__other-ways__apple"
);
var registerPageContentFormAskForLoginBtn = $(
  ".register-page__content-form__ask-for-login__login-btn"
);

var registerPageConfirmation = $(".register-page__confirmation");
var registerPageConfirmationFirstForm = $(
  ".register-page__confirmation__first-form"
);
var registerPageConfirmationFirstFormHeaderText = $(
  ".register-page__confirmation__first-form__header__text"
);
var registerPageConfirmationFirstFormHeaderBackBtn = $(
  ".register-page__confirmation__first-form__header__back-btn"
);
var registerPageConfirmationFirstFormContent = $(
  ".register-page__confirmation__first-form__content"
);
var registerPageConfirmationFirstFormContentUserPhoneNumber = $(
  ".register-page__confirmation__first-form__content__user-phone-number"
);
var registerPageConfirmationFirstFormContentInput = $(
  ".register-page__confirmation__first-form__content__input"
);
var registerPageConfirmationFirstFormContentHelpResendBtn = $(
  ".register-page__confirmation__first-form__content__help-resend-btn"
);
var registerPageConfirmationFirstFormContentHelpOtherWayBtn = $(
  ".register-page__confirmation__first-form__content__help-other-way-btn"
);
var registerPageConfirmationFirstFormContentConfirmBtn = $(
  ".register-page__confirmation__first-form__content__confirm-btn"
);
var registerPageConfirmationFirstFormContentNotifyError = $(
  ".register-page__confirmation__first-form__content__notify-error"
);

var registerPageConfirmationSecondForm = $(
  ".register-page__confirmation__second-form"
);
var registerPageConfirmationSecondFormContent = $(
  ".register-page__confirmation__second-form__content"
);
var registerPageConfirmationSecondFormHeaderBackBtn = $(
  ".register-page__confirmation__second-form__header__back-btn"
);
var registerPageConfirmationSecondFormContentInput = $(
  ".register-page__confirmation__second-form__content__input"
);
var registerPageConfirmationSecondFormContentInputStatusBtn = $(
  ".register-page__confirmation__second-form__content__input-status-btn"
);
var registerPageConfirmationSecondFormContentInputStatusBtnShowing = $(
  ".register-page__confirmation__second-form__content__input-status-btn__showing"
);
var registerPageConfirmationSecondFormContentInputStatusBtnHiding = $(
  ".register-page__confirmation__second-form__content__input-status-btn__hiding"
);
var registerPageConfirmationSecondFormContentRegisterBtn = $(
  ".register-page__confirmation__second-form__content__register-btn"
);
var registerPageConfirmationSecondFormContentInputPart = $(
  ".register-page__confirmation__second-form__content__input-part"
);

var registerPageConfirmationThirdForm = $(
  ".register-page__confirmation__third-form"
);
var registerPageConfirmationThirdFormContentFirstNotifyUserPhoneNumber = $(
  ".register-page__confirmation__third-form__content-first-notify__user-phone-number"
);
var registerPageConfirmationThirdFormContentSecondNotifySecondsNumber = $(
  ".register-page__confirmation__third-form__content-second-notify__seconds-number"
);
var registerPageConfirmationThirdFormContentBackToShopeeBtn = $(
  ".register-page__confirmation__third-form__content-back-to-shopee-btn"
);
//#endregion

//#region 3. Login Page
var headerLoginBtn = $(".header__login__btn");
var headerNotificationPopupWhenNotLoginLoginBtn = $(
  ".header__notification__popup--when-not-login__login-btn"
);
var headerLogoutBtn = $(".header__logout-btn");
var loginPageHeaderShopeeLink = $(".login-page__header-shopee__link");
var checkValidPhoneNumberLogin = false;
var checkValidPasswordLogin = false;

var loginPageContentForm = $(".login-page__content-form");
var loginPageContentFormLoginBtn = $(".login-page__content-form__login-btn");
var loginPageContentFormNotifyError = $(
  ".login-page__content-form__notify-error"
);
var loginPageContentFormFirstInput = $(
  ".login-page__content-form__first-input"
);
var loginPageContentFormFirstInputPartInvalid = $(
  ".login-page__content-form__first-input-part--invalid"
);
var loginPageContentFormFirstInputInvalid = $(
  ".login-page__content-form__first-input--invalid"
);

var loginPageContentFormSecondInputMain = $(
  ".login-page__content-form__second-input-main"
);
var loginPageContentFormSecondInput = $(
  ".login-page__content-form__second-input"
);
var loginPageContentFormSecondInputPartInvalid = $(
  ".login-page__content-form__second-input-part--invalid"
);
var loginPageContentFormSecondInputInvalid = $(
  ".login-page__content-form__second-input--invalid"
);
var loginPageContentFormSecondInputStatusBtn = $(
  ".login-page__content-form__second-input-status-btn"
);
var loginPageContentFormSecondInputStatusBtnShowing = $(
  ".login-page__content-form__second-input-status-btn__showing"
);
var loginPageContentFormSecondInputStatusBtnHiding = $(
  ".login-page__content-form__second-input-status-btn__hiding"
);

var loginPageContentFormUnderLoginBtnForgetPasswordBtn = $(
  ".login-page__content-form__under-login-btn__forget-password-btn"
);
var loginPageContentFormUnderLoginBtnLoginWithSMS = $(
  ".login-page__content-form__under-login-btn__login-with-sms"
);
var loginPageContentFormOtherWaysFacebook = $(
  ".login-page__content-form__other-ways__facebook"
);
var loginPageContentFormOtherWaysGoogle = $(
  ".login-page__content-form__other-ways__google"
);
var loginPageContentFormOtherWaysApple = $(
  ".login-page__content-form__other-ways__apple"
);
var loginPageContentFormAskForRegisterRegisterBtn = $(
  ".login-page__content-form__ask-for-register__register-btn"
);
//#endregion

//#region 4. Header
var headerNotification = $(".header__notification");
var headerNotificationLink = $(".header__notification__link");
var headerNotificationPopupWhenNotLogin = $(
  ".header__notification__popup--when-not-login"
);
var headerNotificationPopupWhenNotLoginRegisterBtn = $(
  ".header__notification__popup--when-not-login__register-btn"
);
var headerNotificationQuantity = $(".header__notification__quantity");
var headerNotificationPopupWhenLoggedIn = $(
  ".header__notification__popup--when-logged-in"
);
var headerNotificationPopupWhenLoggedInList = $(
  ".header__notification__popup--when-logged-in__list"
);

var headerLinksBecomeAShopeeSeller = $(".header__links-become-a-shopee-seller");
var headerCartLink = $(".header__cart__link");
var headerRegister = $(".header__register");
var headerLogin = $(".header__login");
var headerUserAccount = $(".header__user-account");

var headerSearchFrameInput = $(".header__search-frame__input");
var headerSearchHistory = $(".header__search-history");
var headerSearchFrameBtn = $(".header__search-frame__btn");
var headerSearchHistoryList = $(".header__search-history-list");
var headerSearchHistoryItemLinks = $$(".header__search-history-item__link");
var headerSearchHistoryKeywordsList = $(
  ".header__search-history-keywords-list"
);
var headerSearchHistoryItemIndex = 0;
//#endregion

//#region 5. Content
// slider
var sliderMainMotionPart = $(".slider__main__motion-part");
var sliderMainMotionPartLink = $(".slider__main__motion-part__link");
var sliderMainMotionPartImg = $(".slider__main__motion-part__img");
var sliderMainMotionPartQueueItems = $$(
  ".slider__main__motion-part__queue-item"
);
var sliderMainMotionPartPreviousBtn = $(
  ".slider__main__motion-part__previous-btn"
);
var sliderMainMotionPartNextBtn = $(".slider__main__motion-part__next-btn");
var sliderFavouriteSelections = $(".slider__favourite-selections");
var sliderMainMotionPartQueueItemCurrentIndex = 0;
var sliderMainMotionPartLinkInfo = [];

// giftBanner
var giftBanner = $(".gift-banner");
var giftBannerPopup = $(".gift-banner__popup");
var giftBannerPopupCloseBtn = $(".gift-banner__popup__close-btn");

// outstanding
var outstandingHotSellingProducts = $(".outstanding__hot-selling-products");
var outstandingHotBrands = $(".outstanding__hot-brands");

// directory
var directoryMainList = $(".directory__main__list");
var directoryMainList = $(".directory__main__list");
var directoryMainNextBtn = $(".directory__main__next-btn");
var directoryMainPreviousBtn = $(".directory__main__previous-btn");

// flashSale
var flashSaleMainList = $$(".flash-sale__main__list");
var flashSaleMainNextBtn = $(".flash-sale__main__next-btn");
var flashSaleMainPreviousBtn = $(".flash-sale__main__previous-btn");
var flashSaleMainList = $(".flash-sale__main__list");
var flashSaleMainListCurrentIndex = 1;

// underFlashSale
var underFlashSalePart = $(".under-flash-sale__part");

// shopeeMall
var shopeeMallMainMotion = $(".shopee-mall__main__motion");
var shopeeMallMainMotionLink = $(".shopee-mall__main__motion__link");
var shopeeMallMainMotionImage = $(".shopee-mall__main__motion__img");
var shopeeMallMainMotionQueueItems = $$(
  ".shopee-mall__main__motion__queue-item"
);
var shopeeMallHeadingText = $(".shopee-mall__heading__text");
var shopeeMallMainProductList = $(".shopee-mall__main__product-list");
var shopeeMallMainProductNextBtn = $(".shopee-mall__main__product__next-btn");
var shopeeMallMainProductPreviousBtn = $(
  ".shopee-mall__main__product__previous-btn"
);
var shopeeMallMainProductList = $(".shopee-mall__main__product-list");
var shopeeMallMainProductListCurrentIndex = 1;

// searchTrending
var searchTrendingMainList = $(".search-trending__main__list");
var searchTrendingHeadingViewMoreBtn = $(
  ".search-trending__heading__view-more-btn"
);
var searchTrendingListCurrentIndex = 0,
  searchTrendingNumberList;

// topSearch
var topSearchMainList = $(".top-search__main__list");
var topSearchMainList = $(".top-search__main__list");
var topSearchMainListCurrentIndex = 1;
var topSearchMainNextBtn = $(".top-search__main__next-btn");
var topSearchMainPreviousBtn = $(".top-search__main__previous-btn");

// todaySuggestion
var todaySuggestionMainTabMain = $(".today-suggestion__main__tab-main");
var todaySuggestionMainTabSuperSale88 = $(
  ".today-suggestion__main__tab-super-sale-8-8"
);
var todaySuggestion = $(".today-suggestion");
var todaySuggestionHeadingTabMain = $(".today-suggestion__heading-tab-main");
var todaySuggestionHeadingTabSuperSale88 = $(
  ".today-suggestion__heading-tab-super-sale-8-8"
);
var todaySuggestionMainViewAllBtn = $(".today-suggestion__main__view-all-btn");
var todaySuggestionMain = $(".today-suggestion__main");
var todaySuggestionMainTabMain = $(".today-suggestion__main__tab-main");
var todaySuggestionMainTabSuperSale88 = $(
  ".today-suggestion__main__tab-super-sale-8-8"
);

//#endregion

//#region 6. Footer
var footerTextATags = $$(".footer__text a");
var footerDirectoryList = $(".footer__directory__list");
var footerLinkAboutTextCSKH = $(".footer__link__about-text-CSKH");
var footerLinkAboutTextVeShopee = $(".footer__link__about-text-VeShopee");
var footerLinkAboutSocial = $(".footer__link__about-social");
var footerLinkCopyrightCountryAndAreaList = $(
  ".footer__link__copyright__country-and-area__list"
);
var footerPolicyTermsPartTitle = $(".footer__policy-terms__part__title");
var footerPolicyTermsPartCertificate = $(
  ".footer__policy-terms__part__certificate"
);
var footerPolicyTermsPartCompanyInfo = $(
  ".footer__policy-terms__part__company-info"
);
//#endregion

//#region 7. Motion Parts
var motionPartSubBanner = $(".motion-part__sub-banner");
var pageLoadBanner = $(".page-load-banner");
var pageLoadBannerCloseBtn = $(".page-load-banner__close-btn");
var motionPartChat = $(".motion-part__chat");
var motionPartChatMain = $(".motion-part__chat__main");
var motionPartChatPopupHeader_hidePopupBtn = $(
  ".motion-part__chat__popup__header__right-icons > svg:nth-child(3)"
);

var motionPartChatPopup = $(".motion-part__chat__popup");
var motionPartChatPopupExpanded = $(".motion-part__chat__popup__expanded");
var motionPartChatPopupHeader_iconWhenNormal = $(
  ".motion-part__chat__popup__header__icon--when-normal"
);
var motionPartChatPopupHeader_iconWhenExpanded = $(
  ".motion-part__chat__popup__header__icon--when-expanded"
);
var motionPartChatPopupMainSearchAndOptionsPopup = $(
  ".motion-part__chat__popup__main__search-and-options__popup"
);
var motionPartChatPopupMainSearchAndOptionsPopup_all = $(
  ".motion-part__chat__popup__main__search-and-options__popup > div:nth-child(1)"
);
var motionPartChatPopupMainSearchAndOptionsPopup_unread = $(
  ".motion-part__chat__popup__main__search-and-options__popup > div:nth-child(2)"
);
var motionPartChatPopupMainSearchAndOptionsPopup_pinned = $(
  ".motion-part__chat__popup__main__search-and-options__popup > div:nth-child(3)"
);

var motionPartChatPopupMainContent_all = $(
  ".motion-part__chat__popup__main__content--all"
);
var motionPartChatPopupMainContent_unread = $(
  ".motion-part__chat__popup__main__content--unread"
);
var motionPartChatPopupMainContent_pinned = $(
  ".motion-part__chat__popup__main__content--pinned"
);
var motionPartChatPopupMainSearchAndOptionsText = $(
  ".motion-part__chat__popup__main__search-and-options__text"
);
var motionPartChatPopupMainSearchAndOptionsInput = $(
  ".motion-part__chat__popup__main__search-and-options > input"
);
var motionPartChatPopupMainSearchAndOptionsPart = $(
  ".motion-part__chat__popup__main__search-and-options__part"
);
//#endregion
//#endregion

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

//#region HANDLE AT INITIAL PAGE, REGISTER PAGE, LOGIN PAGE (config)
//#region (function) loadInitialPageNoModal
function loadInitialPageNoModal() {
  registerPage.style.display = "none";
  loginPage.style.display = "none";
  headerNotificationLink.removeAttribute("href");
  headerNotificationLink.style.cursor = "default";
  headerNotificationQuantity.style.display = "none";
  headerNotificationPopupWhenLoggedIn.style.display = "none";
  headerUserAccount.style.display = "none";
  headerCartLink.removeAttribute("href");
  headerCartLink.style.cursor = "default";
  motionPartChat.style.display = "none";

  body.style.overflow = "visible!important";
  modal.style.display = "none";
  pageLoadBanner.style.display = "none";
  giftBannerPopup.style.display = "none";
  app.style.position = "absolute";
  content.style.position = "relative";
  content.style.top = 0;

  app.style.display = "block";
  header.style.display = "block";
  headerRegister.style.display = "block";
  headerLogin.style.display = "block";
  container.style.display = "block";
  footer.style.display = "block";
  footerText.style.display = "block";
  footerDirectory.style.display = "block";

  window.scrollTo(0, initialPageOffsetHeight);
}
//#endregion

//#region At registerPage/loginPage, click Shopee logo to back initial page (no reload)
loginPageHeaderShopeeLink.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    loadInitialPageNoModal();
  }, 200);
});

registerPageHeaderShopeeLink.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    loadInitialPageNoModal();
  }, 200);
});
//#endregion

//#region modal, giftBanner, giftBannerPopup, giftBannerPopupCloseBtn onclick()
modal.onclick = (e) => {
  setTimeout(() => {
    body.style.overflow = "visible";
    modal.style.display = "none";
    app.style.position = "absolute";
    content.style.position = "relative";
    content.style.top = "0";

    if (pageLoadBanner.style.display == "block") {
      pageLoadBanner.style.display = "none";
    }
    if (giftBannerPopup.style.display == "block") {
      giftBannerPopup.style.display = "none";
    }
  }, 100);
};

giftBanner.addEventListener("click", () => {
  setTimeout(() => {
    modal.style.display = "block";
    giftBannerPopup.style.display = "block";

    // prevent scrolling
    body.style.overflow = "hidden";
  }, 100);
});

giftBannerPopup.onclick = (e) => {
  e.stopPropagation();
};

giftBannerPopupCloseBtn.onclick = (e) => {
  e.stopPropagation();
  modal.click();
};
//#endregion

//#region *Not handle these buttons, just preventDefault them
registerPageContentFormFacebookBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
registerPageContentFormGoogleBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
registerPageContentFormAppleBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
registerPageConfirmationFirstFormContentHelpOtherWayBtn.addEventListener(
  "click",
  function (e) {
    e.preventDefault();
  }
);
loginPageContentFormUnderLoginBtnForgetPasswordBtn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
  }
);
loginPageContentFormUnderLoginBtnLoginWithSMS.addEventListener("click", (e) => {
  e.preventDefault();
});
loginPageContentFormOtherWaysFacebook.addEventListener("click", (e) => {
  e.preventDefault();
});
loginPageContentFormOtherWaysGoogle.addEventListener("click", (e) => {
  e.preventDefault();
});
loginPageContentFormOtherWaysApple.addEventListener("click", (e) => {
  e.preventDefault();
});
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

  // div.register-page__confirmation__step-item-number
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

  // div.register-page__confirmation__step-item-number
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

//#region --OK--getAndUpdateConfirmationCodes
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

// Related actions
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

//#endregion

//#region HANDLE DATA, UPDATE DATA IN DOM, LISTEN EVENT,...

//#region header (1) (event)
//#region handle headerSearchFrameInput, headerSearchHistory
function removeHeaderSearchHistoryItemLinksHover() {
  headerSearchHistoryItemLinks.forEach((headerSearchHistoryItemLink) => {
    if (
      headerSearchHistoryItemLink.classList.contains(
        "header__search-history-item__link--hover"
      )
    ) {
      headerSearchHistoryItemLink.classList.remove(
        "header__search-history-item__link--hover"
      );
    }
  });
}

//#region update headerSearchHistoryListInfo -> updateInDOMHeaderSearchHistoryList
function updateInDOMHeaderSearchHistoryList() {
  var defaultHeaderSearchHistoryItem = `<li class="header__search-history-item header__search-history-item--default">
        <a href="https://shopee.vn/search?noCorrection=true&searchPrefill=1037" class="header__search-history-item__link">
            Deal hot kèm 2 mã freeship
            <img src="./assests/img/header/header__search/Dealquocte.png" alt=""  class="header__search-history-item__link__dtth31k-img">
        </a>
    </li>`;

  headerSearchHistoryList.innerHTML = "";

  var headerSearchHistoryItems = headerSearchHistoryListInfo.map(
    (headerSearchHistoryListItem) => {
      var liTag = `<li class="header__search-history-item">
            <a href="${headerSearchHistoryListItem.href}" class="header__search-history-item__link">${headerSearchHistoryListItem.innerHTML}</a>
        </li>`;

      return liTag;
    }
  );

  headerSearchHistoryList.innerHTML =
    defaultHeaderSearchHistoryItem + headerSearchHistoryItems.join("");
}

function addAndUpdateHeaderSearchHistoryListInfo(data) {
  var length = systemConfig.headerSearchHistoryListInfo.length;

  var checkDuplication = headerSearchHistoryListInfo.some((item) => {
    return item.innerHTML == data.innerHTML;
  });

  // if new item no match with items in old array
  if (!checkDuplication) {
    if (length == 10) {
      // delete the last element from array
      headerSearchHistoryListInfo.pop();

      // add new element to the first order of array
      headerSearchHistoryListInfo.unshift(data);

      // update headerSearchHistoryListInfo into localStorage
      setConfig("headerSearchHistoryListInfo", headerSearchHistoryListInfo);
    } else {
      // add new element to the first order of array
      headerSearchHistoryListInfo.unshift(data);

      // update headerSearchHistoryListInfo into localStorage
      setConfig("headerSearchHistoryListInfo", headerSearchHistoryListInfo);
    }
  }
}

updateInDOMHeaderSearchHistoryList();
//#endregion

//#region EventListeners
headerSearchFrameInput.addEventListener("click", () => {
  headerSearchHistory.style.display = "block";
});

headerSearchFrameInput.addEventListener("blur", () => {
  // return default search option index, remove hover on all of item
  headerSearchHistoryItemIndex = 0;
  removeHeaderSearchHistoryItemLinksHover();

  setTimeout(() => {
    headerSearchHistory.style.display = "none";
  }, 200);
});

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

headerSearchFrameBtn.addEventListener("click", (e) => {
  if (headerSearchFrameInput.value != "") {
    var innerHTML = headerSearchFrameInput.value;
    var href = `https://shopee.vn/search?keyword=${innerHTML}`;

    var data = {
      href: href,
      innerHTML: innerHTML,
    };

    // update array headerSearchHistoryListInfo
    addAndUpdateHeaderSearchHistoryListInfo(data);

    updateInDOMHeaderSearchHistoryList();

    // update headerSearchFrameBtn.href and take the default action (go new page)
    headerSearchFrameBtn.href = href;
  }
});
//#endregion

//#endregion

//#region updateInDOMHeaderSearchHistoryKeywordsList (--> OK)
(function updateInDOMHeaderSearchHistoryKeywordsList() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var aTags = datas.headerSearchHistoryKeywordsListInfo.map((data) => {
        return `<a class="header__search-history-keywords-item" 
                    href="${data.href}">${data.innerHTML}</a>`;
      });

      headerSearchHistoryKeywordsList.innerHTML = aTags.join("");
    });
})();
//#endregion

//#region updateInDOMHeaderNotificationPopupWhenLoggedInList
(function updateInDOMHeaderNotificationPopupWhenLoggedInList() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var liTags = datas.headerNotificationPopupWhenLoggedInListInfo.map(
        (data) => {
          return `
                    <li class="header__notification__popup--when-logged-in__item">
                        <a href="${data.href}" class="header__notification__popup--when-logged-in__link">
                            <div class="header__notification__popup--when-logged-in__item__img">
                                <img src="${data.itemImage}" alt="">
                            </div>
                            <div class="header__notification__popup--when-logged-in__item__content">
                                <h3 class="header__notification__popup--when-logged-in__item__title">${data.itemTitle}</h3>
                                <p class="header__notification__popup--when-logged-in__item__description">${data.itemDescription}</p>
                            </div>
                        </a>
                    </li>`;
        }
      );

      headerNotificationPopupWhenLoggedInList.innerHTML = liTags.join("");
    });
})();

headerNotification.addEventListener("mouseleave", () => {
  headerNotificationQuantity.style.display = "none";
});
//#endregion
//#endregion

//#region slider (event)
//#region handleInPartSliderMainMotionPart
(function handleInPartSliderMainMotionPart() {
  // get data in file db.json and assign to array sliderMainMotionPartLinkInfo
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      sliderMainMotionPartLinkInfo = datas.sliderMainMotionPartLinkInfo;
    });

  // implement after get data done
  setTimeout(() => {
    var len = sliderMainMotionPartLinkInfo.length;

    // Event listeners
    sliderMainMotionPartPreviousBtn.addEventListener("click", () => {
      if (sliderMainMotionPartQueueItemCurrentIndex == 0) {
        sliderMainMotionPartQueueItems[0].classList.remove(
          "slider__main__motion-part__queue-item--current"
        );
        sliderMainMotionPartQueueItems[len - 1].classList.add(
          "slider__main__motion-part__queue-item--current"
        );
        sliderMainMotionPartQueueItemCurrentIndex = len - 1;
      } else {
        sliderMainMotionPartQueueItems[
          sliderMainMotionPartQueueItemCurrentIndex
        ].classList.remove("slider__main__motion-part__queue-item--current");
        sliderMainMotionPartQueueItems[
          sliderMainMotionPartQueueItemCurrentIndex - 1
        ].classList.add("slider__main__motion-part__queue-item--current");
        sliderMainMotionPartQueueItemCurrentIndex--;
      }

      sliderMainMotionPartImg.setAttribute(
        "src",
        sliderMainMotionPartLinkInfo[sliderMainMotionPartQueueItemCurrentIndex]
          .image
      );
      sliderMainMotionPartLink.setAttribute(
        "href",
        sliderMainMotionPartLinkInfo[sliderMainMotionPartQueueItemCurrentIndex]
          .href
      );
    });

    sliderMainMotionPartNextBtn.addEventListener("click", () => {
      if (sliderMainMotionPartQueueItemCurrentIndex == len - 1) {
        sliderMainMotionPartQueueItems[len - 1].classList.remove(
          "slider__main__motion-part__queue-item--current"
        );
        sliderMainMotionPartQueueItems[0].classList.add(
          "slider__main__motion-part__queue-item--current"
        );
        sliderMainMotionPartQueueItemCurrentIndex = 0;
      } else {
        sliderMainMotionPartQueueItems[
          sliderMainMotionPartQueueItemCurrentIndex
        ].classList.remove("slider__main__motion-part__queue-item--current");
        sliderMainMotionPartQueueItems[
          sliderMainMotionPartQueueItemCurrentIndex + 1
        ].classList.add("slider__main__motion-part__queue-item--current");
        sliderMainMotionPartQueueItemCurrentIndex++;
      }

      sliderMainMotionPartImg.setAttribute(
        "src",
        sliderMainMotionPartLinkInfo[sliderMainMotionPartQueueItemCurrentIndex]
          .image
      );
      sliderMainMotionPartLink.setAttribute(
        "href",
        sliderMainMotionPartLinkInfo[sliderMainMotionPartQueueItemCurrentIndex]
          .href
      );
    });

    for (var sliderMainMotionPartQueueItem of sliderMainMotionPartQueueItems) {
      sliderMainMotionPartQueueItem.addEventListener("click", function () {
        // get parent's queue
        var parent = this.parentNode;

        // get this's index in parent's queue
        var index = Array.prototype.indexOf.call(parent.children, this);

        // remove old, add new
        sliderMainMotionPartQueueItems[
          sliderMainMotionPartQueueItemCurrentIndex
        ].classList.remove("slider__main__motion-part__queue-item--current");
        sliderMainMotionPartQueueItems[index].classList.add(
          "slider__main__motion-part__queue-item--current"
        );

        // update img, href
        sliderMainMotionPartImg.setAttribute(
          "src",
          sliderMainMotionPartLinkInfo[index].image
        );
        sliderMainMotionPartLink.setAttribute(
          "href",
          sliderMainMotionPartLinkInfo[index].href
        );

        sliderMainMotionPartQueueItemCurrentIndex = index;
      });
    }

    // auto increase index and change suit image
    setInterval(() => {
      if (sliderMainMotionPartQueueItemCurrentIndex < len - 1) {
        sliderMainMotionPartQueueItemCurrentIndex++;
        sliderMainMotionPartQueueItems[
          sliderMainMotionPartQueueItemCurrentIndex - 1
        ].classList.remove("slider__main__motion-part__queue-item--current");
        sliderMainMotionPartQueueItems[
          sliderMainMotionPartQueueItemCurrentIndex
        ].classList.add("slider__main__motion-part__queue-item--current");
      } else {
        sliderMainMotionPartQueueItemCurrentIndex = 0;
        sliderMainMotionPartQueueItems[len - 1].classList.remove(
          "slider__main__motion-part__queue-item--current"
        );
        sliderMainMotionPartQueueItems[0].classList.add(
          "slider__main__motion-part__queue-item--current"
        );
      }

      sliderMainMotionPartImg.setAttribute(
        "src",
        sliderMainMotionPartLinkInfo[sliderMainMotionPartQueueItemCurrentIndex]
          .image
      );
      sliderMainMotionPartLink.setAttribute(
        "href",
        sliderMainMotionPartLinkInfo[sliderMainMotionPartQueueItemCurrentIndex]
          .href
      );
    }, 5000);
  }, 1000);
})();
//#endregion

//#region updateInDOMSliderFavouriteSelections (-->OK)
(function updateInDOMSliderFavouriteSelections() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var aTags = datas.sliderFavouriteSelectionsInfo.map((data) => {
        return `<a class="slider__favourite-selections__link" href="${data.href}">
                    <img class="slider__favourite-selections__link-img" src="${data.image}">
                    <h4 class="slider__favourite-selections__link-text">${data.text}</h4>
                </a>`;
      });

      sliderFavouriteSelections.innerHTML = aTags.join("");
    });
})();
//#endregion
//#endregion

//#region outstanding (-->OK)
//#region updateInDOMOutstandingHotSellingProducts
function handleUpdateInDOMOutstandingHotSellingProducts(datas) {
  var firstDivTag = `
        <div class="outstanding__hot-selling-products__info">
            <h4 class="outstanding__hot-selling-products__info__heading">
                ${datas.outstandingHotSellingProductsInfo.outstandingHotSellingProductsInfoInfo.heading}
            </h4>
            <a href="${datas.outstandingHotSellingProductsInfo.outstandingHotSellingProductsInfoInfo.href}" class="outstanding__hot-selling-products__info__view-more-btn">
                Xem thêm <i class="fas fa-chevron-right"></i>
            </a>
        </div>`;

  var aTags =
    datas.outstandingHotSellingProductsInfo.outstandingHotSellingProductsListInfo.map(
      (data) => {
        return `<a href="${data.href}" class="outstanding__hot-selling-products__item">
            <img src="${data.image}" alt="" class="outstanding__hot-selling-products__img">
            <span class="outstanding__hot-selling-products__price">${data.price}</span>
            <div class="outstanding__hot-selling-products__sale-off-label">
                <span class="outstanding__hot-selling-products__sale-off-label__percent">${data.percent}</span>
                <span class="outstanding__hot-selling-products__sale-off-label__text">GIẢM</span>                                                                            
            </div>
        </a>`;
      }
    );

  var secondDivTag = `<div class="outstanding__hot-selling-products__list">${aTags.join(
    ""
  )}</div>`;

  outstandingHotSellingProducts.innerHTML = `<div class="outstanding__hot-selling-products">
            ${firstDivTag}
            ${secondDivTag}
        </div>`;
}

(function updateInDOMOutstandingHotSellingProducts() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      handleUpdateInDOMOutstandingHotSellingProducts(datas);
    });
})();
//#endregion

//#region updateInDOMOutstandingHotBrands
function handleUpdateInDOMOutstandingHotBrands(datas) {
  var firstDivTag = `
        <div class="outstanding__hot-brands__info">
            <h4 class="outstanding__hot-brands__info__heading">
                ${datas.outstandingHotBrandsInfo.outstandingHotBrandsInfoInfo.heading}
            </h4>
            <a href="${datas.outstandingHotBrandsInfo.outstandingHotBrandsInfoInfo.href}" class="outstanding__hot-brands__info__view-more-btn">
                Xem thêm <i class="fas fa-chevron-right"></i>
            </a>
        </div>`;

  var aTags = datas.outstandingHotBrandsInfo.outstandingHotBrandsListInfo.map(
    (data) => {
      return `
            <a href="${data.href}" class="outstanding__hot-brands__item">
                <img src="${data.image}" alt="" class="outstanding__hot-brands__img">
                <div class="">
                    <img src="${data.subImage}" alt="" class="outstanding__hot-brands__sub-img">
                </div>
                <span class="outstanding__hot-brands__text">${data.text}</span>
            </a>`;
    }
  );

  var secondDivTag = `<div class="outstanding__hot-brands__list">${aTags.join(
    ""
  )}</div>`;

  outstandingHotBrands.innerHTML = `<div class="outstanding__hot-brands">
            ${firstDivTag}
            ${secondDivTag}
        </div>`;
}

(function updateInDOMOutstandingHotBrands() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      handleUpdateInDOMOutstandingHotBrands(datas);
    });
})();
//#endregion
//#endregion

//#region directory (event)
//#region updateInDOMDirectoryMainList (-->OK)
(function updateInDOMDirectoryMainList() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var liTags = "";

      for (var i = 0; i < datas.directoryMainItemListInfo.length; i += 2) {
        liTags += `
          <li class="directory__main__item">
              <a href="${
                datas.directoryMainItemListInfo[i].href
              }" class="directory__main__item__link">
                  <img src="${
                    datas.directoryMainItemListInfo[i].itemImage
                  }" alt="" class="directory__main__item__img">
                  <span class="directory__main__item__title">${
                    datas.directoryMainItemListInfo[i].itemTitle
                  }</span>
              </a>
              <a href="${
                datas.directoryMainItemListInfo[i + 1].href
              }" class="directory__main__item__link">
                  <img src="${
                    datas.directoryMainItemListInfo[i + 1].itemImage
                  }" alt="" class="directory__main__item__img">
                  <span class="directory__main__item__title">${
                    datas.directoryMainItemListInfo[i + 1].itemTitle
                  }</span>
              </a>
          </li>`;
      }
      directoryMainList.innerHTML = liTags;
    });
})();
//#endregion

//#region directoryMainBtns onclick()
directoryMainNextBtn.addEventListener("click", (e) => {
  setTimeout(() => {
    directoryMainNextBtn.style.display = "none";
    directoryMainPreviousBtn.style.display = "block";

    // animation
    directoryMainList.style.transform = "translate(-36rem, 0)";
    directoryMainList.style.transition = "all 500ms ease 0s";
  }, 0);
});

directoryMainPreviousBtn.addEventListener("click", (e) => {
  setTimeout(() => {
    directoryMainPreviousBtn.style.display = "none";
    directoryMainNextBtn.style.display = "block";

    // animation
    directoryMainList.style.transform = "translate(0, 0)";
    directoryMainList.style.transition = "all 500ms ease 0s";
  }, 0);
});
//#endregion
//#endregion

//#region flashSale (event)
//#region updateInDOMFlashSaleMainList (-->OK)
function handleUpdateInDOMFlashSaleMainList(flashSaleMainListInfo) {
  var aTags = "";

  for (var i = 0; i < flashSaleMainListInfo.length; i++) {
    // add this element if conditions matched
    var flashSaleMainPercentBarHot =
      flashSaleMainListInfo[i].selledPartWidthPercent >= 70
        ? '<div class="flash-sale__main__percent-bar--hot"></div>'
        : "";

    aTags += `
            <a href="${flashSaleMainListInfo[i].href}" class="flash-sale__main__link">
                <img src="${flashSaleMainListInfo[i].bubbleImage}" alt="" class="flash-sale__main__bubble-img">
                <img src="${flashSaleMainListInfo[i].frameImage}" alt="" class="flash-sale__main__frame-img">
                <span class="flash-sale__main__price">${flashSaleMainListInfo[i].price}</span>
                <div class="flash-sale__main__percent-bar">
                    <div class="flash-sale__main__percent-bar__text">
                        <span class="flash-sale__main__percent-bar__selled-status">${flashSaleMainListInfo[i].selledStatus}</span>
                    </div>
                    <div class="flash-sale__main__percent-bar__total-part"></div>
                    <div class="flash-sale__main__percent-bar__selled-part" style="width: ${flashSaleMainListInfo[i].selledPartWidthPercent}%;"></div>
                    ${flashSaleMainPercentBarHot}
                </div>
                <div class="flash-sale__main__sale-off-label">
                    <span class="flash-sale__main__sale-off-label__percent">${flashSaleMainListInfo[i].saleOffPercent}</span>
                    <span class="flash-sale__main__sale-off-label__text">GIẢM</span>                                                                            
                </div>
            </a>`;
  }

  flashSaleMainList.innerHTML = aTags;
}

(function updateInDOMFlashSaleMainList() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      handleUpdateInDOMFlashSaleMainList(datas.flashSaleMainListInfo);
    });
})();
//#endregion

//#region flashSaleMainBtn onclick()
flashSaleMainNextBtn.addEventListener("click", (e) => {
  // case 1: first list
  if (flashSaleMainListCurrentIndex == 1) {
    flashSaleMainListCurrentIndex = 2;
    flashSaleMainPreviousBtn.style.display = "block";
    flashSaleMainNextBtn.style.display = "block";

    // animation
    flashSaleMainList.style.transform = "translate(-100rem, 0)";
    flashSaleMainList.style.transition = "all 500ms ease 0s";
  } else {
    // case 2: second list
    if (flashSaleMainListCurrentIndex == 2) {
      flashSaleMainListCurrentIndex = 3;
      flashSaleMainPreviousBtn.style.display = "block";
      flashSaleMainNextBtn.style.display = "none";

      // animation
      flashSaleMainList.style.transform = "translate(-200rem, 0)";
      flashSaleMainList.style.transition = "all 500ms ease 0s";
    }
  }
});

flashSaleMainPreviousBtn.addEventListener("click", (e) => {
  // case 1: second list
  if (flashSaleMainListCurrentIndex == 2) {
    flashSaleMainListCurrentIndex = 1;
    flashSaleMainPreviousBtn.style.display = "none";
    flashSaleMainNextBtn.style.display = "block";

    // animation
    flashSaleMainList.style.transform = "translate(0, 0)";
    flashSaleMainList.style.transition = "all 500ms ease 0s";
  } else {
    // case 2: third list
    if (flashSaleMainListCurrentIndex == 3) {
      flashSaleMainListCurrentIndex = 2;
      flashSaleMainPreviousBtn.style.display = "block";
      flashSaleMainNextBtn.style.display = "block";

      // animation
      flashSaleMainList.style.transform = "translate(-100rem, 0)";
      flashSaleMainList.style.transition = "all 500ms ease 0s";
    }
  }
});
//#endregion

//#region updateInDOMUnderFlashSalePart (-->OK)
(function updateInDOMUnderFlashSalePart() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var aTags = datas.underFlashSalePartInfo.map((data) => {
        return `<a href="${data.href}" class="under-flash-sale__link">
                    <img src="${data.image}" alt="" class="under-flash-sale__img">   
                </a>`;
      });

      underFlashSalePart.innerHTML = aTags.join("");
    });
})();
//#endregion
//#endregion

//#region shopeeMall (2) (event)
//#region updateInDOMShopeeMallMainMotionLinkAndQueueItems
function handleShopeeMallMainMotionLinkAndQueueItems(
  shopeeMallMainMotionLinkInfo
) {
  var currentIndex = 0;
  var queueLength = shopeeMallMainMotionQueueItems.length;

  for (var shopeeMallMainMotionQueueItem of shopeeMallMainMotionQueueItems) {
    shopeeMallMainMotionQueueItem.addEventListener("click", function (e) {
      e.preventDefault();

      var parent = this.parentNode;
      // get this's index in parent's queue
      var index = Array.prototype.indexOf.call(parent.children, this);

      // update current item
      shopeeMallMainMotionQueueItems[currentIndex].classList.remove(
        "shopee-mall__main__motion__queue-item--current"
      );
      shopeeMallMainMotionQueueItems[index].classList.add(
        "shopee-mall__main__motion__queue-item--current"
      );

      // update src, href
      shopeeMallMainMotionLink.href = shopeeMallMainMotionLinkInfo[index].href;
      shopeeMallMainMotionImage.src = shopeeMallMainMotionLinkInfo[index].image;

      // update currentIndex
      currentIndex = index;
    });
  }

  setInterval(() => {
    if (currentIndex < queueLength - 1) {
      shopeeMallMainMotionQueueItems[currentIndex].classList.remove(
        "shopee-mall__main__motion__queue-item--current"
      );
      shopeeMallMainMotionQueueItems[currentIndex + 1].classList.add(
        "shopee-mall__main__motion__queue-item--current"
      );
      currentIndex++;
    } else {
      shopeeMallMainMotionQueueItems[queueLength - 1].classList.remove(
        "shopee-mall__main__motion__queue-item--current"
      );
      shopeeMallMainMotionQueueItems[0].classList.add(
        "shopee-mall__main__motion__queue-item--current"
      );
      currentIndex = 0;
    }

    // update src, href
    shopeeMallMainMotionLink.href =
      shopeeMallMainMotionLinkInfo[currentIndex].href;
    shopeeMallMainMotionImage.src =
      shopeeMallMainMotionLinkInfo[currentIndex].image;
  }, 5000);
}

(function updateInDOMShopeeMallMainMotionLinkAndQueueItems() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      handleShopeeMallMainMotionLinkAndQueueItems(
        datas.shopeeMallMainMotionLinkInfo
      );
    });
})();
//#endregion

//#region updateInDOMShopeeMallHeadingText (-->OK)
(function updateInDOMShopeeMallHeadingText() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var divTags = datas.shopeeMallHeadingTextInfo.map((data) => {
        return `
                    <div>
                        <img src="${data.image}" class="shopee-mall__heading__text__icon" alt="">
                        <span class="shopee-mall__heading__text__title">${data.title}</span>
                    </div>`;
      });

      shopeeMallHeadingText.innerHTML = divTags.join("");
    });
})();
//#endregion

//#region updateInDOMShopeeMallMainProductList
function handleUpdateInDOMShopeeMallMainProductList(
  shopeeMallMainProductListInfo
) {
  var liTags = "",
    i;

  for (i = 0; i < shopeeMallMainProductListInfo.length - 1; i += 2) {
    liTags += `
            <li class="shopee-mall__main__product-item">
                <a href="${
                  shopeeMallMainProductListInfo[i].href
                }" class="shopee-mall__main__product-item__link">
                    <img src="${
                      shopeeMallMainProductListInfo[i].image
                    }" alt="" class="shopee-mall__main__product-item__link__img">
                    <span class="shopee-mall__main__product-item__link__text">${
                      shopeeMallMainProductListInfo[i].text
                    }</span>
                </a>
                <a href="${
                  shopeeMallMainProductListInfo[i + 1].href
                }" class="shopee-mall__main__product-item__link">
                    <img src="${
                      shopeeMallMainProductListInfo[i + 1].image
                    }" alt="" class="shopee-mall__main__product-item__link__img">
                    <span class="shopee-mall__main__product-item__link__text">${
                      shopeeMallMainProductListInfo[i + 1].text
                    }</span>
                </a>
            </li>`;
  }

  // special case: the last li element
  liTags += `
        <li class="shopee-mall__main__product-item">
            <a href="${shopeeMallMainProductListInfo[i].href}" class="shopee-mall__main__product-item__link">
                <img src="${shopeeMallMainProductListInfo[i].image}" alt="" class="shopee-mall__main__product-item__link__img">
                <span class="shopee-mall__main__product-item__link__text">${shopeeMallMainProductListInfo[i].text}</span>
            </a>
            <div class="shopee-mall__main__product-item__link__exception">
                <a href="https://shopee.vn/mall" class="shopee-mall__heading__view-all-btn">
                    Xem tất cả
                    <div>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </a>
            </div>
        </li>`;

  shopeeMallMainProductList.innerHTML = liTags;
}

(function updateInDOMShopeeMallMainProductList() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      handleUpdateInDOMShopeeMallMainProductList(
        datas.shopeeMallMainProductListInfo
      );
    });
})();
//#endregion

//#region shopeeMallMainProductBtn onclick()
shopeeMallMainProductNextBtn.addEventListener("click", () => {
  // case 1: first list
  if (shopeeMallMainProductListCurrentIndex == 1) {
    shopeeMallMainProductListCurrentIndex = 2;
    shopeeMallMainProductPreviousBtn.style.display = "block";
    shopeeMallMainProductNextBtn.style.display = "block";

    // animation
    shopeeMallMainProductList.style.transform = "translate(-80rem, 0)";
    shopeeMallMainProductList.style.transition = "all 500ms ease 0s";
  } else {
    // case 2: second list
    if (shopeeMallMainProductListCurrentIndex == 2) {
      shopeeMallMainProductListCurrentIndex = 3;
      shopeeMallMainProductPreviousBtn.style.display = "block";
      shopeeMallMainProductNextBtn.style.display = "none";

      // animation
      shopeeMallMainProductList.style.transform = "translate(-160rem, 0)";
      shopeeMallMainProductList.style.transition = "all 500ms ease 0s";
    }
  }
});

shopeeMallMainProductPreviousBtn.addEventListener("click", () => {
  // case 1: second list
  if (shopeeMallMainProductListCurrentIndex == 2) {
    shopeeMallMainProductListCurrentIndex = 1;
    shopeeMallMainProductPreviousBtn.style.display = "none";
    shopeeMallMainProductNextBtn.style.display = "block";

    // animation
    shopeeMallMainProductList.style.transform = "translate(0, 0)";
    shopeeMallMainProductList.style.transition = "all 500ms ease 0s";
  } else {
    // case 2: third list
    if (shopeeMallMainProductListCurrentIndex == 3) {
      shopeeMallMainProductListCurrentIndex = 2;
      shopeeMallMainProductPreviousBtn.style.display = "block";
      shopeeMallMainProductNextBtn.style.display = "block";

      // animation
      shopeeMallMainProductList.style.transform = "translate(-80rem, 0)";
      shopeeMallMainProductList.style.transition = "all 500ms ease 0s";
    }
  }
});
//#endregion
//#endregion

//#region searchTrending (event)
//#region updateInDOMSearchTrendingMainList (-->OK)
function updateInDOMSearchTrendingMainList(listIndex) {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var aTags = datas.searchTrendingMainListInfo[listIndex].map((data) => {
        return `
          <a href="${data.href}" class="search-trending__main__item">
              <div class="search-trending__main__text">
                  <span class="search-trending__main__text__name">${data.productName}</span>
                  <span class="search-trending__main__text__description">${data.productDescription}</span>
              </div>
              <img src="${data.image}" alt="" class="search-trending__img">
          </a>`;
      });

      searchTrendingMainList.innerHTML = aTags.join("");
    });
}

updateInDOMSearchTrendingMainList(0);
//#endregion

//#region searchTrendingHeadingViewMoreBtn onclick()
fetch("db.json")
  .then((response) => response.json())

  .then((datas) => {
    searchTrendingNumberList = datas.searchTrendingMainListInfo.length;
  });

searchTrendingHeadingViewMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    if (searchTrendingListCurrentIndex == searchTrendingNumberList - 1) {
      searchTrendingListCurrentIndex = 0;
      updateInDOMSearchTrendingMainList(0);
    } else {
      searchTrendingListCurrentIndex++;
      updateInDOMSearchTrendingMainList(searchTrendingListCurrentIndex);
    }
  }, 100);
});
//#endregion
//#endregion

//#region topSearch (event)
//#region updateInDOMTopSearchMainList (-->OK)
function handleUpdateInDOMTopSearchMainList(topSearchMainListInfo) {
  var aTags = "";

  var theFirstATag = `
    <a href="${topSearchMainListInfo[0].href}" class="top-search__main__link">
        <div class="top-search__main__product">
            <img src="${topSearchMainListInfo[0].productImage}" alt="" class="top-search__main__product__img">
            <img src="./assests/img/container/top-search/top-label.png" alt="" class="top-search__main__product__top-label-img">
        </div>
        <div class="top-search__main__footer">
            <span class="top-search__main__footer__text">${topSearchMainListInfo[0].text}</span>
        </div>
    </a>`;

  for (var i = 1; i < topSearchMainListInfo.length; i++) {
    aTags += `
    <a href="${topSearchMainListInfo[i].href}" class="top-search__main__link">
        <div class="top-search__main__product">
            <img src="${topSearchMainListInfo[i].productImage}" alt="" class="top-search__main__product__img">
            <img src="./assests/img/container/top-search/top-label.png" alt="" class="top-search__main__product__top-label-img">
            <div class="top-search__main__product__statistic">
                Bán <span class="top-search__main__product__statistic__price">${topSearchMainListInfo[i].price}</span>k+ / tháng
            </div>
        </div>
        <div class="top-search__main__footer">
            <span class="top-search__main__footer__text">${topSearchMainListInfo[i].text}</span>
        </div>
    </a>`;
  }

  topSearchMainList.innerHTML = theFirstATag + aTags;
}

(function updateInDOMTopSearchMainList() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      handleUpdateInDOMTopSearchMainList(datas.topSearchMainListInfo);
    });
})();
//#endregion

//#region topSearchMainBtns onclick()
topSearchMainNextBtn.addEventListener("click", () => {
  if (topSearchMainListCurrentIndex == 1) {
    topSearchMainListCurrentIndex = 2;
    topSearchMainNextBtn.style.display = "block";
    topSearchMainPreviousBtn.style.display = "block";

    // animation
    topSearchMainList.style.transform = "translate(-120rem, 0)";
    topSearchMainList.style.transition = "all 500ms ease 0s";
  } else {
    if (topSearchMainListCurrentIndex == 2) {
      topSearchMainListCurrentIndex = 3;
      topSearchMainNextBtn.style.display = "block";
      topSearchMainPreviousBtn.style.display = "block";

      // animation
      topSearchMainList.style.transform = "translate(-240rem, 0)";
      topSearchMainList.style.transition = "all 500ms ease 0s";
    } else {
      if (topSearchMainListCurrentIndex == 3) {
        topSearchMainListCurrentIndex = 4;
        topSearchMainNextBtn.style.display = "none";
        topSearchMainPreviousBtn.style.display = "block";

        // animation
        topSearchMainList.style.transform = "translate(-360rem, 0)";
        topSearchMainList.style.transition = "all 500ms ease 0s";
      }
    }
  }
});

topSearchMainPreviousBtn.addEventListener("click", () => {
  if (topSearchMainListCurrentIndex == 2) {
    topSearchMainListCurrentIndex = 1;
    topSearchMainPreviousBtn.style.display = "none";
    topSearchMainNextBtn.style.display = "block";

    // animation
    topSearchMainList.style.transform = "translate(0, 0)";
    topSearchMainList.style.transition = "all 500ms ease 0s";
  } else {
    if (topSearchMainListCurrentIndex == 3) {
      topSearchMainListCurrentIndex = 2;
      topSearchMainPreviousBtn.style.display = "block";
      topSearchMainNextBtn.style.display = "block";

      // animation
      topSearchMainList.style.transform = "translate(-120rem, 0)";
      topSearchMainList.style.transition = "all 500ms ease 0s";
    } else {
      if (topSearchMainListCurrentIndex == 4) {
        topSearchMainListCurrentIndex = 3;
        topSearchMainPreviousBtn.style.display = "block";
        topSearchMainNextBtn.style.display = "block";

        // animation
        topSearchMainList.style.transform = "translate(-240rem, 0)";
        topSearchMainList.style.transition = "all 500ms ease 0s";
      }
    }
  }
});
//#endregion
//#endregion

//#region todaySuggestion (2)
//#region updateInDOMTodaySuggestionMainTabMain
function handleUpdateInDOMTodaySuggestionMainTabMain(
  todaySuggestionMainTabMainInfo
) {
  var listDivTags = "";

  for (var i = 0; i < todaySuggestionMainTabMainInfo.length; i++) {
    var listDivTag = "",
      itemDivTags = "",
      itemDivTag = "";

    for (var j = 0; j < todaySuggestionMainTabMainInfo[i].length; j++) {
      var frameImage = todaySuggestionMainTabMainInfo[i][j].frameImage
        ? `<img src="${todaySuggestionMainTabMainInfo[i][j].frameImage}" class="today-suggestion__main-product__frame-img" alt="">`
        : "";

      var productSaleOff = todaySuggestionMainTabMainInfo[i][j].saleOffText
        ? `<div class="today-suggestion__main-product__sale-off">
                    <img src="./assests/img/container/today-suggestion/left-serrated.png" class="today-suggestion__main-product__sale-off__left-serrated">
                    <span class="today-suggestion__main-product__sale-off__text">${todaySuggestionMainTabMainInfo[i][j].saleOffText}</span>
                    <img src="./assests/img/container/today-suggestion/right-serrated.png" class="today-suggestion__main-product__sale-off__right-serrated">
                </div>`
        : "";

      var favouriteLabel = "",
        favouriteLabelActiveClass = "",
        favouriteLabelInnerHTML = "";
      if (todaySuggestionMainTabMainInfo[i][j].favouriteLabel) {
        if (
          todaySuggestionMainTabMainInfo[i][j].favouriteLabel == "Yêu thích"
        ) {
          favouriteLabelActiveClass =
            "today-suggestion__main-product__favourite-label--yeuthich";
          favouriteLabelInnerHTML = "Yêu thích";
        } else {
          if (
            todaySuggestionMainTabMainInfo[i][j].favouriteLabel == "Yêu thích+"
          ) {
            favouriteLabelActiveClass =
              "today-suggestion__main-product__favourite-label--yeuthichplus";
            favouriteLabelInnerHTML =
              '<img src="./assests/img/container/today-suggestion/yeuthichplus.png" alt="" class="today-suggestion__main-product__favourite-label--yeuthichplus__img">';
          } else {
            favouriteLabelActiveClass =
              "today-suggestion__main-product__favourite-label--mall";
            favouriteLabelInnerHTML =
              '<img src="./assests/img/container/today-suggestion/mall.png" alt="" class="today-suggestion__main-product__favourite-label--mall__img">';
          }
        }

        favouriteLabel = `<div class="today-suggestion__main-product__favourite-label ${favouriteLabelActiveClass}">
                        ${favouriteLabelInnerHTML}
                    </div>`;
      }

      var saleOffLabel = todaySuggestionMainTabMainInfo[i][j]
        .saleOffLabelPercent
        ? `<div class="today-suggestion__main-product__sale-off-label">
                    <span class="today-suggestion__main-product__sale-off-label__percent">${todaySuggestionMainTabMainInfo[i][j].saleOffLabelPercent}</span>
                    <span class="today-suggestion__main-product__sale-off-label__text">giảm</span>
                </div>`
        : "";

      var sponsorLabel = todaySuggestionMainTabMainInfo[i][j].sponsorLabel
        ? '<div class="today-suggestion__main-product__sponsor-label">Tài Trợ</div>'
        : "";

      itemDivTag = `
                <div class="today-suggestion__main-item">
                    <a href="${todaySuggestionMainTabMainInfo[i][j].productLink}" class="today-suggestion__main-product">
                        <div>
                            <img alt="" src="${todaySuggestionMainTabMainInfo[i][j].productImage}" class="today-suggestion__main-product__product-img">
                            ${frameImage}
                            <div class="today-suggestion__main-product__part">
                                <span class="today-suggestion__main-product__name">${todaySuggestionMainTabMainInfo[i][j].name}</span>
                                ${productSaleOff}
                                <div class="today-suggestion__main-product__price-and-selled-quantity">
                                    <span class="today-suggestion__main-product__price">${todaySuggestionMainTabMainInfo[i][j].price}</span>
                                    <span class="today-suggestion__main-product__selled-quantity">${todaySuggestionMainTabMainInfo[i][j].selledQuantity}</span>
                                </div>
                            </div>
                            ${favouriteLabel}
                            ${saleOffLabel}
                            ${sponsorLabel}
                            <div class="today-suggestion__main-product__hover-label">Tìm sản phẩm tương tự</div>
                        </div>
                    </a>
                </div>`;
      itemDivTags += itemDivTag;
    }

    listDivTag = `<div class="today-suggestion__main-list">${itemDivTags}</div>`;
    listDivTags += listDivTag;
  }

  todaySuggestionMainTabMain.innerHTML = listDivTags;
}

(function updateInDOMTodaySuggestionMainTabMain() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      handleUpdateInDOMTodaySuggestionMainTabMain(
        datas.todaySuggestionMainTabMainInfo
      );
    });
})();
//#endregion

//#region handleCSSTodaySuggestionMainTabMain
function handleCSSTodaySuggestionMainTabMain() {
  for (var i = 0; i < 8; i++) {
    var check =
      $$(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${
        i + 1
      }) 
            .today-suggestion__main-product__sale-off`).length >= 1;

    var list = $(
      `.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${
        i + 1
      })`
    );
    var items =
      $$(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${
        i + 1
      }) 
            .today-suggestion__main-item`);
    var products =
      $$(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${
        i + 1
      }) 
            .today-suggestion__main-product`);

    if (check) {
      list.style.height = "29.8rem";

      for (var j = 0; j < items.length; j++) {
        items[j].style.height = "29.8rem";
        products[j].style.height = "28.8rem";

        var saleOff =
          $(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${
            i + 1
          }) 
                    .today-suggestion__main-item:nth-child(${
                      j + 1
                    }) .today-suggestion__main-product__sale-off`);

        if (saleOff == null) {
          var priceAndSelledQuantity =
            $(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${
              i + 1
            }) 
                        .today-suggestion__main-item:nth-child(${
                          j + 1
                        }) .today-suggestion__main-product__price-and-selled-quantity`);
          priceAndSelledQuantity.style.marginTop = "2.6rem";
        }
      }
    } else {
      list.style.height = "27.7rem";

      for (var j = 0; j < items.length; j++) {
        items[j].style.height = "27.7rem";
        products[j].style.height = "26.7rem";
      }
    }
  }
}

setTimeout(() => {
  handleCSSTodaySuggestionMainTabMain();
}, 2000);
//#endregion

//#region updateInDOMTodaySuggestionMainTabSuperSale88
function handleUpdateInDOMTodaySuggestionMainTabSuperSale88(
  todaySuggestionMainTabSuperSale88Info
) {
  var listDivTags = "";

  for (var i = 0; i < todaySuggestionMainTabSuperSale88Info.length; i++) {
    var listDivTag = "",
      itemDivTags = "",
      itemDivTag = "";

    for (var j = 0; j < todaySuggestionMainTabSuperSale88Info[i].length; j++) {
      var frameImage = todaySuggestionMainTabSuperSale88Info[i][j].frameImage
        ? `<img src="${todaySuggestionMainTabSuperSale88Info[i][j].frameImage}" class="today-suggestion__main-product__frame-img" alt="">`
        : "";

      var productSaleOff = todaySuggestionMainTabSuperSale88Info[i][j]
        .saleOffText
        ? `<div class="today-suggestion__main-product__sale-off">
                    <img src="./assests/img/container/today-suggestion/left-serrated.png" class="today-suggestion__main-product__sale-off__left-serrated">
                    <span class="today-suggestion__main-product__sale-off__text">${todaySuggestionMainTabSuperSale88Info[i][j].saleOffText}</span>
                    <img src="./assests/img/container/today-suggestion/right-serrated.png" class="today-suggestion__main-product__sale-off__right-serrated">
                </div>`
        : "";

      var favouriteLabel = "",
        favouriteLabelActiveClass = "",
        favouriteLabelInnerHTML = "";
      if (todaySuggestionMainTabSuperSale88Info[i][j].favouriteLabel) {
        if (
          todaySuggestionMainTabSuperSale88Info[i][j].favouriteLabel ==
          "Yêu thích"
        ) {
          favouriteLabelActiveClass =
            "today-suggestion__main-product__favourite-label--yeuthich";
          favouriteLabelInnerHTML = "Yêu thích";
        } else {
          if (
            todaySuggestionMainTabSuperSale88Info[i][j].favouriteLabel ==
            "Yêu thích+"
          ) {
            favouriteLabelActiveClass =
              "today-suggestion__main-product__favourite-label--yeuthichplus";
            favouriteLabelInnerHTML =
              '<img src="./assests/img/container/today-suggestion/yeuthichplus.png" alt="" class="today-suggestion__main-product__favourite-label--yeuthichplus__img">';
          } else {
            favouriteLabelActiveClass =
              "today-suggestion__main-product__favourite-label--mall";
            favouriteLabelInnerHTML =
              '<img src="./assests/img/container/today-suggestion/mall.png" alt="" class="today-suggestion__main-product__favourite-label--mall__img">';
          }
        }

        favouriteLabel = `<div class="today-suggestion__main-product__favourite-label ${favouriteLabelActiveClass}">
                        ${favouriteLabelInnerHTML}
                    </div>`;
      }

      var saleOffLabel = todaySuggestionMainTabSuperSale88Info[i][j]
        .saleOffLabelPercent
        ? `<div class="today-suggestion__main-product__sale-off-label">
                    <span class="today-suggestion__main-product__sale-off-label__percent">${todaySuggestionMainTabSuperSale88Info[i][j].saleOffLabelPercent}</span>
                    <span class="today-suggestion__main-product__sale-off-label__text">giảm</span>
                </div>`
        : "";

      var sponsorLabel = todaySuggestionMainTabSuperSale88Info[i][j]
        .sponsorLabel
        ? '<div class="today-suggestion__main-product__sponsor-label">Tài Trợ</div>'
        : "";

      itemDivTag = `
                <div class="today-suggestion__main-item">
                    <a href="${todaySuggestionMainTabSuperSale88Info[i][j].productLink}" class="today-suggestion__main-product">
                        <div>
                            <img alt="" src="${todaySuggestionMainTabSuperSale88Info[i][j].productImage}" class="today-suggestion__main-product__product-img">
                            ${frameImage}
                            <div class="today-suggestion__main-product__part">
                                <span class="today-suggestion__main-product__name">${todaySuggestionMainTabSuperSale88Info[i][j].name}</span>
                                ${productSaleOff}
                                <div class="today-suggestion__main-product__price-and-selled-quantity">
                                    <span class="today-suggestion__main-product__price">${todaySuggestionMainTabSuperSale88Info[i][j].price}</span>
                                    <span class="today-suggestion__main-product__selled-quantity">${todaySuggestionMainTabSuperSale88Info[i][j].selledQuantity}</span>
                                </div>
                            </div>
                            ${favouriteLabel}
                            ${saleOffLabel}
                            ${sponsorLabel}
                            <div class="today-suggestion__main-product__hover-label">Tìm sản phẩm tương tự</div>
                        </div>
                    </a>
                </div>`;
      itemDivTags += itemDivTag;
    }

    listDivTag = `<div class="today-suggestion__main-list">${itemDivTags}</div>`;
    listDivTags += listDivTag;
  }

  todaySuggestionMainTabSuperSale88.innerHTML = listDivTags;
}

(function updateInDOMTodaySuggestionMainTabSuperSale88() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      handleUpdateInDOMTodaySuggestionMainTabSuperSale88(
        datas.todaySuggestionMainTabSuperSale88Info
      );
    });
})();
//#endregion

//#region handleCSSTodaySuggestionMainTabSuperSale88
function handleCSSTodaySuggestionMainTabSuperSale88() {
  for (var i = 0; i < 8; i++) {
    var check =
      $$(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${
        i + 1
      }) 
            .today-suggestion__main-product__sale-off`).length >= 1;

    var list = $(
      `.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${
        i + 1
      })`
    );
    var items =
      $$(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${
        i + 1
      }) 
            .today-suggestion__main-item`);
    var products =
      $$(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${
        i + 1
      }) 
            .today-suggestion__main-product`);

    if (check) {
      list.style.height = "29.8rem";

      for (var j = 0; j < items.length; j++) {
        items[j].style.height = "29.8rem";
        products[j].style.height = "28.8rem";

        var saleOff =
          $(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${
            i + 1
          }) 
                    .today-suggestion__main-item:nth-child(${
                      j + 1
                    }) .today-suggestion__main-product__sale-off`);

        if (saleOff == null) {
          var priceAndSelledQuantity =
            $(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${
              i + 1
            }) 
                        .today-suggestion__main-item:nth-child(${
                          j + 1
                        }) .today-suggestion__main-product__price-and-selled-quantity`);
          priceAndSelledQuantity.style.marginTop = "2.6rem";
        }
      }
    } else {
      list.style.height = "27.7rem";

      for (var j = 0; j < items.length; j++) {
        items[j].style.height = "27.7rem";
        products[j].style.height = "26.7rem";
      }
    }
  }
}

setTimeout(() => {
  handleCSSTodaySuggestionMainTabSuperSale88();
}, 2000);
//#endregion

//#region todaySuggestionHeadings onclick()
todaySuggestionHeadingTabMain.addEventListener("click", () => {
  setTimeout(() => {
    if (
      todaySuggestionHeadingTabSuperSale88.classList.contains(
        "today-suggestion__heading-tab--active"
      )
    ) {
      todaySuggestionHeadingTabSuperSale88.classList.remove(
        "today-suggestion__heading-tab--active"
      );
    }
    if (
      !todaySuggestionHeadingTabMain.classList.contains(
        "today-suggestion__heading-tab--active"
      )
    ) {
      todaySuggestionHeadingTabMain.classList.add(
        "today-suggestion__heading-tab--active"
      );
    }

    todaySuggestionMainTabSuperSale88.style.display = "none";
    todaySuggestionMainTabMain.style.display = "block";
    todaySuggestion.style.height = "254rem";
    todaySuggestionMainViewAllBtn.href =
      "https://shopee.vn/daily_discover?pageNumber=2";

    window.scrollTo(0, todaySuggestion.offsetTop);
  }, 200);
});

todaySuggestionHeadingTabSuperSale88.addEventListener("click", () => {
  setTimeout(() => {
    if (
      todaySuggestionHeadingTabMain.classList.contains(
        "today-suggestion__heading-tab--active"
      )
    ) {
      todaySuggestionHeadingTabMain.classList.remove(
        "today-suggestion__heading-tab--active"
      );
    }
    if (
      !todaySuggestionHeadingTabSuperSale88.classList.contains(
        "today-suggestion__heading-tab--active"
      )
    ) {
      todaySuggestionHeadingTabSuperSale88.classList.add(
        "today-suggestion__heading-tab--active"
      );
    }

    todaySuggestionMainTabMain.style.display = "none";
    todaySuggestionMainTabSuperSale88.style.display = "block";
    todaySuggestion.style.height = "318rem";
    todaySuggestionMainViewAllBtn.href =
      "https://shopee.vn/double_eleven_big_sale/2";

    window.scrollTo(0, todaySuggestion.offsetTop);
  }, 200);
});
//#endregion
//#endregion

//#region footer (-->OK)
//#region updateInDOMFooterTextATags (-->OK)
(function updateInDOMFooterTextATags() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      for (var i = 0; i < footerTextATags.length; i++) {
        footerTextATags[i].href = datas.footerTextATagsInfo[i].href;
        footerTextATags[i].innerHTML = datas.footerTextATagsInfo[i].innerHTML;
      }
    });
})();
//#endregion

//#region updateInDOMFooterDirectoryList (-->OK)
function handleUpdateInDOMFooterDirectoryList(footerDirectoryListInfo) {
  var partItemQuantity = [
    21, 11, 6, 18, 11, 15, 21, 10, 8, 8, 8, 11, 10, 8, 13, 6, 15, 6, 10, 10, 9,
    10, 5, 6, 11, 6,
  ];

  var liTags = "",
    thisItemLength = 5,
    partIndex = 0;

  for (var i = 0; i < footerDirectoryListInfo.length; i++) {
    thisItemLength = i == 0 ? 6 : 5;
    var divTags = "";

    for (var j = 0; j < thisItemLength; j++) {
      var aTags = "";
      for (var k = 0; k < partItemQuantity[partIndex]; k++) {
        var aTag = `<a class="footer__directory__item__part__item" href="${footerDirectoryListInfo[i][j].footerDirectoryItemPartListInfo[k].href}">
                    ${footerDirectoryListInfo[i][j].footerDirectoryItemPartListInfo[k].innerHTML}
                </a>`;

        aTags += aTag;
      }

      var divTag = `
                <div class="footer__directory__item__part">
                    <a href="${footerDirectoryListInfo[i][j].heading.href}" class="footer__directory__item__part__heading">
                    ${footerDirectoryListInfo[i][j].heading.innerHTML}</a>
                    <div class="footer__directory__item__part__list">
                        ${aTags}
                    </div>
                </div>`;

      divTags += divTag;

      partIndex++;
    }

    var liTag = `<li class="footer__directory__item">${divTags}</li>`;
    liTags += liTag;
  }

  footerDirectoryList.innerHTML = liTags;
}

(function updateInDOMFooterDirectoryList() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      handleUpdateInDOMFooterDirectoryList(datas.footerDirectoryListInfo);
    });
})();
//#endregion

//#region updateInDOMFooterLinkAboutTextCSKH (-->OK)
(function updateInDOMFooterLinkAboutTextCSKH() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var divTags = datas.footerLinkAboutTextCSKHInfo.map((data) => {
        return `<div>
                    <a href="${data.href}" class="footer__link__about-text-CSKH__link">${data.innerHTML}</a>
                </div>`;
      });

      footerLinkAboutTextCSKH.innerHTML = divTags.join("");
    });
})();
//#endregion

//#region updateInDOMFooterLinkAboutTextVeShopee (-->OK)
(function updateInDOMFooterLinkAboutTextVeShopee() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var divTags = datas.footerLinkAboutTextVeShopeeInfo.map((data) => {
        return `<div>
                    <a href="${data.href}" class="footer__link__about-text-VeShopee__link">${data.innerHTML}</a>
                </div>`;
      });

      footerLinkAboutTextVeShopee.innerHTML = divTags.join("");
    });
})();
//#endregion

//#region updateInDOMFooterLinkAboutSocial (-->OK)
(function updateInDOMFooterLinkAboutSocial() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var aTags = datas.footerLinkAboutSocialInfo.map((data) => {
        return `<a target="_blank" rel="noopener noreferrer" href="${data.href}" class="footer__link__about-social__link">
                    <img src="${data.image}" alt="" class="footer__link__about-social__icon">
                    ${data.text}
                </a>`;
      });

      footerLinkAboutSocial.innerHTML = aTags.join("");
    });
})();
//#endregion

//#region updateInDOMFooterLinkCopyrightCountryAndAreaList (-->OK)
(function updateInDOMFooterLinkCopyrightCountryAndAreaList() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var aTags = datas.footerLinkCopyrightCountryAndAreaListInfo.map(
        (data) => {
          return `<a href="${data.href}" class="footer__link__copyright__country-and-area__link">${data.innerHTML}</a>`;
        }
      );

      footerLinkCopyrightCountryAndAreaList.innerHTML = aTags.join("");
    });
})();
//#endregion

//#region updateInDOMFooterPolicyTermsPartTitle (-->OK)
(function updateInDOMFooterPolicyTermsPartTitle() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var divTags = datas.footerPolicyTermsPartTitleInfo.map((data) => {
        return `
                    <div class="footer__policy-terms__part__title__part">
                        <a href="${data.href}" class="footer__policy-terms__part__title__link">${data.innerHTML}</a>
                    </div>`;
      });
      footerPolicyTermsPartTitle.innerHTML = divTags.join("");
    });
})();
//#endregion

//#region updateInDOMFooterPolicyTermsPartCertificate (-->OK)
(function updateInDOMFooterPolicyTermsPartCertificate() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var aTags = datas.footerPolicyTermsPartCertificateInfo.map((data) => {
        return `
                    <a target="_blank" rel="noopener noreferrer" href="${data.href}" class="footer__policy-terms__part__certificate__link">
                        <img src="${data.image}" alt="">
                    </a>`;
      });
      footerPolicyTermsPartCertificate.innerHTML = aTags.join("");
    });
})();
//#endregion

//#region updateInDOMFooterPolicyTermsPartCompanyInfo (-->OK)
(function updateInDOMFooterPolicyTermsPartCompanyInfo() {
  fetch("db.json")
    .then((response) => response.json())

    .then((datas) => {
      var spanTags = datas.footerPolicyTermsPartCompanyInfoInfo.map((data) => {
        return `<span class="footer__policy-terms__part__company-info__text">${data}</span>`;
      });
      footerPolicyTermsPartCompanyInfo.innerHTML = spanTags.join("");
    });
})();
//#endregion
//#endregion

//#region motionPart (event)
//#region motionPartChatPopupMainSearchAndOptionsPopupNthChilds onclick()
motionPartChatPopupMainSearchAndOptionsPopup_all.addEventListener(
  "click",
  () => {
    motionPartChatPopupMainSearchAndOptionsText.innerHTML =
      motionPartChatPopupMainSearchAndOptionsPopup_all.innerHTML;

    motionPartChatPopupMainContent_all.style.display = "flex";
    motionPartChatPopupMainContent_unread.style.display = "none";
    motionPartChatPopupMainContent_pinned.style.display = "none";
  }
);

motionPartChatPopupMainSearchAndOptionsPopup_unread.addEventListener(
  "click",
  () => {
    motionPartChatPopupMainSearchAndOptionsText.innerHTML =
      motionPartChatPopupMainSearchAndOptionsPopup_unread.innerHTML;

    motionPartChatPopupMainContent_all.style.display = "none";
    motionPartChatPopupMainContent_unread.style.display = "flex";
    motionPartChatPopupMainContent_pinned.style.display = "none";
  }
);

motionPartChatPopupMainSearchAndOptionsPopup_pinned.addEventListener(
  "click",
  () => {
    motionPartChatPopupMainSearchAndOptionsText.innerHTML =
      motionPartChatPopupMainSearchAndOptionsPopup_pinned.innerHTML;

    motionPartChatPopupMainContent_all.style.display = "none";
    motionPartChatPopupMainContent_unread.style.display = "none";
    motionPartChatPopupMainContent_pinned.style.display = "flex";
  }
);
//#endregion

//#region motionPartChatPopupMainSearchAndOptionsInput onclick, onblur()
motionPartChatPopupMainSearchAndOptionsInput.addEventListener("click", () => {
  motionPartChatPopupMainSearchAndOptionsPart.style.display = "none";
  motionPartChatPopupMainSearchAndOptionsInput.style.width = "100%";
});

motionPartChatPopupMainSearchAndOptionsInput.addEventListener("blur", () => {
  setTimeout(() => {
    motionPartChatPopupMainSearchAndOptionsPart.style.display = "flex";
    motionPartChatPopupMainSearchAndOptionsInput.style.width = "13.2rem";
  }, 200);
});
//#endregion

//#region motionPartChatPopupMainSearchAndOptionsPart onclick()
motionPartChatPopupMainSearchAndOptionsPart.addEventListener("click", () => {
  if (motionPartChatPopupMainSearchAndOptionsPopup.style.display == "none") {
    motionPartChatPopupMainSearchAndOptionsPopup.style.display = "block";
  } else {
    motionPartChatPopupMainSearchAndOptionsPopup.style.display = "none";
  }
});
//#endregion

//#region motionPartChatMain, motionPartChatPopupHeader_hidePopupBtn onclick()
motionPartChatMain.addEventListener("click", () => {
  motionPartChatMain.style.display = "none";
  motionPartChatPopup.style.display = "block";
});

motionPartChatPopupHeader_hidePopupBtn.addEventListener("click", () => {
  motionPartChatPopup.style.display = "none";
  motionPartChatMain.style.display = "flex";
});
//#endregion

//#region motionPartChatPopupHeader_iconWhenNormal, ...Expanded onclick()
motionPartChatPopupHeader_iconWhenNormal.addEventListener("click", () => {
  motionPartChatPopupHeader_iconWhenNormal.style.display = "none";
  motionPartChatPopupHeader_iconWhenExpanded.style.display = "block";
  motionPartChatPopup.style.width = "50.8rem";
  motionPartChatPopupExpanded.style.display = "block";
});

motionPartChatPopupHeader_iconWhenExpanded.addEventListener("click", () => {
  motionPartChatPopupHeader_iconWhenExpanded.style.display = "none";
  motionPartChatPopupHeader_iconWhenNormal.style.display = "block";
  motionPartChatPopup.style.width = "22.2rem";
  motionPartChatPopupExpanded.style.display = "none";
});
//#endregion

//#endregion

//#endregion

//#region START WEBSITE (config)
handleSettingInitialConfig();

// Check for load initial page or page when logged in
if (!systemConfig.isLoggedIn) {
  loadInitialPageNoModal();
} else {
  loginSuccess();
}
//#endregion
