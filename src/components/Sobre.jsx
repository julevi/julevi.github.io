import React from 'react';
import './Sobre.css';

const Sobre = () => {
  return (
    <section className="sobremim">
      <div className='sobre'>
        <div className='textototal'>
          <h1 className='h1sobremim'>Sobre Mim</h1>
          <div className='sobre-emojis'>
            <p>
              💻<br />
              📱<br />
              🖌<br />
              🎓<br />
              🔧<br />
              💡<br />
              🚀
            </p>
            <p>
              Dev. com énfase em Front-end<br />
              Web e Mobile com React<br />
              Design de interfaces<br />
              Graduando Análise e Desen. de Sistemas<br />
              Téc. Desenvolvimento de Sistemas<br />
              Em busca de conhecimento<br />
              Em busca de novas oportunidades
            </p>
          </div>


        </div>
        <img className='imagem' src="images/desenho.png" alt="desenho" />
      </div>
      <div className="custom-shape-divider-top-1689120345">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}

export default Sobre;
