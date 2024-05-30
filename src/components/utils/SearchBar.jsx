import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({setShowSearch}) => {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onSearch = (query) => {
    if(setShowSearch)  {
      setShowSearch();
      var body = document.getElementsByTagName("body")[0];
      body.style.overflowY = "";
    }
    navigate(`/collections/all?search=${query}`);
  };

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
              onSearch(query)
            }
          }}
          className="border-[1px] border-slate-500 outline-offset-0 px-2 w-full h-10 md:w-4/12"
        /> 
        <CiSearch 
          name="search"
          className="cursor-pointer text-2xl active:text-slate-400"
          onClick={()=>onSearch(query)}
        />
    </div>
  )
}

export default SearchBar