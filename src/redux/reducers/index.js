import { combineReducers } from "redux";
import resultsReducer from "./resultsReducer";
import inputReducer from "./inputReducer";
import apiReducer from "./apiReducer";
import eventsReducerAPI from "./eventsReducerAPI";
import placesReducerAPI from "./placesReducerAPI";
import datePartsReducers from "./datePartsReducer";

const allReducers = combineReducers({
  datePartsReducers,
  eventsReducerAPI,
  placesReducerAPI,
  inputReducer,
  resultsReducer,
  apiReducer
});

export default allReducers;
