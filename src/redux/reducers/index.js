import { combineReducers } from "redux";
import resultsReducers from "./resultsReducer";
import inputReducer from "./inputReducer";
import apiReducer from "./apiReducer";

const allReducers = combineReducers({
  inputReducer,
  resultsReducers,
  apiReducer
});

export default allReducers;
