export const addToCart = (cartItems, newItem ) => {
    const isItemExist = cartItems.find( item => item.id === newItem.id)

    if(isItemExist) {
        return cartItems.map( item => 
            item.id === newItem.id 
            ? { ...item, quantity : item.quantity + 1 }
            : item
         )
    }

    return [ ...cartItems, {...newItem, quantity : 1}]
}