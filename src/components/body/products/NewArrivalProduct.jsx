import { Link } from "react-router-dom"

const NewArrivalProduct = () => {
    // console.log(`${import.meta.env.VITE_APP_API_URL}`+products[0])
  return (
    <div className='bg-white text-left'>
        <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
            <h1 className='text-xl md:text-2xl text-black'>Back in stock!</h1>
            <div className="grid grid-row-2 md:grid-cols-3 gap-4 mt-10 pt-5 m-auto">
                    <div className='md:col-span-2 h-full w-full relative'>
                    <Link to={"/collections/gowns"} >
                        <img className="h-full bg-contain" src='/assets/gown.jpg' alt="" />
                        <div className="bg-gradient-to-l from-gray-500 absolute bottom-1/2 w-full h-auto">
                            <h5 className='text-center text-white text-xl font-medium tracking-widest'>Gowns</h5>
                        </div>
                    </Link>
                    </div>
               
                    <div className='flex md:flex-col gap-4 mt-3 md:mt-1'>

                        <div className="relative">
                            <Link to={"/collections/tuxedos"}>
                                <div>
                                    <img className="h-full" src="/assets/kids-m-tuxedo.jpg" alt="" />
                                    <div className="bg-gradient-to-l from-gray-500 absolute bottom-1 w-full h-auto">
                                        <h5 className='text-center text-white text-xl font-medium tracking-widest'>Tuxedos</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <Link to="/collections/kids">
                            <div className="relative">
                                <img className="h-full" src="/assets/kids-f-gown.jpg" alt="" />
                                <div className="bg-gradient-to-l from-gray-500 absolute bottom-1 w-full h-auto">
                                    <h5 className='text-center text-white text-xl font-medium tracking-widest'>For Kids</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
               
            </div>
        </div>
    </div>
  )
}

export default NewArrivalProduct