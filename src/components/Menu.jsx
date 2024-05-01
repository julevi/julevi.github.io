import React, { useState } from 'react';
import xsimbolo from '../assets/icons/marca-x.png';
import menu from '../assets/icons/menu.png';
import {motion} from "framer-motion"
import { fadeInLeft, scalein, opacidade} from '../../motionConfig';

const Menu = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }

  return (
    <header className={`menu w-full z-10 overflow-hidden shadow-lg`}>
      <motion.div className="container max-w-4xl mx-auto px-4 h-20 flex items-center justify-between" {...opacidade}>
        <img src={isMenuOpen ? xsimbolo : menu} alt="" className='w-8 cursor-pointer animacaoToque' onClick={toggleMenu} />
        <div className="cursor-pointer text-xl text-white animacaoToque">
          Juliana Prado
        </div>
        <div className="flex items-center">
          <button
            className={`relative w-14 h-7 rounded-full focus:outline-none ${darkMode ? 'bg-azul' : 'bg-gray-600'}`} onClick={toggleDarkMode}>
            <div className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${darkMode ? 'translate-x-8 -translate-y-1/2' : 'translate-x-1 -translate-y-1/2'}`}></div>
          </button>
        </div>
      </motion.div>

      {isMenuOpen && (
        <div className="h-screen">
          <ul className='text-white text-center flex flex-col gap-5 text-3xl pt-28'>
            <li><a className='cursor-pointer font-bold listaMenu' onClick={() => { closeMenu(); scrollToSection('home') }}>Home</a></li>
            <li><a className='cursor-pointer font-bold listaMenu' onClick={() => { closeMenu(); scrollToSection('sobre') }}>Sobre</a></li>
            <li><a className='cursor-pointer font-bold listaMenu' onClick={() => { closeMenu(); scrollToSection('projetos') }}>Projetos</a></li>
            <li><a className='cursor-pointer font-bold listaMenu' onClick={() => { closeMenu(); scrollToSection('habilidades') }}>Habilidades</a></li>
            <li><a className='cursor-pointer font-bold listaMenu' onClick={() => { closeMenu(); scrollToSection('contato') }}>Contato</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Menu;
