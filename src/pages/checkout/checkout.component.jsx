import React from 'react'
import './checkout.style.scss'
import {connect} from 'react-redux'
import {selectCartItems,selectCartTotal} from './../../redux/cart/CartSelector'

import CheckoutItem from './../../components/checkout-item/checkout-item.comp'
const Checkout = (props) => {
    const {cartItems,total} = props;
    if(cartItems.length === 0){
        console.log('it is empty');
    }else{
        console.log('somethign');
    }
    return (
        <div className='checkout-page'>

            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Direction</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                (cartItems.length  === 0)?
                    <h1>Your cart is empty</h1>
                    :
                cartItems.map( (item,index) => (
                    <CheckoutItem key={index} item={item} />
                ))
            }
           
            <div className='total'>
                Total : $
                {
                    total
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems : selectCartItems(state),
        total : selectCartTotal(state)
    }
}


export default connect(mapStateToProps,null)(Checkout);
