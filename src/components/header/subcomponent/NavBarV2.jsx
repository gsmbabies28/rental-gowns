import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const navigation = [
  { name: "Gowns", href: "/gowns", current: false },
  { name: "Tuxedo", href: "#", current: false },
  { name: "Services", href: "#", current: false },
];

export default function NavBarV2() {
  const [showSearch, setShowSearch] = useState(false);
  const handleShowSearch = () => {
    setShowSearch(true)
  }
  const handleCloseSearch = () => {
    setShowSearch(false)
  }
  console.log(showSearch)
  return (
    <>
    { showSearch ? 
      (<div className={'flex mx-auto items-center p-4 w-full h-full z-99 bg-white-200 '}>
        <SearchBar /> <button onClick={handleCloseSearch}><IoMdClose className="text-3xl cursor-pointer"/></button>
      </div>) :
      (<Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                    <Link to="/">
                      <img
                        src="/assets/logo.png"
                        alt="Sunflower"
                        className="h-10 ms-12 sm:ms-0"
                      />
                    </Link>
                
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-black hover:bg-cyan-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 md:space-x-12 lg:space-x-20 items-center">

                  <button onClick={handleShowSearch}>
                    <CiSearch className="cursor-pointer text-xl hover:text-2xl active:text-slate-400" />
                  </button>
                      
                  <NavLink to="/account/login">
                    <CiUser  className="cursor-pointer text-xl hover:text-2xl active:text-slate-400" />
                  </NavLink>

                  <NavLink to="/cart">
                    <HiOutlineShoppingBag className="cursor-pointer text-xl hover:text-2xl active:text-slate-400" />
                  </NavLink>
                  </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="text-gray-300 hover:bg-cyan-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>)
    }
    </>
  );
}
