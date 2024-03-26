import { forwardRef, useEffect, useState, useImperativeHandle } from "react";
import { IoTrashOutline } from "react-icons/io5";


const Cart = ({ product, handleRemove, setProductList } ) => {

  const [currentQuantity, setCurrentQuantity] = useState(product.quantity)

  const changeQuantity = (num,id,action) => {
   
    const currentCartItems = JSON.parse(localStorage.getItem('sunflower_cartItems'))
    const quantity = Number(num);
    let updatedQuantity = currentQuantity;
    switch(action){
      case "input":
        if(quantity<=0){
          updatedQuantity = 1;
        } else {
          updatedQuantity = quantity;
        }
        break;
      case "+":
        updatedQuantity += 1
        break;
      case "-":
        if(currentQuantity<=1){
          return
        }
        updatedQuantity-=1;
      default:
        updatedQuantity = 1;
    }
    console.log(updatedQuantity);
    setCurrentQuantity(updatedQuantity);
    currentCartItems[id] = Number(updatedQuantity);
    setProductList(prev=>prev.map(elem=>{
      if(elem._id === id) {
        return {...elem, quantity:updatedQuantity}
      } else {
        return elem
      }
    }));
    localStorage.setItem('sunflower_cartItems',JSON.stringify(currentCartItems))
  }
  const subTotal = (product.price * currentQuantity)
  return (
    <div className="w-full h-full mt-5">
      <div id="product-list" className="space-y-5 mt-5">
        <div className="relative grid grid-cols-3 md:grid-cols-4 justify-items-end sm:justify-items-center space-x-4">
          <div className="w-full md:col-span-2 md:flex space-x-4 text-left items-start">
            <img
              className="bg-fit"
              width={150}
              height={150}
              src={`${import.meta.env.VITE_APP_API_URL}/${product?.img}`}
              alt='image'
            />
            <div id="description" className="hidden sm:hidden md:block">
              <p>{product?.name}</p>
              <p>Php {(product?.price)}</p>
              <p>Color: {product?.color}</p>
              <p>Size: {product?.size}</p>
            </div>
          </div>

          <div className="sm:flex col-span-2 md:col-span-1 justify-self-start text-left space-y-3">
            <div id="description" className="md:hidden">
              <p>{product?.name}</p>
              <p>Php {product?.price}</p>
              <p>Color: brown</p>
              <p>Size: medium</p>
            </div>

            <div className="flex items-center justify-between md:items-start space-x-2">
              <div className="flex items-baseline gap-4">
                <div className="flex justify-between border-[1px] border-gray-600 px-2 py-1 w-full space-x-4">
                  <button onClick={()=> changeQuantity(1,product._id,'-')}>
                    <span className="text-2xl">-</span>
                  </button>
                  <input
                    id="quantity"
                    type="number"
                    className="text-center appearance-none form-input rounded border-0 w-full max-w-10"
                    value={currentQuantity}
                    onChange={e=>setCurrentQuantity(e.target.value)}
                    onBlur={(e) =>
                      changeQuantity(e.target.value, product._id,'input')
                    }
                  />
                  <button onClick={()=> changeQuantity(1,product._id,'+')}>
                    <span className="text-2xl">+</span>
                  </button>
                </div>
                <div className="justify-self-center">
                  <button type="button" onClick={() => handleRemove(product?._id)}>
                    <IoTrashOutline />
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
