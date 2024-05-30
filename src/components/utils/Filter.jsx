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
          onClick={()=>handleShowTab('sort')}
        >
          <span 
            className="hover:underline underline-offset-4 tracking-wider"
          >
            Sort by
          </span>
        </button>
      </div>
    </div>
  );
};

export default Filter;
