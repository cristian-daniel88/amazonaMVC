import { FETCH_PRODUCTS, FIND, CLEAN, RESULT, LOADING, NOTFOUND } from "./productActions";

const INITIAL_STATE = {
  products: [],
  loading: true,
  arrayProductsFind: [],
  results: '',
  loadingSearch: true,

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
        arrayProductsFind: action.payload,
        loadingSearch: false,
      
        
      };
    case RESULT: 
    return {
      ...state,
      results: action.payload
    }

    case CLEAN:
      return {
        ...state,
        arrayProducts: [],
      };
    
    case LOADING :
      return {
        ...state,
        loadingSearch: true
      }
  
    default:
      return state;
  }
};

export default productReducer;
