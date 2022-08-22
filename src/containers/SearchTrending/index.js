import "./SearchTrending.css";
import { useState, useEffect, useRef } from "react";
import { useDataSourceContext } from "hooks";
import { handlePreventDefault } from "helpers/index";

function SearchTrending() {
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const mainListRef = useRef();
  const viewMoreButtonRef = useRef();

  const { searchTrendingMainListInfo: mainListInfo } = useDataSourceContext();

  const renderMainListChildren = (datas, listIndex) =>
    datas[listIndex].map((data, index) => {
      const { href, productName, productDescription, image } = data;

      return (
        <a key={index} href={href} className="search-trending__main__item">
          <div className="search-trending__main__text">
            <span className="search-trending__main__text__name">
              {productName}
            </span>
            <span className="search-trending__main__text__description">
              {productDescription}
            </span>
          </div>
          <img src={image} className="search-trending__img" alt="" />
        </a>
      );
    });

  const handleClickViewMoreButton = (event) => {
    handlePreventDefault(event);

    if (currentListIndex === mainListInfo.length - 1) {
      setCurrentListIndex(0);
    } else {
      setCurrentListIndex(currentListIndex + 1);
    }
  };

  // EventListener
  useEffect(() => {
    viewMoreButtonRef.current.addEventListener(
      "click",
      handleClickViewMoreButton
    );

    return () => {
      viewMoreButtonRef.current.removeEventListener(
        "click",
        handleClickViewMoreButton
      );
    };
  }, [currentListIndex]);

  return (
    <div className="search-trending">
      <div className="search-trending__heading">
        <span className="search-trending__heading__title">
          XU HƯỚNG TÌM KIẾM
        </span>
        <a
          ref={viewMoreButtonRef}
          className="search-trending__heading__view-more-btn"
        >
          <svg
            viewBox="0 0 12 15"
            className="shopee-svg-icon icon-refresh search-trending__heading__view-more-btn__svg"
          >
            <path
              d="M12 7.51268255c0-1.71021918-.7226562-3.30538371-1.9648437-4.43447938-.20507817-.18525749-.52148442-.16965686-.7070313.03315134-.18554687.20475828-.16992188.52067106.03320313.70592856C10.3984375 4.75722109 11 6.08717488 11 7.51268255c0 2.59360495-1.98242187 4.72699125-4.515625 4.96880095l.68164063-.7878318c.1796875-.2086585.15625-.5245713-.05273438-.7039785-.20898438-.1794073-.52539062-.1560063-.70507813.0526521l-1.49609375 1.7336201c-.18164062.2106086-.15625.5284714.05664063.7078787l1.65429688 1.3982065c.21093749.1774572.52539062.1521062.70507812-.0585023.17773438-.2106085.15234375-.5245712-.05859375-.7039785l-.75195313-.6357257C9.58789062 13.2205634 12 10.6484094 12 7.51268255zM2.80273438 11.3523879C1.66796875 10.4085497 1 9.0161934 1 7.51463263c0-2.75741154 2.23828125-4.99220194 5-4.99220194h.01367188l-.7734375.75078037c-.19726563.19305781-.203125.50897059-.00976563.70592855.19335938.19695797.50976563.20280821.70703125.0097504l1.64257813-1.59516453c.19921875-.19305781.20117187-.51287074.00585937-.70982871L6.06054688.14723461c-.1953125-.19500789-.51171875-.19695797-.70703125-.00195008C5.15820313.34029242 5.15625.6562052 5.3515625.85121309l.66992188.67472729H6c-3.31445312 0-6 2.68135846-6 5.99064232 0 1.8018729.80273438 3.4750406 2.16210938 4.6060863.21289062.1755071.52734375.148206.70507812-.0643526.17773438-.2164587.1484375-.5304214-.06445312-.7059285z"
              fillRule="nonzero"
            ></path>
          </svg>
          Xem thêm
        </a>
      </div>

      <div className="search-trending__main">
        <div ref={mainListRef} className="search-trending__main__list">
          {mainListInfo &&
            renderMainListChildren(mainListInfo, currentListIndex)}
        </div>
      </div>
    </div>
  );
}

export default SearchTrending;
