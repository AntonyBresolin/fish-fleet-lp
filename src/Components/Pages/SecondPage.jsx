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
      <div className='h-screen bg-second-page-mobile md:bg-second-page bg-cover w-screen'>
        <Menu />
        <motion.div
          className='flex justify-end '
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className='flex justify-end '>
            <div className='flex flex-col justify-center items-center md:mx-36 md:p-10 backdrop-brightness-75 py-6 md:backdrop-blur-sm rounded-3xl duration-150'>
              <h1 className='text-4xl pb-3 md:text-5xl text-white font-impact drop-shadowtext-center text-center'>Compra Facilitada,<br /> Experiência Enriquecida</h1>
              <h2 className='text-xl md:text-2xl text-white font-lato drop-shadow	text-center'>Mais que um Marketplace, uma Jornada Subaquática</h2>
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
