import React, { useReducer } from 'react';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';

import { SEARCH_WEATHER, CLEAR_WEATHER } from './types';

const WeatherState = (props) => {
  const initialState = {
    weather: {},
    weather2: {},
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const API = 'e7e652d7fd496821efb290c28bcf7a3e';
  //Get Weather
  const searchWeather = async (text) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${text}&units=imperial&appid=${API}`
    );

    const data = await response.json();
    console.log(data);

    const lon = await data.coord.lon;
    const lat = await data.coord.lat;

    const response2 = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API}`
    );
    const data2 = await response2.json();
    console.log(data2);

    dispatch({
      type: SEARCH_WEATHER,
      payload: data2,
      payload2: data,
    });
  };

  //Clear weather

  const clearWeather = () => {
    dispatch({
      type: CLEAR_WEATHER,
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        weather: state.weather,
        searchWeather,
        weather2: state.weather2,
        clearWeather,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
