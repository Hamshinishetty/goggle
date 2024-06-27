import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Routess from './components/Routess';
import Footer from './components/Footer';
import Search from './components/Search';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark':'' }>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen text-3xl">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routess />
        <Footer />
      </div>
    </div>
  );
}

export default App;