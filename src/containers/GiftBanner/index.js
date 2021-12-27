import "./GiftBanner.css";
// import { body, modal } from "../../constants";
import { useState, useEffect, useContext } from "react";
import { ModalStatusContext } from "../../contexts";

function GiftBanner() {
  //#region Get data from Context
  const modalStatusContext = useContext(ModalStatusContext);
  const { showModal, setShowModal } = modalStatusContext;
  //#endregion

  //#region Function handlers
  const handleClickGiftBanner = () => {
    setTimeout(() => {
      // show modal
      setShowModal(true);

      // prevent scrolling
      document.querySelector("body").style.overflow = "hidden";
    }, 100);
  };
  //#endregion

  return (
    <div className="gift-banner" onClick={handleClickGiftBanner}>
      <div className="gift-banner__part">
        <img
          src="/assests/img/container/gift-banner/banner.jfif"
          className="gift-banner__part__img"
        />
      </div>
    </div>
  );
}

export default GiftBanner;
