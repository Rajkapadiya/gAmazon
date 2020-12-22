import { combineReducers } from "redux";
import gameReducer from "../src/Games/Reducer/Reducer";

const rootReducer = combineReducers({
  gameReducer,
});

export default rootReducer;