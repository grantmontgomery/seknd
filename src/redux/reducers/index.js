import { combineReducers } from "redux";
import resultsReducers from "./resultsReducer";
import inputReducer from "./inputReducer";

const allReducers = combineReducers({ inputReducer, resultsReducers });

export default allReducers;
