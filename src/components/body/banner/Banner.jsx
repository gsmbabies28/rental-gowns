import { Link } from "react-router-dom"
const Banner = ({title, text, btnTxt}) => {
  return (
    <section
      class="relative bg-[url(/assets/background.jpg)] bg-fixed bg-cover bg-center bg-no-repeat"
    >
      <div
        class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Let us find your fit.

            <strong class="block font-extrabold text-cyan-900"> Dress to Impress. </strong>
          </h1>

          <p class="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea!
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="/collections/all"
              class="block w-full rounded bg-gray-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring active:bg-cyan-500 sm:w-auto"
            >
              {btnTxt}
            </Link>

            <Link
              to="#"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-cyan-600 shadow hover:text-black focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
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