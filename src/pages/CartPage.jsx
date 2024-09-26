import EmptyCart from "../components/utils/EmptyCart";
import Cart from "../components/utils/Cart";
import { Link } from "react-router-dom";
import React, {
  useEffect,
  useMemo,
  useReducer,
  useContext,
  useLayoutEffect,
} from "react";
import CartPageReducer, {
  fetchProductData,
  initialCartItems,
  checkOut
} from "../reducers/CartPage";
import UserContext, {defaultUser} from "../UseContext/UserContext";

const CartPage = () => {
  //Variables
  const [state, dispatch] = useReducer(CartPageReducer, initialCartItems);
  const { isLogged, setIsLogged, setUser, user, setIsEmptyCart,remainingTime } = useContext(UserContext);
  
  //Dispatch reducers
  const removeProduct = (id) => {
    dispatch({ type: "removeItem", id: id, isLogged: isLogged});
  };

  const changeQuantity = (num, id, currentQuantity, operator) => {
    dispatch({
      type: "changeQuantity",
      num: num,
      id: id,
      currentQuantity: currentQuantity,
      operator: operator,
      isLogged: isLogged
    });
  };

  //useEffect
  //this will fetch the data in cart items in user cart or in localstoragesdfgs
  useEffect(() => {
    fetchProductData(isLogged)
      .then((res) => {
        // console.log(res);
        dispatch({ type: "addProducts", products: res })
      })
      .catch((error) => {
        // console.log(error);
        if(error.response?.status === 403 ){
          setUser(defaultUser);
          setIsLogged(false);
          localStorage.removeItem('token');
        }
      });
  }, [ isLogged, state.token ] );

  useEffect(()=>{
    if(state.productList?.length > 0)  {
      setIsEmptyCart(false);
    } 

    if(state.productList?.length <= 0){
      setIsEmptyCart(true)
    }

  },[state.productList])

  //totaling price
  const totalPrice = useMemo(() => {
    const totalPrice = state.productList?.reduce(
      (acc, product) => acc + product.productID?.price * product.quantity,
      0
    );
    return totalPrice;
  }, [state.productList]);

  useLayoutEffect(()=>{
    if(remainingTime<=0){
      dispatch({ type: "setEmpty" });
      setIsEmptyCart(true);
    } else {
      return;
    }
  },[remainingTime])
  
  // console.log(state.productList);

  return (
    <div className="w-full max-screen-2xl p-5 bg-white">
      {state.productList?.length > 0 ? (
        <div className="bg-white-200 mt-6 sm:mt-12 mx-auto text-center w-full max-w-screen-lg sm:p-5">
          <div className="flex justify-between align items-end">
            <h1 className="text-4xl">Your cart</h1>
            <Link
              to="/collections/all"
              className="underline underline-offset-4"
            >
              Continue shopping
            </Link>
          </div>

          <div className="mt-8 flex justify-between text-sm text-gray-500 text-left gap-6">
            <span className="w-full">PRODUCT</span>
            <span className="w-full"></span>
            <span className="hidden sm:block w-full text-left">QUANTITY</span>
            <span className="w-full text-right">TOTAL</span>
          </div>

          <hr /> 

          {state.productList?.map((item) => (
            <Cart
              key={item.productID?._id}
              product= {item}
              handleRemove={removeProduct}
              changeQuantity={changeQuantity}
            />
          ))}
          <div className="mt-3 w-full border-t-2 pt-2 space-y-5">
            <div className="text-gray-600 text-left">
              Shipping Address : {user.shipAdd}
            </div>
            <div className="space-y-3">
              <label
                htmlFor="note"
                className="text-gray-500 text-sm tracking-widest "
              >
                LEAVE A NOTE WITH YOUR ORDER
              </label>
              <textarea
                id="note"
                className="p-2 text-gray-600 w-full h-28 border"
                onChange={(e) => dispatch({ type: "setNote", note: e.target.value })}
                value={state.note}
              ></textarea>
            </div>
            <div className="text-gray-600">
              <h1 className="font-medium">Total</h1>
              <h2 className="font-medium">
                <span className="text-lg tracking-widest">&#8369;</span>{" "}
                {totalPrice.toLocaleString()} PHP
              </h2>
              <h3 className="tracking-widest text-sm mt-3">
                Taxes and shipping calculated at checkout
              </h3>
              <button 
                className="bg-gray-700 hover:bg-gray-900 text-sm font-medium tracking-widest text-slate-200 p-2 mt-3 w-full "
                onClick = { () => checkOut(state.note) }
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-5xl text-center mt-5">Your cart is empty</h1>
      )}
      <EmptyCart />
    </div>
  );
};

export default CartPage;
