import NewTournamentActionTypes from "./new-tournament.types";

export const toggleNewTourneyCartsHidden = () => ({
  type: NewTournamentActionTypes.TOGGLE_TOURNEY_CARTS_HIDDEN,
});

export const updateQuantity = (quantity) => ({
  type: NewTournamentActionTypes.UPDATE_QUANTITY,
  payload: quantity,
});

export const submitQuantity = (quantity) => ({
  type: NewTournamentActionTypes.SUBMIT_QUANTITY,
  payload: quantity,
});
