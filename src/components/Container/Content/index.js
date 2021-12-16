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

function Content() {
  return (
    <div className="content">
      <Slider />
      <GiftBanner />
      <Outstanding />
      <Directory />
      <FlashSale />
      <UnderFlashSale />
      <ShopeeMall />
      <SearchTrending />
      <TopSearch />
      <TodaySuggestion />
    </div>
  );
}

export default Content;
