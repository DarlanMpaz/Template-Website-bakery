import React from 'react';

import Item from './Item';

import style from './offer.css';

export default function Offer(){
    return(
        <div className="offer">

            <div className="item-tittle-image">
                Um titulo empolgante sobre as ofertas semanais
            </div>

            <div className="grid-items-container">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
            </div>
        </div>
    );
}