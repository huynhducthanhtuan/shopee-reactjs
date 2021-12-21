import "./Container.css";
import {
  Slider,
  GiftBanner,
  Outstanding,
  Directory,
  FlashSale,
  UnderFlashSale,
  ShopeeMall,
  SearchTrending,
  TopSearch,
  TodaySuggestion,
} from "../../containers";

function Container() {
  return (
    <div id="container">
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

export default Container;
