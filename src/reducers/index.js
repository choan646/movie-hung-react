import { combineReducers } from "redux";
import movie from "./movie";
import authReducer from "./auth";

const rootReducer = combineReducers({
  // nơi khai báo reducers con
  movie,
  auth: authReducer,
});
export default rootReducer;
