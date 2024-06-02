import axios from "axios";

export const getUserDetails = async (tokenBearer, source) => {
    if(!tokenBearer)
        return;
    let data;

    try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/users/getUserDetails`,
      {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenBearer}`
        },
        cancelToken: source.token
      },
      
    );
    
    data = await response.data.msg;
    
  } catch (error) {
    console.log(error);
  }
  return {...data,isLogged:true};
};
