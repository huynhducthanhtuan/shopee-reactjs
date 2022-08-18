import "./Slider.css";
import { useDataSourceContext } from "../../hooks";
import { SLIDER_QUEUE_ITEM_QUANTITY } from "../../constants";

function Slider() {
  // Get data from Context
  const favouriteSelectionsInfo = useDataSourceContext(
    "sliderFavouriteSelectionsInfo"
  );

  const updateDOMFavouriteSelectionsPart = (datas) =>
    datas.map((data) => {
      const { id, href, image, text } = data;

      return (
        <a key={id} className="slider__favourite-selections__link" href={href}>
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
                src="/assests/img/container/slider/main/motion/1.png"
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
                  src="/assests/img/container/slider/main/no-motion/1.png"
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
                  src="/assests/img/container/slider/main/no-motion/2.png"
                  className="slider__main__no-motion-part__img"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="slider__favourite-selections">
          {favouriteSelectionsInfo &&
            updateDOMFavouriteSelectionsPart(favouriteSelectionsInfo)}
        </div>
      </div>
    </div>
  );
}

export default Slider;
