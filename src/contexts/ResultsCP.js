import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseURL = 'https://google-search74.p.rapidapi.com';

export const ResultCP = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (query) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${baseURL}/?query=${query}&limit=300&related_keywords=true`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'adfaf48dd8mshde513932c791fd6p1571f7jsne59800e47f70',
          'x-rapidapi-host': 'google-search74.p.rapidapi.com'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResults(data.results); // Assuming 'results' is the key in your API response containing the actual results
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
