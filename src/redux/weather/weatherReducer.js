import {
  RECEIVE_WEATHER_ERROR,
  RECEIVE_WEATHER_RESPONSE,
  SEND_WEATHER_REQUEST,
} from "./weatherTypes";

const initState = {
  loading: false,
  data: [],
  error: false,
};

export const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_WEATHER_REQUEST:
      return { ...state, loading: true };
    case RECEIVE_WEATHER_RESPONSE:
      return { loading: false, error: false, data: action.payload };
    case RECEIVE_WEATHER_ERROR:
      return { loading: false, data: [], error: true };

    default:
      return state;
  }
};
