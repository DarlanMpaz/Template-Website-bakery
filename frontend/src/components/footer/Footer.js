import React from 'react';

import style from './footer.css';

import Contact from './contact/Contact';

export default function Footer(){
    return(
        <div className="footer">

            <div className="footer-image">
                Entre em contato pelos nosso canais de atendimento
            </div>
            <div className="footer-background">
                <div className="footer-content">
                    <Contact />
                </div>
            </div>

        </div>
    );
}