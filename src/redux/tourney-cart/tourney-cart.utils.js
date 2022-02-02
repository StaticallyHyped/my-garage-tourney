export const addItemToTourneyCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  /* if the cart item matches, increment the quantity. If not, just return the cart item*/
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  /* If the cart item does not exist yet, return a new array with
  all the existing items, plus the new one with a base quantity of 1 */
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromTourneyCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const addItemsToTourneyCart = (cartItems, cartItemsToAdd) => {
  return [...cartItems, cartItemsToAdd];
};
