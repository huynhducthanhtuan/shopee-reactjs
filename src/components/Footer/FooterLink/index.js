import "./FooterLink.css";
import { useDataSourceContext } from "../../../hooks";

function FooterLink() {
  // Get data from Context
  const aboutTextCSKHInfo = useDataSourceContext("footerLinkAboutTextCSKHInfo");
  const aboutTextVeShopeeInfo = useDataSourceContext(
    "footerLinkAboutTextVeShopeeInfo"
  );
  const aboutSocialInfo = useDataSourceContext("footerLinkAboutSocialInfo");
  const copyrightCountryAndAreaListInfo = useDataSourceContext(
    "footerLinkCopyrightCountryAndAreaListInfo"
  );

  const updateDOMAboutTextCSKHPart = (datas) => {
    const divTags = datas.map((data) => (
      <div key={data.id}>
        <a href={data.href} className="footer__link__about-text-CSKH__link">
          {data.innerHTML}
        </a>
      </div>
    ));

    return divTags;
  };
  const updateDOMAboutTextVeShopeePart = (datas) => {
    const divTags = datas.map((data) => (
      <div key={data.id}>
        <a href={data.href} className="footer__link__about-text-VeShopee__link">
          {data.innerHTML}
        </a>
      </div>
    ));

    return divTags;
  };
  const updateDOMAboutSocialPart = (datas) => {
    const aTags = datas.map((data, index) => {
      const { href, image, text } = data;

      return (
        <a
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          className="footer__link__about-social__link"
        >
          <img
            src={image}
            className="footer__link__about-social__icon"
            alt=""
          />
          {text}
        </a>
      );
    });

    return aTags;
  };
  const updateDOMCopyrightCountryAndAreaListPart = (datas) => {
    const aTags = datas.map((data) => {
      const { id, href, innerHTML } = data;

      return (
        <a
          key={id}
          href={href}
          className="footer__link__copyright__country-and-area__link"
        >
          {innerHTML}
        </a>
      );
    });

    return aTags;
  };

  return (
    <div className="footer__link">
      <div className="footer__link__about">
        <div className="footer__link__about__part">
          <div className="footer__link__about__item">
            <span className="footer__link__about__heading">
              Chăm sóc khách hàng
            </span>
            <div className="footer__link__about-text-CSKH">
              {aboutTextCSKHInfo &&
                updateDOMAboutTextCSKHPart(aboutTextCSKHInfo)}
            </div>
          </div>
        </div>
        <div className="footer__link__about__part">
          <div className="footer__link__about__item">
            <span className="footer__link__about__heading">Về Shopee</span>
            <div className="footer__link__about-text-VeShopee">
              {aboutTextVeShopeeInfo &&
                updateDOMAboutTextVeShopeePart(aboutTextVeShopeeInfo)}
            </div>
          </div>
        </div>
        <div className="footer__link__about__part">
          <div className="footer__link__about__item">
            <span className="footer__link__about__heading">Thanh toán</span>
            <div className="footer__link__about-payment">
              <img
                src="/assests/img/footer/link/payment.png"
                className="footer__link__about-payment__img"
                alt=""
              />
            </div>
          </div>
          <div className="footer__link__about__item">
            <span className="footer__link__about__heading">
              Đơn vị vận chuyển
            </span>
            <div className="footer__link__about-transport">
              <img
                src="/assests/img/footer/link/transport.png"
                className="footer__link__about-transport__img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="footer__link__about__part">
          <div className="footer__link__about__item">
            <span className="footer__link__about__heading">
              Theo dõi chúng tôi trên
            </span>
            <div className="footer__link__about-social">
              {aboutSocialInfo && updateDOMAboutSocialPart(aboutSocialInfo)}
            </div>
          </div>
        </div>
        <div className="footer__link__about__part">
          <div className="footer__link__about__item">
            <span className="footer__link__about__heading">
              Tải ứng dụng Shopee ngay thôi
            </span>
            <div className="footer__link__about-download">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://shopee.vn/web"
                className="footer__link__about-download__link"
              >
                <img
                  src="/assests/img/header/header__links-app-download/qr.png"
                  className="footer__link__about-download__qr"
                  alt=""
                />
                <div className="footer__link__about-download__another-apps">
                  <img
                    src="/assests/img/header/header__links-app-download/app_store.png"
                    alt=""
                  />
                  <img
                    src="/assests/img/header/header__links-app-download/google_play.png"
                    alt=""
                  />
                  <img
                    src="/assests/img/header/header__links-app-download/app_gallery.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__link__copyright">
        <div className="footer__link__copyright__text">
          <i className="far fa-copyright"></i>
          2021 Shopee. Tất cả các quyền được bảo lưu.
        </div>
        <div className="footer__link__copyright__country-and-area">
          <span className="footer__link__copyright__country-and-area__text">
            Quốc gia & Khu vực:
          </span>
          <div className="footer__link__copyright__country-and-area__list">
            {copyrightCountryAndAreaListInfo &&
              updateDOMCopyrightCountryAndAreaListPart(
                copyrightCountryAndAreaListInfo
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLink;
