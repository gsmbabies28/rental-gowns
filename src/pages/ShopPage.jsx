import { useEffect, useState } from "react"
import ProductList from "../components/utils/ProductList";
import Pagination from "../components/utils/Pagination";
import SideTab from "../components/utils/SideTab";
import { useLocation, useSearchParams } from "react-router-dom";
import Filter from "../components/utils/Filter";
import axios from "axios";
import SearchBar from "../components/header/subcomponent/SearchBar";
const ShopPage = () => {

    const location = useLocation();
    const [showSideTab, setShowSideTab] = useState('hidden');
    const [products, setProducts] = useState([])

    const [ search, setSearch ] = useSearchParams();
    const queryParamValue = parseInt(search.get('page')) || 1;
    const searchQuery = search.get('search');
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('')


    useEffect( ()=>{
      switch(location.pathname){
        case "/collections/all" :
          setTitle('Products')
          console.log('all endpoint')
          console.log(location.search)
          axios.get(`${import.meta.env.VITE_APP_API_URL}/products?page=${queryParamValue}`)
          .then(res=>{
            setProducts(res.data)
            setLoading(true);
          }) 
          .catch(err=>console.error(err));
          break;
        case "/collections/gowns" :
          setTitle('Gowns')
          console.log('gown endpoint')
          axios.get(`${import.meta.env.VITE_APP_API_URL}/products?category=gown&page=${queryParamValue}`)
          .then(res=>{
            setProducts(res.data)
            setLoading(true);
          }) 
          .catch(err=>console.error(err));
          break;
        case "/collections/tuxedos" :
          setTitle('Tuxedo')
          console.log('tuxedo endpoint');
          axios.get(`${import.meta.env.VITE_APP_API_URL}/products?category=tuxedo&page=${queryParamValue}`)
          .then(res=>{
            setProducts(res.data)
            setLoading(true);
          }) 
          break;
      }

      return () => { setLoading(false) }
    }, [queryParamValue,location.pathname] );
    
    const handleShowTab = () => {
      setShowSideTab('block')
    }

    const handleCloseTab = () => {
      setShowSideTab('hidden')
    }

    const onSearch = (e) => {
      setSearch({search: e})
    }

  return (

    <div className='mx-auto my-5 px-2 md:px-8'>
        { searchQuery ?
            (<SearchBar handleSearch={onSearch} />)
          :
          (<h1 className="text-4xl py-2">
            {title}
          </h1>)
        }
        <Filter handleShowTab={handleShowTab} numOfProducts={products?.msg?.length}/> 
        {
          products.msg?.length === 0 ? (<h1 className="p-5 text-4xl text-center mx-auto">Products not found</h1>) 
          :
          (<div className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
            {products?.msg?.map((item) => <ProductList key={item._id} product={item}/>)}
          </div>)
        }
        <Pagination page={products.totalPage} currentPage={queryParamValue} />
        <SideTab showSideTab={showSideTab} onCloseTab={handleCloseTab} products={products.msg}/>
    </div>
  )
}
 
export default ShopPage