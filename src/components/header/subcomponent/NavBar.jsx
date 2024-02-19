import { CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-white-500 p-6">
            <div>
                <div className="block lg:hidden">
                <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className='flex space-x-10 items-center max-h-10 hidden'>
                    <Link to="/gowns" className="hover:text-lg active:text-slate-400 ">Gowns</Link>
                    <Link to="" className="hover:text-lg active:text-slate-400 ">Tuxedos</Link>
                    <Link to="" className="hover:text-lg active:text-slate-400 ">Services</Link>
                </div>
            </div>

                <div>
                    <NavLink to="/">
                        <img src="/src/assets/logo.png" alt="Sunflower" className="h-10"/>
                    </NavLink>
                </div>

                <div className="flex space-x-5  max-h-10 items-center">   
                    <CiSearch className="cursor-pointer text-xl hover:text-2xl active:text-slate-400" />
                    
                    <NavLink to="/account/login">
                        <CiUser  className="hidden cursor-pointer text-xl hover:text-2xl active:text-slate-400" />
                    </NavLink>

                    <NavLink to="/cart">
                    <HiOutlineShoppingBag className="cursor-pointer text-xl hover:text-2xl active:text-slate-400" />
                    </NavLink>
                </div>

        </nav>
    )
}

export default NavBar