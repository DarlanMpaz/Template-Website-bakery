import React from 'react';

import style from './header.css';

import {FaClock, FaMapMarkedAlt, FaPhoneAlt} from 'react-icons/fa';

export default function Header(){
    return(
        <div className="header">

            <div className="header-container">
                <h1>K Site</h1>
                <ul>
                    <li className="link">Home</li>
                    <li className="link">Sobre</li>
                    <li className="link">Ofertas</li>
                    <li className="link">Contato</li>
                </ul>
            </div>


            <div className="banner" >

                <div className="image"></div>

                <div className="tittle-text">
                    <p>Uma Frase <b>de Efeito</b></p>
                    <p>Para um <b>Slogan Perfeito</b></p>
                </div>

                <div className="subtittle-text">
                    <p>Alguma coisa escrita para preencher o subtítulo</p>
                    <p>E como não tem mais nada para falar aqui vem uma hitória...</p>
                </div>

                <div className="button-container">
                    <button className="button">Nossos produtos</button>
                </div>

                <div className="info-container"> 

                    <div className="info">
                        <div className="info-icon"><i><FaClock size="25"/></i></div>
                        <div className="info-text">
                            <p>Hoje - das 08h às 18h</p>
                            <span>Horário Comercial</span>
                        </div>
                    </div>

                    <div className="info">
                        <div className="info-icon"><i><FaMapMarkedAlt size="25"/></i></div>
                        <div className="info-text">
                            <p>Rua dos Bobos nº 0</p>
                            <span>Veja no mapa</span>
                        </div>
                    </div>

                    <div className="info">
                        <div className="info-icon"><i><FaPhoneAlt size="25"/></i></div>
                        <div className="info-text">
                            <p>+55 (55) 3431 0000</p>
                            <span>Entre em contato</span>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    );
}