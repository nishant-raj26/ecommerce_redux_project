"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import toast, { Toaster } from 'react-hot-toast';

const Providers = ({ children }) => {
  return <Provider store={store}>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    {children}</Provider>;
};

export default Providers;
