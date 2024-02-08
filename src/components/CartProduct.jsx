"use client";
import React from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  deleteToCart,
  incrementQty,
} from "@/redux/slices/cartSlice";
import { toast } from "react-hot-toast";
const CartProduct = ({ cartItem }) => {
  const dispath = useDispatch();
  const handleItemDelete = (cartId) => {
    dispath(deleteToCart(cartId));
    toast.success("Item removed Successfully");
  };
  const handleIncrementQty = (cartId) => {
    dispath(incrementQty(cartId));
  };
  const handleDecrementQty = (cartId) => {
    dispath(decrementQty(cartId));
  };
  return (
    <div className="flex gap-4 items-center justify-between border-b font-semibold pb-3 text-sm">
      <div className="flex items-center gap-4">
        <Image
          src={cartItem.image}
          alt={cartItem.title}
          width={249}
          height={249}
          className="rounded w-20 h-20"
        />
      </div>
      <div>
        <h1>{cartItem.title}</h1>
      </div>
      <div className="rounded-xl flex gap-4 border ">
        <button
          className="border-r px-4 py-2"
          onClick={() => handleDecrementQty(cartItem.id)}
        >
          <Minus />
        </button>
        <p className="flex-grow flex items-center "> {cartItem.qty} </p>
        <button
          className="border-l px-4 py-2 "
          onClick={() => handleIncrementQty(cartItem.id)}
        >
          <Plus />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <h1>{cartItem.price}</h1>
        <button
          className="text-red-500"
          onClick={() => handleItemDelete(cartItem.id)}
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
