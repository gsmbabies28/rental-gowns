import axios from "axios";

export const getUserDetails = async (tokenBearer, source) => {
  
  let data = new Object();

  if (!tokenBearer) return;

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/users/getUserDetails`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenBearer}`,
        },
        cancelToken: source.token,
      }
    );

    data = await response.data.msg;
    return { ...data, isLogged: true };

  } catch (error) {
    
    if (error.response?.data?.error.message === "jwt expired") {
      localStorage.removeItem("token");
      return { isLogged: false };
    }

    console.log(error.response);
  }
};
