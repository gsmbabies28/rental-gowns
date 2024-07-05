import EmptyCart from "../components/utils/EmptyCart";
import Cart from "../components/utils/Cart";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useReducer, useState } from "react";
import CartPageReducer, { fetchProductData }  from "../reducers/CartPage";


const CartPage = () => {
  const [state, dispatch] = useReducer(CartPageReducer, {cartItems:JSON.parse(localStorage.getItem('sunflower_cartItems')), productList:[],note:''});
  const [expirationTime , setExpirationTim] = useState(new Date(JSON.parse(localStorage.getItem('time'))));
  const [remainingTime, setRemainingTime] = useState(expirationTime - Date.now());
  
  const removeProduct = (id) => {
    dispatch({type:"removeItem", id:id})
  };
  
  const changeQuantity = ( num, id, currentQuantity, operator ) => {
    dispatch({type:"changeQuantity", num:num, id:id, currentQuantity:currentQuantity, operator:operator})
  }

  useEffect(() => {
    if (state.cartItems) {
      fetchProductData(state.cartItems)
        .then( res => dispatch( { type:"addProducts", products: res } ) )
        .catch( error => console.log( error ) );
    }
  }, []);

  useEffect(() => {
    if(!state.cartItems)
        return ;
    const timer = setInterval(() => {
        const now = Date.now();
        const timeLeft = expirationTime - now;

        if (timeLeft <= 0) {
            // Timer has expired
            clearInterval(timer);
            setRemainingTime(0); 
            localStorage.clear();
            dispatch({type:"setEmpty"})
        } else {
            setRemainingTime(timeLeft);
        }
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  const totalPrice = useMemo(() => {
    const totalPrice = state.productList?.reduce((acc, product) => acc + (product?.price * product?.quantity), 0);
    return totalPrice;
  }, [state.productList]); 

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="w-full max-screen-2xl p-5 bg-white static">
      {state.productList?.length > 0 ? (
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

          {state.productList?.map((item) => (
            <Cart 
              key={item?._id} 
              product={item} 
              handleRemove={removeProduct}
              changeQuantity = { changeQuantity }

            />
          ))}

          <div className="mt-3 w-full  border-t-2 pt-5 space-y-5">
            <div className="space-y-3">
              <label 
                htmlFor="note"
                className="text-gray-500 text-sm tracking-widest "
              >
                LEAVE A NOTE WITH YOUR ORDER
              </label>
              <textarea 
                id="note" className="p-2 text-gray-600 w-full h-28 border"
                onChange={(e)=>setNote(e.target.value)}
                value={state.note}
              >
              </textarea>
            </div>
            <div className="text-gray-600">
              <h1 className="font-medium">Total</h1>
              <h2 className="font-medium"><span className="text-lg tracking-widest">&#8369;</span> {totalPrice.toLocaleString()} PHP</h2>
              <h3 className="tracking-widest text-sm mt-3">Taxes and shipping calculated at checkout</h3>
              <button className="bg-gray-700 text-sm font-medium tracking-widest text-slate-200 p-2 mt-3 w-full">CHECKOUT</button>
            </div>

          </div>
        </div>
      ) : (
        <h1 className="text-5xl text-center mt-5">Your cart is empty</h1>
      )}
      <EmptyCart />
      {remainingTime > 0 && (<div className="absolute bottom-0 right-[60px] p-3 bg-cyan-200"> Expires in {formatTime(remainingTime)}</div>)}
    </div>
  );
};



export default CartPage;
