import { useState, useEffect, useContext } from "react";
import {
  DataSourceContext,
  DataSourceContextConsumer,
} from "../../../Context/DataSourceContext";

function FooterLink() {
  //#region Get data from Context
  const dataSourceContextValue = useContext(DataSourceContext);
  const footerLinkAboutTextCSKHInfo = dataSourceContextValue
    ? dataSourceContextValue.footerLinkAboutTextCSKHInfo
    : null;
  const footerLinkAboutTextVeShopeeInfo = dataSourceContextValue
    ? dataSourceContextValue.footerLinkAboutTextVeShopeeInfo
    : null;
  const footerLinkAboutSocialInfo = dataSourceContextValue
    ? dataSourceContextValue.footerLinkAboutSocialInfo
    : null;
  const footerLinkCopyrightCountryAndAreaListInfo = dataSourceContextValue
    ? dataSourceContextValue.footerLinkCopyrightCountryAndAreaListInfo
    : null;
  //#endregion

  //#region Function handlers
  const updateInDOMFooterLinkAboutTextCSKH = (datas) => {
    const divTags = datas.map((data) => {
      return (
        <div key={data.id}>
          <a href={data.href} className="footer__link__about-text-CSKH__link">
            {data.innerHTML}
          </a>
        </div>
      );
    });
    return divTags;
  };
  const updateInDOMFooterLinkAboutTextVeShopee = (datas) => {
    const divTags = datas.map((data) => {
      return (
        <div key={data.id}>
          <a
            href={data.href}
            className="footer__link__about-text-VeShopee__link"
          >
            {data.innerHTML}
          </a>
        </div>
      );
    });
    return divTags;
  };
  const updateInDOMFooterLinkAboutSocial = (datas) => {
    const aTags = datas.map((data) => {
      return (
        <a
          key={data.id}
          target="_blank"
          rel="noopener noreferrer"
          href={data.href}
          className="footer__link__about-social__link"
        >
          <img src={data.image} className="footer__link__about-social__icon" />
          {data.text}
        </a>
      );
    });
    return aTags;
  };
  const updateInDOMFooterLinkCopyrightCountryAndAreaList = (datas) => {
    const aTags = datas.map((data) => {
      return (
        <a
          key={data.id}
          href={data.href}
          className="footer__link__copyright__country-and-area__link"
        >
          {data.innerHTML}
        </a>
      );
    });
    return aTags;
  };
  //#endregion

  return (
    <DataSourceContextConsumer>
      {() => (
        <div className="footer__link">
          <div className="footer__link__about">
            <div className="footer__link__about__part">
              <div className="footer__link__about__item">
                <span className="footer__link__about__heading">
                  Chăm sóc khách hàng
                </span>
                <div className="footer__link__about-text-CSKH">
                  {footerLinkAboutTextCSKHInfo &&
                    updateInDOMFooterLinkAboutTextCSKH(
                      footerLinkAboutTextCSKHInfo
                    )}
                </div>
              </div>
            </div>
            <div className="footer__link__about__part">
              <div className="footer__link__about__item">
                <span className="footer__link__about__heading">Về Shopee</span>
                <div className="footer__link__about-text-VeShopee">
                  {footerLinkAboutTextVeShopeeInfo &&
                    updateInDOMFooterLinkAboutTextVeShopee(
                      footerLinkAboutTextVeShopeeInfo
                    )}
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
                  {footerLinkAboutSocialInfo &&
                    updateInDOMFooterLinkAboutSocial(footerLinkAboutSocialInfo)}
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
                    />
                    <div className="footer__link__about-download__another-apps">
                      <img src="/assests/img/header/header__links-app-download/app_store.png" />
                      <img src="/assests/img/header/header__links-app-download/google_play.png" />
                      <img src="/assests/img/header/header__links-app-download/app_gallery.png" />
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
                {footerLinkCopyrightCountryAndAreaListInfo &&
                  updateInDOMFooterLinkCopyrightCountryAndAreaList(
                    footerLinkCopyrightCountryAndAreaListInfo
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </DataSourceContextConsumer>
  );
}

export default FooterLink;
