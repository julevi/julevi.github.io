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
            <motion.h1 className='text-4xl mb-5 font-bold' {...fadeInLeft}>About me</motion.h1>
            <motion.p className="" {...opacidade}>
              Hello, my name is Juliana. I'm Brazilian and currently living in the UAE. I'm a full-stack developer, graduated in Systems Analysis and Development, and I am also an undergraduate student in Data Analysis.
              I started studying in 2019 through technical courses and project development. Today, I have several projects that showcase my skills. I invite you to explore my portfolio and discover my technical experience and the technologies I work with.
            </motion.p>
          </div>
          <img className='w-96 my-10 lg:mt-0' src={desenho} alt="desenho" />
        </div>
      </div>
  
    </section>
  );
}

export default Sobre;
