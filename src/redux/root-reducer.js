import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import playersReducer from "./players/players.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["players"],
};

const rootReducer = combineReducers({
  user: userReducer,
  players: playersReducer,
});

export default persistReducer(persistConfig, rootReducer);
