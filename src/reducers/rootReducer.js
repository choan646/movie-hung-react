import { combineReducers } from "redux";
import movieReducer from "./movie";
import authReducer from "./auth";
import cinemaReducer from "./cinemas";

const rootReducer = combineReducers({
  // nơi khai báo reducers con
   movie : movieReducer,
  auth: authReducer,
  cinema: cinemaReducer,
});
export default rootReducer;
