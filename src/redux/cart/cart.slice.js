import { createSlice } from "@reduxjs/toolkit";

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
    }
  }
});

export const { TOGGLE_CART_HIDDEN } = CartSlice.actions;

export default CartSlice.reducer;