import PlayersActionTypes from "./players.types";

const INITIAL_STATE = {
  playerCollections: null,
};

const playersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlayersActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        playerCollections: action.payload,
      };
    default:
      return state;
  }
};

export default playersReducer;
