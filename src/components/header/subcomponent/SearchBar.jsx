import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center h-full w-full space-x-2">
        <input type="search" className="border h-full min-h-11  px-2 w-full md:w-4/12" /> <CiSearch className="cursor-pointer text-2xl active:text-slate-400" />
    </div>
  )
}

export default SearchBar