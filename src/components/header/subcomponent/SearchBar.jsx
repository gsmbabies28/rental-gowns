import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center space-x-2 p-3 w-full">
        <input type="search" name="search-product" className="border-2 border-black outline-offset-0 px-2 w-full h-10 md:w-4/12 " autoFocus /> <CiSearch className="cursor-pointer text-2xl active:text-slate-400" />
    </div>
  )
}

export default SearchBar