import React from "react";
import Link from "next/link";
import ProductList from "@/components/ProductList";
import { getData } from "@/lib/getData";
import CartCount from "@/components/CartCount";
const HomePage = async () => {
  const products = (await getData("https://fakestoreapi.com/products")) ?? [];

  return (
    <div className="px-20 py-14 ">
      <h1 className="text-4xl font-bold "> e-store</h1>
      <div className="pt-5">
        <div className="bg-white border border-gray-300 rounded-lg  dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
          <div className="bg-slate-100 dark:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100 flex justify-between items-center">
            <h1 className="px-6 py-3 font-bold text-white">Products</h1>
            <Link
              className="bg-lime-600 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
              href={"/cart"}
            >
              Go To Cart (<CartCount />)
            </Link>
          </div>
          <div>
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
