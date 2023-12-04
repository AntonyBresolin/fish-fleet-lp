import React from 'react';
import Menu from '../Menu/Menu';
import { motion } from 'framer-motion';
import Botoes from '../Menu/Botoes';

const FirstPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <div className='h-screen md:bg-first-page w-screen bg-cover bg-first-page-mobile'>
        <Menu />
        <motion.div
          className='flex justify-end '
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className='flex justify-end '>
            <div className='flex flex-col justify-center items-center md:mx-36 md:p-10 backdrop-brightness-75 py-6 md:backdrop-blur-sm rounded-3xl duration-150'>
              <h1 className='text-5xl text-white font-impact drop-shadow	text-center'>Bem-vindos ao FishFleet</h1>
              <h2 className='text-xl md:text-2xl text-white font-lato drop-shadow	text-center'>Onde o Mar Encontra o Mercado</h2>
              <p className='text-white font-lato drop-shadow w-96 text-justify my-4'>Mergulhe no fascinante mundo do aquarismo com FishFleet, o marketplace líder para entusiastas e amantes de aquários. Aqui, cada peixe vivo é uma janela para a beleza subaquática, prometendo transformar seu aquário em um espetáculo de natureza e cor.</p>
              <Botoes />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FirstPage;
