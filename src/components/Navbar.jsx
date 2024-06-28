import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 bg-white dark:bg-gray-800">
        <div className="flex justify-between items-center space-x-5 w-full sm:w-auto">
          <Link to="/">
          <p className="text-5xl font-bold text-white py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg dark:from-gray-600 dark:to-gray-700 dark:text-gray-200">
            Google 🔍
          </p>
          </Link>
          <button
            type="button"
            onClick={() => setDarkTheme(!darkTheme)}
            className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg transition-shadow duration-200">
            {darkTheme ? 'Light' : 'Dark'}
          </button>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
