import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import colors from "./colors";

const SideTab = ({ showSideTab, onCloseTab,products,handleQueries,searchQuery, setSearch }) => {
    const isAvailable =  searchQuery.get('isAvailable');
    const rented =  searchQuery.get('rented');    
    // console.log(searchQuery);
    return (
    <div className={`modal ${showSideTab}`}>
        <div className='w-4/5 bg-white h-full max-h-full overflow-auto fixed right-0 text-center pt-3'>
            <div className="relative px-2">
                <h1>
                    Filter
                </h1>
                <p>{products?.length} products</p>
                <button type='button' onClick={onCloseTab}>
                    <IoMdClose className="absolute right-3 top-2  text-3xl cursor-pointer"/>
                </button>
                <hr className='mt-3'/>
            </div>
            <div className="mt-3 w-3/5 mx-auto">
                <ul className="space-y-4 text-xl">
                    <li className="border-b-2 text-left space-y-2 pb-2">
                        <span className="font-medium tracking-wide text-center">
                            Product Type
                        </span>
                        
                    </li>
                    <li className="border-b-2 text-left space-y-2 pb-2">
                        <span className="font-medium tracking-wide text-center">Availability</span>
                        <ul>
                            <li className="space-x-2">
                                <input 
                                    id="available" 
                                    name="isAvailable" 
                                    type="checkbox" 
                                    className="form-checkbox rounded text-cyan-500" 
                                    onChange ={(e) => handleQueries(e.target.name, 'true',e.target.checked) }
                                    checked = {isAvailable && true }
                                />
                                <label htmlFor="available">Available</label>
                            </li>
                            <li className="space-x-2">
                                <input 
                                    id="rented" 
                                    name="rented" 
                                    type="checkbox" 
                                    className="form-checkbox rounded text-cyan-500" 
                                    onChange ={(e) => handleQueries(e.target.name, 'true',e.target.checked) }
                                    checked = {rented && true}
                                />
                                <label htmlFor="rented">Rented</label>
                            </li>
                        </ul>
                    </li>
                    <li className="border-b-2 text-left space-y-2 pb-2">
                        <span className="font-medium tracking-wide text-center">Price Range</span>
                        <ul className="space-y-2">
                            <li className="space-x-2">
                                <input 
                                    id="minPrice" 
                                    name="minPrice" 
                                    type="number" 
                                    className="form-input rounded text-black" 
                                    placeholder="Minimum Price"
                                    onBlur={(e)=>handleQueries(e.target.name,e.target.value)}
                                />
                            </li>
                            <li className="space-x-2">
                                <input 
                                    id="maxPrice" 
                                    name="maxPrice" 
                                    type="number" 
                                    className="form-input rounded text-black" 
                                    placeholder="Maximum Price"
                                    onBlur={(e)=>handleQueries(e.target.name,e.target.value)}

                                />
                            </li>
                        </ul>
                    </li>
                    <li className="border-b-2 text-left space-y-2 pb-2">
                        <span className="font-medium tracking-wide text-center">Color</span>
                        <ul>
                           {colors?.map(item=>(
                                <li key={item} className="space-x-2">
                                    <input 
                                        id={item.toLowerCase()}
                                        name="color" 
                                        type="checkbox" 
                                        className="form-checkbox rounded text-cyan-500" 
                                        onChange ={(e) => handleQueries(e.target.name, item.toLowerCase(),e.target.checked) }
                                        checked = {searchQuery.getAll('color').includes(item.toLowerCase()) && true}
                                    />
                                    <label htmlFor={item.toLocaleLowerCase()}>
                                        {item}
                                    </label>
                                </li> 
                           ))}
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="flex items-baseline justify-evenly">
                <button 
                    type="button" 
                    onClick={()=>{
                        onCloseTab()
                        setSearch({});
                    }}
                  >
                    <span className="text-lg underline underline-offset-4 cursor-pointer">Cancel</span>
                </button>
                <Button margin="8" text="Apply" handleFunc={onCloseTab} type='button' />
            </div>
        </div>
        
        <div className="w-full h-full z-50" onClick={onCloseTab}>
        </div>
    </div>
  )
}

export default SideTab