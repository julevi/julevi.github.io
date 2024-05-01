import React from 'react';
import desenho from '../assets/images/desenho.png'
import {motion} from "framer-motion"
import { fadeInLeft, scalein, opacidade} from '../../motionConfig';

const Sobre = () => {
  return (
    <section className="fundo2" id='sobre'>
      <div className='container max-w-7xl mx-auto px-12 py-20'>
        <div className='flex flex-col md:flex-row justify-center items-center md:gap-20'>
          <div className='mt-10 md:mt-0 text-center md:text-left'>
            <motion.h1 className='text-4xl mb-5 font-bold' {...fadeInLeft}>Sobre Mim</motion.h1>
            <motion.p className="" {...opacidade}>
              Olá, meu nome é Juliana e sou uma desenvolvedora full-stack. Graduada em Análise e Desenvolvimento de Sistemas pela UniAmérica, além de técnica em Desenvolvimento de Sistemas pelo Senai-SE.<br /><br />
              Minha trajetória no desenvolvimento teve início em 2019, onde trabalhei com tecnologias front-end: JavaScript, HTML5, CSS3 e React.js. Logo depois, fui aprofundando os meus conhecimentos em back-end: Node.js, PostgreSQL, Git e criação de APIs.<br /><br />
              Além do desenvolvimento web, adquiri experiência acadêmica em diversas áreas, incluindo microserviços e containers (Docker), business intelligence e big data, desenvolvimento mobile, desenvolvimento de banco de dados e segurança da informação. Também tive a oportunidade de explorar outras tecnologias, como Java, Python, C#, Spring Boot, .NET, MySQL e Firebase.<br /><br />
            </motion.p>
          </div>
          <img className='w-96 my-10 lg:mt-0' src={desenho} alt="desenho" />
        </div>
      </div>
  
    </section>
  );
}

export default Sobre;
