import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft ,MdOutlineLastPage, MdOutlineFirstPage  } from "react-icons/md";

export default function Pagination({page, currentPage=1}) {

  return ( 
    <div className="mt-5 flex items-center justify-between border-gray-200 bg-white px-4 py-4 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden items-baseline">
        <button disabled>
          <Link
            to={`?page=${currentPage-1}`}
            className={`${currentPage==1 && 'pointer-events-none'} relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
          >
            Previous
          </Link>
        </button>
        <span className='text-sm'>{currentPage} of {page}</span>
        <Link
          to={`?page=${currentPage+1}`}
          className={`${currentPage >= page && 'pointer-events-none'} relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
        >
          Next
        </Link>
      </div>

      <div className='mx-auto hidden sm:inline-block'>
        <div className='flex items-center gap-5'>

        <Link 
          to={`?page=1`}
          className={`${currentPage==1 && 'pointer-events-none'}`}
        >
          <MdOutlineFirstPage className='text-3xl border rounded-full p-1' />
        </Link>
        <Link 
          to={`?page=${currentPage-1}`}
          className={`${currentPage==1 && 'pointer-events-none'} `}
        >
          <MdKeyboardArrowLeft  className='text-xl rounded-full border'/>
        </Link>
        <span className='text-sm text-slate-700'>
          {currentPage} of {page}
        </span>
        <Link
          to={`?page=${currentPage+1}`}
          className={`${currentPage >= page && 'pointer-events-none'}`}
        >
          <MdKeyboardArrowRight  className='text-xl border rounded-full'/>
        </Link>
       
        <Link 
          to={`?page=${page}`}
          className={`${currentPage>=page && 'pointer-events-none'}`}
        >
         <MdOutlineLastPage className='text-3xl border rounded-full p-1' />
        </Link>

        </div>
      </div>
     
    </div>
  )
}
