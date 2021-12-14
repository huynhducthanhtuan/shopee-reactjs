function MotionPartChat() {
  return (
    <div className="motion-part__chat">
      <div className="motion-part__chat__main">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="motion-part__chat__main__icon"
        >
          <path d="M18 6.07a1 1 0 01.993.883L19 7.07v10.365a1 1 0 01-1.64.768l-1.6-1.333H6.42a1 1 0 01-.98-.8l-.016-.117-.149-1.783h9.292a1.8 1.8 0 001.776-1.508l.018-.154.494-6.438H18zm-2.78-4.5a1 1 0 011 1l-.003.077-.746 9.7a1 1 0 01-.997.923H4.24l-1.6 1.333a1 1 0 01-.5.222l-.14.01a1 1 0 01-.993-.883L1 13.835V2.57a1 1 0 011-1h13.22zm-4.638 5.082c-.223.222-.53.397-.903.526A4.61 4.61 0 018.2 7.42a4.61 4.61 0 01-1.48-.242c-.372-.129-.68-.304-.902-.526a.45.45 0 00-.636.636c.329.33.753.571 1.246.74A5.448 5.448 0 008.2 8.32c.51 0 1.126-.068 1.772-.291.493-.17.917-.412 1.246-.74a.45.45 0 00-.636-.637z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44 22"
          className="motion-part__chat__main__text"
        >
          <path d="M9.286 6.001c1.161 0 2.276.365 3.164 1.033.092.064.137.107.252.194.09.085.158.064.203 0 .046-.043.182-.194.251-.26.182-.17.433-.43.752-.752a.445.445 0 00.159-.323c0-.172-.092-.3-.227-.365A7.517 7.517 0 009.286 4C5.278 4 2 7.077 2 10.885s3.256 6.885 7.286 6.885a7.49 7.49 0 004.508-1.484l.022-.043a.411.411 0 00.046-.71v-.022a25.083 25.083 0 00-.957-.946.156.156 0 00-.227 0c-.933.796-2.117 1.205-3.392 1.205-2.846 0-5.169-2.196-5.169-4.885C4.117 8.195 6.417 6 9.286 6zm32.27 9.998h-.736c-.69 0-1.247-.54-1.247-1.209v-3.715h1.96a.44.44 0 00.445-.433V9.347h-2.45V7.035c-.021-.043-.066-.065-.111-.043l-1.603.583a.423.423 0 00-.29.41v1.362h-1.781v1.295c0 .238.2.433.445.433h1.337v4.19c0 1.382 1.158 2.505 2.583 2.505H42v-1.339a.44.44 0 00-.445-.432zm-21.901-6.62c-.739 0-1.41.172-2.013.496V4.43a.44.44 0 00-.446-.43h-1.788v13.77h2.234v-4.303c0-1.076.895-1.936 2.013-1.936 1.117 0 2.01.86 2.01 1.936v4.239h2.234v-4.561l-.021-.043c-.202-2.088-2.012-3.723-4.223-3.723zm10.054 6.785c-1.475 0-2.681-1.12-2.681-2.525 0-1.383 1.206-2.524 2.681-2.524 1.476 0 2.682 1.12 2.682 2.524 0 1.405-1.206 2.525-2.682 2.525zm2.884-6.224v.603a4.786 4.786 0 00-2.985-1.035c-2.533 0-4.591 1.897-4.591 4.246 0 2.35 2.058 4.246 4.59 4.246 1.131 0 2.194-.388 2.986-1.035v.604c0 .237.203.431.453.431h1.356V9.508h-1.356c-.25 0-.453.173-.453.432z"></path>
        </svg>
      </div>
      <div className="motion-part__chat__popup">
        <div className="motion-part__chat__popup__header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 22"
            className="motion-part__chat__main__text"
          >
            <path d="M9.286 6.001c1.161 0 2.276.365 3.164 1.033.092.064.137.107.252.194.09.085.158.064.203 0 .046-.043.182-.194.251-.26.182-.17.433-.43.752-.752a.445.445 0 00.159-.323c0-.172-.092-.3-.227-.365A7.517 7.517 0 009.286 4C5.278 4 2 7.077 2 10.885s3.256 6.885 7.286 6.885a7.49 7.49 0 004.508-1.484l.022-.043a.411.411 0 00.046-.71v-.022a25.083 25.083 0 00-.957-.946.156.156 0 00-.227 0c-.933.796-2.117 1.205-3.392 1.205-2.846 0-5.169-2.196-5.169-4.885C4.117 8.195 6.417 6 9.286 6zm32.27 9.998h-.736c-.69 0-1.247-.54-1.247-1.209v-3.715h1.96a.44.44 0 00.445-.433V9.347h-2.45V7.035c-.021-.043-.066-.065-.111-.043l-1.603.583a.423.423 0 00-.29.41v1.362h-1.781v1.295c0 .238.2.433.445.433h1.337v4.19c0 1.382 1.158 2.505 2.583 2.505H42v-1.339a.44.44 0 00-.445-.432zm-21.901-6.62c-.739 0-1.41.172-2.013.496V4.43a.44.44 0 00-.446-.43h-1.788v13.77h2.234v-4.303c0-1.076.895-1.936 2.013-1.936 1.117 0 2.01.86 2.01 1.936v4.239h2.234v-4.561l-.021-.043c-.202-2.088-2.012-3.723-4.223-3.723zm10.054 6.785c-1.475 0-2.681-1.12-2.681-2.525 0-1.383 1.206-2.524 2.681-2.524 1.476 0 2.682 1.12 2.682 2.524 0 1.405-1.206 2.525-2.682 2.525zm2.884-6.224v.603a4.786 4.786 0 00-2.985-1.035c-2.533 0-4.591 1.897-4.591 4.246 0 2.35 2.058 4.246 4.59 4.246 1.131 0 2.194-.388 2.986-1.035v.604c0 .237.203.431.453.431h1.356V9.508h-1.356c-.25 0-.453.173-.453.432z"></path>
          </svg>
          <div className="motion-part__chat__popup__header__right-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="motion-part__chat__popup__header__icon--when-normal"
            >
              <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H9v-1h5V2H9V1h5zM2 13v1h1v1H2a1 1 0 01-.993-.883L1 14v-1h1zm6 1v1H4v-1h4zM2 3.999V12H1V3.999h1zm4.975 1.319a.5.5 0 01.707.707L5.707 8h4.621a.5.5 0 010 1h-4.62l1.974 1.975a.5.5 0 01-.707.707L4.146 8.854a.5.5 0 010-.708zM3 1v1H2v.999H1V2a1 1 0 01.883-.993L2 1h1zm5 0v1H4V1h4z"></path>
            </svg>
            <svg
              mlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="motion-part__chat__popup__header__icon--when-expanded"
            >
              <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H9v-1h5V2H9V1h5zM2 13v1h1v1H2a1 1 0 01-.993-.883L1 14v-1h1zm6 1v1H4v-1h4zM2 3.999V12H1V3.999h1zm5.854 1.319l2.828 2.828a.5.5 0 010 .708l-2.828 2.828a.5.5 0 11-.708-.707L9.121 9H4.5a.5.5 0 010-1h4.621L7.146 6.025a.5.5 0 11.708-.707zM3 1v1H2v.999H1V2a1 1 0 01.883-.993L2 1h1zm5 0v1H4V1h4z"></path>
            </svg>
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="motion-part__chat__popup__header__icon--hide-popup"
            >
              <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zm0 1H2v12h12V2zm-2.904 5.268l-2.828 2.828a.5.5 0 01-.707 0L4.732 7.268a.5.5 0 11.707-.707l2.475 2.475L10.39 6.56a.5.5 0 11.707.707z"></path>
            </svg>
          </div>
        </div>

        <div className="motion-part__chat__popup__container">
          <div className="motion-part__chat__popup__expanded">
            <img
              src="/assests/img/chat-part/greeting-img.png"
              alt=""
              className="motion-part__chat__popup__expanded__img"
            />
            <span className="motion-part__chat__popup__expanded__text">
              Xin Chào!
            </span>
          </div>

          <div className="motion-part__chat__popup__main">
            <div className="motion-part__chat__popup__main__search-and-options">
              <input type="text" placeholder="Tìm theo tên khách hàng" />
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className=" input-search-icon"
              >
                <g transform="translate(3 3)">
                  <path d="M393.846 708.923c174.012 0 315.077-141.065 315.077-315.077S567.858 78.77 393.846 78.77 78.77 219.834 78.77 393.846s141.065 315.077 315.077 315.077zm0 78.77C176.331 787.692 0 611.36 0 393.845S176.33 0 393.846 0c217.515 0 393.846 176.33 393.846 393.846 0 217.515-176.33 393.846-393.846 393.846z"></path>
                  <rect
                    transform="rotate(135 825.098 825.098)"
                    x="785.713"
                    y="588.79"
                    width="78.769"
                    height="472.615"
                    rx="1"
                  ></rect>
                </g>
              </svg>

              <div className="motion-part__chat__popup__main__search-and-options__part">
                <span className="motion-part__chat__popup__main__search-and-options__text">
                  Tất cả
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  className="chat-icon"
                >
                  <path d="M6.243 6.182L9.425 3l1.06 1.06-4.242 4.243L2 4.061 3.06 3z"></path>
                </svg>

                <div className="motion-part__chat__popup__main__search-and-options__popup">
                  <div>Tất cả</div>
                  <div>Chưa đọc</div>
                  <div>Đã ghim</div>
                </div>
              </div>
            </div>
            <div className="motion-part__chat__popup__main__content">
              <div className="motion-part__chat__popup__main__content--all">
                <img
                  src="/assests/img/chat-part/seller-icon.png"
                  alt=""
                  className="motion-part__chat__popup__main__content--all__img"
                />
                <div className="motion-part__chat__popup__main__content--all__content">
                  <span
                    className="motion-part__chat__popup__main__content--all__name"
                    title="huynh807"
                  >
                    huynh807
                  </span>
                  <div className="motion-part__chat__popup__main__content--all__message">
                    <span title="Shop là nhà cung cấp hàng hóa, không phải nhà vận chuyển.">
                      Shop là nhà cung cấp hàng hóa, không phải nhà vận chuyển.
                    </span>
                    <span>30 Th06</span>
                  </div>
                </div>
              </div>
              <div className="motion-part__chat__popup__main__content--unread">
                <img src="/assests/img/chat-part/no-result-img.png" alt="" />
                <span>Không tìm thấy cuộc hội thoại nào.</span>
              </div>
              <div className="motion-part__chat__popup__main__content--pinned">
                <img src="/assests/img/chat-part/no-result-img.png" alt="" />
                <span>Không tìm thấy cuộc hội thoại nào.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotionPartChat;
