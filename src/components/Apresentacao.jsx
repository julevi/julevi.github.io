import React from 'react';

const Apresentacao = () => {
  return (
    <section className="bg-cinza h-screen flex items-center justify-center fundo1">
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center ">
          <div className="">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left"> <i>Olá, eu sou Juliana!</i> </p>
            <h1 className="animado text-4xl sm:text-6xl lg:text-8xl mb-0 mt-2 font-bold text-center lg:text-left"><span className=''></span><br />Developer</h1>
            <div className='flex flex-col items-center justify-center lg:items-start'>
              <div className="flex mt-4 gap-4">
                <a href="https://github.com/julevi" target="_blank" rel="noopener noreferrer" className='w-12'>
                  <img className="mt-5 lg:mt-0 sm:w-auto animacaoToque" src="images/github.png" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/jpradoweb/" target="_blank" rel="noopener noreferrer" className='w-12' >
                  <img className="mt-5 lg:mt-0 sm:w-auto animacaoToque" src="images/linkedin.png" alt="linkedin" />
                </a>
                <a href="https://wa.me/5579998916567" target="_blank" rel="noopener noreferrer" className='w-12'>
                  <img className="mt-5 lg:mt-0 sm:w-auto animacaoToque" src="images/whatsapp.png" alt="whatsapp" />
                </a>
              </div>
              <button href="#" className="mt-4 botao2 px-8 py-2 animacaoToque">Download do CV</button>
            </div>
          </div>
          <div className="px-20 lg:px-12 lg:ml-8 mb-2 lg:mb-0 mt-5 lg:mt-0"><img src="images/me.png" alt="Juliana Prado" /></div>
        </div>
          <img
            className="mt-5 floating-arrow cursor-pointer"
            src="images/seta.png"
            alt="Seta"
          />

      </div>

    </section>
  );
}

export default Apresentacao;
