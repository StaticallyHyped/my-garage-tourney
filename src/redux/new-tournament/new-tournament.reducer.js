import NewTournamentActionTypes from "./new-tournament.types";

const INITIAL_STATE = {
  hidden: true,
  quantity: 4,
};

const newTournamentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewTournamentActionTypes.TOGGLE_TOURNEY_CARTS_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case NewTournamentActionTypes.SUBMIT_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };
    case NewTournamentActionTypes.UPDATE_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };
    default:
      return state;
  }
};

export default newTournamentReducer;
