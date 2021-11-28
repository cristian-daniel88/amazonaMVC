export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: Number(itemToAdd.quantity) }
        : cartItem;
    });
  }

  return [...cartItems, { ...itemToAdd}];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
 
  let filterMap = cartItems.filter(val => val.id !== itemToRemove);
  return filterMap
};

// export const editItemFromCart = (cartItem, item, d)=> {

//   let filterId = cartItem.filter(val => val.id === item);

//   filterId[0].quantity = Number(d);
//   const precio =  filterId[0].price 
//   filterId[0].subtotal = precio * Number(d);

//   let filterArrayNew =  cartItem.filter(val => val.id !== item);

//   let arrayy = [...filterArrayNew, {...filterId[0]}];

//   return arrayy

  


// }

export const editItemFromCart = (cartItem, item, d)=> {

  let filterId = cartItem.filter(val => val.id === item);
  filterId[0].quantity = Number(d);
  const precio =  filterId[0].price 
  filterId[0].subtotal = precio * Number(d);

  cartItem.map((valor)=>
  valor.id === item ? filterId : valor
 )





  return [...cartItem]

  


}
