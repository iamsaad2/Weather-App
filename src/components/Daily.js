import React, { useContext } from 'react';
import WeatherContext from '../context/weatherContext';
import Fade from 'react-reveal/Fade';

const Daily = () => {
  const weatherContext = useContext(WeatherContext);
  const { weather, weather2 } = weatherContext;

  try {
    return (
      <div className='background2 main2'>
        <div className='city-2'>
          {' '}
          {weather2.name && (
            <Fade top>
              {' '}
              <div className='city2'>{weather2.name}</div>{' '}
            </Fade>
          )}
        </div>
        <Fade bottom>
          <div className=' card-holder2 '>
            {' '}
            {weather.daily.map((day) => (
              <div>
                <div className='card2'>
                  <div className='day'>
                    {new Date(day.dt * 1000).toDateString()}
                  </div>
                  <div>
                    <i
                      class='fas fa-thermometer-three-quarters icon'
                      style={{ color: 'white' }}
                    ></i>{' '}
                    <span>Temperature:</span> {day.temp.day} {'\u00b0'}F
                  </div>
                  <div>
                    <i
                      class='fas fa-temperature-high'
                      style={{ color: 'red' }}
                    ></i>{' '}
                    <span>High:</span> {day.temp.min} {'\u00b0'}F
                  </div>{' '}
                  <div>
                    <i
                      class='fas fa-temperature-low'
                      style={{ color: 'CornflowerBlue' }}
                    ></i>{' '}
                    <span>Low:</span> {day.temp.max} {'\u00b0'}F
                  </div>
                  <div>{day.weather['0'].main}</div>
                  <div>
                    <img
                      src={`http://openweathermap.org/img/wn/${day.weather['0'].icon}@2x.png`}
                      alt=''
                    />{' '}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    );
  } catch (err) {
    console.log(err);
  }

  return <div className='background'></div>;
};

export default Daily;
