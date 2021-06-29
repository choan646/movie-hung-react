import { combineReducers } from "redux";
import movieReducer from "./movie";
import authReducer from "./auth";
import cinemaReducer from "./cinemas";
import userReducer from "./users";
import bookingReducer from "./booking";



const rootReducer = combineReducers({
  // nơi khai báo reducers con
   movie : movieReducer,
  auth: authReducer,
  cinema: cinemaReducer,
  user: userReducer,
  booking: bookingReducer,
});
export default rootReducer;
