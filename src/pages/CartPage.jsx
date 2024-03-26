import EmptyCart from "../components/utils/EmptyCart";
import Cart from "../components/utils/Cart";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('sunflower_cartItems')));
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);
  const [note, setNote] = useState('');
  
  const removeProduct = (id) => {
    const updatedCartItems = { ...cartItems };
    delete updatedCartItems[id];
    localStorage.setItem('sunflower_cartItems', JSON.stringify(updatedCartItems));
    setProductList(productList.filter(item=>item._id!==id))
    setCartItems(updatedCartItems)
  } 

  const fetchProductData = async (id, quantity) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/products/${id}`);
      const productData = res.data.msg;
      productData.quantity = quantity;
      return productData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  useEffect(() => {
    const fetchCartData = async () => {
      const products = await Promise.all(Object.entries(cartItems).map(async ([id, quantity]) => {
        return fetchProductData(id, quantity);
      }));
      setProductList(products.filter(product => product !== null));
    }

    if (cartItems) {
      fetchCartData();
    }
  }, []);

  useEffect(() => {
    const totalPrice = productList.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    setTotal(totalPrice);
  }, [productList]);

  return (
    <div className="w-full max-screen-2xl p-5 bg-white">
      {productList.length > 0 ? (
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

          {productList.map((item) => (
            <Cart 
              key={item._id} 
              product={item} 
              handleRemove={removeProduct}
              setProductList ={setProductList}
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
                value={note}
              >
              </textarea>
            </div>
            <div className="text-gray-600">
              <h1 className="font-medium">Total</h1>
              <h2 className="font-medium"><span className="text-lg">&#8369;</span>{total.toLocaleString()} PHP</h2>
              <h3 className="tracking-widest text-sm mt-3">Taxes and shipping calculated at checkout</h3>
              <button className="bg-gray-700 text-sm font-medium tracking-widee text-slate-200 p-2 mt-3 w-full">CHECKOUT</button>
            </div>

          </div>
        </div>
      ) : (
        <h1 className="text-5xl text-center mt-5">Your cart is empty</h1>
      )}
      <EmptyCart />
    </div>
  );
};

export default CartPage;
