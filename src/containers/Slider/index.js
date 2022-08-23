import "./Slider.css";
import {
  SliderMotionBanner1,
  SliderNoMotionBanner1,
  SliderNoMotionBanner2,
} from "assets/images";
import { useEffect, useRef } from "react";
import { useDataSourceContext } from "hooks";
import { $$ } from "constants/index";

function Slider() {
  const motionPartLinkRef = useRef();
  const motionPartImageRef = useRef();
  const previousButtonRef = useRef();
  const nextButtonRef = useRef();

  const {
    sliderFavouriteSelectionsInfo,
    sliderMainMotionPartLinkInfo: motionPartLinkInfo,
  } = useDataSourceContext();

  let queueItems = [];
  let queueItemCurrentIndex = 0;
  const len = motionPartLinkInfo.length;
  const QUEUE_ITEM_CLASS = "slider__main__motion-part__queue-item";
  const QUEUE_ITEM_CURRENT_CLASS =
    "slider__main__motion-part__queue-item--current";

  const renderFavouriteSelections = (datas) =>
    datas.map((data, index) => {
      const { href, image, text } = data;
      return (
        <a
          key={index}
          href={href}
          className="slider__favourite-selections__link"
        >
          <img
            className="slider__favourite-selections__link-img"
            src={image}
            alt=""
          />
          <h4 className="slider__favourite-selections__link-text">{text}</h4>
        </a>
      );
    });

  const renderMainMotionPartQueueItem = () => {
    let divTags = [];

    for (let index = 0; index < len - 1; index++) {
      divTags.push(
        <div
          key={index}
          className="slider__main__motion-part__queue-item"
        ></div>
      );
    }

    return divTags;
  };

  const updateMotionPartImageLinkProps = (index) => {
    const { image, href } = motionPartLinkInfo[index];
    motionPartImageRef.current.src = image;
    motionPartLinkRef.current.href = href;
  };

  const handleClickPreviousButton = () => {
    if (queueItemCurrentIndex === 0) {
      queueItems[0].classList.remove(QUEUE_ITEM_CURRENT_CLASS);
      queueItems[len - 1].classList.add(QUEUE_ITEM_CURRENT_CLASS);
      queueItemCurrentIndex = len - 1;
    } else {
      queueItems[queueItemCurrentIndex].classList.remove(
        QUEUE_ITEM_CURRENT_CLASS
      );
      queueItems[queueItemCurrentIndex - 1].classList.add(
        QUEUE_ITEM_CURRENT_CLASS
      );
      queueItemCurrentIndex--;
    }

    updateMotionPartImageLinkProps(queueItemCurrentIndex);
  };

  const handleClickNextButton = () => {
    if (queueItemCurrentIndex === len - 1) {
      queueItems[len - 1].classList.remove(QUEUE_ITEM_CURRENT_CLASS);
      queueItems[0].classList.add(QUEUE_ITEM_CURRENT_CLASS);
      queueItemCurrentIndex = 0;
    } else {
      queueItems[queueItemCurrentIndex].classList.remove(
        QUEUE_ITEM_CURRENT_CLASS
      );
      queueItems[queueItemCurrentIndex + 1].classList.add(
        QUEUE_ITEM_CURRENT_CLASS
      );
      queueItemCurrentIndex++;
    }

    updateMotionPartImageLinkProps(queueItemCurrentIndex);
  };

  const handleSlidingImage = () => {
    if (queueItemCurrentIndex < len - 1) {
      queueItemCurrentIndex++;
      queueItems[queueItemCurrentIndex - 1].classList.remove(
        QUEUE_ITEM_CURRENT_CLASS
      );
      queueItems[queueItemCurrentIndex].classList.add(QUEUE_ITEM_CURRENT_CLASS);
    } else {
      queueItemCurrentIndex = 0;
      queueItems[len - 1].classList.remove(QUEUE_ITEM_CURRENT_CLASS);
      queueItems[0].classList.add(QUEUE_ITEM_CURRENT_CLASS);
    }

    updateMotionPartImageLinkProps(queueItemCurrentIndex);
  };

  function handleClickQueueItem() {
    // get parent's queue
    const parent = this.parentNode;

    // get this's index in parent's queue
    const index = Array.prototype.indexOf.call(parent.children, this);

    queueItems[queueItemCurrentIndex].classList.remove(
      QUEUE_ITEM_CURRENT_CLASS
    );
    queueItems[index].classList.add(QUEUE_ITEM_CURRENT_CLASS);

    updateMotionPartImageLinkProps(index);

    queueItemCurrentIndex = index;
  }

  // Get queueItems NodeList & convert to array
  useEffect(() => {
    queueItems = Array.from($$(`.${QUEUE_ITEM_CLASS}`));
  }, []);

  // EventListener
  useEffect(() => {
    previousButtonRef.current.addEventListener(
      "click",
      handleClickPreviousButton
    );
    nextButtonRef.current.addEventListener("click", handleClickNextButton);
    queueItems.map((queueItem) =>
      queueItem.addEventListener("click", handleClickQueueItem)
    );

    return () => {
      previousButtonRef.current.removeEventListener(
        "click",
        handleClickPreviousButton
      );
      nextButtonRef.current.removeEventListener("click", handleClickNextButton);
      queueItems.map((queueItem) =>
        queueItem.removeEventListener("click", handleClickQueueItem)
      );
    };
  }, []);

  // Auto change slider image & queue item index
  useEffect(() => {
    const timerId = setInterval(handleSlidingImage, 5000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="slider">
      <div className="slider__part">
        <div className="slider__main">
          <div className="slider__main__motion-part">
            <a
              href="https://shopee.vn/m/freeship-xtra"
              ref={motionPartLinkRef}
              className="slider__main__motion-part__link"
            >
              <img
                src={SliderMotionBanner1}
                ref={motionPartImageRef}
                className="slider__main__motion-part__img slider__main__motion-part__curent-img"
                alt=""
              />
            </a>
            <button
              ref={previousButtonRef}
              className="slider__main__motion-part__btn slider__main__motion-part__previous-btn"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              ref={nextButtonRef}
              className="slider__main__motion-part__btn slider__main__motion-part__next-btn"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="slider__main__motion-part__queue">
              <div className="slider__main__motion-part__queue-item slider__main__motion-part__queue-item--current"></div>
              {renderMainMotionPartQueueItem()}
            </div>
          </div>

          <div className="slider__main__no-motion-part">
            <div>
              <a
                href="https://shopee.vn/m/shopeefarm"
                className="slider__main__no-motion-part__link"
              >
                <img
                  src={SliderNoMotionBanner1}
                  className="slider__main__no-motion-part__img"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                href="https://shopee.vn/m/uu-dai-vietcombank"
                className="slider__main__no-motion-part__link"
              >
                <img
                  src={SliderNoMotionBanner2}
                  className="slider__main__no-motion-part__img"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="slider__favourite-selections">
          {sliderFavouriteSelectionsInfo &&
            renderFavouriteSelections(sliderFavouriteSelectionsInfo)}
        </div>
      </div>
    </div>
  );
}

export default Slider;
