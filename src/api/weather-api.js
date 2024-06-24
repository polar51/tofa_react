import axios from 'axios';
import axiosInstance from '../utils/http-client';

const getWeather = () => {
  return axios({
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?${process.env.REACT_APP_WEATHER_ID}`,
  });
};

const getWeatherIcon = () => {
  return axiosInstance({
    method: 'GET',
    url: '/weather.json',
  });
};

export { getWeather, getWeatherIcon };
