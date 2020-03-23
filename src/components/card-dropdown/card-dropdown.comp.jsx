import React from 'react';
import CustomeButton from './../custom-button/custom-button.component'
import CartItem from './../cart-item/CartItem.comp'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/CartSelector'
import { createStructuredSelector } from 'reselect'
import {ToggleCartDropdown} from './../../redux/cart/actions'
import {withRouter} from 'react-router-dom'

import './card-dropdown.style.scss'

const CardDropdown = ({cartItems,history,dispatch}) => {
        // const {cartItems,history,ToggleCartDropdown} = props;
        
        return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                
                {
                    cartItems.length ?
                    cartItems.map( item => {
                        return (<CartItem key={item.id} item={item} />)
                    })
                    : 
                    <span> no item yet!</span>
                }
                
            </div>
                <CustomeButton onClick={ () => { history.push(`checkout`); dispatch(ToggleCartDropdown())} } label='CHECKOUT'></CustomeButton>
        </div>)
    
}

    const mapStateToProps  = createStructuredSelector({ cartItems : selectCartItems })

export default withRouter(connect(mapStateToProps,null)(CardDropdown));
