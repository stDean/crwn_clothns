import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/user.slice";
import cartReducer from "./cart/cart.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
})