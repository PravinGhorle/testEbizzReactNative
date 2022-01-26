import { combineReducers } from "redux";
import { dataReducer } from "./data/DataReducer";

export const rootReducer = combineReducers({
  data:dataReducer,
});