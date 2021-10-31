export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FIND = "FIND";
export const CLEAN = "CLEAN";




export const fetchProducts = (value) => ({
    type: FETCH_PRODUCTS,
    payload: value
  });

  export const findAction = (value) => ({
    type: FIND,
    payload: value
  });

export const cleanAction = () => ({
    type: CLEAN
})