import React from 'react';
import CustomeButton from './../custom-button/custom-button.component'

import './card-dropdown.style.scss'

const CardDropdown = () => 
     (
        <div className='cart-dropdown'>
            <div className='cart-items'>

                <CustomeButton label='CHECKOUT'></CustomeButton>
            </div>
        </div>
    );


export default CardDropdown;
