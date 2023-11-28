import React from 'react';

const Botoes = () => {
    return (
        <div className='flex justify-center items-center'>
            <a href='https://www.linkedin.com/in/antony-henrique-bresolin-b8b621186/' target='_blank'><button className='bg-white text-black font-lato text-xl px-10 py-2 rounded-3xl hover:bg-slate-200 duration-200 ease-out'>Começar</button></a>
            <a href='https://github.com/AntonyBresolin/Fish-Fleet-LP' target="_blank"><button className='bg-transparent border-2 text-white font-lato text-xl px-10 py-2 rounded-3xl ml-10 hover:bg-white hover:text-black duration-200 ease-out'>Sobre Nós</button></a>
        </div>
    );
};

export default Botoes;
