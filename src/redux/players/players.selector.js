import { createSelector } from "reselect";

const selectPlayer = (state) => state.playerCollection;

export const selectPlayerCollection = createSelector(
  [selectPlayer],
  (playerCollection) => playerCollection.players
);

/* export const selectCollectionsForTournament = createSelector(
  [selectionPlayerCollections],
  (players) => Object.keys(players).map((key) => players[key])
);
 */
