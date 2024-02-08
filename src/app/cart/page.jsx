"use client";
import CartProducts from "@/components/CartProduct";
import { useSelector } from "react-redux";
import React from "react";
import Link from "next/link";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart);
  const totalPrice = cartItems.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.qty;
  }, 0);
  // console.table(cartItem);
  return (
    <div className="px-20 py-16">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="grid grid-cols-12 gap-14 ">
        <div className="col-span-8">
          <h2>Your Cart</h2>
          <div className="flex items-center justify-between border-b font-semibold text-sm mb-4 text-center  ">
            <h2> Product </h2>
            <h2> Quantity </h2>
            <h2> Price </h2>
          </div>
          <div className="flex flex-col justify-between">
            {cartItems.length > 0 ? (
              cartItems.map((item, i) => {
                return <CartProducts key={i} cartItem={item} />;
              })
            ) : (
              <p>Go back to shopping first..</p>
            )}
          </div>
        </div>
        {/* left */}
        <div className="col-span-4  ">
          <div className="flex flex-col gap-4">
            <div className="flex justify-around">
              <span>Cart Total</span>
              <span>$ {totalPrice}</span>
            </div>

            {/* <div className="flex justify-around">
              <span>Quantity Total</span>
              <span>Quantity_Total_numeric</span>
            </div> */}

            <div className="flex justify-around">
              <span>Shipping Charges </span>
              <span>Shipping_charges_numeric</span>
            </div>
            <div className="border-b-2" />
            <div className="flex justify-around font-bold italic">
              <span>Total Bill </span>
              <span>Total_Bill_numeric</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
