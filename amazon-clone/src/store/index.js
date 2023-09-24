import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import products from "./ProductsSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products,
  },
});
