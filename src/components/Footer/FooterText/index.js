import "./FooterText.css";
import { $$ } from "constants/index";
import { useEffect } from "react";
import { useDataSourceContext } from "hooks";

function FooterText() {
    const { footerTextATagsInfo } = useDataSourceContext();

    const updateFooterTextATagsProps = () => {
        if (footerTextATagsInfo) {
            const footerTextATags = $$(".footer__text a");

            Array.from(footerTextATags).map((footerTextATag, index) => {
                const { href, innerHTML } = footerTextATagsInfo[index];
                footerTextATag.href = href;
                footerTextATag.innerHTML = innerHTML;
            });
        }
    };

    useEffect(() => updateFooterTextATagsProps(), []);

    return (
        <div className="footer__text">
            <div className="footer__text__item">
                <h1 className="footer__text__item__title">
                    SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE
                </h1>
                <span className="footer__text__item__description">
                    Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an
                    toàn và miễn phí! Shopee là nền tảng giao dịch trực tuyến
                    hàng đầu ở Đông Nam Á, Việt Nam, <a></a>, <a></a>, <a></a>,{" "}
                    <a></a>, <a></a>, <a></a> và <a></a>. Với sự đảm bảo của
                    Shopee, bạn sẽ mua hàng trực tuyến an tâm và nhanh chóng hơn
                    bao giờ hết!
                </span>
            </div>

            <div className="footer__text__item">
                <h1 className="footer__text__item__title">
                    MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN
                </h1>
                <span className="footer__text__item__description">
                    Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực
                    tuyến thì Shopee.vn là một sự lựa chọn tuyệt vời dành cho
                    bạn. Bản chất của Shopee là một social E-commerce platform -
                    nền tảng trang web{" "}
                    <span className="footer__text__item__description__thuongmaidientu">
                        thương mại điện tử
                    </span>{" "}
                    tích hợp mạng xã hội. Điều này cho phép người mua và người
                    bán hàng dễ dàng tương tác, trao đổi thông tin về sản phẩm
                    và chương trình khuyến mãi của shop. Nhờ nền tảng đó, việc
                    mua bán trên Shopee trở nên nhanh chóng và đơn giản hơn. Bạn
                    có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực
                    tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những
                    dòng sản phẩm chính hãng, uy tín,{" "}
                    <a className="footer__text__item__description__shopeemall"></a>{" "}
                    chính là sự lựa chọn lí tưởng dành cho bạn. Đến với Shopee,
                    cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ
                    hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng
                    bán ngay những sản phẩm của mình. Không những thế, các nhà
                    bán hàng có thể tùy chọn các <a></a> hoặc tự <a></a> để thu
                    hút người mua với những sản phẩm có mức giá hấp dẫn. Khi
                    đăng nhập tại Shopee Kênh người bán, bạn có thể dễ dàng{" "}
                    <a></a>, theo dõi đơn hàng, chăm sóc khách hàng và cập nhập
                    ngay các hoạt động của shop.
                </span>
            </div>

            <div className="footer__text__item">
                <h1 className="footer__text__item__title">
                    TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI
                </h1>
                <span className="footer__text__item__description">
                    Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng
                    mọi lúc, mọi nơi. Bạn có thể tải ứng dụng Shopee cũng như
                    đăng sản phẩm bán hàng một cách nhanh chóng và tiện lợi.
                    Ngoài ra, ứng dụng Shopee còn có những ưu điểm sau: - Giao
                    diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy
                    được ngay những sản phẩm nổi bật cũng như dễ dàng tìm đến
                    các ô tìm kiếm, giỏ hàng hoặc tính năng chat liền tay. - Ứng
                    dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi
                    trên cùng một tài khoản. Bạn sẽ vừa là người mua hàng, vừa
                    là người bán hàng rất linh hoạt, dễ dàng. - Cập nhập thông
                    tin khuyến mãi, <a></a> nhanh chóng và liên tục. Tại Shopee,
                    bạn có thể lấy các <a></a> và <a></a>. Bên cạnh đó, Shopee
                    cũng sẽ có những chiến dịch khuyến mãi lớn hằng năm như{" "}
                    <a></a>, <a></a>, <a></a>, <a></a>, <a></a>, <a></a>. Đây là
                    thời điểm để người mua hàng có thể nhanh tay chọn ngay cho
                    mình những mặt hàng ưa thích với mức giá giảm kỉ lục.
                </span>
            </div>

            <div className="footer__text__item">
                <h1 className="footer__text__item__title">
                    MUA HÀNG HIỆU CAO CẤP GIÁ TỐT TẠI SHOPEE
                </h1>
                <span className="footer__text__item__description">
                    Bên cạnh <a></a>, Shopee còn có rất nhiều khuyến mãi khủng
                    cho <a></a>. Cộng với mã giao hàng miễn phí, Shopee cũng có
                    các mã giảm giá được phân phối mỗi tháng từ rất nhiều gian
                    hàng chính hãng tham gia chương trình khuyến mãi này. Bên
                    cạnh đó, Shopee còn tập hợp rất nhiều thương hiệu đình đám
                    được các nhà bán lẻ uy tín phân phối bán trên Shopee, đem
                    đến cho bạn sự lựa chọn đa dạng, từ các hãng mỹ phẩm nổi
                    tiếng hàng đầu như <a></a>, <a></a>, <a></a>, <a></a>,{" "}
                    <a></a>, <a></a>... Đến những thương hiệu công nghệ nổi
                    tiếng như <a></a>, <a></a>, <a></a>, <a></a>, <a></a>,{" "}
                    <a></a>...
                </span>
            </div>

            <div className="footer__text__item">
                <h1 className="footer__text__item__title">
                    MUA HÀNG CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU LỚN VỚI SHOPEE
                </h1>
                <span className="footer__text__item__description">
                    Mua hàng trên Shopee luôn là một trải nghiệm ấn tượng. Dù
                    bạn đang có nhu cầu mua bất kỳ mặt hàng <a></a>, thời trang
                    nữ, <a></a>, điện thoại, <a></a> hay <a></a> thì Shopee cũng
                    sẽ đảm bảo cung cấp cho bạn những sản phẩm ưng ý. Bên cạnh
                    đó, Shopee cũng có sự tham gia của các thương hiệu hàng đầu
                    thế giới ở đa dạng nhiều lĩnh vực khác nhau. Trong đó có thể
                    kể đến Samsung, OPPO, Xiaomi, Innisfree, Unilever, P&G,
                    Biti’s,...Các thương hiệu này hiện cũng đã có cửa hàng chính
                    thức trên Shopee Mall với hàng trăm mặt hàng chính hãng,
                    được cập nhập liên tục. Là một kênh bán hàng uy tín, Shopee
                    luôn cam kết mang lại cho khách hàng những trải nghiệm mua
                    sắm online giá rẻ, an toàn và tin cậy. Mọi thông tin về
                    người bán và người mua đều được bảo mật tuyệt đối. Các hoạt
                    động giao dịch thanh toán tại Shopee luôn được đảm bảo diễn
                    ra nhanh chóng, an toàn. Một vấn đề nữa khiến cho các khách
                    hàng luôn quan tâm đó chính là mua hàng trên Shopee có đảm
                    bảo không. Shopee luôn cam kết mọi sản phẩm trên Shopee, đặc
                    biệt là Shopee Mall đều là những sản phẩm chính hãng, đầy đủ
                    tem nhãn, bảo hành từ nhà bán hàng. Ngoài ra, Shopee bảo vệ
                    người mua và người bán bằng cách giữ số tiền giao dịch đến
                    khi người mua xác nhận đồng ý với đơn hàng và không có yêu
                    cầu khiếu nại, trả hàng hay hoàn tiền nào. Thanh toán sau đó
                    sẽ được chuyển đến cho người bán. Đến với Shopee ngay hôm
                    nay để mua hàng online giá rẻ và trải nghiệm dịch vụ chăm
                    sóc khách hàng tuyệt vời tại đây. Đặc biệt khi mua sắm trên
                    Shopee Mall, bạn sẽ được miễn phí vận chuyển, giao hàng tận
                    nơi và 7 ngày miễn phí trả hàng. Ngoài ra, khách hàng có thể
                    sử dụng <a></a> để đổi lấy mã giảm giá có giá trị cao và
                    voucher dịch vụ hấp dẫn. Tiếp đến là <a></a>, <a></a> và{" "}
                    <a></a> với các ưu đãi độc quyền từ các thương hiệu lớn có
                    những khách hàng đã đăng ký làm thành viên. Hãy truy cập
                    ngay Shopee.vn hoặc tải ngay ứng dụng Shopee về điện thoại
                    ngay hôm nay!
                </span>
            </div>
        </div>
    );
}

export default FooterText;
