import {
  GET_BOOKING_REQUEST,
  GET_BOOKING_SUCCESS,
  GET_BOOKING_FAILURE,
  DAT_GHE_REQUEST,
  DAT_GHE_SUCCESS,
  DAT_GHE_FAILURE,
  DAT_VE_REQUEST,
  DAT_VE_SUCCESS,
  DAT_VE_FAILURE,
} from "../constants/booking";

const initialState = {
  dataChiTietPhongVe: [],
  listGheDangChon: [],
  isLoading: false,
  error: null,
};

function bookingReducer(state = initialState, action) {
  switch (action.type) {
    //lấy chi tiết phòng vé:
    case GET_BOOKING_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_BOOKING_SUCCESS:
      return {
        ...state,
        dataChiTietPhongVe: action.payload.data,
        listGheDangChon:[],
        isLoading: false,
      };
    case GET_BOOKING_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    //Quá trình đặt ghế:
    case DAT_GHE_REQUEST:
      return { ...state, isLoading: true, error: null };
    case DAT_GHE_SUCCESS:
      let listGheDangChonUpdate = [...state.listGheDangChon];
      let index = listGheDangChonUpdate.findIndex(
        (gheDangChon) => gheDangChon.tenGhe === action.payload.tenGhe
      );
      if (index !== -1) {
        listGheDangChonUpdate.splice(index, 1);
      }
      else{
        listGheDangChonUpdate.push(action.payload);
      }
      return {
        ...state,
        listGheDangChon: listGheDangChonUpdate,
        isLoading: false,
      };
    case DAT_GHE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    
    //Hoàn thành đặt vé
    case DAT_VE_REQUEST:
      return { ...state, isLoading: true, error: null };
    case DAT_VE_SUCCESS:
      return {
        ...state,
        // dataChiTietPhongVe: action.payload.data,
        listGheDangChon:[],
        isLoading: false,
      };
    case DAT_VE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

      default:
      return state;
  }
}
export default bookingReducer;
