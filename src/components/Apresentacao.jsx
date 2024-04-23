import React from 'react';
import github from '../assets/images/github.png'
import whatsapp from '../assets/images/whatsapp.png'
import linkedin from '../assets/images/linkedin.png'
import me from '../assets/images/me.png'
import seta from '../assets/images/seta.png'

const Apresentacao = () => {

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }

  return (
    <section className="bg-cinza flex items-center justify-center fundo1" id='home'>
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center h-screen mt-12 md:mt-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center ">
          <div className="">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left"> <i>Olá, eu sou Juliana!</i> </p>
            <h1 className="animado text-4xl sm:text-6xl lg:text-8xl mb-0 mt-2 font-bold text-center lg:text-left"><span className=''></span><br /><p className=''>Developer</p></h1>
            <div className='flex flex-col items-center justify-center lg:items-start'>
              <div className="flex mt-4 gap-4">
                <a href="https://github.com/julevi" target="_blank" rel="noopener noreferrer" className='w-9 md:w-10'>
                  <img className="mt-5 lg:mt-0 sm:w-auto animacaoToque" src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/jpradoweb/" target="_blank" rel="noopener noreferrer" className='w-9 md:w-10' >
                  <img className="mt-5 lg:mt-0 sm:w-auto animacaoToque" src={linkedin} alt="linkedin" />
                </a>
                <a href="https://wa.me/5579998916567" target="_blank" rel="noopener noreferrer" className='w-9 md:w-10'>
                  <img className="mt-5 lg:mt-0 sm:w-auto animacaoToque" src={whatsapp} alt="whatsapp" />
                </a>
              </div>
              <button href="#" className="mt-4 botao2 px-8 py-2 animacaoToque">Download do CV</button>
            </div>
          </div>
          <div className="px-20 lg:px-12 lg:ml-8 mb-2 lg:mb-0"><img src={me} alt="Juliana Prado" /></div>
        </div>
          <img
            className="mt-5 floating-arrow cursor-pointer"
            src={seta}
            alt="Seta"
            onClick={() => scrollToSection('sobre')}
          />

      </div>

    </section>
  );
}

export default Apresentacao;
