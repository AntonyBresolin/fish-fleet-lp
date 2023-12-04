import React from 'react';
import { IoMenuOutline, IoCart, IoPerson } from 'react-icons/io5';
import Logo from '../../assets/image/logo.png';

const Menu = () => {
    return (
        <div className='flex md:p-20 p-5 pt-10 justify-between animated duration-200'>
            <a href='./'><img src={Logo} alt='logo' className='' /></a>
            <div className='flex justify-evenly md:mr-32 md:mt-16 w-36 flex-row-reverse'>
                <IoMenuOutline className='text-white w-full h-full pl-4' />
                <IoCart className='text-white w-full h-full pl-5' />
                <IoPerson className='text-white w-full h-full pl-4 md:pl-5' />
            </div>
        </div>
    );
};

export default Menu;
