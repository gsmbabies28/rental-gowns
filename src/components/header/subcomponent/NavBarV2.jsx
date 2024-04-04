import { Link, NavLink } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
// import {defaultLink}  from "../../utils/NavItemsLink";
import MenuDropDown from "../../utils/MenuDropDown";
import { useNavigate } from "react-router-dom";

//temp try kung mo gana inig deploy sa vercel
const navCollection = [
  { name: "Gowns", href: "/collections/gowns", current: false },
  { name: "Tuxedos", href: "/collections/tuxedos", current: false },
  { name: "Cocktail", href: "/collection/cocktail", current: false },
];

const navRent = [
  { name: "All", href: "/collections/all", current: false },
  { name: "Top", href: "/collections/top", current: false },
  { name: "Bottom", href: "/collections/bottom", current: false },
  { name: "Set", href: "/collections/set", current: false },

];

export const defaultLink = [  
  { name: "Rent", items: navRent, current: false },
  { name: "Collection", items:navCollection, current: false },
  { name: "Services", href: "/services", current: false },
];

export default function NavBarV2() {
  const [showSearch, setShowSearch] = useState(false);
  const [isShow, setIsShow] = useState({ state: false, link: [] });
  const navigate = useNavigate();

  const handleShowSearch = () => {
    setShowSearch(true);
    var body = document.getElementsByTagName('body')[0];
    body.style.overflowY = 'hidden';
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
    var body = document.getElementsByTagName('body')[0];
    body.style.overflowY = ''
  };

  const handleNavLinkToggle = (links) => {
    isShow.state = !isShow.state;
    isShow.link = links;
    setIsShow({ ...isShow });
  };

  const onSearch = (e) => {
    setShowSearch(false)
    var body = document.getElementsByTagName('body')[0];
    body.style.overflowY = ''
    navigate(`/collections/all?search=${e}`)
  }

  return (
    <>
      <Disclosure as="nav" className="bg-white h-auto">
        {({ open }) => (
          <>
            {/* searchbar */}
            { showSearch &&
              (<div id="myModal" className='modal pt-7 h-full overflow-hidden'>
                <div className="m-auto w-auto bg-white flex justify-center px-3">
                  <SearchBar handleShow={setShowSearch} handleSearch={onSearch}/>
                  <button onClick={handleCloseSearch}>
                    <IoMdClose className="text-3xl cursor-pointer" />
                  </button>
                </div>
                <div className="h-full w-full" onClick={handleCloseSearch}></div>
              </div>)
            }
            {/* end of search bar */}

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
                    <ul className="flex space-x-4">
                      {defaultLink.map((link) => {
                        if(link.hasOwnProperty('items')) {
                          return (
                          <li
                            key={link.name}
                            className="hover:bg-cyan-500 rounded-md text-sm font-medium"
                          >
                            <MenuDropDown link={link} />
                          </li>
                          )
                        } else {
                          return (
                            <li
                              key = {link.name}
                              className="text-black hover:bg-cyan-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                              <Link 
                                to={link.href}
                              >
                                {link.name}
                              </Link>
                            </li>
                          )
                        }
                      }
                      )}
                 
                    </ul>
                  </div>
                </div>

                <div className="flex space-x-3 md:space-x-12 lg:space-x-20 items-center">
                  <button onClick={handleShowSearch}>
                    <CiSearch className="cursor-pointer text-xl hover:text-2xl active:text-slate-400" />
                  </button>

                  <NavLink to="/account/login">
                    <CiUser className="cursor-pointer text-xl hover:text-2xl active:text-slate-400" />
                  </NavLink>

                  <NavLink to="/cart">
                    <HiOutlineShoppingBag className="cursor-pointer text-xl hover:text-2xl active:text-slate-400" />
                  </NavLink>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden w-auto relative border-t-2 h-auto">
              <div className="inline w-full space-y-1 px-2 pb-3 pt-2 z-0 ">
                {defaultLink?.map((link) => {
                  <hr />
                  if (link.hasOwnProperty("items")) {
                    return (
                      <Link
                        to={link.href}
                        onClick={() => handleNavLinkToggle(link?.items)}
                        className="w-full"
                        key={link.name}
                      >
                        <li
                          className="text-gray-400 hover:bg-cyan-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                        >
                            <span>{link.name}</span>
                        </li>
                      </Link>
                    );
                  } else {
                    return (
                      <li
                        key={link.name}
                        className="text-gray-400 hover:bg-cyan-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                      >
                        <Link to={link.href}>{link.name}</Link>
                      </li>
                    );
                  }
                })}
              </div>

              <Transition
                show={isShow.state}
                enter="transition ease-linear duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-linear duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
                className="inline bg-white absolute top-0 right-0 z-10 w-full h-auto"
              >
                <div className="space-y-1 px-2 pt-2 inline z-10">
                  <div className="space-x-3 text-gray-400 hover:bg-cyan-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                    <button
                      onClick={() => {
                        handleNavLinkToggle();
                      }}
                      className="w-full"
                    >
                      <span>Back</span>
                    </button>
                  </div>

                  {isShow?.link?.map((link) => (
                    <Link 
                      key={link.name}
                      to={link.href}
                      className="text-gray-400 hover:bg-cyan-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </Transition>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
