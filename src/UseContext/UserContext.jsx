import { createContext } from "react";

export const defaultUser ={
    firstName: '',
    lastName: '',
    email: '',
    isAdmin: '',
    isLogged: false
}
const UserContext = createContext(()=>{});
 
export const UserContextProvider= UserContext.Provider;

export default UserContext;