import ProductFeatured from "./ProductFeatured"
import NewArrivalProduct from "./NewArrivalProduct"
import VideoProducts from "./VideoProducts"
import Testimonials from "./Testimonials"
import axios from 'axios'
import { useEffect, useState } from "react";

const Featured = () => {
  const[productsFeatured, setProductsFeatured] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    //get featured products
    axios.get(`${import.meta.env.VITE_APP_API_URL}/products/featured/all`)
    .then(res=>{
      setProductsFeatured(res.data.msg);
      setLoading(false);
    })
    .catch(err=>console.error(err));
    return ()=>{setLoading(true);}
  },[])
  
  return (
    <div className='mt-10 p-2'>

        <div>
            <h1 className='text-3xl md:text-5xl lg:text-5xl'>
                Obsessive Attention. Intelligent Effort.
            </h1>
            <p className='mt-5 lg:text-md tracking-wide'>
                Functional handbags made of luxurious materials to improve people's lives in small but mighty ways.
            </p>
        </div>
        <ProductFeatured loading={loading} products={productsFeatured}/>
        <NewArrivalProduct />
        <VideoProducts />
        <Testimonials />
    </div>

  )
}

export default Featured