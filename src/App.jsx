import {
  createBrowserRouter,
  Route,
  Outlet,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collections" element={<ShopPage />}>
          <Route path="all" element={<ShopPage />} />
          <Route path="gowns" element={<ShopPage />} />
          <Route path="tuxedos" element={<ShopPage />} />
          <Route path="top" element={<ShopPage />} />
        </Route>
        <Route path="account">
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
        <Route path="services" element={<h1>hello</h1>} />
        <Route path="cart" element={<CartPage />} />
        <Route path="products/:name" element={<ProductDetails />} />
        <Route
          path="*"
          element={
            <h1 className="text-5xl text-center p-12">Page not found</h1>
          }
        />

    </Route>
  )
);

export default function App() {
  return (
    <RouterProvider router = {router} />
  );
}







function Layout() {
  return (
    <>
      <Header>
        <AnnouncementBar text="Discounted Price!!!!" bgColor="black" />
        <NavBarV2 />
      </Header>
      <main>
        <Outlet />
      </main>
      <hr className="px-2 mx-auto" />
      <Footer />
    </>
  );
}
