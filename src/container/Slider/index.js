import "./Slider.css";
import { useContext } from "react";
import { DataSourceContext, DataSourceContextConsumer } from "../../context";

function Slider() {
  //#region Get data from Context
  const dataSourceContextValue = useContext(DataSourceContext);
  const sliderFavouriteSelectionsInfo = dataSourceContextValue
    ? dataSourceContextValue.sliderFavouriteSelectionsInfo
    : null;
  //#endregion

  //#region Function handlers
  const updateInDOMSliderFavouriteSelections = (datas) => {
    return datas.map((data) => (
      <a
        key={data.id}
        className="slider__favourite-selections__link"
        href={data.href}
      >
        <img
          className="slider__favourite-selections__link-img"
          src={data.image}
        />
        <h4 className="slider__favourite-selections__link-text">{data.text}</h4>
      </a>
    ));
  };
  //#endregion

  return (
    <DataSourceContextConsumer>
      {() => (
        <div className="slider">
          <div className="slider__part">
            <div className="slider__main">
              <div className="slider__main__motion-part">
                <a
                  href="https://shopee.vn/m/freeship-xtra"
                  className="slider__main__motion-part__link"
                >
                  <img
                    src="/assests/img/container/slider/slider__main/motion_1.png"
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
                  <div className="slider__main__motion-part__queue-item"></div>
                  <div className="slider__main__motion-part__queue-item"></div>
                  <div className="slider__main__motion-part__queue-item"></div>
                  <div className="slider__main__motion-part__queue-item"></div>
                  <div className="slider__main__motion-part__queue-item"></div>
                  <div className="slider__main__motion-part__queue-item"></div>
                  <div className="slider__main__motion-part__queue-item"></div>
                  <div className="slider__main__motion-part__queue-item"></div>
                  <div className="slider__main__motion-part__queue-item"></div>
                  <div className="slider__main__motion-part__queue-item"></div>
                </div>
              </div>
              <div className="slider__main__no-motion-part">
                <div>
                  <a
                    href="https://shopee.vn/m/shopeefarm"
                    className="slider__main__no-motion-part__link"
                  >
                    <img
                      src="/assests/img/container/slider/slider__main/no-motion_1.png"
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
                      src="/assests/img/container/slider/slider__main/no-motion_2.png"
                      className="slider__main__no-motion-part__img"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="slider__favourite-selections">
              {sliderFavouriteSelectionsInfo &&
                updateInDOMSliderFavouriteSelections(
                  sliderFavouriteSelectionsInfo
                )}
            </div>
          </div>
        </div>
      )}
    </DataSourceContextConsumer>
  );
}

export default Slider;
