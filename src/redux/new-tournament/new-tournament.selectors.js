import { createSelector } from "reselect";

const selectNewTournament = (state) => state.newTournament;

export const selectTournamentQuantity = createSelector(
  [selectNewTournament],
  (newTournament) => newTournament.quantity
);

export const selectPlayerPoolItems = createSelector(
  [selectNewTournament],
  (newTournament) => newTournament.playerPoolItems
);

export const selectTourneyPoolItems = createSelector(
  [selectNewTournament],
  (newTournament) => newTournament.tourneyPoolItems
);
