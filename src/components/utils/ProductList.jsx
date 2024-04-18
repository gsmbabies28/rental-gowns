import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
const ProductList = ({product}) => {
 
  return (
    <>
      <Link 
        key={product._id} 
        to={`../../products/${product.name?.replace(/\s/g, '-')}`}  
        relative="path" 
        className="group"
      >
        <div className="border aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-300 xl:aspect-h-8 xl:aspect-w-7">
        <img
            src={`${import.meta.env.VITE_APP_API_URL}/images/`+product.img}
            className="w-full object-cover object-center group-hover:opacity-75"
        />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <p className="mt-1 text-md font-medium text-gray-900">&#8369; {product.price || <Skeleton />} </p>
      </Link>
    </>
  )
}

export default ProductList