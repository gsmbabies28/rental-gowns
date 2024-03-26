import { CiSearch } from "react-icons/ci";
import { useState } from "react";


const SearchBar = ({handleSearch}) => {
  const [search, setSearch] = useState('')

  return (
    <div className="flex justify-center items-center space-x-2 p-3 w-full">
        <input 
          autoFocus
          type="search" 
          value={search}
          onChange={e=>setSearch(e.target.value)}
          onKeyDown={e=>{
            if(e.key==="Enter") {
              handleSearch(search)
            }
          }}
          name="search-product" 
          className="border-[1px] border-slate-500 outline-offset-0 px-2 w-full h-10 md:w-4/12"
        /> 
        <CiSearch 
          className="cursor-pointer text-2xl active:text-slate-400"
          onClick={e=>handleSearch(search)}
        />
    </div>
  )
}

export default SearchBar