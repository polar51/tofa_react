import React, { useCallback } from 'react';
import { useWeatherGet, useWeatherIconGet } from '../../hooks/api/weather-hook';
import styles from './styles.module.css';

const Weather = () => {
  const { data } = useWeatherGet();
  const weatherInfo = data.data;
  const { data: weatherIcon } = useWeatherIconGet();
  const stauts = weatherIcon.data[weatherInfo.weather[0].main];

  const getIconUrl = useCallback(() => {
    return `https://humetro.tofa.kr/images/${stauts}.png`;
  }, [stauts]);

  const tempCreator = useCallback(temp => {
    if (temp) {
      return `${Math.round(temp.main.temp)}℃`;
    }

    return '';
  }, []);

  return (
    <>
      <div
        id="weather"
        className={
          stauts.length > 0 ? styles.weatherBox : styles.weatherBoxTest
        }
      >
        <i
          className={styles.icon}
          style={{ background: `url(${getIconUrl()}) no-repeat center center` }}
        />
        <span id="top_temp">{tempCreator(weatherInfo)}</span>
      </div>
    </>
  );
};

export default Weather;
