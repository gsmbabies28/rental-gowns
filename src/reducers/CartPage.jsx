import axios from "axios";

export const fetchProductData = async (cartItems) => {
  try {
    const queryString = Object.entries(cartItems)
      .map(([key, value]) => 
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join('&');

    const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/products/getProductsByArray?${queryString}`);
    
    return res.data.msg;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const CartPageReducer = (state, action) => {
    
    switch(action.type){
      case "addProducts":
          return {...state, productList: action.products};

        case "removeItem": 
            delete state.cartItems[action.id];
            localStorage.setItem('sunflower_cartItems', JSON.stringify(state.cartItems));
            return {...state, productList: state.productList.filter(item=>item._id!==action.id)};
          
        case "setEmpty":
          return {...state, productList:[]};

        case "changeQuantity":
            const quantity = Number(action.num);
            let updatedQuantity = action.currentQuantity;
          
            switch(action.operator){
              case "input":
                if(quantity<=0){
                  updatedQuantity = 1;
                } else {
                  updatedQuantity = quantity;
                }
                break;
              
              case "+":
                updatedQuantity += 1
                break;
              
              case "-":
                if(action.currentQuantity<=1){
                  return state;
                }
                updatedQuantity-=1;
                break;

              default:
                updatedQuantity = 1;
            }
            
            const newItems = state?.productList?.map(elem=>{
                if(elem._id === action.id) {
                    state.cartItems[action.id] = Number(updatedQuantity);
                    let updatedItems = {...elem, quantity:updatedQuantity};
                    return updatedItems;
              } else {
                return elem;
              }
            });    
            localStorage.setItem('sunflower_cartItems',JSON.stringify(state.cartItems));

        return {...state, productList:newItems};

        default:
            console.log("Unknown action executed");
            break;
    }
    
};

export default CartPageReducer;


