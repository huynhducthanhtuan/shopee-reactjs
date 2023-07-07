import './Slider.css';
import {
  SliderMotionBanner1,
  SliderNoMotionBanner1,
  SliderNoMotionBanner2
} from 'assets/images';
import { $$ } from 'constants/index';
import { useDataSourceContext } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
import { SliderFavouriteSelection, SliderMainMotionPartLink } from 'types';

function Slider() {
  const [queueItems, setQueueItems] = useState([]);
  const motionPartLinkRef = useRef<HTMLAnchorElement>(null);
  const motionPartImageRef = useRef<HTMLImageElement>(null);
  const previousButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const {
    sliderFavouriteSelectionsInfo: favouriteSelectionsInfo,
    sliderMainMotionPartLinkInfo: motionPartLinkInfo
  } = useDataSourceContext();

  let queueItemCurrentIndex = 0;
  const len = motionPartLinkInfo.length;
  const QUEUE_ITEM_CLASS = 'slider__main__motion-part__queue-item';
  const QUEUE_ITEM_CURRENT_CLASS =
    'slider__main__motion-part__queue-item--current';

  const renderFavouriteSelections = (datas: SliderFavouriteSelection[]) =>
    datas.map((data: SliderFavouriteSelection, index: number) => {
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

  const renderQueueItems = (datas: SliderMainMotionPartLink[]) =>
    datas.map((data: SliderMainMotionPartLink, index: number) => {
      return (
        <div
          key={index}
          onClick={(event) => handleClickQueueItem(event)}
          className={`${QUEUE_ITEM_CLASS} ${
            index === 0 ? QUEUE_ITEM_CURRENT_CLASS : ''
          }`}
        ></div>
      );
    });

  const updateMotionPartImageLinkProps = (index: number) => {
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

  const handleClickQueueItem = (event) => {
    const parent = event.target.parentElement;

    // Get index of this element in parent element
    const index = Array.prototype.indexOf.call(
      Array.from(parent.childNodes),
      event.target
    );

    queueItems[queueItemCurrentIndex].classList.remove(
      QUEUE_ITEM_CURRENT_CLASS
    );
    queueItems[index].classList.add(QUEUE_ITEM_CURRENT_CLASS);

    updateMotionPartImageLinkProps(index);

    queueItemCurrentIndex = index;
  };

  // Get queueItems NodeList, convert to array and update state
  useEffect(() => {
    const queueItemsArray = Array.from($$(`.${QUEUE_ITEM_CLASS}`));
    setQueueItems(queueItemsArray);
  }, []);

  // Auto change slider image & queue item index
  useEffect(() => {
    const timerId = setInterval(handleSlidingImage, 5000);
    return () => clearInterval(timerId);
  }, [queueItems]);

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
              onClick={handleClickPreviousButton}
              className="slider__main__motion-part__btn slider__main__motion-part__previous-btn"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              ref={nextButtonRef}
              onClick={handleClickNextButton}
              className="slider__main__motion-part__btn slider__main__motion-part__next-btn"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="slider__main__motion-part__queue">
              {motionPartLinkInfo && renderQueueItems(motionPartLinkInfo)}
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
          {favouriteSelectionsInfo &&
            renderFavouriteSelections(favouriteSelectionsInfo)}
        </div>
      </div>
    </div>
  );
}

export default Slider;
