import { combineReducers } from "redux";
import LocationReducer from "./LocationReducer";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";

const rootReducers = combineReducers({
    product: ProductReducer,
    location: LocationReducer,
    cart: CartReducer
})

export default rootReducers
