import React from 'react';
import './cart.style.scss'
import { connect } from 'react-redux'
import { ToggleCartDropdown } from './../../redux/cart/actions'

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-cart.svg'
const ShoppingCart = ( { ToggleCartDropdown,cardTotal } ) => {
    
    console.log('cardcardTotal',{cardTotal});
    return (
            <div className='cart-icon' onClick= {() => ToggleCartDropdown() }>
                <ShoppingIcon className='shopping-icon' />
                <span className='item-count'> {cardTotal} </span>
            </div>
        
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        ToggleCartDropdown : () => dispatch(ToggleCartDropdown())
    }
}
const mapStateToProps = ( {cart : { cartItems }} ) => {
    return {    
        cardTotal : cartItems.reduce( (accumulated , item) => accumulated + item.quantity , 0 )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);
