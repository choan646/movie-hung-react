import {
  GET_BOOKING_REQUEST,
  GET_BOOKING_SUCCESS,
  GET_BOOKING_FAILURE,
} from "../constants/booking";

const initialState = {
  dataChiTietPhongVe: [],
  isLoading: false,
  error: null,
};

function bookingReducer(state = initialState, action) {
  switch (action.type) {
    //lấy chi tiết phòng vé:
    case GET_BOOKING_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_BOOKING_SUCCESS:
      return { ...state, dataChiTietPhongVe: action.payload.data, isLoading: false };
    case GET_BOOKING_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
}
export default bookingReducer;
