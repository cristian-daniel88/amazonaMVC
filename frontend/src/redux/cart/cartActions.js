export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_CART = "CLEAR_CART";
export const EDIT_CART = "EDIT_CART";



export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const editCart = (item, data) =>({
  type: EDIT_CART,
  payload: item, 
  data: data
}) 

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,

});

export const clearCart = () => ({
  type: CLEAR_CART,
});
