import React from 'react';
import Menu from '../Menu/Menu';

const FirstPage = () => {
  return (
    <>
      <div className='h-screen bg-first-page bg-cover w-screen'>
        <Menu />
        <div className='flex justify-end '>
          <div className='flex flex-col justify-center items-center mx-36 p-10 backdrop-blur-sm rounded-3xl'>
            <h1 className='text-5xl text-white font-impact drop-shadow	'>Bem-vindos ao FishFleet</h1>
            <h2 className='text-2xl text-white font-lato drop-shadow	'>Onde o Mar Encontra o Mercado</h2>
            <p className='text-white font-lato drop-shadow w-96 text-justify my-4'>Mergulhe no fascinante mundo do aquarismo com FishFleet, o marketplace líder para entusiastas e amantes de aquários. Aqui, cada peixe vivo é uma janela para a beleza subaquática, prometendo transformar seu aquário em um espetáculo de natureza e cor.</p>
            <div className='flex justify-center items-center'>
              <button className='bg-white text-black font-lato text-xl px-10 py-2 rounded-3xl hover:bg-slate-200 duration-200 ease-out'>Começar</button>
              <button className='bg-transparent border-2 text-white font-lato text-xl px-10 py-2 rounded-3xl ml-10 hover:bg-white hover:text-black duration-200 ease-out'>Sobre Nós</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
