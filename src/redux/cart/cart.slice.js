import { createSlice, createSelector } from "@reduxjs/toolkit";

import { addItemToCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: []
}

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    TOGGLE_CART_HIDDEN: (state) => {
      state.hidden = !state.hidden;
    },
    ADD_CART_ITEM: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload)
    }
  }
});

export const selectCartItems = (state) => state.cart.cartItems

export const selectCartItemsCount = createSelector(
  [selectCartItems], cartItems => (
    cartItems?.reduce((accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity, 0)
  )
)

export const { TOGGLE_CART_HIDDEN, ADD_CART_ITEM } = CartSlice.actions;

export default CartSlice.reducer;