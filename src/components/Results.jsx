import React from 'react';
import { useResultContext } from '../contexts/ResultsCP';
import Loading from './Loading';

const Results = () => {
  const {results, isLoading} = useResultContext();

  if (isLoading) {
    return <Loading />;
  }

  if (results.length === 0 ) {
    return <p>No results found.</p>;
  }

  return (
    <div>
      <div className="results">
        <h2 className="text-2xl font-bold mb-4">Web Results</h2>
        {results.map((result, index) => (
          <div key={index} className="result-item border rounded p-4 mb-4">
            <h3 className="text-xl font-bold">
              <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {result.title}
              </a>
            </h3>
            <p className="mt-2">{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
