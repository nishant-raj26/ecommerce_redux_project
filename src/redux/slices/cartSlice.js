"use client";
import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     qty: 1,
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     qty: 2,
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     qty: 4,
//   },
// ];

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push({ id, title, price, image, qty: 1 });
      }
    },
    deleteToCart: (state, action) => {
      const cartId = action.payload;
      return state.filter((item) => item.id !== cartId);
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const existingItem = state.find((item) => item.id === cartId);
      if (existingItem) {
        existingItem.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const existingItem = state.find((item) => item.id === cartId);
      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1;
      }
    },
  },
});

export const { addToCart, deleteToCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
