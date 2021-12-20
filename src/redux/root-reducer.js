import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import newTournamentReducer from "./new-tournament/new-tournament.reducer";
import playersReducer from "./players/players.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["newTournament"],
};

const rootReducer = combineReducers({
  user: userReducer,
  players: playersReducer,
  newTournament: newTournamentReducer,
});

export default persistReducer(persistConfig, rootReducer);
