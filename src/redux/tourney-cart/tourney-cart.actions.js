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
