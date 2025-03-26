import React from "react";
import { ProductContext } from "../../store/contexts/productProviders";

const useProducts = () => {
  const data = React.useContext(ProductContext);
  return data;
};

export default useProducts;
