import EmptyCart from "../components/utils/EmptyCart";
import Cart from "../components/utils/Cart";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = JSON.parse(localStorage.getItem("sunflower_cartItems"));
  let productsList=[];
  for(let prop in cartItems){
    productsList.push(<Cart key={prop} id={prop} quantity={cartItems[prop]} />)
  }

  return (
    <div className="w-full max-screen-2xl p-5 bg-white">
      {!cartItems && (
        <h1 className="text-5xl text-center mt-5">Your cart is empty</h1>
      )}
      <div className="bg-white-200 mt-6 sm:mt-12 mx-auto text-center w-full max-w-screen-lg sm:p-5">
        <div className="flex justify-between align items-end">
          <h1 className="text-4xl">Your cart</h1>
          <Link to="/collections/all" className="underline underline-offset-4">
            Continue shopping
          </Link>
        </div>

        <div className="mt-8 flex justify-between text-sm text-gray-500 text-left gap-6">
          <span className="w-full">PRODUCT</span>
          <span className="w-full"></span>
          <span className="hidden sm:block w-full text-left">QUANTITY</span>
          <span className="w-full text-right">TOTAL</span>
        </div>

        <hr />
        
        {productsList.map(item=>item)}

      </div>
      <EmptyCart />
    </div>
  );
};

export default CartPage;
