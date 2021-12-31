import NewTournamentActionTypes from "./new-tournament.types";

const INITIAL_STATE = {
  quantity: 4,
};

const newTournamentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
