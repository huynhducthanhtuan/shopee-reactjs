import Slider from "./Slider";
import GiftBanner from "./GiftBanner";
import Outstanding from "./Outstanding";
import Directory from "./Directory";
import FlashSale from "./FlashSale";
import UnderFlashSale from "./UnderFlashSale";
import ShopeeMall from "./ShopeeMall";
import SearchTrending from "./SearchTrending";
import TopSearch from "./TopSearch";
import TodaySuggestion from "./TodaySuggestion";

function Content({ dataSource }) {
  return (
    <div className="content">
      <Slider dataSource={dataSource} />
      <GiftBanner dataSource={dataSource} />
      <Outstanding dataSource={dataSource} />
      <Directory dataSource={dataSource} />
      <FlashSale dataSource={dataSource} />
      <UnderFlashSale dataSource={dataSource} />
      <ShopeeMall dataSource={dataSource} />
      <SearchTrending dataSource={dataSource} />
      <TopSearch dataSource={dataSource} />
      <TodaySuggestion dataSource={dataSource} />
    </div>
  );
}

export default Content;
