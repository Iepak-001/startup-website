import React, { useState } from 'react';
import { Search } from 'lucide-react'; // optional: install `lucide-react` or use any icon lib

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="group flex items-center gap-2 mb-4  w-full  mx-auto border-2 border-gray-300 rounded-2xl px-4 py-2 transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
    >
      {/* Icon */}
      <Search className="text-gray-400 group-focus-within:text-blue-500" size={20} />

      {/* Input Field */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search startups..."
        className="flex-grow outline-none bg-transparent text-base"
        aria-label="Search startups"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
