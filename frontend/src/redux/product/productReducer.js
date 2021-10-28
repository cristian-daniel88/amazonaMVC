import {FETCH_PRODUCTS } from "./productActions";


const INITIAL_STATE = {
 products: [],
 loading: true,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };



    default:
      return state;
  }
};

export default productReducer;