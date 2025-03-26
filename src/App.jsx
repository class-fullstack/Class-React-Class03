import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import ProductProvider from "./store/contexts/productProviders";

const App = () => {
  return (
    <React.Fragment>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </React.Fragment>
  );
};

export default App;
