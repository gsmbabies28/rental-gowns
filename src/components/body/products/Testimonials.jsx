

const Testimonials = () => {
  return (
    <div className='mx-auto w-full max-w-screen-xl mt-6 flex flex-col lg:flex-row justify-around  gap-7 p-3 my-12'>
        <div className="text-center py-2">
            <h1 className="text-xl font-bold">Testimonial 1</h1>
            <p className="tracking-normal mt-5 leading-loose">"The leather is sourced from environmentally friendly tanneries in Italy, France, and Turkey, where Rure is based and everything is assembled by hand."</p>
        </div>
        <div className="text-center py-2">
            <h1 className="text-xl font-bold">Testimonial 2</h1>
            <p className="tracking-normal mt-5 leading-loose">"All too often, we're forced to pick: style, or sustainability. Recently, more designers have been making environmental impact a top priority"</p>
        </div>
    </div>
  )
}

export default Testimonials