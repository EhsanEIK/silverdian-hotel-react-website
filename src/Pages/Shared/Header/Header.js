import React from 'react';
import Carousel from '../Carousel/Carousel';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header>
            <Navbar></Navbar>
            <Carousel></Carousel>
        </header>
    );
};

export default Header;