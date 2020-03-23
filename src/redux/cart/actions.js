import types from './types'

export const ToggleCartDropdown = () => {
    return {
        type : types.TOGGLE_CART_DROPDOWN,
    }
}

export const AddItem = ( item ) => {
    return {
        type : types.ADD_ITEM,
        payload : item
    }
}

export const RemoveItem = id => ({
    type : types.REMOVE_ITEM,
    payload : id
})

export const ChangeQuantity = (id,amount) => ({
    type : types.CHANGE_QUANTITY,
    payload : {id,amount}
})