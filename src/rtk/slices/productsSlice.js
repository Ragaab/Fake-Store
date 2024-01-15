import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

export let productsfetch = createAsyncThunk("productsSlice/productsfetch", async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    return data;
});

let productsSlice = createSlice({
    initialState: [],
    name: "productsSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productsfetch.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export let {} = productsSlice.actions;

export default productsSlice.reducer;
