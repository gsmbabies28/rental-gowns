import React from 'react'

const NewArrivalProduct = ({products}) => {

  return (
    <div className='bg-white text-left'>
        <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
            <h1 className='text-xl md:text-2xl text-black'>Back in stock!</h1>
            <div class="grid grid-row-2 md:grid-cols-3 gap-4 mt-10 pt-5 m-auto">
                    <div className='md:col-span-2'>
                    <a href="#" >
                        <img src={products[Math.floor(Math.random()*products.length)]?.imageSrc} alt="" />
                        <h5 className='mt-'>Gowns <span>-{'>'}</span></h5>
                    </a>
                    </div>
               
                    <div className='flex md:flex-col gap-4'>
                    <a href="">
                        <div><img className="h-full max-h-full" src={products[Math.floor(Math.random()*products.length)]?.imageSrc} alt="" /><h5>Tuxedos</h5></div>
                    </a>
                    <a href="">
                        <div><img  className="h-full max-h-full" src={products[Math.floor(Math.random()*products.length)]?.imageSrc} alt="" /><h5>Kids</h5></div>
                    </a>
                    </div>
               
            </div>
        </div>
    </div>
  )
}

export default NewArrivalProduct