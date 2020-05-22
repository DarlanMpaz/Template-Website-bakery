import React from 'react';

import style from './contact.css';

import {FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt} from 'react-icons/fa';

export default function Contact(){
    return(
        <div className="contact">

            <div className="contact-row">
                <div className="contact-logo">
                    <div className="circle">
                        <FaFacebookF size="30px"/>
                    </div>
                </div>
                <div className="contact-text">
                    <div className="url">facebook.com/empresa</div>
                    <div className="btn-social">
                        <button className="button-bordered">Acompanhe-nos</button>
                    </div>
                </div>
            </div>
            
            <div className="contact-row">
                <div className="contact-logo">
                    <div className="circle">
                        <i><FaInstagram  size="30px" /></i>
                    </div>
                </div>
                <div className="contact-text">
                    <div className="url">instagram.com/empresa</div>
                    <div className="btn-social">
                        <button className="button-bordered">Siga-nos</button>
                    </div>
                </div>                
            </div>
     
            <div className="contact-row">
                <div className="contact-logo">
                    <div className="circle">
                        <i><FaWhatsapp  size="30px" /></i>
                    </div>
                </div>
                <div className="contact-text">
                    <div className="url">+55 55 98712 4523</div>
                    <div className="btn-social">
                        <button className="button-bordered">Contate-nos</button>
                    </div>
                </div>                
            </div>
          
            <div className="numbers">
                <div className="number"><FaPhoneAlt /><p>+55 55 3431 3003</p></div>
                <div className="number"><FaPhoneAlt /><p>+55 55 3431 3130</p></div>
            </div>
        </div>
    );
}