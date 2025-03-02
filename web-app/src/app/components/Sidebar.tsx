"use client";
import Link from "next/link";
import { FaHome, FaChartLine } from "react-icons/fa";

type SidebarProps = {
  activePath: string;
};

export default function Sidebar({ activePath }: SidebarProps) {
  return (
    <aside className="w-64 bg-gray-800 p-6 flex flex-col h-screen">
      <h1 className="text-2xl font-bold text-white mb-6">CryptoTracker</h1>
      <nav className="space-y-4">
        <Link
          href="/"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            activePath === "/"
              ? "bg-gray-700 text-white"
              : "hover:bg-gray-600 text-gray-400"
          }`}
        >
          <FaHome className="text-lg" /> <span>Dashboard</span>
        </Link>
        <Link
          href="/market-trends"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            activePath === "/market-trends"
              ? "bg-gray-700 text-white"
              : "hover:bg-gray-600 text-gray-400"
          }`}
        >
          <FaChartLine className="text-lg" /> <span>Market Trends</span>
        </Link>
      </nav>
    </aside>
  );
}
