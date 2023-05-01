import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/user.slice";
import cartReducer from "./cart/cart.slice";
import ShopReducer from "./shop/shop.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    shop: ShopReducer
  },
})