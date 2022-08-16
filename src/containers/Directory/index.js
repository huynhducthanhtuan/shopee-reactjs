import "./Directory.css";
import { useContext } from "react";
import { DataSourceContext } from "../../contexts";

function Directory() {
  // Get data from Context
  const dataSourceContext = useContext(DataSourceContext);
  const itemListInfo = dataSourceContext
    ? dataSourceContext.directoryMainItemListInfo
    : null;

  // Function handlers
  const updateDOMListPart = (datas) => {
    return datas.map((data, index) => (
      <li key={index} className="directory__main__item">
        <a href={data[0].href} className="directory__main__item__link">
          <img
            src={data[0].itemImage}
            className="directory__main__item__img"
            alt=""
          />
          <span className="directory__main__item__title">
            {data[0].itemTitle}
          </span>
        </a>
        <a href={data[1].href} className="directory__main__item__link">
          <img
            src={data[1].itemImage}
            className="directory__main__item__img"
            alt=""
          />
          <span className="directory__main__item__title">
            {data[1].itemTitle}
          </span>
        </a>
      </li>
    ));
  };

  return (
    <div className="directory">
      <div className="directory__heading">DANH MỤC</div>

      <div className="directory__main">
        <div className="directory__main__part">
          <ul className="directory__main__list">
            {itemListInfo && updateDOMListPart(itemListInfo)}
          </ul>
        </div>

        <button className="navigation-btn navigation-btn__previous directory__main__previous-btn">
          <i className="fas fa-chevron-left navigation-btn__icon"></i>
        </button>
        <button className="navigation-btn navigation-btn__next directory__main__next-btn">
          <i className="fas fa-chevron-right navigation-btn__icon"></i>
        </button>
      </div>
    </div>
  );
}

export default Directory;
