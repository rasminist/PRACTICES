import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_TO_CART } from "./Constant";

export  const cartData = (data = [], action) => {
  switch (action.tye) {
    case ADD_TO_CART:
      return [action.data,...data];

    case REMOVE_TO_CART:
      const remaingData = data.filter((ele) => ele.id !== action.data);
      return [...remaingData];

    case EMPTY_TO_CART:
      data = [];
      return [...data];

    default:
      return data;
  }
};
