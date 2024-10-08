import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";


const Cart = ({ product, handleRemove, changeQuantity } ) => {

  const { productID:{_id, name, img, price, color, size}, quantity } = product;
  const subTotal = (price * quantity );
  // console.log(product);
  return (
    <div className="w-full h-full mt-5">
      <div id="product-list" className="space-y-5 mt-5">
        <div className="relative grid grid-cols-3 md:grid-cols-4 justify-items-end sm:justify-items-center space-x-4">
          <div className="w-full md:col-span-2 md:flex space-x-4 text-left items-start">
            <img
              className="bg-fit"
              width={150}
              height={150}
              src={`${import.meta.env.VITE_APP_API_URL}/images/${img}`}
              alt='image'
            />
            <div id="description" className="hidden sm:hidden md:block">
              <p>{name}</p>
              <p>Php {(price||0)}</p>
              <p>Color: {color}</p>
              <p>Size: {size}</p>
            </div>
          </div>

          <div className="sm:flex col-span-2 md:col-span-1 justify-self-start text-left space-y-3">
            <div id="description" className="md:hidden">
              <p>{name}</p>
              <p>Php {price||0}</p>
              <p>Color: brown</p>
              <p>Size: medium</p>
            </div>

            <div className="flex items-center justify-between md:items-start space-x-2">
              <div className="flex items-baseline gap-4">
                <div className="flex justify-between border-[1px] border-gray-600 px-2 py-1 w-full space-x-4">
                  <button onClick={()=> changeQuantity(1, _id, quantity, '-')}>
                    <span className="text-2xl">-</span>
                  </button>
                  <input
                    id="quantity"
                    type="number"
                    className="text-center appearance-none form-input rounded border-0 w-full max-w-10"
                    value={quantity}
                    onChange={e=>changeQuantity(e.target.value, _id, quantity, 'input')}
                  />
                  <button onClick={()=> changeQuantity(1, _id, quantity, '+')}>
                    <span className="text-2xl">+</span>
                  </button>
                </div>
                <div className="justify-self-center">
                  <button type="button" onClick={() => handleRemove(_id)}>
                    <IoTrashOutline title="delete" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-total absolute top-0 right-0">{subTotal.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
