import { useEffect, useState } from "react";
import ProductList from "../components/utils/ProductList";
import Pagination from "../components/utils/Pagination";
import SideTab from "../components/utils/SideTab";
import { useLocation, useSearchParams } from "react-router-dom";
import Filter from "../components/utils/Filter";
import axios from "axios";
import SearchBar from "../components/header/subcomponent/SearchBar";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ShopPage = () => {
  const location = useLocation();
  const [showSideTab, setShowSideTab] = useState("hidden");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useSearchParams();
  const queryParamValue = parseInt(search.get("page")) || 1;
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const searchQuery = search.get("search");
  
  const fetchProduct = (queries,source) => {
    search.entries().forEach((item,index)=>{
        if(index==0 && queries==''){
          queries = `?${item[0]}=${item[1]}`
        } else {
          queries+= `&${item[0]}=${item[1]}`
        }
      });
    console.log(queries)
 
      axios
      .get(
        `${
          import.meta.env.VITE_APP_API_URL
        }/products${queries}`,
        { cancelToken: source.token } // Pass the cancel token to the request
      )
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          console.error(err);
        }
      });
   
  }


  useEffect(() => {
    let source = axios.CancelToken.source(); // Create a cancel token source
    let queries = '';

    switch (location.pathname) {

      case "/collections":
        console.log("yawa");
        break;

      case "/collections/all":
        setTitle("Products");
        fetchProduct(queries,source);
        console.log("all endpoint"  );
        break;

      case "/collections/gowns":
        setTitle("Gowns");
        console.log("gown endpoint");
        queries = `?category_class=gown`;
        fetchProduct(queries,source);
        break;

      case "/collections/tuxedos":
        setTitle("Tuxedo");
        console.log("tuxedo endpoint");
        queries = `?category_class=tuxedo`
        fetchProduct(queries,source);
        break;

        case "/collections/top":
          setTitle("Top");
          console.log("top endpoint");
          queries = '?category_type=top'
          fetchProduct(queries,source);
          break;
        
        case "/collections/bottom":
          setTitle("Top");
          console.log("top endpoint");
          queries = '?category_type=top'
          fetchProduct(queries,source);
          break;

        case "/collections/set":
          setTitle("Top");
          console.log("top endpoint");
          queries = '?category_type=set'
          fetchProduct(queries,source);
          break;
    }

    // Cleanup function
    return () => {
      setLoading(true);
      source.cancel("Component unmounted"); // Cancel the ongoing request when the component unmounts
    };
  }, [queryParamValue, location.pathname,search]);

  const handleShowTab = () => {
    setShowSideTab("block");
  };

  const handleCloseTab = () => {
    setShowSideTab("hidden");
  };
  const onSearch = (e) => {
    setSearch({ search: e });
  };

  return (
    
    <div className="mx-auto my-5 px-2 md:px-8">
      {searchQuery ? (
        <SearchBar handleSearch={onSearch} />
      ) : (
        <h1 className="text-4xl py-2">{title}</h1>
      )}
      <Filter
        handleShowTab={handleShowTab}
        numOfProducts={products?.msg?.length}
      />
      { loading ? 
        (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 h-full">
             <Skeleton className="h-40 md:h-96" />
             <Skeleton className="h-40 md:h-96" />
             <Skeleton className="h-40 md:h-96" />
             <Skeleton className="h-40 md:h-96" />
          </div>
        )
        :
        (
          <>
          {products.msg?.length === 0 ? (
          <h1 className="p-5 text-4xl text-center mx-auto">
            Products not found
          </h1>
          ) : (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
            {products?.msg?.map((item) => (
              <ProductList key={item._id} product={item} />
            ))}
          </div>
          )}
          </>
        )
      }
      <Pagination
        page={products.totalPage}
        currentPage={queryParamValue}
      />
      <SideTab
        showSideTab={showSideTab}
        onCloseTab={handleCloseTab}
        products={products.msg}
      />
    </div>
     
  );
};

export default ShopPage;
