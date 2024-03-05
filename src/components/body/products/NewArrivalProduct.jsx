

const NewArrivalProduct = () => {
    // console.log(`${import.meta.env.VITE_APP_API_URL}`+products[0])
  return (
    <div className='bg-white text-left'>
        <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
            <h1 className='text-xl md:text-2xl text-black'>Back in stock!</h1>
            <div className="grid grid-row-2 md:grid-cols-3 gap-4 mt-10 pt-5 m-auto">
                    <div className='md:col-span-2 h-full'>
                    <a href="#" >
                        <img className="h-full bg-contain" src='/assets/background.jpg' alt="" />
                        <h5 className='mt-1'>Gowns <span>-{'>'}</span></h5>
                    </a>
                    </div>
               
                    <div className='flex md:flex-col gap-4 mt-3 md:mt-1'>
                    <a href="">
                        <div>
                            <img className="h-full" src="/assets/kids-m-tuxedo.jpg" alt="" />
                            <h5>Tuxedos</h5>
                        </div>
                    </a>
                    <a href="">
                        <div>
                            <img className="h-full" src="/assets/kids-f-gown.jpg" alt="" /><h5>Kids</h5>
                        </div>
                    </a>
                    </div>
               
            </div>
        </div>
    </div>
  )
}

export default NewArrivalProduct