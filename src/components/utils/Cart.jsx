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

const Cart = () => {
  return (
    <div className="bg-white-200 mt-12 mx-auto text-center w-full max-w-screen-lg p-5">
        
        <div className="flex justify-between align items-end">
            <h1 className="text-4xl">Your cart</h1>
            <Link to="/" className="underline underline-offset-4">Continue shopping </Link>
        </div>
        
        <div id="cart-list">
            <div className="mt-8 border-b pb-2">
                <p className="text-sm  text-color-slate-100 flex justify-between"><span>PRODUCT</span><span>QUANTITY</span><span>TOTAL</span></p>
            </div>
            <div>
                <div>
                
                </div>
                <div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Cart