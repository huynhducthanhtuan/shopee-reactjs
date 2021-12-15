import React, { useState, useEffect } from "react";

function Directory() {
  //#region Hooks
  const [directoryMainItemListInfo, setDirectoryMainItemListInfo] = useState();
  //#endregion

  //#region Function handlers
  const updateInDOMDirectoryMainList = (datas) => {
    return datas.map((data, index) => (
      <li key={index} className="directory__main__item">
        <a href={data[0].href} className="directory__main__item__link">
          <img src={data[0].itemImage} className="directory__main__item__img" />
          <span className="directory__main__item__title">
            {data[0].itemTitle}
          </span>
        </a>
        <a href={data[1].href} className="directory__main__item__link">
          <img src={data[1].itemImage} className="directory__main__item__img" />
          <span className="directory__main__item__title">
            {data[1].itemTitle}
          </span>
        </a>
      </li>
    ));
  };
  //#endregion

  //#region Handle side effect
  useEffect(() => {
    fetch("/db/db.json")
      .then((response) => response.json())

      .then((datas) => {
        setDirectoryMainItemListInfo(datas.directoryMainItemListInfo);
      });
  }, []);
  //#endregion

  return (
    <div className="directory">
      <div className="directory__heading">DANH MỤC</div>

      <div className="directory__main">
        <div className="directory__main__part">
          <ul className="directory__main__list">
            {directoryMainItemListInfo &&
              updateInDOMDirectoryMainList(directoryMainItemListInfo)}
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
