import { toast } from "react-toastify";
import cartType from "./actionTypes/cartType";
import { truncateTitle } from "../../components/utils/convertText";

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartType.ADD_TO_CART:
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        toast.success(`Just more 1 ${truncateTitle(action.payload.title, 23)}`);
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      toast.success(`Add to ${truncateTitle(action.payload.title, 23)}`);
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case cartType.REMOVE_FROM_CART:
      console.log(action);
      toast.success(`Deleted product successfully`);

      return {
        ...state, // Keep the rest of the state unchanged
        cart: state.cart.filter((item) => item.id !== action.payload.id), // Update the cart
      };
  }
};

export default cartReducer;
