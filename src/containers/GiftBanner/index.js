import "./GiftBanner.css";
import { useModalStatusContext } from "hooks";
import { handlePreventScrolling } from "helpers";

function GiftBanner() {
  const { setShowModal } = useModalStatusContext();

  const handleClickGiftBanner = () => {
    setTimeout(() => {
      setShowModal(true);
      handlePreventScrolling();
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
