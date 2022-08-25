import "./Directory.css";
import { useRef } from "react";
import { useDataSourceContext } from "hooks";

function Directory() {
    const mainListRef = useRef();
    const nextButtonRef = useRef();
    const previousButtonRef = useRef();

    const { directoryMainItemListInfo } = useDataSourceContext();

    const renderDirectoryMainList = (datas) =>
        datas.map((data, index) => {
            const {
                href: href1,
                itemImage: image1,
                itemTitle: title1,
            } = data[0];
            const {
                href: href2,
                itemImage: image2,
                itemTitle: title2,
            } = data[1];

            return (
                <li key={index} className="directory__main__item">
                    <a href={href1} className="directory__main__item__link">
                        <img
                            src={image1}
                            className="directory__main__item__img"
                            alt=""
                        />
                        <span className="directory__main__item__title">
                            {title1}
                        </span>
                    </a>

                    <a href={href2} className="directory__main__item__link">
                        <img
                            src={image2}
                            className="directory__main__item__img"
                            alt=""
                        />
                        <span className="directory__main__item__title">
                            {title2}
                        </span>
                    </a>
                </li>
            );
        });

    const handleClickNextButton = () => {
        // Hide next, show previous
        nextButtonRef.current.style.display = "none";
        previousButtonRef.current.style.display = "block";

        // Animation
        mainListRef.current.style.transform = "translate(-36rem, 0)";
        mainListRef.current.style.transition = "all 500ms ease 0s";
    };

    const handleClickPreviousButton = () => {
        // Hide previous, show next
        previousButtonRef.current.style.display = "none";
        nextButtonRef.current.style.display = "block";

        // Animation
        mainListRef.current.style.transform = "translate(0, 0)";
        mainListRef.current.style.transition = "all 500ms ease 0s";
    };

    return (
        <div className="directory">
            <div className="directory__heading">DANH MỤC</div>

            <div className="directory__main">
                <div className="directory__main__part">
                    <ul ref={mainListRef} className="directory__main__list">
                        {directoryMainItemListInfo &&
                            renderDirectoryMainList(directoryMainItemListInfo)}
                    </ul>
                </div>

                <button
                    ref={previousButtonRef}
                    onClick={handleClickPreviousButton}
                    className="navigation-btn navigation-btn__previous directory__main__previous-btn"
                >
                    <i className="fas fa-chevron-left navigation-btn__icon"></i>
                </button>
                <button
                    ref={nextButtonRef}
                    onClick={handleClickNextButton}
                    className="navigation-btn navigation-btn__next directory__main__next-btn"
                >
                    <i className="fas fa-chevron-right navigation-btn__icon"></i>
                </button>
            </div>
        </div>
    );
}

export default Directory;
