import NewTournamentActionTypes from "./new-tournament.types";

const INITIAL_STATE = {
  hidden: true,
};

const newTournamentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewTournamentActionTypes.TOGGLE_TOURNEY_CARTS_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default newTournamentReducer;
