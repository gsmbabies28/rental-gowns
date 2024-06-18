import axios from "axios";

export const getUserDetails = async (source,token=null, setToken) => {
  
  let data = new Object();

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/users`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        cancelToken: source.token,
      }
    );
    
    data = await response.data.msg;

  } catch (error) {
    if (error.response?.data?.error.message === "jwt expired") {
      localStorage.removeItem("token");
      setToken(null);
      return;
    } else {
      console.log(error.response);
      console.log(error);
    }
  }
  return data;
};
