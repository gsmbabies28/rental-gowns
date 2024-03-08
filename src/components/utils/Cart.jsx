import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import axios from "axios";
const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const Cart = ({id, quantity, handleRemove}) => {

  const [ currentQuantity, setQuantity ] = useState(quantity)
  const [ product , setProduct] = useState('')
  console.log(product)
  useEffect(()=> {
      axios.get(`${import.meta.env.VITE_APP_API_URL}/products/${id}`)
      .then(res=>setProduct(res.data.msg))
  }, [] )

  return (
    <div className="w-full h-full mt-5">
      <div id="product-list" className="space-y-5 mt-5">
        <div className="relative grid grid-cols-3 md:grid-cols-4 justify-items-end sm:justify-items-center space-x-4">
          <div className="w-full md:col-span-2 md:flex space-x-4 text-left items-start">
            <img
              className="bg-fit"
              width={150}
              height={150}
              src={`${import.meta.env.VITE_APP_API_URL}/${product.img}`}
              alt='image'
            />
            <div id="description" className="hidden sm:hidden md:block">
              <p>{product.name}</p>
              <p>Php {product.price}</p>
              <p>Color: {product.color}</p>
              <p>Size: {product.size}</p>
            </div>
          </div>

          <div className="sm:flex col-span-2 md:col-span-1 justify-self-start text-left space-y-3">
            <div id="description" className="md:hidden">
              <p>{product.name}</p>
              <p>Php {product.price}</p>
              <p>Color: brown</p>
              <p>Size: medium</p>
            </div>

            <div className="flex items-center justify-between md:items-start space-x-2">
              <div className="flex items-baseline gap-4">
                <div className="flex justify-between border-[1px] border-gray-600 px-2 py-1 w-full space-x-4">
                  <button>
                    <span className="text-2xl">-</span>
                  </button>
                  <input
                    id="quantity"
                    type="number"
                    className="text-center appearance-none form-input rounded border-0 w-full max-w-10"
                    min="1"
                    value={currentQuantity}
                    onChange={((e)=>setQuantity(e.target.value))}
                  />
                  <button>
                    <span className="text-2xl">+</span>
                  </button>
                </div>
                <div className="justify-self-center">
                  <button type="button" onClick={() => handleRemove(product._id)}>
                    <IoTrashOutline />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0">{product.price * quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
