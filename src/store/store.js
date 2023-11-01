import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "../store/cartSlice"

const store = configureStore({
    reducer:{
        cart: cardReducer,
    }
})

export default store