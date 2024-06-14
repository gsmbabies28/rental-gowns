import { createContext } from "react";

export const defaultUser ={
    firstName: '',
    lastName: '',
    email: '',
    isAdmin: ''
}
const UserContext = createContext(()=>{});
 
export const UserContextProvider= UserContext.Provider;

export default UserContext;