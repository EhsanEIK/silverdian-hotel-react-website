import React from 'react';
import Carousel from '../Carousel/Carousel';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header className='mb-20'>
            <Navbar></Navbar>
            <Carousel></Carousel>
        </header>
    );
};

export default Header;