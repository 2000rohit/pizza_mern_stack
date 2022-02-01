import { combineReducers } from 'redux'
import getAllPizzasReducer from './pizzaReducers'
import { cartReducer } from './cartReducers'
import { registerUserReducer, loginUserReducer } from './userReducer'

const rootReducer = combineReducers({
  getAllPizzasReducer,
  cartReducer,
  registerUserReducer,
  loginUserReducer,
})
export default rootReducer
