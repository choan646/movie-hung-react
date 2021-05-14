//Courses reducer
import {
    GET_MOVIE_REQUEST,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAILURE,
  } from "../constants/movie";
  
  const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };
  function movieReducer(state = initialState, action) {

    switch (action.type) {
      case GET_MOVIE_REQUEST: 
        return { ...state, isLoading: true, error: null };
      
      case GET_MOVIE_SUCCESS: 
        return { ...state, data: action.payload.data, isLoading: false };
    
      case GET_MOVIE_FAILURE:
          return {...state, isLoading: false, error: action.payload.error};
      
      default:
        return state;
    }
  }
  
  export default movieReducer;
  