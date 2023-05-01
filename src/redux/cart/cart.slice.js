import { createSlice, createSelector } from "@reduxjs/toolkit";

import { addItemToCart, removeItemFromCart } from "./cart.utils";

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
    },
    REMOVE_CART_ITEM: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload)
    },
    CLEAR_CART_ITEM: (state, action) => {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
    }
  }
});

export const selectCartItems = (state) => state.cart.cartItems

export const selectCartItemsCount = createSelector(
  [selectCartItems], cartItems => (
    cartItems?.reduce((accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity, 0)
  )
);

// from the cartItem, get the sum total of the price in the cart by summing the accumulatedValue and the product of cartItem quantity and price.
export const selectCartTotal = createSelector(
  [selectCartItems], cartItems => (
    cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + (cartItem.quantity * cartItem.price), 0)
  )
)

export const { TOGGLE_CART_HIDDEN, ADD_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART_ITEM } = CartSlice.actions;

export default CartSlice.reducer;