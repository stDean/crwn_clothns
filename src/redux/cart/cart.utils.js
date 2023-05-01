// add item to the cart array
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // first check if item already exists in the array
  const existingItems = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  // if it does, return the cart item i.e don't duplicate the entry and increasing the quantity by 1
  if (existingItems) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id ?
        { ...cartItem, quantity: cartItem.quantity + 1 } :
        cartItem
    )
  }

  // else spread the items in the array then add the new cart item as an obj in the array with a quantity of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}