import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
// import numberSlice from "../features/numberSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});