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

export const removeItemFromCart = (cartItems, id) => { 
    const newArray = cartItems.filter(item => item.id !== id) 
    return newArray
}

export const ChangeItem = (cartItems, id, amount) => {
    console.log({cartItems,id,amount})
    return cartItems.map( item => 
        item.id === id ?
        {...item, quantity : item.quantity + amount}
        :
        item
        )
    
}
