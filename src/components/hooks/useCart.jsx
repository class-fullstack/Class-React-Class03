import React from "react";

import { CartContext } from "../../store/contexts/cartProvider";

const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default useCart;
