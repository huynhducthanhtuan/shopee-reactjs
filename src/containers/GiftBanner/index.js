import "./GiftBanner.css";
import { useContext } from "react";
import { ModalStatusContext } from "../../contexts";

function GiftBanner() {
  // Get data from Context
  const modalStatusContext = useContext(ModalStatusContext);
  const { showModal, setShowModal } = modalStatusContext;

  // Function handlers
  const handleClickGiftBanner = () => {
    setTimeout(() => {
      setShowModal(true);

      // prevent scrolling
      document.querySelector("body").style.overflow = "hidden";
    }, 100);
  };

  return (
    <div className="gift-banner" onClick={handleClickGiftBanner}>
      <div className="gift-banner__part">
        <img
          src="/assests/img/container/gift-banner/banner.jfif"
          className="gift-banner__part__img"
          alt=""
        />
      </div>
    </div>
  );
}

export default GiftBanner;
