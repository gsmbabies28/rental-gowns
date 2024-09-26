import axios from "axios";
import Swal from "sweetalert2";

export const initialCartItems = {
    productList: [],
    note: ""
};

//fetch cart user when logged or fetch each product when not logged
export const fetchProductData = async (isLogged) => {

  try {
    let res;
    if (isLogged) {
      res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/users/cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (res.status !== 200){
        throw new Error("Something went wrong fetching product!");
      } 

      return res.data.msg;

    } else {
      const cartItems =
        JSON.parse(localStorage.getItem("sunflower_cartItems")) || {};
      const queryString = Object.entries(cartItems)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");

      res = await axios.get(
        `${
          import.meta.env.VITE_APP_API_URL
        }/products/getProductsByArray?${queryString}`
      );

      if (res.status !== 200)
        throw new Error("Something went wrong fetching product!");

      return res.data.msg;
    }
    
  } catch (error) {
    // console.error(error);
    // console.warn("hahah")
    throw new Error(error);
  }
};

//Reducer for cart page
const CartPageReducer = (state, action) => {
  let cartItems =  JSON.parse(localStorage.getItem('sunflower_cartItems'))
  
  switch (action.type) {
    case "addProducts":
      return { ...state, productList: action.products };
    
    case "setEmpty":
      localStorage.removeItem("sunflower_cartItems");
      localStorage.removeItem("time");
      return { ...state, productList: [] };
  
    case "removeItem":
      if (action.isLogged) {
        // console.log(token);
        axios.patch(`${import.meta.env.VITE_APP_API_URL}/users/cart/${action.id}`, {},
          {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        })
        .then(res=>res)
        .catch(error=>console.error(error));

        return {
          ...state,
          productList: state.productList.filter(
            (item) => item.productID._id !== action.id
          ),
        };
      } else {
        Object.keys(cartItems)?.length === 0 && (localStorage.removeItem('time'));
        delete cartItems[action.id];
        localStorage.setItem(
          "sunflower_cartItems",
          JSON.stringify(cartItems)
        );
        return {
          ...state,
          productList: state.productList.filter(
            (item) => item.productID._id !== action.id
          ),
        };
      }
    //end of remove product item
      
    case "changeQuantity":
      const quantity = Number(action.num);
      let updatedQuantity = action.currentQuantity;
     
      switch (action.operator) {
        case "input":
          if (quantity <= 0) {
            updatedQuantity = 1;
          } else {
            updatedQuantity = quantity;
          }
          break;

        case "+":
          updatedQuantity += 1;
          break;

        case "-":
          if (action.currentQuantity <= 1) {
            return state;
          }
          updatedQuantity -= 1;
          break;

        default:
          updatedQuantity = 1;
      }
      
      const updatedItems = state?.productList?.map((elem) => {
        if (elem.productID._id === action.id) {
          !action.isLogged && (cartItems[action.id] = Number(updatedQuantity));
          let updatedItems = { ...elem, quantity: updatedQuantity };
          return updatedItems;
        } else {
          return elem;
        }
      });

      if(action.isLogged){
        axios.put(`${import.meta.env.VITE_APP_API_URL}/users/cart`,{
          productID: action.id,
          quantity: updatedQuantity
        },{
          headers: {
            'Content-Type' : "application/json",
            Authorization : `Bearer ${state.token}`
          }
        })
        .then(() => console.log("success change quantity") ) 
        .catch(() => console.error("Error on changing quantity"));
      } else {
        console.log(state.cartItems);
        localStorage.setItem(
          "sunflower_cartItems",
          JSON.stringify(cartItems)
        );
      }

      return { ...state, productList: updatedItems };
    //end of change quantity  

    case "setNote":
      return { ...state, note: action.note };
      
    default:
      console.log("Unknown action executed");
      break;
  }
};

//check out product
export const checkOut = async () => {
  Swal.fire({
    title: "Ready to check out?",
    text: "Please review your order details!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, check out"
  }).then((result) => {
    if (result.isConfirmed) {
      
      Swal.fire({
        title: "Thank you!",
        text: "Your order has been processed.",
        icon: "success"
      });
    }
  });
}

export default CartPageReducer;
