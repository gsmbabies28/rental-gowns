import ProductFeatured from "./ProductFeatured";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import UserContext from "../../UseContext/UserContext";

function EmptyCart() {
  const[products, setProducts] = useState(null)
  const { isLogged } = useContext(UserContext);
  console.log(isLogged);
  useEffect( () => {
    //get featured products
    axios.get(`${import.meta.env.VITE_APP_API_URL}/products/alsoLikeProduct/all`)
    .then(res=>{
      setProducts(res.data.msg)
    })
    .catch(err=>console.error(err))
  },[]);

  return (
    <div className="bg-white mt-12 mx-auto text-center">
        <Link to={'/collections/all'}>
          <Button text="Continue shopping" margin="10" />
        </Link>
        {!isLogged && <HaveAnAccount />}
        <div className="w-full text-left mt-12">
            <h1 className="text-center px-12 sm:px-20 w-full text-2xl">You may also like</h1>
            <ProductFeatured products={products} />
            <div className="mx-auto text-center mb-12">
                <Link to={'/collections/all'}>
                  <Button  text="View all" />
                </Link>
            </div>
        </div>
    </div>
  )
}

function HaveAnAccount () {
  return (
    <>
      <h1 className="mt-12 text-2xl">Have an account?</h1>
      <p className="text-lg mt-2 tracking-wide"><span className="underline underline-offset-4"><Link to="/account">Log in</Link></span> to check out faster. </p>
    </>
  );
}

export default EmptyCart