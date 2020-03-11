import { combineReducers } from "redux";
import resultsReducer from "./resultsReducer";
import apiReducer from "./apiReducer";
import eventsReducerAPI from "./eventsReducerAPI";
import placesReducerAPI from "./placesReducerAPI";
import datePartsReducer from "./datePartsReducer";
import dateGridReducer from "./dateGridReducer";
import hoursReducer from "./hoursReducer";
import squaresReducer from "./squaresReducer";

const allReducers = combineReducers({
  hoursReducer,
  squaresReducer,
  dateGridReducer,
  datePartsReducer,
  eventsReducerAPI,
  placesReducerAPI,
  resultsReducer,
  apiReducer
});

export default allReducers;
