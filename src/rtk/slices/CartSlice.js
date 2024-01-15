import { createSlice } from "@reduxjs/toolkit";

export let cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            let findProduct = state.find((product) => {
                return product.id === action.payload.id;
            });
            if (findProduct) {
                findProduct.quantity += 1;
            } else {
                let clonedProduct = { ...action.payload, quantity: 1 };
                state.push(clonedProduct);
                console.log(clonedProduct);
            }
        },
        increaseamount: (state, action) => {
            let increaseamount = state.findIndex((product) => {
                return product.id === action.payload.id;
            });
            if (increaseamount >= 0) {
                state[increaseamount].quantity += 1;
            }
        },
        decreaseamount: (state, action) => {
            let decreaseamount = state.find((product) => {
                return product.id === action.payload.id;
            });
            if (decreaseamount.quantity > 1) {
                decreaseamount.quantity -= 1;
            }
        },
        removeItem: (state, action) => {
            return state.filter((product) => {
                return product.id !== action.payload.id;
            });
        },
        removeAllItems: (state, action) => {
            return (state = []);
        },
    },
});

export let { addToCart, increaseamount, decreaseamount, removeItem, getTotal, removeAllItems } = cartSlice.actions;

export default cartSlice.reducer;
