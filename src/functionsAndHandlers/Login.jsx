import axios from "axios";
import Swal from "sweetalert2";
export const handleLogin = async (e,navigate,userLogin,password) => {
    
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
        
        localStorage.setItem('token', token);

        // navigate('/');
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