import {configureStore} from '@reduxjs/toolkit'
import productSlice from './reducer/productSlice'

const store = configureStore({
    reducer:{
        products: productSlice
    }
})

export default store;
