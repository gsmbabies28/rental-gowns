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
    const [isEmptyCart, setIsEmptyCart ] = useState(true);
    const [expirationTime ,setExpirationTime] = useState( new Date( JSON.parse( localStorage.getItem("time") ) ) );
    const [remainingTime, setRemainingTime] = useState(
    expirationTime - Date.now()
     );

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
      .catch(()=>{
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

      //when the user is not logged in a timer will show for cart items
    useEffect(() => {
      if (isLogged) {
        return;
      }
      const timer = setInterval(() => {
        const now = Date.now();
        const timeLeft = expirationTime - now;

        if (timeLeft <= 0) {
          clearInterval(timer);
          setRemainingTime(0);
        } else {
          setRemainingTime(timeLeft);
        }
      }, 1000);

      return () => clearInterval(timer);

    }, [isLogged, isEmptyCart, expirationTime]);

    //Timer
    const formatTime = (ms) => {
      const seconds = Math.floor((ms / 1000) % 60);
      const minutes = Math.floor((ms / (1000 * 60)) % 60);
      const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
      const days = Math.floor(ms / (1000 * 60 * 60 * 24));
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
    
    // console.log(isEmptyCart);

    return (
      <>
        <UserContextProvider value={{user, isLoading,isLogged, getToken, remainingTime, setIsEmptyCart, setToken, setUser, setIsLogged,setExpirationTime}}>
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
        {(!isEmptyCart && !isLogged) && (
          <div className="w-1/6 sticky bottom-0 ml-auto py-1 text-center text-cyan-900 bg-cyan-200">
            {" "}
            Items Expires in {formatTime(remainingTime)}
          </div>
        )}
      </>
    );
  }