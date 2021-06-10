import {
  GET_CINEMA_REQUEST,
  GET_CINEMA_SUCCESS,
  GET_CINEMA_FAILURE,
  GET_CUMRAPBY_CINEMAS_REQUEST,
  GET_CUMRAPBY_CINEMAS_SUCCESS,
  GET_CUMRAPBY_CINEMAS_FAILURE,
  GET_SHOWTIMESBY_CINEMAS_REQUEST,
  GET_SHOWTIMESBY_CINEMAS_SUCCESS,
  GET_SHOWTIMESBY_CINEMAS_FAILURE,
} from "../constants/cinema";

const initialState = {
  dataCinemas: [],
  dataCumRapByCinemas: [],
  dataShowTimesByCinemas: [],
  isLoading: false,
  error: null,
};

function cinemaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CINEMA_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_CINEMA_SUCCESS:
      return { ...state, dataCinemas: action.payload.data, isLoading: false };
    case GET_CINEMA_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    case GET_CUMRAPBY_CINEMAS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_CUMRAPBY_CINEMAS_SUCCESS:
      return { ...state, dataCumRapByCinemas: action.payload.data, isLoading: false };
    case GET_CUMRAPBY_CINEMAS_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
   
      case GET_SHOWTIMESBY_CINEMAS_REQUEST:
        return { ...state, isLoading: true, error: null };
      case GET_SHOWTIMESBY_CINEMAS_SUCCESS:
        return { ...state, dataShowTimesByCinemas: action.payload.data, isLoading: false };
      case GET_SHOWTIMESBY_CINEMAS_FAILURE:
        return { ...state, isLoading: false, error: action.payload.error };
        
    default:
      return state;
  }
}
export default cinemaReducer;
