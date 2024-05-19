import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";
import playerReducer from "../reducers/playerReducer";
import favReducer from "../reducers/favReducer";

const unionReducers = combineReducers({
  search: searchReducer,
  player: playerReducer,
  fav: favReducer,
});

const store = configureStore({
  reducer: unionReducers,
});

export default store;
