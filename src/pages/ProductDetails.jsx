import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  
  const param = useParams();
  const [product, setProduct] = useState('');
  console.log(param.name)
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}/products/details/${ param.name }`)
    .then(res=>setProduct(res.data.msg))
  },[]);

  const handleAddToCart = (id) => {
    const currentTime = Date.now();
    const expirationTime = currentTime + 1 * 60 * 1000;

    if(localStorage.length){
      let product = JSON.parse(localStorage.getItem('sunflower_cartItems'));
      product[id] = 1;  
      localStorage.setItem('sunflower_cartItems', JSON.stringify(product))
      localStorage.setItem('time', expirationTime)
    } else {
      const product = new Object();
      product[id] = 1;
      localStorage.setItem('sunflower_cartItems', JSON.stringify(product))
      localStorage.setItem('time', expirationTime)
    }
  }
  console.log(product)
  return (
    <>
      {/* component */}
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-8 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={`${import.meta.env.VITE_APP_API_URL}/images/${product.img}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-2 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div className="flex mb-4">
                
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <span className={`font-bold text-${product.color}-500`}>{product.color}</span>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  &#8369;{product.price}
                </span>
                <button
                  onClick={()=>handleAddToCart(product._id)}
                  className="flex ml-auto text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded">
                  Add to cart
                </button>
                
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
