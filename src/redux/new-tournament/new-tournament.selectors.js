import { createSelector } from "reselect";

const selectNewTournament = (state) => state.newTournament;

export const selectTournamentQuantity = createSelector(
  [selectNewTournament],
  (newTournament) => newTournament.quantity
);
