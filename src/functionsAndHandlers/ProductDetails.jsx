import axios from "axios";
import Swal from "sweetalert2";
import { addToCart } from "./AddToCart";

export const handleAddToCart = (id, isLogged=false) => {
    const token = localStorage.getItem('token');

    if(isLogged){
      addToCart(token, false, id).then(res=> Swal.fire("SweetAlert2 is working!")).catch(error=>console.error("Error in adding to cart!"));
    } else {
      const currentTime = Date.now();
      const expirationTime = currentTime + 1 * 60 * 1000;
  
      if (localStorage.getItem("sunflower_cartItems")) {
        let product = JSON.parse(localStorage.getItem("sunflower_cartItems"));
        product[id] = 1;
        localStorage.setItem("sunflower_cartItems", JSON.stringify(product));
        localStorage.setItem("time", expirationTime);
      } else {
        const product = new Object();
        product[id] = 1;
        localStorage.setItem("sunflower_cartItems", JSON.stringify(product));
        localStorage.setItem("time", expirationTime);
      }
      Swal.fire("SweetAlert2 is working!");
    }

  };

function loggedUserCart () {
    
}
