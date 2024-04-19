import React, { useState } from 'react';
import Menu from './components/Menu';
import Apresentacao from './components/Apresentacao';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Rodape from './components/Rodape';
import Habilidades from './components/Habilidades';
import Contato from './components/Contato';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Menu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Apresentacao darkMode={darkMode} />
      <Sobre darkMode={darkMode} />
      <Projetos darkMode={darkMode} />
      <Habilidades darkMode={darkMode} />
      <Contato darkMode={darkMode} />
      <Rodape darkMode={darkMode} />
    </div>
  );
}

export default App;
