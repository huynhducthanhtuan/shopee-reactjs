import "./FooterLink.css";
import {
    FooterLinkPaymentImage,
    FooterLinkTransportImage,
    HeaderAppGalleryIcon,
    HeaderAppStoreIcon,
    HeaderGooglePlayIcon,
    HeaderQRCodeImage,
} from "assets/images";
import { useDataSourceContext } from "hooks";

function FooterLink() {
    const {
        footerLinkAboutTextCSKHInfo,
        footerLinkAboutTextVeShopeeInfo,
        footerLinkAboutSocialInfo,
        footerLinkCopyrightCountryAndAreaListInfo,
    } = useDataSourceContext();

    const renderAboutTextCSKHPart = (datas) =>
        datas.map((data, index) => {
            const { href, innerHTML } = data;
            return (
                <div key={index}>
                    <a
                        href={href}
                        className="footer__link__about-text-CSKH__link"
                    >
                        {innerHTML}
                    </a>
                </div>
            );
        });

    const renderAboutTextVeShopeePart = (datas) =>
        datas.map((data, index) => {
            const { href, innerHTML } = data;
            return (
                <div key={index}>
                    <a
                        href={href}
                        className="footer__link__about-text-VeShopee__link"
                    >
                        {innerHTML}
                    </a>
                </div>
            );
        });

    const renderAboutSocialPart = (datas) =>
        datas.map((data, index) => {
            const { href, image, text } = data;
            return (
                <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
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

    const renderCopyrightCountryAndAreaListPart = (datas) =>
        datas.map((data, index) => {
            const { href, innerHTML } = data;
            return (
                <a
                    key={index}
                    href={href}
                    className="footer__link__copyright__country-and-area__link"
                >
                    {innerHTML}
                </a>
            );
        });

    return (
        <div className="footer__link">
            <div className="footer__link__about">
                <div className="footer__link__about__part">
                    <div className="footer__link__about__item">
                        <span className="footer__link__about__heading">
                            Chăm sóc khách hàng
                        </span>
                        <div className="footer__link__about-text-CSKH">
                            {footerLinkAboutTextCSKHInfo &&
                                renderAboutTextCSKHPart(
                                    footerLinkAboutTextCSKHInfo,
                                )}
                        </div>
                    </div>
                </div>

                <div className="footer__link__about__part">
                    <div className="footer__link__about__item">
                        <span className="footer__link__about__heading">
                            Về Shopee
                        </span>
                        <div className="footer__link__about-text-VeShopee">
                            {footerLinkAboutTextVeShopeeInfo &&
                                renderAboutTextVeShopeePart(
                                    footerLinkAboutTextVeShopeeInfo,
                                )}
                        </div>
                    </div>
                </div>
                <div className="footer__link__about__part">
                    <div className="footer__link__about__item">
                        <span className="footer__link__about__heading">
                            Thanh toán
                        </span>
                        <div className="footer__link__about-payment">
                            <img
                                src={FooterLinkPaymentImage}
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
                                src={FooterLinkTransportImage}
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
                            {footerLinkAboutSocialInfo &&
                                renderAboutSocialPart(
                                    footerLinkAboutSocialInfo,
                                )}
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
                                    src={HeaderQRCodeImage}
                                    className="footer__link__about-download__qr"
                                    alt=""
                                />
                                <div className="footer__link__about-download__another-apps">
                                    <img src={HeaderAppStoreIcon} alt="" />
                                    <img src={HeaderGooglePlayIcon} alt="" />
                                    <img src={HeaderAppGalleryIcon} alt="" />
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
                            renderCopyrightCountryAndAreaListPart(
                                footerLinkCopyrightCountryAndAreaListInfo,
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterLink;
