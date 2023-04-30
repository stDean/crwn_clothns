import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null
}

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_CURRENT_USER: (state, action) => {
      state.currentUser = action.payload
    }
  }
});

export const { SET_CURRENT_USER } = UserSlice.actions;

export default UserSlice.reducer;