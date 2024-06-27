import React, { useState } from "react";
import { useResultContext } from "../contexts/ResultsCP";
import { ResultCP } from "../contexts/ResultsCP";

const SearchComponent = () => {
  const { getResults, results, isLoading } = useResultContext();
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearched(true);
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

      {isLoading && searched && <p>Loading...</p>}

      {results.length > 0 && searched && (
        <ul className="space-y-4">
          {results.map((result, index) => (
            <li key={index} className="border rounded p-4">
              <h3 className="text-xl font-bold">
                <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {result.title}
                </a>
              </h3>
              <p className="mt-2">{result.description}</p>
            </li>
          ))}
        </ul>
      )}

      {!isLoading && searched && results.length === 0 && (
        <p>No results found.</p>
      )}
    </div>
  );
};

const App = () => {
  return (
    <ResultCP>
      <SearchComponent />
    </ResultCP>
  );
};

export default App;
