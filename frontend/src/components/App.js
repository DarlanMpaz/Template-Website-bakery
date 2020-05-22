import React from 'react';

import Header from './header/Header';
import About from './about/About';
import Footer from './footer/Footer'

import Offer from './offer/Offer';

export default function App(){
    return(
        <div>
            <Header />
            <About />
            <Offer />
            <Footer />
        </div>
    );
}