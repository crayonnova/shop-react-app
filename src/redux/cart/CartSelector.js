import {createSelector} from 'reselect'

const selectCart = state => state.cart

export const selectIsHidden = createSelector(
    [selectCart] ,
    cart => cart.isHidden
)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

// console.log(selectCartItems)
          

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulated , item) => 
                accumulated + item.quantity , 0 
        )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulated , item) => 
                accumulated + item.quantity * item.price, 0 
        )
)