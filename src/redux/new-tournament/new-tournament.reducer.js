import NewTournamentActionTypes from "./new-tournament.types";
import { addItemToPool } from "./new-tournament.utils";

const INITIAL_STATE = {
  quantity: 4,
  playerPoolItems: [],
  tourneyPoolItems: [],
};

const newTournamentReducer = (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case NewTournamentActionTypes.RESET_NEWTOURNEY_REDUCER:
      return {
        ...INITIAL_STATE,
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
    case NewTournamentActionTypes.ADD_PLAYERPOOL_ITEM:
      console.log("ADD PLAYER ITEM");
      return {
        ...state,
        playerPoolItems: addItemToPool(state.playerPoolItems, action.payload),
      };
    case NewTournamentActionTypes.REMOVE_PLAYERPOOL_ITEM:
      return {
        ...state,
        playerPoolItems: action.payload,
      };
    case NewTournamentActionTypes.ADD_TOURNEYPOOL_ITEM:
      return {
        ...state,
        tourneyPoolItems: addItemToPool(state.tourneyPoolItems, action.payload),
      };
    case NewTournamentActionTypes.REMOVE_TOURNEYPOOL_ITEM:
      return {
        ...state,
        tourneyPoolItems: action.payload,
      };
    case NewTournamentActionTypes.UPDATE_PLAYERPOOL_COLLECTION:
      console.log("UPDATE PP COLL");
      return {
        ...state,
        playerPoolItems: action.payload,
      };
    case NewTournamentActionTypes.UPDATE_TOURNEYPOOL_COLLECTION:
      console.log("UPDATE TP COLL");
      return {
        ...state,
        tourneyPoolItems: action.payload,
      };

    default:
      return state;
  }
};

export default newTournamentReducer;
