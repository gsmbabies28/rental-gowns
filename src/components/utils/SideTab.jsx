import { IoMdClose } from "react-icons/io";
import Button from "./Button";
const SideTab = ({showSideTab, onCloseTab}) => {
  return (
    <div className={`modal ${showSideTab}`}>
        <div className='w-4/5 bg-white h-full fixed right-0 text-center pt-3'>
            <div className="relative px-2">
                <h1>
                    Filter and sort
                </h1>
                <p>32 products</p>
                <button type='button' onClick={onCloseTab}>
                    <IoMdClose className="absolute right-3 top-2  text-3xl cursor-pointer"/>
                </button>
                <hr className='mt-3'/>
            </div>
            <div className="mt-3 w-3/5 mx-auto">
                <uL className="space-y-4 text-xl">
                    <li className="border-b-2 text-left space-y-2 pb-2">
                        <span className="font-bold text-center">Availability</span>
                        <li className="space-x-2"><input id="available" name="available" type="checkbox" className="form-checkbox rounded text-cyan-500" /><label htmlFor="available">Available</label></li>
                        <li className="space-x-2"><input id="rented" name="rented" type="checkbox" className="form-checkbox rounded text-cyan-500" /><label htmlFor="rented">Rented</label></li>
                    </li>
                    <li className="border-b-2 text-left space-y-2 pb-2">
                        <span className="font-bold text-center">Price Range</span>
                        <li className="space-x-2"><input id="min" name="price" type="number" className="form-input rounded text-black" placeholder="from"/></li>
                        <li className="space-x-2"><input id="max" name="price" type="number" className="form-input rounded text-black" placeholder="to"/></li>
                    </li>
                    <li className="border-b-2 text-left space-y-2 pb-2">
                        <span className="font-bold text-center">Color</span>
                        <li className="space-x-2"><input id="red" name="color" type="checkbox" className="form-checkbox rounded text-cyan-500" /><label htmlFor="red">Red</label></li>
                        <li className="space-x-2"><input id="green" name="color" type="checkbox" className="form-checkbox rounded text-cyan-500" /><label htmlFor="green">Green</label></li>
                        <li className="space-x-2"><input id="blue" name="color" type="checkbox" className="form-checkbox rounded text-cyan-500" /><label htmlFor="blue">Blue</label></li>
                        <li className="space-x-2"><input id="violet" name="color" type="checkbox" className="form-checkbox rounded text-cyan-500" /><label htmlFor="violet">Violet</label></li>
                        <li className="space-x-2"><button type="button"><span className="text-sm underline underline-offset-4">See more colors...</span></button></li>
                    </li>
                </uL>
            </div>
            <div className="flex items-baseline justify-evenly">
                <button type="button" onClick={onCloseTab}>
                    <span className="text-lg underline underline-offset-4 cursor-pointer">Cancel</span>
                </button>
                <Button margin="8" text="Apply"/>
            </div>
        </div>
    </div>
  )
}

export default SideTab