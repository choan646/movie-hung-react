import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/auth";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../constants/auth";
import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../constants/auth";

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo,
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
    default:
      return state;
  }
}

export default authReducer;
