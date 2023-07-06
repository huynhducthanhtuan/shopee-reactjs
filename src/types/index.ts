export type ConfirmationCodes = string[];

export type HeaderSearchHistory = {
  id: number;
  innerHTML: string;
  href: string;
};

export type HeaderSearchHistoryKeyword = {
  id: number;
  innerHTML: string;
  href: string;
};

export type HeaderNotificationPopupWhenLoggedIn = {
  id: number;
  href: string;
  itemImage: string;
  itemTitle: string;
  itemDescription: string;
};

export type SliderMainMotionPartLink = {
  href: string;
  image: string;
};

export type SliderFavouriteSelection = {
  href: string;
  image: string;
};

export type OutstandingHotSellingProductsInfo = {
  info: {
    href: string;
    image: string;
  };
  list: [
    { id: number; href: string; image: string; price: string; percent: string }
  ];
};

export type OutstandingHotBrandsInfo = {
  info: {
    heading: string;
    href: string;
  };
  list: [
    { id: number; href: string; image: string; subImage: string; text: string }
  ];
};

export type DirectoryMain = {
  id: number;
  href: string;
  itemImage: string;
  itemTitle: string;
};

export type FlashSaleMain = {
  id: number;
  href: string;
  bubbleImage: string;
  frameImage: string;
  price: string;
  selledStatus: string;
  saleOffPercent: string;
  selledPartWidthPercent: number;
};

export type UnderFlashSale = {
  id: number;
  href: string;
  image: string;
};

export type ShopeeMallHeadingText = {
  id: number;
  title: string;
  image: string;
};

export type ShopeeMallMainProduct = {
  id: number;
  title: string;
  image: string;
};

export type ShopeeMallMainMotionLink = {
  id: number;
  title: string;
  image: string;
};

export type SearchTrendingMain = {
  id: number;
  href: string;
  productName: string;
  productDescription: string;
  image: string;
};

export type TopSearchMain = {
  id: number;
  productImage: string;
  text: string;
  href: string;
};

export type TodaySuggestionMainTabMain = {
  productLink: string;
  productImage: string;
  name: string;
  price: string;
  selledQuantity: string;
  frameImage?: string;
  saleOffText?: string;
  saleOffLabelPercent?: string;
  favouriteLabel: 'Mall' | 'Yêu thích' | 'Yêu thích+';
  sponsorLabel: boolean;
};

export type TodaySuggestionMainTabSuperSale = {
  productLink: string;
  productImage: string;
  name: string;
  price: string;
  selledQuantity: string;
  frameImage?: string;
  saleOffText?: string;
  saleOffLabelPercent?: string;
  favouriteLabel: 'Mall' | 'Yêu thích' | 'Yêu thích+';
  sponsorLabel: boolean;
};

export type FooterTextATag = {
  id: number;
  href: string;
  innerHTML: string;
};

export type FooterDirectory = {
  id: number;
  heading: {
    href: string;
    innerHTML: string;
  };
  footerDirectoryItemPartListInfo: {
    href: string;
    innerHTML: string;
  }[];
};

export type FooterDirectoryHeading = {
  id: number;
  href: string;
  innerHTML: string;
};

export type FooterLinkAboutTextCSKH = {
  id: number;
  href: string;
  innerHTML: string;
};

export type FooterLinkAboutTextVeShopee = {
  id: number;
  href: string;
  innerHTML: string;
};

export type FooterLinkAboutSocial = {
  id: number;
  href: string;
  image: string;
  text: string;
};

export type FooterLinkCopyrightCountryAndArea = {
  id: number;
  href: string;
  innerHTML: string;
};

export type FooterPolicyTermsTitle = {
  id: number;
  href: string;
  innerHTML: string;
};

export type FooterPolicyTermsCertificate = {
  id: number;
  href: string;
  image: string;
};

export type FooterPolicyTermsCompanys = string[];

export type HistoryItemData = {
  href: string;
  innerHTML: string;
};
