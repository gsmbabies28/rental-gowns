import Swal from "sweetalert2";
import { addToCart } from "./AddToCart";

export const handleAddToCart = (id, isLogged=false, setIsLogged, setIsButtonDisabled) => {
    const token = localStorage.getItem('token');
    setIsButtonDisabled(true);
    if(isLogged){
      addToCart(token, false, id)
        .then(() => Swal.fire({
            position: "center",
            icon: "success",
            title: "Added to cart!",
            showConfirmButton: false,
            timer: 1500
          })
        )
        .catch(error=>{
          // console.error(error.message);
          if(error.message === 'expired' ) {
            addToCartOff(id);
            setIsLogged(false);
          }
        }).finally(()=>setIsButtonDisabled(false));

    } else {
      addToCartOff(id);
      setIsButtonDisabled(false);
    }
};

function addToCartOff (id) {
  const currentTime = Date.now();
  const expirationTime = currentTime + 1 * 60 * 15000;

  if (localStorage.getItem("sunflower_cartItems")) {
    let product = JSON.parse(localStorage.getItem("sunflower_cartItems"));
    
    if(product.hasOwnProperty(id)){
      product[id] +=1;
    } else {
      product[id] = 1;
    }

    localStorage.setItem("sunflower_cartItems", JSON.stringify(product));
    localStorage.setItem("time", expirationTime);
  } else {
    const product = new Object();
    product[id] = 1;
    localStorage.setItem("sunflower_cartItems", JSON.stringify(product));
    localStorage.setItem("time", expirationTime);
  }
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Added to cart!",
    showConfirmButton: false,
    timer: 1500
  });
}