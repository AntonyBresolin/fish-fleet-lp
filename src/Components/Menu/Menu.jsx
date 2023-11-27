import React from 'react';
import { IoMenuOutline, IoCart, IoPerson } from 'react-icons/io5';
import Logo from '../../assets/image/logo.png';

const Menu = () => {
    return (
        <div className='flex p-20 pb-4 justify-between'>
            <a href='./'><img src={Logo} alt='logo' className='' /></a>
            <div className='flex justify-evenly mr-32 mt-16 w-36'>
                <IoMenuOutline className='text-white w-full h-full' />
                <IoCart className='text-white w-full h-full pl-5' />
                <IoPerson className='text-white w-full h-full pl-5' />
            </div>
        </div>
    );
};

export default Menu;
