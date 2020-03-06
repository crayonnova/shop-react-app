import {SET_CURRENT_USER} from './user.types'
const INI_STATE = {
    currentUser : null
}

const userReducer = (state = INI_STATE , action)=> {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser : action.payload
            }
    
        default:
            return state
            
    }
}

export default userReducer;