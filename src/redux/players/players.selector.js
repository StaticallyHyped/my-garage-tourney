import { createSelector } from "reselect";

const selectPlayers = (state) => state.players;

export const selectPlayerCollection = createSelector(
  [selectPlayers],
  (players) => players.playerCollections
);

export const selectCollectionsForTournament = createSelector(
  [selectPlayerCollection],
  (playerCollections) =>
    playerCollections
      ? Object.keys(playerCollections).map((key) => playerCollections[key])
      : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectPlayerCollection], (playerCollections) =>
    playerCollections ? playerCollections[collectionUrlParam] : null
  );
