import React from 'react';

const Sobre = () => {
  return (
    <section className="bg-gray-300">
      <div className='container max-w-7xl mx-auto px-12'>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:py-16 lg:gap-20'>
          <div className='mt-10 lg:mt-0'>
            <h1 className='text-4xl mb-4 font-bold'>Sobre Mim</h1>
            <p className="">
              Olá, meu nome é Juliana e sou uma desenvolvedora full-stack. Graduada em Análise e Desenvolvimento de Sistemas pela UniAmérica, além de técnica em Desenvolvimento de Sistemas pelo Senai-SE.<br /><br />
              Minha trajetória no desenvolvimento teve início em 2019, onde trabalhei com tecnologias front-end: JavaScript, HTML5, CSS3 e React.js. Logo depois, fui aprofundando os meus conhecimentos em back-end: Node.js, PostgreSQL, Git e criação de APIs.<br /><br />
              Além do desenvolvimento web, adquiri experiência acadêmica em diversas áreas, incluindo microserviços e containers (Docker), business intelligence e big data, desenvolvimento mobile, desenvolvimento de banco de dados e segurança da informação. Também tive a oportunidade de explorar outras tecnologias, como Java, Python, C#, Spring Boot, .NET, MySQL e Firebase.<br /><br />
            </p>
          </div>
          <img className='w-96' src="images/desenho.png" alt="desenho" />
        </div>
      </div>
  
    </section>
  );
}

export default Sobre;
