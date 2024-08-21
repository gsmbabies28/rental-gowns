import axios from "axios";




export const initialCartItems = () => {
  return {
    cartItems: {},
    productList: [],
    note: "",
    token: localStorage.getItem("token")
  };
};

//fetch cart user when logged or fetch each product when not logged
export const fetchProductData = async (isLogged,token) => {
  try {
    let res;
    if (isLogged) {
      res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/users/cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status !== 200)
        throw new Error("Something went wrong fetching product!");

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
    throw error;
  }
};

//Reducer fork cart page
const CartPageReducer = (state, action) => {
  switch (action.type) {
    case "addProducts":
      return { ...state, productList: action.products };

    case "removeItem":
      if (action.isLogged) {
        // console.log(token);
        axios.patch(`${import.meta.env.VITE_APP_API_URL}/users/cart/${action.id}`, {},
          {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(res=>res)
        .catch(error=>console.error(error));

        return {
          ...state,
          productList: state.productList.filter(
            (item) => item._id !== action.id
          ),
        };
      } else {
        delete state.cartItems[action.id];
        localStorage.setItem(
          "sunflower_cartItems",
          JSON.stringify(state.cartItems)
        );
        return {
          ...state,
          productList: state.productList.filter(
            (item) => item._id !== action.id
          ),
        };
      }
    //end of remove product item

    
    case "setEmpty":
      localStorage.removeItem("sunflower_cartItems");
      localStorage.removeItem("time");
      return { ...state, productList: [] };

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
        if (elem._id === action.id) {
          !action.isLogged && (state.cartItems[action.id] = Number(updatedQuantity));
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
            Authorization : `Bearer ${token}`
          }
        })
        .then(res => console.log("success change quantity") ) 
        .catch(error => console.error("Error on changing quantity"));
      } else {
        localStorage.setItem(
          "sunflower_cartItems",
          JSON.stringify(state.cartItems)
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

export default CartPageReducer;
