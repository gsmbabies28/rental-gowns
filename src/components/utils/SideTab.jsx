import { IoMdClose } from "react-icons/io";

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
                        <span className="font-bold text-center">Color</span>
                        <li className="space-x-2"><input id="available" name="available" type="checkbox" className="form-checkbox rounded text-cyan-500" /><label htmlFor="available">Available</label></li>
                        <li className="space-x-2"><input id="rented" name="rented" type="checkbox" className="form-checkbox rounded text-cyan-500" /><label htmlFor="rented">Rented</label></li>
                    </li>
                    <li>Price</li>
                </uL>
            </div>
        </div>
    </div>
  )
}

export default SideTab