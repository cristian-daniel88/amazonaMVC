import {
 
    ADD_ITEM,
    REMOVE_ITEM,
    CLEAR_CART,
    EDIT_CART
  } from "./cartActions";
  
  import { addItemToCart, editItemFromCart, removeItemFromCart } from "./cartUtils";
  
  const INITIAL_STATE = {
    cartItems: [],
    console: null,
  };
  
  const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
 
  
      case ADD_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload),
        };

       
  
        case EDIT_CART:
          return {
            ...state,
            cartItems: editItemFromCart(state.cartItems , action.payload, action.data),
          };
  
      
      

      
  
      case REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
      
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
  