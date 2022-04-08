import { find } from "lodash";

// ----------------------------------------------------------------------

const AUCTION_TYPE = [
  { id: "0", name: "Dutch" },
  { id: "1", name: "English" },
];
export function getAllAuction(date: string | number | Date) {
  return AUCTION_TYPE;
}

export function getAuctionName(id: string) {
  const value = find(AUCTION_TYPE, { id });
  return value.name;
}
