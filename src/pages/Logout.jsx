import { Navigate } from "react-router-dom";
import UserContext from "../UseContext/UserContext";
import { useContext, useEffect } from "react";

const Logout = () => {
  
  const { setToken, setIsLogged, setIsEmptyCart } = useContext(UserContext);
  localStorage.clear(); 

  useEffect(()=>{
    setToken(null);
    setIsLogged(false);
    setIsEmptyCart(true);
  })
   
  return (
    <Navigate to="/account" replace = {true} />
  )
}

export default Logout