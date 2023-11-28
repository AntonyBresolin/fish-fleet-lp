import React from 'react';
import Menu from '../Menu/Menu';
import { motion } from 'framer-motion';
import Botoes from '../Menu/Botoes';

const FirstPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <>
      <div className='h-screen bg-first-page bg-cover w-screen'>
        <Menu />
        <motion.div
          className='flex justify-end '
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className='flex justify-end '>
            <div className='flex flex-col justify-center items-center mx-36 p-10 backdrop-blur-sm rounded-3xl'>
              <h1 className='text-5xl text-white font-impact drop-shadow	'>Bem-vindos ao FishFleet</h1>
              <h2 className='text-2xl text-white font-lato drop-shadow	'>Onde o Mar Encontra o Mercado</h2>
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
