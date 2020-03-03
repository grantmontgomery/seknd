import { combineReducers } from "redux";
import resultsReducer from "./resultsReducer";
import apiReducer from "./apiReducer";
import eventsReducerAPI from "./eventsReducerAPI";
import placesReducerAPI from "./placesReducerAPI";
import datePartsReducer from "./datePartsReducer";
import dateGridReducer from "./dateGridReducer";

const allReducers = combineReducers({
  dateGridReducer,
  datePartsReducer,
  eventsReducerAPI,
  placesReducerAPI,
  resultsReducer,
  apiReducer
});

export default allReducers;
