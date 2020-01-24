import { combineReducers } from "redux";
import resultsReducers from "./resultsReducer";

const allReducers = combineReducers({ resultsReducers });

export default allReducers;
