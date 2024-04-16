import React, { useState } from 'react';
import menu from '../assets/icons/menu.png'

function Menu() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className="bg-roxo w-full fixed z-10 overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4 h-20 flex items-center justify-between">

        <img src={menu} alt="" className='w-8 cursor-pointer' />

        <div className="cursor-pointer text-xl text-white hover:transform hover:scale-110 transition-transform duration-300 ease-in-out">
          Juliana Prado
        </div>

        <div className="flex items-center">
          <button
            className={`relative w-14 h-7 rounded-full focus:outline-none ${darkMode ? 'bg-gray-600' : 'bg-purple-300'}`} onClick={toggleDarkMode}>
            <div className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${darkMode ? 'translate-x-8 -translate-y-1/2' : 'translate-x-1 -translate-y-1/2'}`}></div>
          </button>
        </div>

      </div>

    </header>
  );
}

export default Menu;
