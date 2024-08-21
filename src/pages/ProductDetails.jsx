import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProducDetailsTable from "../components/utils/ProducDetailsTable";
import { handleAddToCart } from "../functionsAndHandlers/ProductDetails";
import UserContext from '../UseContext/UserContext'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

const ProductDetails = () => {
  const param = useParams();
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { isLogged } = useContext(UserContext)


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
        <div className="lg:w-4/5 mx-auto flex flex-wrap">

          <div className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200">
            { isLoading ?
            <Skeleton className="h-full"/> 
            :
            <img
            alt="ecommerce"
            src={`${import.meta.env.VITE_APP_API_URL}/images/${product.img}`}
            /> 
            }
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-2 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>

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

            <div className="flex">
              <span className="title-font font-small text-2xl text-gray-600">
                &#8369;{product.price}
              </span>
              <button
                onClick={() => handleAddToCart(product._id, isLogged)}
                className="flex ml-auto text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded"
              >
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
  );
};

export default ProductDetails;
