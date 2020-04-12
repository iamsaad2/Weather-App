import React, { useContext } from 'react';
import WeatherContext from '../context/weatherContext';
import Fade from 'react-reveal/Fade';

const Weather = () => {
  const weatherContext = useContext(WeatherContext);
  const { weather, weather2 } = weatherContext;

  try {
    let unix_timestamp = weather.current.sunrise;
    const sunrise = new Date(unix_timestamp * 1000);
    let unix = weather.current.sunset;
    const sunset = new Date(unix * 1000);

    const icon = weather.current.weather['0'].icon;

    return (
      <div className='background'>
        <div className='card-holder'>
          {weather2.name && (
            <Fade right>
              {' '}
              <div className='city'>{weather2.name}</div>{' '}
            </Fade>
          )}
          <Fade left>
            <div className='card'>
              <div>
                <i
                  class='fas fa-thermometer-three-quarters icon'
                  style={{ color: 'red' }}
                ></i>{' '}
                <span className='header'>Temperature:</span>{' '}
                {weather.current.temp} {'\u00b0'}F
              </div>
              <div>
                <i class='fas fa-wind icon'></i>{' '}
                <span className='header'>Feels Like:</span>{' '}
                {weather.current.feels_like} {'\u00b0'}F
              </div>
              <div className='header'>
                {' '}
                {weather.current.weather['0'].main}{' '}
              </div>
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt=''
                />{' '}
              </div>

              <div>
                <i
                  className='fas fa-feather icon'
                  style={{ color: 'white' }}
                ></i>{' '}
                <span className='header'>Pressure:</span>{' '}
                {weather.current.pressure}
              </div>
              <div>
                <i className='fas fa-tint icon'></i>{' '}
                <span className='header'>Humidity:</span>{' '}
                {weather.current.humidity}%
              </div>
              <div>
                <i className='fas fa-sun' style={{ color: 'orange' }}></i>{' '}
                <span className='header'>Sunrise:</span>{' '}
                {sunrise.toLocaleString('en-US', {
                  timeZone: 'America/New_York',
                })}
              </div>
              <div>
                <i className='fas fa-moon' style={{ color: 'grey' }}></i>{' '}
                <span className='header'>Sunset:</span>{' '}
                {sunset.toLocaleString('en-US', {
                  timeZone: 'America/New_York',
                })}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  } catch (err) {
    console.error(err);
  }

  return <div className='background'></div>;
};

export default Weather;
