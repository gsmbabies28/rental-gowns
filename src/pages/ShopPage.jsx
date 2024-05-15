import { useEffect, useState } from "react";
import ProductList from "../components/utils/ProductList";
import Pagination from "../components/utils/Pagination";
import SideTab from "../components/utils/SideTab";
import { useLocation, useSearchParams } from "react-router-dom";
import Filter from "../components/utils/Filter";
import axios from "axios";
import SearchBar from "../components/header/subcomponent/SearchBar";
import "react-loading-skeleton/dist/skeleton.css";
import { ShopPageContextProvider } from "../UseContext/ShopPageContext";
import { useNavigate } from "react-router-dom";
import CollectionLink from "../components/utils/CollectionLink";
import LoadingProductSkeleton from "../components/utils/LoadingProductSkeleton";
import Skeleton from "react-loading-skeleton";

const ShopPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSideTab, setShowSideTab] = useState({
    show: false,
    filter: false,
    sort: false,
  });
  const [products, setProducts] = useState({});
  const [search, setSearch] = useSearchParams({});
  const queryParamValue = parseInt(search.get("page")) || 1;
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const searchQuery = search.get("search");

  const loadingSkeleton = [];
  for(let i=0; i<16; i++){
    loadingSkeleton.push(<LoadingProductSkeleton/>);
  }

  const fetchProduct = (queries, source) => {
    search.entries().forEach((item, index) => {
      if (index == 0 && queries == "") {
        queries = `?${item[0]}=${item[1]}`;
      } else {
        queries += `&${item[0]}=${item[1]}`;
      }
    });
    const lastEndPoint = location.pathname.split("/").pop();
    let title = lastEndPoint.charAt(0).toUpperCase() + lastEndPoint.slice(1);
    axios
      .get(
        `${import.meta.env.VITE_APP_API_URL}/products${queries}`,
        { cancelToken: source.token } // Pass the cancel token to the request
      )
      .then((res) => {
        setProducts(res.data);
        setTitle(title);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          console.error(err);
          setProducts({ msg: "error" });
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    let source = axios.CancelToken.source(); // Create a cancel token source
    let queries = "";
    switch (location.pathname) {
      case "/collections/all":
        fetchProduct(queries, source);
        console.log("all endpoint");
        break;
      case "/collections/gowns":
        console.log("gown endpoint");
        queries = `?category_class=gown`;
        fetchProduct(queries, source);
        break;

      case "/collections/tuxedos":
        console.log("tuxedo endpoint");
        queries = `?category_class=tuxedo`;
        fetchProduct(queries, source);
        break;

      case "/collections/tops":
        console.log("top endpoint");
        queries = "?category_type=top";
        fetchProduct(queries, source);
        break;

      case "/collections/bottoms":
        console.log("top endpoint");
        queries = "?category_type=top";
        fetchProduct(queries, source);
        break;

      case "/collections/sets":
        console.log("top endpoint");
        queries = "?category_type=set";
        fetchProduct(queries, source);
        break;

      case "/collections/weddings":
        console.log("wedding endpoint");
        queries = "?category_eventType=wedding";
        fetchProduct(queries, source);
        break;

      case "/collections/casuals":
        console.log("casual endpoint");
        queries = "?category_eventType=casual";
        fetchProduct(queries, source);
        break;

      case "/collections/cocktails":
        console.log("cocktail endpoint");
        queries = "?category_eventType=cocktail";
        fetchProduct(queries, source);
        break;

      case "/collections/kids":
        console.log("kid sections endpoint");
        queries = "?category_ageGroup=kids";
        fetchProduct(queries, source);
        break;

      default:
        setTitle("No product found!");
        fetchProduct("", "");
    }

    // Cleanup function
    return () => {
      source.cancel("Component unmounted"); // Cancel the ongoing request when the component unmounts
      setLoading(true);
    };
  }, [queryParamValue, location.pathname, search]);

  const toggleShowTab = (toShow) => {
    switch (toShow) {
      case "filter":
        setShowSideTab((prev) => {
          return { ...prev, show: !prev.show, filter: !prev.filter };
        });
        break;

      case "sort":
        setShowSideTab((prev) => {
          return { ...prev, show: !prev.show, sort: !prev.sort };
        });
        break;

      default:
        setShowSideTab((prev) => {
          return { ...prev, show: false, filter: false, sort: false };
        });
    }
  };

  const handleQueries = (key, value, action) => {
    console.log(key, value, action);
    switch (action) {
      case "search":
        setSearch({ search: value });
        break;
      case true:
        search.delete("page");
        search.append(key, value);
        break;
      case false:
        search.delete("page");
        search.delete(key, value);
        break;

      default:
        if (value != "") {
          search.set(key, value);
        } else {
          search.delete(key);
        }
        break;
    }

    setSearch(search);
  };

  const handleNavigate = (link) => {
    navigate(`/${link}`);
  };

  const scrollToTarget = () => {
    const targetElement = document.getElementById("shopLandingPage");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  return (
    <div className="mx-auto my-5 px-2 md:px-8">
      {searchQuery ? (
        <SearchBar handleSearch={handleQueries} />
      ) : (
        <h1 className="text-4xl py-2 w-full max-w-24">{ title || <Skeleton/> }</h1>
      )}
      <Filter
        handleShowTab={toggleShowTab}
        numOfProducts={products?.msg?.length}
      />
      <div id="shopLandingPage" className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
        {loading ? (
          <>
              {loadingSkeleton.map( (loading,index) => (
                <div key={index}>
                  {loading}
                </div>
              ))}
            </>
        ) : (
          <>
            {products.msg != "error" ? (
              <>
                {products?.msg?.map((item) => (
                  <ProductList key={item._id} product={item} />
                ))}
              </>
            ) : (
              <h1 className="text-center font-medium">Products not found</h1>
            )}
          </>
        )}
      </div>
      <Pagination
        page={products?.totalPage}
        currentPage={queryParamValue}
        handleQueries={handleQueries}
        scrollToTarget = {scrollToTarget}
      />
      <CollectionLink />
      <ShopPageContextProvider
        value={{
          showSideTab,
          toggleShowTab,
          products,
          handleQueries,
          search,
          setSearch,
          handleNavigate,
          location,
        }}
      >
        {showSideTab.show && <SideTab />}
      </ShopPageContextProvider>
    </div>
  );
};

export default ShopPage;
