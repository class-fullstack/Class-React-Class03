import axios from "axios";
import React from "react";

export const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setIsLoading(false);
        setProducts(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching products:", error);
      });
  }, []);

  ProductContext.displayName = "Products never die";

  const data = { products, isLoading };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
