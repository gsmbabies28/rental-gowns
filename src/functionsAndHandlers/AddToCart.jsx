import axios from "axios";

export const addToCart = async ( token, fromLocalStorage, items ) => {
    let products; 

    if(fromLocalStorage) {

        const parsedproducts = JSON.parse(localStorage.getItem('sunflower_cartItems'));
      
        products = Object.entries(parsedproducts).map( ([key,value]) => {
            return { productID: key, quantity: value } ;
        } );
        localStorage.removeItem('sunflower_cartItems');
        localStorage.removeItem('time');
    } else {
        products = [{productID: items, quantity: 1}];
    }

    try {
        await axios.post(
            `${import.meta.env.VITE_APP_API_URL}/users/cart`,
            {products: products},
            {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                }
            }
        )     
    } catch (error) {
        // console.error("Something went wrong adding items to cart!");
        // console.log(error); 
        if(error.response?.status === 403){
            localStorage.removeItem('token');
            throw new Error('expired');
        }
    }
}
