import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center mb-8 max-w-md mx-auto shadow-lg bg-white rounded-full"
      style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
    >
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter stock symbol (e.g. AAPL)"
        className="flex-grow text-lg p-4 rounded-full rounded-r-none border-none focus:ring-0 focus:outline-none"
        style={{ fontWeight: 600 }}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 transition text-white px-6 py-3 rounded-full rounded-l-none shadow-md"
        aria-label="Search stock symbol"
      >
        Search
      </button>
    </form>
  );
}
