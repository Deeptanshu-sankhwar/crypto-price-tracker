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

export type CryptoContextType = {
  data: Record<string, CryptoData>;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}