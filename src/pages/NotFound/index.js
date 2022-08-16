import "./NotFound.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NOTFOUND_PAGE_TITLE } from "../../constants";
import { updateWebsiteTitle } from "../../helpers";

function NotFound() {
  // Handle side effects
  useEffect(() => {
    updateWebsiteTitle(NOTFOUND_PAGE_TITLE);
  }, []);

  return (
    <div id="not-found-page">
      <div className="not-found-page__header">
        <div className="not-found-page__header-inner">
          <div className="not-found-page__header-inner-part">
            <Link to="/" className="not-found-page__header-inner-part-link">
              <svg viewBox="0 0 22 17">
                <g
                  stroke="none"
                  strokeWidth="1"
                  fillRule="evenodd"
                  transform="translate(-3, -6)"
                >
                  <path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z"></path>
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="not-found-page__container">
        <div className="not-found-page__content">
          <div className="not-found-page__content-error-part">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-mall-live/images/ic_no_404@2x.png"
              alt=""
            />
            <h1>404</h1>
            <p>It looks like something is missing!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
