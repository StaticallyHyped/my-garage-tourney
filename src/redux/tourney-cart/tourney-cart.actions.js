import TourneyCartActionTypes from "./tourney-cart.types";

export const addItem = (item) => ({
  type: TourneyCartActionTypes.ADD_ITEM,
  payload: item,
});

/** remove the selected item */
export const removeItem = (item) => ({
  type: TourneyCartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const updateTourneyCartCollections = (collectionsMap) => ({
  type: TourneyCartActionTypes.UPDATE_TOURNEY_CART_ITEMS,
  payload: collectionsMap,
});
