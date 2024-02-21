import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
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

const Cart = () => {
  return (
    <div className="bg-white-200 mt-6 sm:mt-12 mx-auto text-center w-full max-w-screen-lg sm:p-5">
      <div className="flex justify-between align items-end">
        <h1 className="text-4xl">Your cart</h1>
        <Link to="/collections/all" className="underline underline-offset-4">
          Continue shopping{" "}
        </Link>
      </div>
    
      {/* Cart list container */}

      <div className="w-full h-full mt-5">

          <div className="flex justify-between text-sm text-gray-500 text-left gap-6">
            <span className="w-full">PRODUCT</span>
            <span className="w-full"></span>
            <span className="hidden sm:block w-full text-left">QUANTITY</span>
            <span className="w-full text-right">TOTAL</span>
          </div>

          <hr/>

          <div id="product-list" className="space-y-5 mt-5">

            <div className="relative grid grid-cols-3 md:grid-cols-4 justify-items-end sm:justify-items-center space-x-4">
            
              <div className="w-full md:col-span-2 md:flex space-x-4 text-left items-start">
                <img
                  className="bg-fit"
                  width={150}
                  height={150}
                  src={products[0].imageSrc}
                  alt={products[0].imageAlt}
                />
                <div id="description" className="hidden sm:hidden md:block">
                  <p>{products[0].name}</p>
                  <p>{products[0].price}</p>
                  <p>Color: brown</p>
                  <p>Size: medium</p>
                </div>
              </div>

              <div className="sm:flex col-span-2 md:col-span-1 justify-self-start text-left space-y-3">
                
                <div id="description" className="md:hidden">
                  <p>{products[0].name}</p>
                  <p>{products[0].price}</p>
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
                        />
                        <button>
                          <span className="text-2xl">+</span>
                        </button>
                    </div>
                    <div className="justify-self-center"><button type="button"><IoTrashOutline /></button></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0">
                {products[0].price}
              </div>
            </div>

            {/* product 2 */}

            <div className="bg-gray-200 grid grid-cols-3 md:grid-cols-4 justify-items-end sm:justify-items-center space-x-4">
            
            <div className="w-full">
              <img
                className="bg-fit"
                width={150}
                height={150}
                src={products[0].imageSrc}
                alt={products[0].imageAlt}
              />
            </div>

            <div className="sm:flex sm:justify-between col-span-2 justify-self-start  text-left space-y-3">
              <div id="description">
                <p>{products[0].name}</p>
                <p>{products[0].price}</p>
                <p>Color: brown</p>
                <p>Size: medium</p>
              </div>

              <div className="flex items-center justify-between space-x-2">
              <div className="flex justify-between border-[1px] border-gray-600 px-2 py-1 w-full space-x-4">
                  <button>
                    <span className="text-2xl font-bold">-</span>
                  </button>
                  <input
                    id="quantity"
                    type="number"
                    className="text-center appearance-none form-input rounded border-0 w-full max-w-10"
                    min="1"
                  />
                  <button>
                    <span className="text-2xl font-bold">+</span>
                  </button>
                </div>
                <div><button type="button"><IoTrashOutline /></button></div>
              </div>
            </div>

            <div className="absolute sm:right-10">
              <p>{products[0].price}</p>
            </div>
            </div>
          </div>
          
      </div>    
     
    </div>
  );
};

export default Cart;
