import ProductList from "../../utils/ProductList";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const ProductFeatured = ({products,loading}) => {
  
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {loading ? 
        (
          <>
            <Skeleton className="h-full"/>
            <Skeleton className="h-full"/>
            <Skeleton className="h-full"/>
            <Skeleton className="h-full"/>
            <Skeleton className="h-full"/>
            <Skeleton className="h-full"/>
            <Skeleton className="h-full"/>
          </>
        ) :
        (
          <>
            {products.map((product) => 
            <ProductList key={product._id} product={product} />
            )}
          </>
        )
        }
      </div>
    </div>
  </div>
  )
}

export default ProductFeatured