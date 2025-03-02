"use client";
import MarketTrendsGrid from "../components/MarketTrendsGrid";

export default function MarketTrends() {
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
        Market Trends
      </h1>
      <MarketTrendsGrid />
    </div>
  );
}
