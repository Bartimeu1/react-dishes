import { configureStore } from "@reduxjs/toolkit";  

import { productApi } from "./products/products.api";
import controlsReducer from "./controls/controls";
import cartReducer from "./cart/cart";


export const store = configureStore({
  reducer: {
    [productApi.reducerPath] : productApi.reducer,
    controls: controlsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productApi.middleware)
})