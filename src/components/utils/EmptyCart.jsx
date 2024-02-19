import { Fragment } from "react"
import ProductFeatured from "../body/products/ProductFeatured"
import Button from "./Button"
import { Link } from "react-router-dom"

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

function EmptyCart() {
  return (
    <div className="bg-white mt-12 mx-auto text-center">
        <h1 className="text-5xl">
            Your cart is empty
        </h1>
        <Button text="Continue shopping" margin="10" />

        <h1 className="mt-12 text-2xl">Have an account?</h1>
        <p className="text-lg mt-2 tracking-wide"><span className="underline underline-offset-4"><Link to="/account/login">Log in</Link></span> to check out faster. </p>
        <div className="w-full text-left mt-12">
            <h1 className="lg:ms-28 max-w-2xl px-12 sm:px-20 w-full max-w-96 text-2xl">You may also like</h1>
            <ProductFeatured products={products} />
            <div className="mx-auto text-center mb-12">
                <Button  text="View all" />
            </div>
        </div>
    </div>
  )
}

export default EmptyCart