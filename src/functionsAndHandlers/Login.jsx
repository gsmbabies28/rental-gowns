import axios from "axios";
import Swal from "sweetalert2";

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
        )
        const { token } = response.data;
        
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
            Swal.fire({
                title: "Error",
                text: "Something went wrong. Please try again!",
                icon: "error"
            });
        }
        console.log(error.response);
    }
}   