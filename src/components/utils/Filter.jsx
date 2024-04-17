import { CiFilter } from "react-icons/ci";
import { MdOutlineSort } from "react-icons/md";

const Filter = ({handleShowTab}) => {
  
  return (
    <div id="filter-area" className="px-2 mt-10 flex justify-between">

      <div className="flex block">
        <CiFilter className="text-3xl" />
        <button 
          id="filter" 
          name="filter" 
          type="button"
          onClick={(e)=>handleShowTab('filter')}
        >
          <span 
            className="hover:underline underline-offset-4 tracking-wider"
          >
          Filter
          </span>
        </button>
      </div>

      <div className="flex block">
        <MdOutlineSort className="text-3xl" />
        <button
          id="sort"
          name="sort" 
          type="button" 
          onClick={(e)=>handleShowTab('sort')}
        >
          <span 
            className="hover:underline underline-offset-4 tracking-wider"
          >
            Sort by
          </span>
        </button>
      </div>

        {/* <div className="space-x-5 hidden md:block">
          <span className="tracking-wider">Filter:</span>
          <span>
            <select id="availability" className="px-3">
              <option>All products</option>
              <option>Rented</option>
            </select>
          </span>
          <select id="color" className="px-3">
            <option>Color</option>
            <option>blue</option>
          </select>
        </div>

        <div className="flex space-x-20">
          <div className="space-x-5 hidden md:block">
            <span className="space-x-2">
              <span>Sort by:</span>
              <select className="px-3">
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </span>
          </div>
          <div>
            <h1 className="tracking-widest">{numOfProducts} products</h1>
          </div>
        </div> */}

    </div>
  );
};

export default Filter;
