"use client";
import CryptoCard from "./CryptoCard";
import { useCryptoData } from "@/hooks/useCryptoData";
import { CryptoData } from "@/types";

const cryptos = ["litecoin", "chainlink", "polygon", "cosmos", "stellar"];

export default function DashboardGrid({ searchTerm }: { searchTerm: string }) {
  const { data, loading, error, refresh } = useCryptoData(cryptos);

  const filteredCryptos = Object.values(data)
    .filter((crypto) => {
      const cryptoData: CryptoData = crypto;
      return cryptoData.name?.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .map((crypto) => {
      const cryptoData: CryptoData = crypto;
      return {
        id: crypto.symbol,
        name: cryptoData.name,
        symbol: crypto.symbol,
        priceUsd: cryptoData.priceUsd,
        changePercent24Hr: cryptoData.changePercent24Hr,
      };
    });

  return (
    <div>
      {/* Refresh Button */}
      <button
        onClick={refresh}
        className="my-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Refresh Prices
      </button>

      {/* Loader... */}
      {loading ? (
        <p className="text-gray-400">Loading prices...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filteredCryptos.map((crypto, key) => (
            <CryptoCard key={key} crypto={crypto} />
          ))}
        </div>
      )}
    </div>
  );
}
