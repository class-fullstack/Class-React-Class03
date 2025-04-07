import { toast } from "react-toastify";

import cartType from "./actionTypes/cartType";
import { truncateTitle } from "../../components/utils/convertText";
import cartConstants from "../../components/constants/cart";
import localStorageUtil from "../../components/utils/localStorage";

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartType.ADD_TO_CART:
      const existingItem = state.cart.find((item) => item.id === payload.id);

      if (existingItem) {
        toast.success(`Just more 1 ${truncateTitle(payload.title, 23)}`);
        const updatedCart = state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        localStorageUtil.setItem(cartConstants.KeyCart, updatedCart);
        return {
          ...state,
          cart: updatedCart,
        };
      }
      toast.success(`Add to ${truncateTitle(payload.title, 23)}`);
      const newCart = [...state.cart, { ...payload, quantity: 1 }];

      localStorageUtil.setItem(cartConstants.KeyCart, newCart);

      return {
        ...state,
        cart: newCart,
      };
    case cartType.REMOVE_FROM_CART:
      toast.success(`Deleted product successfully`);

      const filteredCart = state.cart.filter((item) => item.id !== payload.id);
      localStorageUtil.setItem(cartConstants.KeyCart, filteredCart);
      return {
        ...state, // Keep the rest of the state unchanged
        cart: filteredCart, // Update the cart
      };
    case cartType.INCREMENT:
      const incrementedCart = state.cart.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorageUtil.setItem(cartConstants.KeyCart, incrementedCart);
      return {
        ...state,
        cart: incrementedCart,
      };

    case cartType.DECREMENT:
      const itemToDecrement = state.cart.find((item) => item.id === payload.id);
      if (itemToDecrement.quantity === 1) {
        return state;
      }

      const decrementedCart = state.cart.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorageUtil.setItem(cartConstants.KeyCart, decrementedCart);

      return {
        ...state,
        cart: decrementedCart,
      };
    case cartType.CLEAR_CART:
      localStorageUtil.clear(cartConstants.KeyCart);
      return {
        ...state,
        cart: [],
      };
  }
};

export default cartReducer;
