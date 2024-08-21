import axios from "axios";
import Swal from "sweetalert2";
import { addToCart } from "./AddToCart";

export const handleLogin = async (e,navigate,userLogin,password, setToken) => {    
    e.preventDefault();
    
    const data = {
        email: userLogin,
        password: password
    }

    try {

        const response = await axios.post(
            `${import.meta.env.VITE_APP_API_URL}/users/login`,
            data
        );

        const { token } = response.data;

        //check the localstorage for temporary cart and transfer it to the user cart
        const checkLocalStorage = Object.keys(JSON.parse(localStorage.getItem('sunflower_cartItems')) || {} );
        
        checkLocalStorage.length >0 && addToCart(token, true);
        
        const success = await Swal.fire({
            title: "Login sucess!",
            text: "Welcome User",
            icon: "success"
        });

        localStorage.setItem('token', token);
        setToken(token);

        if(success.isConfirmed || success.dismiss){  
            navigate('/');
        }


    } catch (error) {

        if (error.response && (error.response.status === 404 || error.response.status === 401)) {
            Swal.fire({
                title: "Invalid credentials!",
                text: "Please login again!",
                icon: "error"
            });
        } else {
            console.log(error);
            Swal.fire({
                title: "Error",
                text: "Something went wrong. Please try again!",
                icon: "error"
            });
        }
    }
}   

