import { combineReducers } from "redux";
import movieReducer from "./movie";
import authReducer from "./auth";

const rootReducer = combineReducers({
  // nơi khai báo reducers con
   movie : movieReducer,
  auth: authReducer,
});
export default rootReducer;
