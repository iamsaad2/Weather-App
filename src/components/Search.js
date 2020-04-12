import React, { useContext, useState } from 'react';
import WeatherContext from '../context/weatherContext';
import { Link } from 'react-router-dom';

const Search = () => {
  const weatherContext = useContext(WeatherContext);

  const { searchWeather, clearWeather } = weatherContext;

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchWeather(text);
    setText('');
    clearWeather();
  };
  try {
    return (
      <div>
        <nav>
          <div className='title'>
            <span>Weather </span>
            <i className='fas fa-cloud-sun'></i>
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <div className='search_container'>
                <input
                  id='search'
                  type='search'
                  placeholder='Search Location...'
                  value={text}
                  onChange={onChange}
                />

                <button type='submit'>Search</button>
              </div>
            </form>
          </div>
          <div className='name'>
            <span className='current'>
              <Link to='/'>Current</Link>
            </span>{' '}
            <span>
              <Link to='/daily'>Daily</Link>
            </span>
          </div>
        </nav>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Search;
