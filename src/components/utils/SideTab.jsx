import Button from "./Button";
import SideTabFilter from "./SideTabFilter";
import { IoMdClose } from "react-icons/io";
import ShopPageContext from "../../UseContext/ShopPageContext";
import { useContext } from "react";

const SideTab = () => {
    const {showSideTab, toggleShowTab, products, setSearch } = useContext(ShopPageContext);
    return (
        <div className="modal" >
            <div className='w-4/5 sm:w-3/5 md:w-2/5 bg-white h-full max-h-full overflow-auto fixed right-0 text-center py-3'>
                
                <div className="relative px-2">
                    {showSideTab.filter && (<h1>Filter</h1>)}
                    {showSideTab.sort && (<h1>Sort</h1>)}
                    <p>{products?.msg?.length} products</p>
                    <button type="button" onClick={toggleShowTab}>
                    <IoMdClose className="absolute right-3 top-2  text-3xl cursor-pointer" />
                    </button>
                    <hr className="mt-3" />
                </div>

                <div className="mt-3 w-3/5 mx-auto">
                    <SideTabFilter />
                </div>
                
                <div className="flex items-baseline justify-evenly">
                    <button 
                        type="button" 
                        onClick={()=>{
                            toggleShowTab();
                            setSearch({});
                        }}
                    >
                        <span 
                            className="text-lg underline underline-offset-4 cursor-pointer tracking-wider"
                        >
                            Clear
                        </span>
                    </button>
                    <Button margin="8" text="Apply" handleFunc={toggleShowTab} type='button' />
                </div>
                
            </div>
            
            <div className="w-full h-full z-50" onClick={toggleShowTab}>
            </div>

        </div>
  )
}

export default SideTab