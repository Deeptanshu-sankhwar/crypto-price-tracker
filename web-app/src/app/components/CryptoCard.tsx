"use client";

import { CryptoData } from "@/types";

export default function CryptoCard({ crypto }: { crypto: CryptoData }) {
  const priceChange = parseFloat(crypto.changePercent24Hr);
  const isPositive = priceChange >= 0;

  return (
    <div
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 
                    transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      {/* Name & Symbol */}
      <h2 className="text-xl font-bold text-white">{crypto.name}</h2>
      <p className="text-gray-400 text-sm tracking-wide">
        {crypto.symbol?.toUpperCase()}
      </p>

      {/* Price */}
      <p className="text-3xl font-bold mt-3 text-white">
        ${parseFloat(crypto.priceUsd).toFixed(2)}
      </p>

      {/* 24H Change Indicator */}
      <p
        className={`mt-2 text-lg font-medium ${
          isPositive ? "text-green-400" : "text-red-400"
        }`}
      >
        {isPositive ? "▲" : "▼"} {priceChange.toFixed(2)}%
      </p>

      {/* Subtle Glow Effect */}
      <div
        className={`absolute inset-0 blur-xl opacity-20 ${
          isPositive ? "bg-green-500" : "bg-red-500"
        }`}
      />
    </div>
  );
}
