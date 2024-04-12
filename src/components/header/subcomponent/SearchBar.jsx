import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { MdQrCode2 } from "react-icons/md";


const SearchBar = ({handleSearch}) => {
  const [query, setQuery] = useState('')
  return (
    <div className="flex justify-center items-center space-x-2 p-3 w-full">
        <input 
          autoFocus
          type="search" 
          value={query}
          onChange={e=>setQuery(e.target.value)}
          onKeyDown={e=>{
            if(e.key==="Enter") {
              handleSearch(query)
            }
          }}
          name="search-product" 
          className="border-[1px] border-slate-500 outline-offset-0 px-2 w-full h-10 md:w-4/12"
        /> 
        <CiSearch 
          className="cursor-pointer text-2xl active:text-slate-400"
          onClick={()=>handleSearch(query)}
        />
    </div>
  )
}

export default SearchBar