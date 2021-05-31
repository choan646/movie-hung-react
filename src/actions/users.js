import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
  } from "../constants/users";
import userAPI from "../services/userAPI";
  
  
  export const getUser = ()=>{
      return async (dispatch) => {
        dispatch({ type: GET_USER_REQUEST });
        try {
          const { data } = await userAPI.getUser();
          dispatch({ type: GET_USER_SUCCESS, payload: { data } });
        } catch (error) {
          console.log(error)

          dispatch({
            type: GET_USER_FAILURE,
            payload: { error: error.response.data },
            
          });
        }
      }
  }