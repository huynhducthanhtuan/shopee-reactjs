function TodaySuggestion() {
  return (
    <div className="today-suggestion">
      <div className="today-suggestion__heading">
        <a className="today-suggestion__heading-tab-main today-suggestion__heading-tab--active">
          <span>GỢI Ý HÔM NAY</span>
        </a>
        <a className="today-suggestion__heading-tab-super-sale-8-8">
          <img src="/assests/img/container/today-suggestion/heading-label.png" />
        </a>
      </div>
      <div className="today-suggestion__main">
        <div className="today-suggestion__main__tab-main"></div>
        <div
          style={{ display: "none" }}
          className="today-suggestion__main__tab-super-sale-8-8"
        ></div>
        <a
          href="https://shopee.vn/daily_discover?pageNumber=2"
          className="today-suggestion__main__view-all-btn"
        >
          Xem thêm
        </a>
      </div>
    </div>
  );
}

export default TodaySuggestion;
