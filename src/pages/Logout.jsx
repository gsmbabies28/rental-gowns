import { Navigate } from "react-router-dom";
import UserContext from "../UseContext/UserContext";
import { useContext, useEffect } from "react";

const Logout = () => {
  
  const { setToken } = useContext(UserContext);
  localStorage.clear(); 

  useEffect(()=>{
    setToken(null);
  })
   
  return (
    <Navigate to="/account" replace = {true} />
  )
}

export default Logout