import "./Slider.css";
import {
  SliderMotionBanner1,
  SliderNoMotionBanner1,
  SliderNoMotionBanner2,
} from "assets/images";
import { useDataSourceContext } from "hooks";
import { SLIDER_QUEUE_ITEM_QUANTITY } from "constants/index";

function Slider() {
  const { sliderFavouriteSelectionsInfo } = useDataSourceContext();

  const renderFavouriteSelections = (datas) =>
    datas.map((data, index) => {
      const { href, image, text } = data;
      return (
        <a
          key={index}
          className="slider__favourite-selections__link"
          href={href}
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

    for (let i = 0; i < SLIDER_QUEUE_ITEM_QUANTITY - 1; i++) {
      divTags.push(
        <div key={i} className="slider__main__motion-part__queue-item"></div>
      );
    }

    return divTags;
  };

  return (
    <div className="slider">
      <div className="slider__part">
        <div className="slider__main">
          <div className="slider__main__motion-part">
            <a
              href="https://shopee.vn/m/freeship-xtra"
              className="slider__main__motion-part__link"
            >
              <img
                src={SliderMotionBanner1}
                className="slider__main__motion-part__img slider__main__motion-part__curent-img"
                alt=""
              />
            </a>
            <button className="slider__main__motion-part__btn slider__main__motion-part__previous-btn">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="slider__main__motion-part__btn slider__main__motion-part__next-btn">
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
