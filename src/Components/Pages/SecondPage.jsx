import React from 'react';
import Menu from '../Menu/Menu';
import { motion } from 'framer-motion';
import Botoes from '../Menu/Botoes';

const SecondPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };
  return (
    <>
      <div className='h-screen bg-second-page bg-cover w-screen'>
        <Menu />
        <motion.div
          className='flex justify-end '
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className='flex justify-end '>
            <div className='flex flex-col justify-center items-center mx-36 p-10 bg-second rounded-3xl'>
              <h1 className='text-5xl text-white font-impact drop-shadow	text-center'>Compra Facilitada,<br /> Experiência Enriquecida</h1>
              <h2 className='text-2xl text-white font-lato drop-shadow	'>Mais que um Marketplace, uma Jornada Subaquática</h2>
              <p className='text-white font-lato drop-shadow w-96 text-justify my-4'>Nossa plataforma é intuitiva e segura, facilitando a escolha e compra dos seus novos companheiros aquáticos. Com informações detalhadas e suporte especializado, ajudamos você a tomar as melhores decisões para seu aquário.</p>
              <Botoes />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SecondPage;
