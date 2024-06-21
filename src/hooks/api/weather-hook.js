import { useQuery } from '@tanstack/react-query';
import { WEATHER, WEATHER_ICON } from '../../constants/query-key-factory';
import { weatherApi } from '../../api/index';

const useWeatherGet = () => {
  return useQuery({
    queryKey: WEATHER.detail(),
    queryFn: weatherApi.getWeather,
  });
};

const useWeatherIconGet = () => {
  return useQuery({
    queryKey: WEATHER_ICON.detail(),
    queryFn: weatherApi.getWeatherIcon,
  });
};

export { useWeatherGet, useWeatherIconGet };
