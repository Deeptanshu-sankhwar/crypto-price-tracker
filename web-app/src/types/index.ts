export type CryptoData = {
  name: string;
  symbol: string;
  priceUsd: string;
  changePercent24Hr: string;
};

export type PriceHistoryEntry = {
  priceUsd: string;
  time: number;
}