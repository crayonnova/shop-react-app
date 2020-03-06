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

