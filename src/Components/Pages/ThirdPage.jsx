import React from 'react';
import Menu from '../Menu/Menu';
import { motion } from 'framer-motion';
import Botoes from '../Menu/Botoes';

const ThirdPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };
  return (
    <>
      <div className='h-screen bg-third-page bg-cover w-screen'>
        <Menu />
        <motion.div
          className='flex justify-start '
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
            <div className='flex flex-col justify-center items-center mx-36 p-10 backdrop-blur-sm rounded-3xl'>
              <h1 className='text-5xl text-white font-impact drop-shadow	'>Uma Viagem de Descoberta</h1>
              <h2 className='text-2xl text-white font-lato drop-shadow	'>Compromisso com a Sustentabilidade</h2>
              <p className='text-white font-lato drop-shadow w-96 text-justify my-4'>Explore nossa incrível variedade de peixes vivos, desde as espécies mais populares até raridades exóticas. Cada um deles é uma obra-prima viva, pronta para adicionar vida e movimento ao seu aquário. Seja para iniciantes ou aquaristas experientes, FishFleet é o seu ponto de partida para uma aventura subaquática.</p>
              <Botoes />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ThirdPage;
