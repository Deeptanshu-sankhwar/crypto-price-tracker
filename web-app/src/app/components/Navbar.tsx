"use client";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
      <h2 className="text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
        Dashboard
      </h2>

      <div className="cursor-pointer hover:text-gray-400">
        <FaUserCircle size={24} />
      </div>
    </header>
  );
}
