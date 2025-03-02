import { CryptoData } from "@/types";
import { useState, useEffect } from "react";

const API_BASE_URL = "https://api.coincap.io/v2/assets";

// Fetches and manages real-time cryptocurrency price data for the dashboard
export function useCryptoData(cryptos: string[]) {
  const [data, setData] = useState<Record<string, CryptoData>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrices = async () => {
    setLoading(true);
    setError(null);

    try {
      const responses = await Promise.all(
        cryptos.map((crypto) => fetch(`${API_BASE_URL}/${crypto}`))
      );
      const results = await Promise.all(responses.map((res) => res.json()));

      const formattedData = results.reduce((acc, result) => {
        if (result.data) {
          acc[result.data.symbol] = {
            name: result.data.name,
            priceUsd: parseFloat(result.data.priceUsd).toFixed(2),
            changePercent24Hr: parseFloat(result.data.changePercent24Hr).toFixed(2),
          };
        }
        return acc;
      }, {} as Record<string, CryptoData>);

      setData(formattedData);
    } catch (err) {
      setError(`Failed to fetch crypto data: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  return { data, loading, error, refresh: fetchPrices };
}
