import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddItemToCart = () => {
    dispatch(addToCart(product));
    toast.success("Successfully toasted!");

    // console.table(product);
  };

  return (
    <div className="rounded-lg mr-3 bg-white dark:bg-slate-900 overflow-hidden border shadow">
      <Link href={"#"}>
        <Image
          src={product.image}
          alt="product.image"
          width={556}
          height={556}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="px-4">
        <Link href={"#"}>
          <h2 className="text-white text-center font-semibold ">
            {" "}
            {product.title}{" "}
          </h2>
        </Link>
      </div>
      <div className="flex justify-around items-center pb-4 pt-2 ">
        <div>
          {" "}
          <h1 className="text-white font-bold "> ${product.price} </h1>{" "}
        </div>
        <div>
          {" "}
          <button
            className="text-white px-4 py-2 rounded-lg bg-green-600 font-bold "
            onClick={() => handleAddItemToCart()}
          >
            Add
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Product;
