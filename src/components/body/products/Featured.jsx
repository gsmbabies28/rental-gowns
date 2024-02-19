import ProductFeatured from "./ProductFeatured"
import NewArrivalProduct from "./NewArrivalProduct"
import VideoProducts from "./VideoProducts"
import Testimonials from "./Testimonials"
const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

const Featured = () => {
  return (
    <div className='mt-10 p-2'>

        <div>
            <h1 className='text-3xl md:text-5xl lg:text-5xl'>
                Obsessive Attention. Intelligent Effort.
            </h1>
            <p className='mt-5 lg:text-md tracking-wide'>
                Functional handbags made of luxurious materials to improve people's lives in small but mighty ways.
            </p>
        </div>
        <ProductFeatured products={products}/>
        <NewArrivalProduct products={products} />
        <VideoProducts />
        <Testimonials />
    </div>

  )
}

export default Featured