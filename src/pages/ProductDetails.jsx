import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProducDetailsTable from "../components/utils/ProducDetailsTable";
import UserContext from '../UseContext/UserContext'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { handleAddToCart } from "../functionsAndHandlers/ProductDetails";

const ProductDetails = () => {
  const param = useParams();
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { isLogged, setIsLogged } = useContext(UserContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { setIsEmptyCart,setExpirationTime } = useContext(UserContext)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}/products/details/${param.name}`)
      .then((res) => {
        setProduct(res.data.msg);
        setIsLoading(false);
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(true));

    return () => setIsLoading(true);
  }, []);

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">

      <div className="container px-5 py-8 mx-auto">

        <div className="sm:w-4/5 w-full grid lg:grid-cols-5 gap-3 mx-auto">

          <div className="w-full flex lg:flex-col justify-center items-end flex-row order-2 lg:order-1">
            <div 
              className="w-1/2 object-cover object-center rounded border border-gray-200 order-1 lg:order-2 cursor-pointer"
              onClick={()=>alert('hi')}
            >
              <img
                alt="ecommerce"
                src={`${import.meta.env.VITE_APP_API_URL}/images/${product.img}`}
              /> 
            </div>
            <div className="w-1/2 object-cover object-center rounded border border-gray-200 order-1 lg:order-2 cursor-pointer">
              <img
                alt="ecommerce"
                src={`${import.meta.env.VITE_APP_API_URL}/images/${product.img}`}
              /> 
            </div>
            <div className="w-1/2 object-cover object-center rounded border border-gray-200 order-1 lg:order-2 cursor-pointer">
              <img
                alt="ecommerce"
                src={`${import.meta.env.VITE_APP_API_URL}/images/${product.img}`}
              /> 
            </div>
          </div>

          <div className="w-full object-cover object-center rounded border border-gray-200 lg:col-span-2 order-1 lg:order-2">
            { isLoading ?
            <Skeleton className="h-full"/> 
            :
            <img
            alt="ecommerce"
            src={`${import.meta.env.VITE_APP_API_URL}/images/${product.img}`}
            /> 
            }
          </div>

          <div className="w-full lg:pl-10 lg:py-2 mt-6 lg:mt-0 order-3 lg:col-span-2">
            <h2 className="text-sm title-font font-bold text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">
              {product.name}
            </h1>
            <span className="title-font font-medium text-3xl text-gray-600">
                &#8369;{product.price}
            </span>

            <div className="flex mb-4"></div>

            <div className="leading-relaxed">
              <h1 className="text-2xl bold mb-5">Details</h1>
              <ProducDetailsTable details={product.details} />
            </div>

            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex ml-1 items-center">
                <span className="mr-3">SIZE</span>
                <span className="border-2 py-2 px-3">
                  {product?.size?.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-items-center gap-10">
              <button
                onClick={() => handleAddToCart(product._id, isLogged, setIsLogged, setIsButtonDisabled, setIsEmptyCart,setExpirationTime)}
                disabled = {isButtonDisabled}
                className="w-full ml-auto text-cyan-100 text-xl font-medium bg-cyan-900 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded tracking-wider"
              >
                Add To Cart
              </button>
              <Link to="/collections/all" className="text-center text-xl underline underline-offset-8 decoration-solid tracking-wider">Shop More</Link>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ProductDetails;
