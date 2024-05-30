import React from 'react'



    const Router = createBrowserRouter(
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
              <Route path="faq" element={<FAQPage />} />
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
  


export default Router