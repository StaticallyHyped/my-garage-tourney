import NewTournamentActionTypes from "./new-tournament.types";

export const updateQuantity = (quantity) => ({
  type: NewTournamentActionTypes.UPDATE_QUANTITY,
  payload: quantity,
});

export const submitQuantity = (quantity) => ({
  type: NewTournamentActionTypes.SUBMIT_QUANTITY,
  payload: quantity,
});

export const addPlayerPoolItem = (item) => ({
  type: NewTournamentActionTypes.ADD_PLAYERPOOL_ITEM,
  payload: item,
});

export const removePlayerPoolItem = (item) => ({
  type: NewTournamentActionTypes.REMOVE_PLAYERPOOL_ITEM,
  payload: item,
});

export const addTourneyPoolItem = (item) => ({
  type: NewTournamentActionTypes.ADD_TOURNEYPOOL_ITEM,
  payload: item,
});

export const removeTourneyPoolItem = (item) => ({
  type: NewTournamentActionTypes.REMOVE_TOURNEYPOOL_ITEM,
  payload: item,
});

export const updatePlayerPoolCollection = (collectionsMap) => ({
  type: NewTournamentActionTypes.UPDATE_PLAYERPOOL_COLLECTION,
  payload: collectionsMap,
});

export const updateTourneyPoolCollection = (collectionsMap) => ({
  type: NewTournamentActionTypes.UPDATE_TOURNEYPOOL_COLLECTION,
  payload: collectionsMap,
});

export const resetNewTourneyReducer = () => ({
  type: NewTournamentActionTypes.RESET_NEWTOURNEY_REDUCER,
});
