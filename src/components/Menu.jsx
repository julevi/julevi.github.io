import React from 'react';
import menu from '../assets/icons/menu.png';

const Menu = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`menu w-full z-10 overflow-hidden`}>
      <div className="container max-w-4xl mx-auto px-4 h-20 flex items-center justify-between">
        <img src={menu} alt="" className='w-8 cursor-pointer animacaoToque' />
        <div className="cursor-pointer text-xl text-white animacaoToque">
          Juliana Prado
        </div>
        <div className="flex items-center">
          <button
            className={`relative w-14 h-7 rounded-full focus:outline-none ${darkMode ? 'bg-azul' : 'bg-gray-600'}`} onClick={toggleDarkMode}>
            <div className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${darkMode ? 'translate-x-8 -translate-y-1/2' : 'translate-x-1 -translate-y-1/2'}`}></div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Menu;
