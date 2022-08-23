import "./ShopeeMall.css";
import {
  ShopeeMallHeadingLabelIcon,
  ShopeeMallMotionBanner1,
} from "assets/images";
import { useEffect, useRef } from "react";
import { useDataSourceContext } from "hooks";
import { $$ } from "constants/index";

function ShopeeMall() {
  const mainProductListRef = useRef();
  const nextButtonRef = useRef();
  const previousButtonRef = useRef();
  const motionImageRef = useRef();
  const motionLinkRef = useRef();

  const {
    shopeeMallHeadingTextInfo,
    shopeeMallMainProductListInfo,
    shopeeMallMainMotionLinkInfo: motionLinkInfo,
  } = useDataSourceContext();

  let queueItems = [];
  let queueItemCurrentIndex = 0;
  let currentListIndex = 1;
  const len = motionLinkInfo.length;
  const QUEUE_ITEM_CLASS = "shopee-mall__main__motion__queue-item";
  const QUEUE_ITEM_CURRENT_CLASS =
    "shopee-mall__main__motion__queue-item--current";

  const renderHeadingText = (datas) =>
    datas.map((data, index) => {
      const { image, title } = data;
      return (
        <div key={index}>
          <img
            src={image}
            className="shopee-mall__heading__text__icon"
            alt=""
          />
          <span className="shopee-mall__heading__text__title">{title}</span>
        </div>
      );
    });

  const renderProductList = (datas) => {
    const shopeeMallMainProductListLength = datas.length;
    const shopeeMallMainProductListItemsLength =
      shopeeMallMainProductListLength * 2;

    return datas.map((data, index) => (
      <li key={index} className="shopee-mall__main__product-item">
        {data.map((dataChild, index) => {
          const { id, href, image, text } = dataChild;

          // check special case: last li tag
          return id !== shopeeMallMainProductListItemsLength ? (
            <a
              key={index}
              href={href}
              className="shopee-mall__main__product-item__link"
            >
              <img
                src={image}
                className="shopee-mall__main__product-item__link__img"
                alt=""
              />
              <span className="shopee-mall__main__product-item__link__text">
                {text}
              </span>
            </a>
          ) : (
            <div
              key={index}
              className="shopee-mall__main__product-item__link__exception"
            >
              <a
                href="https://shopee.vn/mall"
                className="shopee-mall__heading__view-all-btn"
              >
                Xem tất cả
                <div>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </a>
            </div>
          );
        })}
      </li>
    ));
  };

  const renderMainMotionQueueItems = (datas) =>
    datas.map((data, index) => {
      return (
        <div
          key={index}
          className={`shopee-mall__main__motion__queue-item ${
            index === 0 ? "shopee-mall__main__motion__queue-item--current" : ""
          }`}
        ></div>
      );
    });

  const updateMotionImageLinkProps = (index) => {
    const { image, href } = motionLinkInfo[index];
    motionImageRef.current.src = image;
    motionLinkRef.current.href = href;
  };

  const handleClickNextButton = () => {
    // If first list
    if (currentListIndex == 1) {
      currentListIndex = 2;
      previousButtonRef.current.style.display = "block";
      nextButtonRef.current.style.display = "block";

      // Animation
      mainProductListRef.current.style.transform = "translate(-80rem, 0)";
      mainProductListRef.current.style.transition = "all 500ms ease 0s";
    } else {
      // If second list
      if (currentListIndex == 2) {
        currentListIndex = 3;
        previousButtonRef.current.style.display = "block";
        nextButtonRef.current.style.display = "none";

        // Animation
        mainProductListRef.current.style.transform = "translate(-160rem, 0)";
        mainProductListRef.current.style.transition = "all 500ms ease 0s";
      }
    }
  };

  const handleClickPreviousButton = () => {
    // If second list
    if (currentListIndex == 2) {
      currentListIndex = 1;
      previousButtonRef.current.style.display = "none";
      nextButtonRef.current.style.display = "block";

      // Animation
      mainProductListRef.current.style.transform = "translate(0, 0)";
      mainProductListRef.current.style.transition = "all 500ms ease 0s";
    } else {
      // If third list
      if (currentListIndex == 3) {
        currentListIndex = 2;
        previousButtonRef.current.style.display = "block";
        nextButtonRef.current.style.display = "block";

        // Animation
        mainProductListRef.current.style.transform = "translate(-80rem, 0)";
        mainProductListRef.current.style.transition = "all 500ms ease 0s";
      }
    }
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

    updateMotionImageLinkProps(queueItemCurrentIndex);
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

    updateMotionImageLinkProps(index);

    queueItemCurrentIndex = index;
  }

  // Get queueItems NodeList & convert to array
  useEffect(() => {
    queueItems = Array.from($$(`.${QUEUE_ITEM_CLASS}`));
  }, []);

  // EventListener
  useEffect(() => {
    nextButtonRef.current.addEventListener("click", handleClickNextButton);
    previousButtonRef.current.addEventListener(
      "click",
      handleClickPreviousButton
    );
    queueItems.map((queueItem) =>
      queueItem.addEventListener("click", handleClickQueueItem)
    );

    return () => {
      nextButtonRef.current.removeEventListener("click", handleClickNextButton);
      previousButtonRef.current.removeEventListener(
        "click",
        handleClickPreviousButton
      );
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
    <div className="shopee-mall">
      <div className="shopee-mall__heading">
        <div className="shopee-mall__heading__part">
          <a
            href="https://shopee.vn/mall"
            className="shopee-mall__heading__link"
          >
            <img
              src={ShopeeMallHeadingLabelIcon}
              className="shopee-mall__heading__img"
              alt=""
            />
          </a>
        </div>

        <div className="shopee-mall__heading__text">
          {shopeeMallHeadingTextInfo &&
            renderHeadingText(shopeeMallHeadingTextInfo)}
        </div>

        <a
          href="https://shopee.vn/mall"
          className="shopee-mall__heading__view-all-btn"
        >
          <span>Xem tất cả</span>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </a>
      </div>

      <div className="shopee-mall__main">
        <div className="shopee-mall__main__motion one-time">
          <a
            href="https://shopee.vn/m/uu-dai-provence"
            ref={motionLinkRef}
            className="shopee-mall__main__motion__link"
          >
            <img
              src={ShopeeMallMotionBanner1}
              ref={motionImageRef}
              className="shopee-mall__main__motion__img"
              alt=""
            />
          </a>
          <div className="shopee-mall__main__motion__queue">
            {motionLinkInfo && renderMainMotionQueueItems(motionLinkInfo)}
          </div>
        </div>

        <div className="shopee-mall__main__product">
          <div className="shopee-mall__main__product-part">
            <ul
              ref={mainProductListRef}
              className="shopee-mall__main__product-list"
            >
              {shopeeMallMainProductListInfo &&
                renderProductList(shopeeMallMainProductListInfo)}
            </ul>
          </div>

          <button
            ref={previousButtonRef}
            className="navigation-btn navigation-btn__previous shopee-mall__main__product__previous-btn"
          >
            <i className="fas fa-chevron-left navigation-btn__icon"></i>
          </button>
          <button
            ref={nextButtonRef}
            className="navigation-btn navigation-btn__next shopee-mall__main__product__next-btn"
          >
            <i className="fas fa-chevron-right navigation-btn__icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopeeMall;
