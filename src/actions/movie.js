import axios from "axios";
import React from "react";
import {
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
} from "../constants/movie";
import moviesAPI from "../services/movieAPI";

export const getMovie = () => {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIE_REQUEST });
    try {
      const { data } = await moviesAPI.getMovie();
      // console.log(data) ok co ne
      // console.log(data)
      dispatch({ type: GET_MOVIE_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_MOVIE_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
