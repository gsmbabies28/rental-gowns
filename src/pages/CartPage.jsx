import EmptyCart from "../components/utils/EmptyCart"
import Cart from "../components/utils/Cart"


const CartPage = () => {
  return (
    <div className='w-full max-screen-2xl p-5 bg-white'>
            {/* <EmptyCart /> */}
            <Cart />
    </div>
  )
}

export default CartPage