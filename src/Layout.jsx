import { Outlet } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AnnouncementBar from "./components/header/subcomponent/AnnouncementBar";
import NavBarV2 from "./components/header/subcomponent/NavBarV2";
import { UserContextProvider, defaultUser } from "./UseContext/UserContext";
import { getUserDetails,  } from "./functionsAndHandlers/GetUserDetails";
import axios from "axios";

export default function Layout() {
    const [ user, setUser ] = useState(defaultUser);
    const [isLoading , setIsLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const [getToken, setToken] = useState(localStorage.getItem('token'));
 
    useEffect(() => {    
      
      let source = axios.CancelToken.source();

      getUserDetails( setToken )
      .then(
        res => {
          setUser(prev=>{
            return {...prev,...res}
          });
          setIsLoading(false);
          setIsLogged(true);
        }
      )
      .catch(error=>{
        // console.log(error);
        setUser(defaultUser);
        setIsLogged(false);
        setIsLoading(false);
        setIsLogged(false);
      }); 
  
      return () => {
        setIsLoading(true);
        setIsLogged(false);
        source.cancel();
      }
  
    }, [ getToken] );

    // console.log(user);

    return (
      <>
        <UserContextProvider value={{user, isLoading,isLogged, getToken, setToken, setUser, setIsLogged}}>
          <Header>
            <AnnouncementBar text="Discounted Price!!!!" />
            <NavBarV2 />
          </Header>
          <main>
            <Outlet />
          </main>
        </UserContextProvider>
        <hr className="px-2 mx-auto" />
        <Footer />
      </>
    );
  }