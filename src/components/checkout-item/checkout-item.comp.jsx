/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import './checkout-item.style.scss'
import {connect} from 'react-redux'
import {RemoveItem,ChangeQuantity} from './../../redux/cart/actions'
const CheckoutItem = ({item: {id,name,imageUrl,price,quantity},removeItem,changeQuantity }) => {
    // console.log({id,name,imageUrl,price,quantity});
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={ () => changeQuantity(id,-1) }>&#10134;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={ () => changeQuantity(id,1) }>&#10133;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick= {() => removeItem(id)}>
                &#10005;
            </div>
        </div>


    )
}
const mapDispatchToProps = dispatch => {
    return {
        removeItem : (item) => dispatch(RemoveItem(item)),
        changeQuantity : (id,amount) => dispatch(ChangeQuantity(id,amount))
    }
}
export default connect(null,mapDispatchToProps)(CheckoutItem)
