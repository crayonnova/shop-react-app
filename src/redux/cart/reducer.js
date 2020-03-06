import types from './types';

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
                cartItems : [
                    ...state.cartItems,
                    action.payload
                ]
            }
        default:
            return state;
    }
}

export default reducer;