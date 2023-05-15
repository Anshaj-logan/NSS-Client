import React from 'react';
import NavCoordinator from '../../components/Navebar/NavCoordinator';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';

const Coordinator = () => {
    return (
        <div>
            <NavCoordinator/>
            <Hero/>
            <Footer/>
        </div>
    );
}

export default Coordinator;
