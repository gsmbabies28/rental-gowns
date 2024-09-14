import axios from "axios";
import Swal from "sweetalert2";
import { handleLogin } from "../functionsAndHandlers/Login";

export const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

export function RegistrationReducer(state,action) {
    switch(action.type){

        case "update":
            return {...state,[action.propName]:action.propValue}

            
        case "register":
            if(action.isPassMatch)
                console.log(register(action, state));
            return state;
        
        default:
            return state;


    }
};


 function register (action, state) {
    axios.post(`${import.meta.env.VITE_APP_API_URL}/users/register`, state)

    .then(async (res) => {
        if (res) {
            // Await Swal.fire to ensure the user has made a decision before navigating
            // const ifOk = await Swal.fire({
            //     title: "Success!",
            //     text: "Registration Success!",
            //     icon: "success"
            // });

            // if (ifOk.isConfirmed || ifOk.isDismissed) {
            //     action.navigate("/account");
            // }
            handleLogin(action.navigate, state.email, state.password, action.setToken, 'Registration Success!')   
        }
        // console.log(res);
    })
    .catch((err) => {
        const checkEmail = err?.response?.data?.error;

        if (Array.isArray(checkEmail)) {
            for (let check of checkEmail) {
                if (check.msg === "Email already in use") {
                   action.setIsEmailInUse(true);
                    break;  // Exit loop early if email is already used
                }
            }
        } else {
            console.error("Registration error:", err);
        }
    });
    
  };
