import axios from 'axios';

const getWeather = () => {
  return axios({
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?id=1838519&units=metric&appid=c8621d9cff81136a5faf27497b250865',
  });
};

const getWeatherIcon = () => {
  return axios({
    method: 'GET',
    url: '/weather.json',
  });
};

export { getWeather, getWeatherIcon };
