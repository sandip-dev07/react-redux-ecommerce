import {configureStore} from '@reduxjs/toolkit'
import productSlice from './reducer/productSlice'

//redux-persist:
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
    products: productSlice
});
const persistedReducer = persistReducer(persistConfig, reducer);


//toolkit store:
const store = configureStore({
    // reducer:{
    //     products: productSlice
    // }
    reducer:persistedReducer
})

export default store;
