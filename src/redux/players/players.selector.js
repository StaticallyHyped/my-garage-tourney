import { createSelector } from "reselect";

const selectPlayers = (state) => state.players;

export const selectPlayerCollection = createSelector(
  [selectPlayers],
  (players) => players.collections
);

/* export const selectCollectionsForTournament = createSelector(
  [selectionPlayerCollections],
  (players) => Object.keys(players).map((key) => players[key])
);
 */
