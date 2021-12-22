import { createSelector } from "reselect";

const selectPlayers = (state) => state.players;

export const selectPlayerCollection = createSelector(
  [selectPlayers],
  (players) => players.collections
);

export const selectCollectionsForTournament = createSelector(
  [selectPlayerCollection],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectPlayerCollection], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectPlayerItems = createSelector(
  [selectCollectionsForTournament],
  (players) => players.items
);

/*
export const selectPlayerNames = createSelector([selectPlayerItems], (items) =>
  items ? Object.keys(items).map((key) => items[key]) : []
); */
