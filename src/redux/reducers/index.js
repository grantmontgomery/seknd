import { combineReducers } from "redux";
import resultsReducer from "./resultsReducer";
import apiReducer from "./apiReducer";
import eventsReducerAPI from "./eventsReducerAPI";
import placesReducerAPI from "./placesReducerAPI";
import datePartsReducer from "./datePartsReducer";

const allReducers = combineReducers({
  datePartsReducer,
  eventsReducerAPI,
  placesReducerAPI,
  resultsReducer,
  apiReducer
});

export default allReducers;
