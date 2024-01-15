import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/CartSlice";

export let store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
    },
});
