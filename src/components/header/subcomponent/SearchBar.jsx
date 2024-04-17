import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";

const SearchBar = ({handleSearch}) => {
  const [query, setQuery] = useState('')
  return (
    <div className="flex justify-center items-center space-x-2 p-3 w-full">
        <input 
          autoFocus
          name="search"
          type="search" 
          value={query}
          onChange={e=>setQuery(e.target.value)}
          onKeyDown={e=>{
            if(e.key==="Enter") {
              handleSearch(e.target.name,query,'search')
            }
          }}
          className="border-[1px] border-slate-500 outline-offset-0 px-2 w-full h-10 md:w-4/12"
        /> 
        <CiSearch 
          name="search"
          className="cursor-pointer text-2xl active:text-slate-400"
          onClick={()=>handleSearch(e.target.name,query,'search')}
        />
    </div>
  )
}

export default SearchBar