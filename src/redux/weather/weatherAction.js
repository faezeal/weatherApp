import axios from "axios";
import {
  RECEIVE_WEATHER_ERROR,
  RECEIVE_WEATHER_RESPONSE,
  SEND_WEATHER_REQUEST,
} from "./weatherTypes";

export const sendWeatherRequest = () => {
  return {
    type: SEND_WEATHER_REQUEST,
  };
};

export const receiveWeatherResponse = (data) => {
  return {
    type: RECEIVE_WEATHER_RESPONSE,
    payload: data,
  };
};

export const receiveWeatherError = (data) => {
  return {
    type: RECEIVE_WEATHER_ERROR,
    payload: data,
  };
};

export const getWeatherInfoAction = (query) => {
  return (dispatch) => {
    dispatch(sendWeatherRequest());
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=standard&appid=f611a0a9d4d9bc7b455590c945ccb698`
      )
      .then((res) => {
        dispatch(receiveWeatherResponse(res.data));
        console.log(res.data);
                            
      })
      .catch((e) => {
        dispatch(receiveWeatherError(e.message));
       
      });
  };
};
