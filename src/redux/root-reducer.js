import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import newTournamentReducer from "./new-tournament/new-tournament.reducer";
import playersCartReducer from "./players-cart/players-cart.reducer";
import playersReducer from "./players/players.reducer";
import tourneyCartReducer from "./tourney-cart/tourney-cart.reducer";
import userReducer from "./user/user.reducer";

//whitelist the state objects/reducers you want to persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["playersCart", "newTournament", "tourneyCart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  players: playersReducer,
  newTournament: newTournamentReducer,
  playersCart: playersCartReducer,
  tourneyCart: tourneyCartReducer,
});

export default persistReducer(persistConfig, rootReducer);
