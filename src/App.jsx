import {
  createBrowserRouter,
  Route,
  Outlet,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
// import LoginPage from "./pages/LoginPage";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword";
import Header from "./components/header/Header";
import AnnouncementBar from "./components/header/subcomponent/AnnouncementBar";
import NavBarV2 from "./components/header/subcomponent/NavBarV2";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import FAQPage from "./pages/FAQPage";
import { UserContextProvider, defaultUser } from "./UseContext/UserContext";
import { getUserDetails,  } from "./functionsAndHandlers/GetUserDetails";
import axios from "axios";

export default function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="collections" element={<ShopPage />}>
        <Route path="all" element={<ShopPage />} />
        <Route path="gowns" element={<ShopPage />} />
        <Route path="weddings" element={<ShopPage />} />
        <Route path="casuals" element={<ShopPage />} />
        <Route path="cocktails" element={<ShopPage />} />
        <Route path="tuxedos" element={<ShopPage />} />
        <Route path="tops" element={<ShopPage />} />
        <Route path="bottoms" element={<ShopPage />} />
        <Route path="sets" element={<ShopPage />} />
        <Route path="kids" element={<ShopPage />} />
      </Route>
      <Route path="account" element={<LoginPage/>}>
        <Route index path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="recover" element={<ResetPassword />} />
        <Route
          path="*"
          element={
            <h1 className="text-5xl text-center p-12">Page not found</h1>
          }
        />
      </Route>
      <Route path="faq" element={<FAQPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="products/:name" element={<ProductDetails />} />
      <Route
        path="*"
        element={<h1 className="text-5xl text-center p-12">Page not found</h1>}
      />
    </Route>
  )
);

function Layout() {
  const [ user, setUser ] = useState(defaultUser);
  const token = localStorage.getItem('token');
  const [isLoading , setIsLoading] = useState(true);
  
  useEffect(() => {    
    let source = axios.CancelToken.source();

    getUserDetails(token,source,setUser)
    .then(
      res => {
        setUser(prev=>{
          return {...prev,...res}
        });
        setIsLoading(false);
      }
    )
    .catch(error=>console.log(error));

    return () => {
      setIsLoading(true);
      source.cancel();
    }

  }, [token] );

  return (
    <>
      <UserContextProvider value={{user, isLoading}}>
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
