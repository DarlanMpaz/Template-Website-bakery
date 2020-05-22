import React from 'react';

import style from './item.css';
import item1 from '../../assets/item/item1.png';

export default function Item(){
    return(
        <div className="item">
            <div className="item-img">
                <img src={item1} alt="Item1"/>
            </div>
            <div className="item-title">
                <h3>Café da Itália</h3>
                <h4>Capuccino com gotas de chocolate</h4>
            </div>
            <div className="item-description">
                <h5>Café solúvel, espuma de barbear e acompanhamentos</h5>
            </div>
            <div className="item-price">
                <span>R$12,90 un</span>
                <div className="discount">50% OFF</div>
            </div>
        </div>
    );
}