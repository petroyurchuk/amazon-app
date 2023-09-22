import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLs } from "../../utils/getCartFromLS";

const initialState = getCartFromLs();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const addProductExists = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }
      state.productsNumber += parseInt(action.payload.quantity);
    },
    removeFromCart(state, action) {
      const productCart = state.products.find(
        (product) => product.id === action.payload
      );
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.productsNumber -= productCart.quantity;
    },
    decrementInCart(state, action) {
      const productCart = state.products.find(
        (product) => product.id === action.payload
      );
      if (productCart.quantity > 1) {
        productCart.quantity -= 1;
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      }
      state.productsNumber -= 1;
    },
    incrementInCart(state, action) {
      const productCart = state.products.find(
        (product) => product.id === action.payload
      );
      if (productCart.quantity >= 1) {
        productCart.quantity += 1;
        state.productsNumber += 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, decrementInCart, incrementInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
