import Home from "./pages/Home";
import Layout from "./Layout";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword";

import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import FAQPage from "./pages/FAQPage";
import Logout from "./pages/Logout";

import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
  
        <Route path="collections">
          <Route index element={<ShopPage />} />
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
  
        <Route path="account">
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="recover" element={<ResetPassword />} />
          <Route path="logout" element={<Logout />} />
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