import React, { useState } from "react";
import { useResultContext } from "../contexts/ResultsCP";

const SearchComponent = () => {
  const { getResults, setSearchTerm } = useResultContext();
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchTerm(query); // Set the search term in context
    await getResults(query);
  };

  return (
    <div className="pt-5 pb-5 pr-5">
      <form onSubmit={handleSubmit} className="mb-5">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your search query"
          className="border rounded px-2 py-1 mr-2 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Search</button>
      </form>
    </div>
  );
};

export default SearchComponent;
