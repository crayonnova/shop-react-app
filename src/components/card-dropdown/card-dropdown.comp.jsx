import React from 'react';
import CustomeButton from './../custom-button/custom-button.component'
import CartItem from './../cart-item/CartItem.comp'
import { connect } from 'react-redux'

import './card-dropdown.style.scss'

const CardDropdown = ({cartItems}) => {
        
        return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map( item => {
                        return (<CartItem key={item.id} item={item} />)
                    })
                }
                
                <CustomeButton label='CHECKOUT'></CustomeButton>
            </div>
        </div>)
    
}
     
    const mapStateToProps  = ({ cart : {cartItems}}) => {
        return {cartItems}
    }

export default connect(mapStateToProps,null)(CardDropdown);
