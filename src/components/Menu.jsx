import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="logo">
        <span>Juliana Prado</span>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
