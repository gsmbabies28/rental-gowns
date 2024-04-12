import { CiFilter } from "react-icons/ci";


const Filter = ({handleShowTab, numOfProducts, setSearch}) => {
  
  return (
    <div id="filter-area" className="mt-10 flex justify-between">
      <div className="flex block lg:hidden">
        <CiFilter className="text-3xl" />
        <button type="button" onClick={handleShowTab}>
          <span className="hover:underline underline-offset-4">
            Filter and sort
          </span>
        </button>
      </div>
      <div className="space-x-5 hidden md:block">
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
      </div>
    </div>
  );
};

export default Filter;
