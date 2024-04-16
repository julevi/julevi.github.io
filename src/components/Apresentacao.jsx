import React from 'react';

const Apresentacao = () => {
  return (
    <section className="bg-cinza h-screen flex items-center justify-center">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center ">
          <div className="">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left"> <i>Olá, eu sou Juliana!</i> </p>
            <h1 className="animado text-4xl sm:text-6xl lg:text-8xl mb-0 mt-2 font-bold text-center lg:text-left"><span className=''></span><br />Developer</h1>
            <div className='flex flex-col items-center justify-center lg:items-start'>
              <div className="flex mt-4 gap-4">
                <a href="https://github.com/julevi" target="_blank" rel="noopener noreferrer">
                  <img className="hover:transform hover:scale-110  w-10 mt-5 lg:mt-0 sm:w-auto transition-transform duration-300 ease-in-out" src="images/github.png" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/jpradoweb/" target="_blank" rel="noopener noreferrer">
                  <img className="hover:transform hover:scale-110  w-10 mt-5 lg:mt-0 sm:w-auto transition-transform duration-300 ease-in-out" src="images/linkedin.png" alt="linkedin" />
                </a>
                <a href="https://wa.me/5579998916567" target="_blank" rel="noopener noreferrer">
                  <img className="hover:transform hover:scale-110  w-10 mt-5 lg:mt-0 sm:w-auto transition-transform duration-300 ease-in-out" src="images/whatsapp.png" alt="whatsapp" />
                </a>
              </div>
              <button href="#" className="mt-4 border-2 border-roxo rounded-full px-8 py-2 text-black text-base hover:transform hover:scale-110 transition-transform duration-300 ease-in-out">Download do CV</button>
            </div>
          </div>
          <div className="px-20 lg:px-12 lg:ml-8 mb-2 lg:mb-0 mt-5 lg:mt-0"><img src="images/me.png" alt="Juliana Prado" /></div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
      <img
        className="mt-5 md:mt-12 floating-arrow cursor-pointer"
        src="images/seta.png"
        alt="Seta"
      />
    </div>

      </div>

    </section>
  );
}

export default Apresentacao;
