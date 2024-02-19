import Background from "./Background"
import BannerText from "./BannerText"
const Banner = ({title, text, btnTxt}) => {
  return (
    <div className="relative text-center">
      <div id="banner">
          <div className="mx-auto grid md:grid-cols-2  bg-gradient-to-r from-gray-900 to-gray-700  w-full lg:h-screen">
              <Background image="/assets/background.jpg" />
            
              <Background image="/assets/background2.jpg" />
          </div>
      </div>
      <BannerText title={title} text={text} btnTxt={btnTxt} />
    </div>
  )
}

export default Banner