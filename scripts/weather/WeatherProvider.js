import { settings } from '../Settings.js';

let weather = [];

export const getWeather = (lat, long) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={current,minutely,hourly,alerts}&units=imperial&appid=${settings.weatherKey}`
  )
    .then((res) => res.json())
    .then((parsedWeather) => {
      weather = parsedWeather.daily;
    });
};

export const useWeather = () => {
  return weather.slice();
};
