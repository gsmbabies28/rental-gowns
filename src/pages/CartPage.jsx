import EmptyCart from "../components/utils/EmptyCart"
import Cart from "../components/utils/Cart"
import { useState } from "react";
import axios from 'axios'
const CartPage = () => {
  
  return (
    <div className='w-full max-screen-2xl p-5 bg-white'>
            <EmptyCart />
            {/* <Cart /> */}
       
    </div>
  )
}

export default CartPage