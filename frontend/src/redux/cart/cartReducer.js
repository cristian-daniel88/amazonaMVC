import {
 
    ADD_ITEM,
    REMOVE_ITEM,
    CLEAR_CART,
  } from "./cartActions";
  
  import { addItemToCart, removeItemFromCart } from "./cartUtils";
  
  const INITIAL_STATE = {
    cartItems: [],
  };
  
  const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
 
  
      case ADD_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload),
        };
  
      case REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload),
        };
  
      case CLEAR_CART:
        return {
          ...state,
          cartItems: [],
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  