import axios from "axios";
import Swal from "sweetalert2";

export const handleSubmitForm = async (e,isPasswordMatch,navigate, setIsEmailInUse,state) => {
    e.preventDefault();
    if(!isPasswordMatch)
      return;

    try {  
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/users/register`,
        state
      );
      
      const ifOk = await Swal.fire({
        title: "Success!",
        text: "Regi stration Success!",
        icon: "success"
      })  

      if(ifOk.isConfirmed || ifOk.isDismissed)
        navigate("/account");

    } catch (error) {
      const checkEmail = await error?.response?.data?.error;
      for(let check of checkEmail){
        if(check.msg==="Email already in use"){
          return setIsEmailInUse(true);
        }
      }
      console.error(error);
    } 
  };