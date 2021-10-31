import { FETCH_PRODUCTS, FIND, CLEAN } from "./productActions";

const INITIAL_STATE = {
  products: [],
  loading: true,
  arrayProducts: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case FIND:
      return {
        ...state,
        arrayProducts: [...state.arrayProducts, action.payload],
        loading: false,
        
      };

    case CLEAN:
      return {
        ...state,
        arrayProducts: [],
      };

    default:
      return state;
  }
};

export default productReducer;
