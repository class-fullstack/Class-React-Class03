import React from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import router from "./routes";
import ProductProvider from "./store/contexts/productProvider";
import CartProvider from "./store/contexts/cartProvider";

const App = () => {
  return (
    <React.Fragment>
      <CartProvider>
        <ProductProvider>
          <ToastContainer />
          <RouterProvider router={router} />
        </ProductProvider>
      </CartProvider>
    </React.Fragment>
  );
};

export default App;
