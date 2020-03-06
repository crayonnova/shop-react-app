
import userReducer from './user/user.reducer'
import { combineReducers } from 'redux'
import cartReducer from './cart/reducer'


export default combineReducers({
    user : userReducer,
    cart : cartReducer
})