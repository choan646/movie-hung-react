import {
  GET_CINEMA_REQUEST,
  GET_CINEMA_SUCCESS,
  GET_CINEMA_FAILURE,
} from "../constants/cinema";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

function cinemaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CINEMA_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_CINEMA_SUCCESS:
      return { ...state, data: action.payload.data, isLoading: false };
    case GET_CINEMA_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    default:
      return state;
  }
}
export default cinemaReducer;
