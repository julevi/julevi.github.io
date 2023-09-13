import React from 'react';
import './Apresentacao.css';

const Apresentacao = () => {
  return (
    <section className="apresenta">
        <div className="me">
          <p className="juliana">Olá, eu sou Juliana!</p>
          <h1 className="titulo">Front-End<br/>Developer</h1>
          <div className="botoes">
            <a href="https://github.com/julevi" target="_blank"><img className="botao" src="/images/github.png" alt="github"/></a>
            <a href="https://www.linkedin.com/in/jpradoweb/" target="_blank"><img className="botao" src="/images/linkedin.png" alt="linkedin"/></a>
            <a href="https://wa.me/5579998916567" target="_blank"><img className="botao" src="/images/whatsapp.png" alt="whatsapp"/></a>
          </div>
          <button href="#" className="cv">Download do CV</button>
        </div>
        <div className="foto"><img src="images/me.png" alt="Juliana Prado" /></div>
    </section>
  );
}

export default Apresentacao;
