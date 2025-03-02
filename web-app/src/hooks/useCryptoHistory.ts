import { PriceHistoryEntry } from "@/types";
import { useState, useEffect } from "react";

const API_BASE_URL = "https://api.coincap.io/v2/assets";

// Retrieves historical price data for a selected cryptocurrency and timeframe
export function useCryptoHistory(crypto: string, timeframe: "h1" | "d1") {
  const [history, setHistory] = useState<PriceHistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_BASE_URL}/${crypto}/history?interval=${timeframe}`
      );
      const result = await response.json();

      if (result.data) {
        const formattedHistory = result.data.map(
          (entry: PriceHistoryEntry) => ({
            time: new Date(entry.time),
            priceUsd: parseFloat(entry.priceUsd),
          })
        );

        setHistory(formattedHistory);
      }
    } catch (err) {
      setError(
        `Failed to fetch historical data: ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [crypto, timeframe]);

  return { history, loading, error, refresh: fetchHistory };
}
