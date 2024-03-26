import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { NavLink } from 'react-router-dom'

export default function MyDropdown({link}) {
  return (
    <Menu as="div" className={`relative w-full h-full`}>
      <Menu.Button className="px-3 py-2 inline-flex w-full justify-center rounded-md px-4 text-sm font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        {link.name}
        <ChevronDownIcon
          className="-mr-1 ml-2 h-5 w-5  hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>
      <Menu.Items
        className='w-[150px] h-auto bg-white mx-auto absolute flex flex-col text-left z-10 mt-3'
      >
        {link.items.map((item) => (
        
            <Menu.Item
             key={item.name}
             className='border-t-2 py-2 px-1'
            >
              {({ active }) => (
                <NavLink
                  className={`${active && 'bg-cyan-100'}`}
                  to={item.href}
                >
                  {item.name}
                </NavLink>
              )}
            </Menu.Item>
      
        ))}
      </Menu.Items>
    </Menu>
  )
}