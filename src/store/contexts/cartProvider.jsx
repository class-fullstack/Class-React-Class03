import React from "react";
import cartReducer from "../reducers/cartReducer";
import cartType from "../reducers/actionTypes/cartType";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };

  const [cartItems, dispatch] = React.useReducer(cartReducer, initialState);

  const data = {
    addToCart: (product) =>
      dispatch({ type: cartType.ADD_TO_CART, payload: product }),
    removeFromCart: (id) =>
      dispatch({ type: cartType.REMOVE_FROM_CART, payload: { id } }),
    cartItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
