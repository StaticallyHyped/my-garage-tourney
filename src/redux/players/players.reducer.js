import PLAYERS_DATA from "./players.data";

const INITIAL_STATE = {
  playerCollection: PLAYERS_DATA,
};

const playersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default playersReducer;
