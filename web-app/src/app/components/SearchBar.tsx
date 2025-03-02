"use client";

type Props = {
  setSearchTerm: (term: string) => void;
};

export default function SearchBar({ setSearchTerm }: Props) {
  return (
    <input
      type="text"
      placeholder="Search cryptocurrency..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full sm:w-96 p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
