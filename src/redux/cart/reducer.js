import types from './types';
import {addToCart,removeItemFromCart,ChangeItem} from './card_util'

const INITITAL_STATE =  {
    isHidden : true,
    cartItems : []
}

const reducer = (state = INITITAL_STATE, action ) => { 
    switch (action.type) {
        case types.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                isHidden : !state.isHidden
            }
        case types.ADD_ITEM : 
            return {
                ...state,
                cartItems : addToCart(state.cartItems,action.payload)
            }
        case types.REMOVE_ITEM :
            return {
                ...state,
                cartItems : removeItemFromCart(state.cartItems,action.payload)
            }
        case types.CHANGE_ITEM :
            return {
                ...state,
                cartItems : ChangeItem(state.cartItems,action.payload.id,action.payload.amount)
            }
        
        default:
            return state;
    }
}

export default reducer;