import React from 'react';

import style from './about.css';

import about1 from '../../assets/about1.png';
import about2 from '../../assets/about2.png';

//import {FaClock, FaMapMarkedAlt, FaPhoneAlt} from 'react-icons/fa';

export default function About(){
    return(
        <div className="about">

            <div className="about-container">
                    <div className="about-image">
                    Algum texto sobre a empresa
                    </div>
                <div className="about-text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque deserunt doloribus nostrum, corporis ducimus odit reiciendis nemo laudantium voluptatem facilis accusamus ex natus impedit quam, dolore amet, omnis mollitia neque?</p>
                </div>
                <div className="about-img">
                    <img src={about1} alt="Sobre 01"/>
                    <img src={about2} alt="Sobre 02"/>
                </div>
            </div>

        </div>
    );
}