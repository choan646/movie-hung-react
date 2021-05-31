import { combineReducers } from "redux";
import movieReducer from "./movie";
import authReducer from "./auth";
import cinemaReducer from "./cinemas";
import userReducer from "./users";

const rootReducer = combineReducers({
  // nơi khai báo reducers con
   movie : movieReducer,
  auth: authReducer,
  cinema: cinemaReducer,
  user: userReducer,
});
export default rootReducer;
