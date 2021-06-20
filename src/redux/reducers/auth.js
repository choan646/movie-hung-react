import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_HISTORY_REQUEST,
  GET_USER_HISTORY_SUCCESS,
  GET_USER_HISTORY_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  UPDATE_AT_USER_REQUEST,
  UPDATE_AT_USER_SUCCESS,
  UPDATE_AT_USER_FAILURE,
} from "../constants/auth";

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo,
  userInfoHistoryBooking: null,
  isLoading: false,
  error: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    // LOGIN
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isLoading: false, userInfo: action.payload.data };
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    // REGISTER
    case REGISTER_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case REGISTER_SUCCESS: {
      return { ...state, isLoading: false, userInfo: action.payload.data };
    }
    case REGISTER_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    //LOGOUT
    case LOGOUT_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGOUT_SUCCESS: {
      return { ...state, isLoading: false, userInfo: null };
    }
    case LOGOUT_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    //HistoryBooking
    case GET_USER_HISTORY_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_USER_HISTORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userInfoHistoryBooking: action.payload.data,
      };
    }
    case GET_USER_HISTORY_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    // UpdateAtUser
    case UPDATE_AT_USER_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case UPDATE_AT_USER_SUCCESS: {
      return { ...state, isLoading: false, userInfo: action.payload.data };
    }
    case UPDATE_AT_USER_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default authReducer;
