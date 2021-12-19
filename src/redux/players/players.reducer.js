import PLAYERS_DATA from "./players.data";
import PlayersActionTypes from "./players.types";

const INITIAL_STATE = {
  playerCollection: PLAYERS_DATA,
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
