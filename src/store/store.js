import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';

import cardReducer from "../store/cartSlice"
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key:"root",
    version:1,
    storage
}

const reducer  = combineReducers({
    cart: cardReducer
}) 

const persistedReducer = persistReducer(persistConfig,reducer)

const store = configureStore({
    reducer:persistedReducer
})

export default store
export const persistor = persistStore(store)