import "./GiftBanner.css";
import { GiftBannerImage } from "assets/images";
import { useEffect } from "react";
import { useModalStatusContext } from "hooks";
import { handlePreventScrolling } from "helpers";

function GiftBanner() {
  const { setShowModal } = useModalStatusContext();
  let timerId;

  const handleClickGiftBanner = () => {
    if (timerId) {
      clearInterval(timerId);
    }

    timerId = setTimeout(() => {
      setShowModal(true);
      handlePreventScrolling();
    }, 100);
  };

  // ClearInterval
  useEffect(() => {
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="gift-banner" onClick={handleClickGiftBanner}>
      <div className="gift-banner__part">
        <img src={GiftBannerImage} className="gift-banner__part__img" alt="" />
      </div>
    </div>
  );
}

export default GiftBanner;
