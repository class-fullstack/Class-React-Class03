import React from "react";
import cartReducer from "../reducers/cartReducer";
import cartType from "../reducers/actionTypes/cartType";
import cartConstants from "../../components/constants/cart";
import localStorageUtil from "../../components/utils/localStorage";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: localStorageUtil.getItem(cartConstants.KeyCart) || [],
  };

  const [cartItems, dispatch] = React.useReducer(cartReducer, initialState);

  const data = {
    addToCart: (product) =>
      dispatch({ type: cartType.ADD_TO_CART, payload: product }),
    removeFromCart: (id) =>
      dispatch({ type: cartType.REMOVE_FROM_CART, payload: { id } }),
    increment: (id) => dispatch({ type: cartType.INCREMENT, payload: { id } }),
    decrement: (id) => dispatch({ type: cartType.DECREMENT, payload: { id } }),
    clearCart: () => dispatch({ type: cartType.CLEAR_CART }),
    cartItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
