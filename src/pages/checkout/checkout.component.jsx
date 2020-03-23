import React from 'react'
import './checkout.style.scss'
import {connect} from 'react-redux'
import {selectCartItems,selectCartTotal} from './../../redux/cart/CartSelector'
import {Link} from 'react-router-dom'
import CheckoutItem from './../../components/checkout-item/checkout-item.comp'
import { withRouter } from 'react-router-dom'
const Checkout = (props) => {
    console.log('this is props',props);
    const {cartItems,total} = props;

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
                    <h1 className='empty-message'>No item yet <Link to='/shop'>continue shopping</Link> </h1>
                    :
                cartItems.map( (item,index) => (
                    <CheckoutItem key={index} item={item} />
                ))
            }
           { cartItems.length === 0 ? null: 
            <div className='total'>
                Total : $
                {
                    total
                }
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems : selectCartItems(state),
        total : selectCartTotal(state)
    }
}


export default withRouter(connect(mapStateToProps,null)(Checkout))
