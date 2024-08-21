import axios from "axios";

export const getUserDetails = async ( setToken ) => {
  
  let data = new Object();
  
  const token = localStorage.getItem('token');

  if(!token) 
    throw new Error("Token is undefined");


  try {

    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/users`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        } 
      }
    );
    
    data = await response.data.msg;
    return data;

  } catch (error) {

    // console.log(error.response.data)

    if (error.response?.data?.msg === "Token expired") {
      console.warn("expired na ue!!!")
      localStorage.removeItem("token");
    } else {
      // console.error(error.response);
      console.error(error);
    }

  }
  
};
