"use client";
import Link from "next/link";
import { FaHome, FaChartLine, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

type SidebarProps = {
  activePath: string;
};

export default function Sidebar({ activePath }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close sidebar on mobile
  const handleCloseSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-2 left-2 z-[60] text-white bg-gray-700 p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 p-6 h-screen fixed top-0 left-0 w-64 lg:relative lg:flex flex-col z-[50] shadow-lg 
        transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <h1 className="text-2xl font-bold text-white mb-6 text-center lg:text-left pl-10 lg:pl-0">
          CryptoTracker
        </h1>
        <nav className="space-y-4">
          <Link
            href="/"
            className={`flex items-center space-x-3 p-3 rounded-lg ${
              activePath === "/"
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-600 text-gray-400"
            }`}
            onClick={handleCloseSidebar}
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
            onClick={handleCloseSidebar}
          >
            <FaChartLine className="text-lg" /> <span>Market Trends</span>
          </Link>
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[40] lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
