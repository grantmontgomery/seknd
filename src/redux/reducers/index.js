import { combineReducers } from "redux";
import resultsReducer from "./resultsReducer";
import apiReducer from "./apiReducer";
import eventsReducerAPI from "./eventsReducerAPI";
import placesReducerAPI from "./placesReducerAPI";
import datePartsReducer from "./datePartsReducer";
import dateGridReducer from "./dateGridReducer";
import hoursReducer from "./hoursReducer";
import squaresReducer from "./squaresReducer";
import gridDimensionsReducer from "./gridDimensionsReducer";
import navStylesReducer from "./navStylesReducer";

const allReducers = combineReducers({
  navStylesReducer,
  gridDimensionsReducer,
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
