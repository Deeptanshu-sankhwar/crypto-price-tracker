"use client";
import { useState } from "react";
import { useCryptoHistory } from "@/hooks/useCryptoHistory";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const cryptos = ["litecoin", "chainlink", "polygon", "cosmos", "stellar"];
const timeframes = { h1: "Hourly", d1: "Daily" };

export default function MarketTrendsGrid() {
  const [selectedCrypto, setSelectedCrypto] = useState("litecoin");
  const [selectedTimeframe, setSelectedTimeframe] = useState<"h1" | "d1">("d1");

  const { history, loading, error, refresh } = useCryptoHistory(
    selectedCrypto,
    selectedTimeframe
  );

  // Format timestamps for X-Axis based on selected timeframe
  const formattedHistory = history.map((entry) => {
    const date = new Date(entry.time);
    return {
      ...entry,
      time:
        selectedTimeframe === "h1"
          ? date.toLocaleString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
          : date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    };
  });

  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white text-center sm:text-left">
        Price Trends
      </h2>

      {/* Crypto Selector */}
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
        {cryptos.map((crypto) => (
          <button
            key={crypto}
            className={`px-3 sm:px-4 py-2 rounded-md text-sm font-semibold ${
              selectedCrypto === crypto
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedCrypto(crypto)}
            disabled={loading}
          >
            {crypto.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Timeframe Selector */}
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
        {Object.entries(timeframes).map(([key, label]) => (
          <button
            key={key}
            className={`px-3 sm:px-4 py-2 rounded-md text-sm font-semibold ${
              selectedTimeframe === key
                ? "bg-green-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedTimeframe(key as "h1" | "d1")}
            disabled={loading}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Refresh Button */}
      <div className="flex justify-center sm:justify-start mb-4">
        <button
          onClick={refresh}
          disabled={loading}
          className={`px-4 py-2 rounded-lg transition ${
            loading
              ? "bg-gray-500 text-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {loading ? "Refreshing..." : "Refresh Data"}
        </button>
      </div>

      {/* Chart with Animation & Loading Skeleton */}
      {loading ? (
        <div className="animate-pulse bg-gray-700 h-60 w-full rounded-lg"></div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <motion.div
          key={`${selectedCrypto}-${selectedTimeframe}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={formattedHistory}
              margin={{ top: 10, right: 20, left: -10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="gray" />
              <XAxis
                dataKey="time"
                stroke="white"
                tick={{ fontSize: 10 }}
                angle={-30}
                textAnchor="end"
              />
              <YAxis stroke="white" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "8px",
                  color: "white",
                }}
                labelFormatter={(label) => `📅 ${label}`}
                formatter={(value: number) => [`💰 $${value.toFixed(2)}`, "Price"]}
              />
              <Line
                type="monotone"
                dataKey="priceUsd"
                stroke="#00ff9f"
                strokeWidth={2}
                dot={false}
                isAnimationActive={true}
                animationDuration={800}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      )}
    </div>
  );
}
