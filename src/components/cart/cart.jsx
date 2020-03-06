import React from 'react';
import './cart.style.scss'
import { connect } from 'react-redux'
import { ToggleCartDropdown } from './../../redux/cart/actions'

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-cart.svg'
const ShoppingCart = ( { ToggleCartDropdown } ) => {
    console.log(ToggleCartDropdown);
    return (
            <div className='cart-icon' onClick= {() => ToggleCartDropdown() }>
                <ShoppingIcon className='shopping-icon' />
                <span className='item-count'> 0 </span>
            </div>
        
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        ToggleCartDropdown : () => dispatch(ToggleCartDropdown())
    }
}

export default connect(null,mapDispatchToProps)(ShoppingCart);
