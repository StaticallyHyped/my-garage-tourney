import { createSelector } from "reselect";

const selectNewTournament = (state) => state.newTournament;

export const selectTournamentQuantity = createSelector(
  [selectNewTournament],
  (newTournament) => newTournament.quantity
);

export const selectNewTourneyCartsHidden = createSelector(
  [selectNewTournament],
  (newTournament) => newTournament.hidden
);
