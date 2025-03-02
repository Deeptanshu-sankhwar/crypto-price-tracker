"use client";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import DashboardGrid from "./components/DashboardGrid";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6">
      <SearchBar setSearchTerm={setSearchTerm} />
      <DashboardGrid searchTerm={searchTerm} />
    </div>
  );
}
