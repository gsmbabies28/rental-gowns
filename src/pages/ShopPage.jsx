import { useState } from "react"
import ProductList from "../components/utils/ProductList";
import Pagination from "../components/utils/Pagination";
import { CiFilter } from "react-icons/ci";
import SideTab from "../components/utils/SideTab";
import { useLocation } from "react-router-dom";


const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 6,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // More products...
  ]

const ShopPage = () => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerpage] = useState(4);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(products.length / recordsPerPage)
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    const [showSideTab, setShowSideTab] = useState('hidden');

    const handleShowTab = () => {
      setShowSideTab('block')
    }
    const handleCloseTab = () => {
      setShowSideTab('hidden')
    }

    const goToNextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }

    const goToPrevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }

  return (
    <div className='md:container mx-auto my-5 px-2'>
        <h1 className="text-4xl py-2">
          {location.pathname === '/collections/all' && 'Products'}
          {location.pathname === '/collections/gowns' && 'Gowns'}
          {location.pathname === '/collections/tuxedos' && 'Tuxedos'}
        </h1>
        <div id="filter-area" className="mt-10 flex justify-between">
          <div className="flex block lg:hidden">
            <CiFilter className="text-3xl"/>
            <button type="button" onClick={handleShowTab}>
              <span className="hover:underline underline-offset-4">Filter and sort </span>
            </button>
          </div>
          <p className="space-x-5 hidden md:block"><span>Filter:</span><span>Availability</span><span>Color</span></p>
          <p className="space-x-5 hidden md:block"><span>Sort by:</span><span>Featured</span><span>26 products</span></p>
          <div>
            <h1>32 products</h1>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products?.map((item,i) => <ProductList key={i} product={item}/>)}
        </div>
        <Pagination />
        <SideTab showSideTab={showSideTab} onCloseTab={handleCloseTab}/>
    </div>
  )
}

export default ShopPage