import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice"

const CartStore=configureStore({
    reducer:{
        cart:cartReducer,

    }
})
export default CartStore;