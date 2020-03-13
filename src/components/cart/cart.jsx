import React from 'react';
import './cart.style.scss'
import { connect } from 'react-redux'
import { ToggleCartDropdown } from './../../redux/cart/actions'
import { selectCartItemsCount } from './../../redux/cart/CartSelector'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-cart.svg'
const ShoppingCart = ( { ToggleCartDropdown,cardTotal } ) => {
    
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

const mapStateToProps = createStructuredSelector({
    cardTotal : selectCartItemsCount
})


export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);
