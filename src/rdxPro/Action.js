import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_TO_CART } from "./Constant";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data,
  };
};
export const removeToCart = (data) => {
  return {
    type: REMOVE_TO_CART,
    data,
  };
};
export const emptyToCart = () => {
  return {
    type: EMPTY_TO_CART,
    
  };
};
