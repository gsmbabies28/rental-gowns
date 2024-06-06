import axios from "axios";
import Swal from "sweetalert2";

export const handleLogin = async (e,navigate,userLogin,password, setToken) => {    
    e.preventDefault();
    console.log(userLogin+" "+password);

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
        
        if(success.isConfirmed || success.dismiss){
            localStorage.setItem('token', token);
            await setToken(token);
            navigate('/');
        }


    } catch (error) {
        if(error.response.status == 404 || 401)
            Swal.fire({
                title: "Invalid credentials!",
                text: "Please login again!",
                icon: "error"
            });
        console.log(error.response);
    }
}   