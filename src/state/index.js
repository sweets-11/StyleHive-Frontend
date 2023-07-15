import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
  name: localStorage.getItem("name"),
  email: localStorage.getItem("email"),
  pic: localStorage.getItem("pic"),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    login: (state, action) => {
      const { name, email } = action.payload;
      state.name = localStorage.setItem("name", name);
      state.email = localStorage.setItem("email", email);
    },
    logout: (state) => {
      state.name = localStorage.removeItem("name");
      state.email = localStorage.removeItem("email");
      localStorage.clear();
    },
    profile: (state, action) => {
      const { pic } = action.payload;
      state.pic = localStorage.setItem('pic', pic);
    },

    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  login,
  logout,
  removeFromCart,
  increaseCount,
  decreaseCount,
  profile,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
