import { Link } from "react-router-dom"
const Banner = ({title, text, btnTxt}) => {
  return (
    <section
      className="relative bg-[url(/assets/hardware-bg.jpg)] bg-fixed bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-white/5 sm:bg-transparent sm:from-white/5 sm:to-white/5 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l lg:bg-black/[.25]"
      >
      </div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl text-[#FFDC7F] font-extrabold sm:text-5xl tracking-wide">
            Find your tools.
            <strong className="mt-2 block font-normal text-[#FFDC7F]">"Your Reliable Partner in Hardware Solutions"</strong>
          </h1>

          <p className="mt-4 max-w-xl sm:text-xl/relaxed text-[#EEEEEE] font-sans">
            General Merchandise provides top-quality hardware solutions that blend durability and innovation. Whether you're tackling DIY projects or professional tasks, we offer the precision and strength you need to get the job done right.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center sm:justify-start">
            <Link
              to="/collections/all"
              className="block w-full rounded bg-cyan-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-cyan-600 focus:outline-none active:bg-slate-500 sm:w-auto"
            >
              {btnTxt}
            </Link>

            <Link
              to="/faq"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-cyan-600 shadow hover:text-black focus:outline-none focus:ring active:text-cyan-500 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner