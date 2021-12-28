import PlayersActionTypes from "./players.types";

const INITIAL_STATE = {
  collections: null,
};

const playersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlayersActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default playersReducer;
