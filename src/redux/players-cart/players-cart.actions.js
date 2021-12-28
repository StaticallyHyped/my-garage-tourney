import PlayersCartActionTypes from "./players-cart.types";

export const addItem = (item) => ({
  type: PlayersCartActionTypes.ADD_ITEM,
  payload: item,
});

/** remove the selected item */
export const removeItem = (item) => ({
  type: PlayersCartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const updatePlayersCartCollections = (collectionsMap) => ({
  type: PlayersCartActionTypes.UPDATE_PLAYER_CART_ITEMS,
  payload: collectionsMap,
});
