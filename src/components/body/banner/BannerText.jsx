

const BannerText = ({title="Text",text="text",btnTxt="button"}) => {
  return (
    <div id="banner-text" className="absolute bottom-[20px] sm:bottom-[20px] lg:bottom-[120px] left-0 right-0 m:w-2/4 mx-auto m:h-1/6 text-center">
        <h1  className="text-white md:text-3xl lg:text-5xl ">{title}</h1>
        <h6 className="text-white mt-3 md:text-xl">{text}</h6>
        <div className="px-6 py-3 border text-white mt-7 w-[125px] sm:w-32 mx-auto text-lg bg-gray-900 sm:bg-none opacity-80">
            <a href="" >{btnTxt}</a>
        </div>
    </div>
  )
}

export default BannerText