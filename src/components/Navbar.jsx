import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark':'' }>
      <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
          <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to="/">
              <p className="text-2xl bg-white-500 font-bold text-black">
                Google 🔍
              </p>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default Navbar;