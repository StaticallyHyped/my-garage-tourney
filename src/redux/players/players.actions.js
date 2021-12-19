import PlayersActionTypes from "./players.types";

export const updateCollections = (collectionsMap) => ({
  type: PlayersActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
