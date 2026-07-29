import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      state.isCartOpen = true;
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (product) => product.id !== action.payload
        );
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.items = [];
    },

    openCart: (state) => {
      state.isCartOpen = true;
    },

    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  openCart,
  closeCart,
} = cartSlice.actions;

export default cartSlice.reducer;