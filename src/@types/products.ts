import { FormikProps } from 'formik';

// ----------------------------------------------------------------------

export type PaymentType = 'paypal' | 'credit_card' | 'cash';

export type ProductStatus = 'sale' | 'new' | '';

export type ProductInventoryType = 'in_stock' | 'out_of_stock' | 'low_stock';

export type ProductCategory = 'Accessories' | 'Apparel' | 'Shoes';

export type ProductGender = 'Men' | 'Women' | 'Kids';

export type OnCreateBilling = (address: BillingAddress) => void;

export type FormikPropsShopView = FormikProps<ProductFilter>;

export type ProductRating = {
  name: string;
  starCount: number;
  reviewCount: number;
};

export type ProductReview = {
  id: string;
  name: string;
  avatarUrl: string;
  comment: string;
  rating: number;
  isPurchased: boolean;
  helpful: number;
  postedAt: Date;
};

export type Product = {
  price: number;
  priceSale: number | null;
  category: string;
  gender: ProductGender;
  country: string;
  co2offset: string;
  treeName: string;
  imageURL: string;
  tokenId: string;
  currentPrice: string;
  auctionType: string;
  paymentType: string;
  forAuction: boolean;
  currenetBid: string;
  co2Value: string;
  basePrice: string;
  duration: number;
  startedAt: number;
  treeId: string;
  treeBasicDetails: Product;
  bidNumber: any;
  isFarm: boolean;
  // fraud: boolean;
  // lastBid: {
  //   from: string;
  //   amount: string;
  // };
  latitude: string;
  longitude: string;
  auctionData: {
    forAuction: Boolean;
    auctionType: Number;
    paymentType: Number;
    basePrice: string;
    startPrice: Number;
    endPrice: Number;
    duration: number;
    startedAt: number;
    lastBidder: string;
    lastBid: string;
    currentlastBidder: string;
    currentlastBidValue: string;
    currenetBid: string;
    fraud: Boolean;
  };
};

export type CartItem = {
  id: string;
  name: string;
  cover: string;
  available: number;
  price: number;
  color: string;
  size: string;
  quantity: number;
  subtotal: number;
};

export type BillingAddress = {
  receiver: string;
  phone: string;
  fullAddress: string;
  addressType: string;
  isDefault: boolean;
};

export type ProductState = {
  isLoading: boolean;
  isLoaded: boolean;
  error: boolean;
  updatingMyCollection: boolean;
  products: Product[];
  product: Product | null;
  sortBy: string | null;
  accountAddress: string | null;
  myCollection: Product[];
  filters: {
    category: string[];
    collections: string[];
    country: string[];
    co2offset: string[];
    colors: string[];
    priceRange: number[];
    rating: string;
    auctionType: string[];
    auctionStatus: string[];
    paymentType: string;
    forAuction: boolean;
  };
};

export type ProductFilter = {
  category: string[];
  collections: string[];
  country: string[];
  co2offset: string[];
  colors: string[];
  priceRange: number[];
  rating: string;
  auctionType: string[];
  auctionStatus: string[];
  paymentType: string;
  forAuction: boolean;
};

export type TreeDetailsProps = {
  forAuction: boolean;
  startedAt: number;
  duration: number;
  basePrice: number;
  auctionType: string;
  owner: string;
  paymentType: string;
  startPrice: string;
  endPrice: string;
  currentPrice: string;
  lastBid: {
    amount: string;
    from: string;
  };
};

export type TreeBasicDetailsProps = {
  treeId: string;
  treeName: string;
  sciName: string;
  latitude: string;
  longitude: string;
  country: string;
  placeOfBirth: string;
  placeOfResidence: string;
  co2Value: string;
  imageURL: string;
  url: string;
};

export type TraitsProp = {
  treeName: string;
  sciName: string;
  latitude: string;
  longitude: string;
  country: string;
  placeOfBirth: string;
  placeOfResidence: string;
  co2Value: string;
};

export type optionsProp = {
  timeout: number;
  clientConfig: {
    maxReceivedFrameSize: number;
    maxReceivedMessageSize: number;
  };
  reconnect: {
    auto: boolean;
    delay: number;
    maxAttempts: number;
    onTimeout: boolean;
  };
};

export type MoralisOptions = {
  chain: any;
  address: string;
  exchange_name: string;
};
