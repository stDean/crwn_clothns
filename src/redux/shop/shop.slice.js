import { createSlice, createSelector } from "@reduxjs/toolkit";

// import SHOP_DATA from "./shop.data.js";

const initialState = {
  collections: null
}

export const ShopSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    UPDATE_COLLECTIONS: (state, action) => {
      state.collections = action.payload;
    }
  }
});

export const { UPDATE_COLLECTIONS } = ShopSlice.actions;

export const selectCollections = (state) => state.shop.collections;

/**
 * Get the keys as an array
 * then map through it, then from the collections get the content of the particular key
 * say key is hats give me collections[hats]
 */
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : [] // Verifying if there is no value
);

// Use this when you have converted the shop data to an object. 
// storing data as objects === data normalization.
export const selectCollection = collectioUrlParam => createSelector(
  [selectCollections],
  collections => (collections ? collections[collectioUrlParam] : null)
);

export default ShopSlice.reducer;