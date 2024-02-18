import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import cartReducer from "./carts/cartReducer";
import pageReducer from "./page/pageReducer";

const rootReducer = combineReducers({
    products: productReducer,
    pages: pageReducer,
    carts: cartReducer,
})

export default rootReducer