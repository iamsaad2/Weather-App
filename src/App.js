import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WeatherState from './context/WeatherState';
import Search from './components/Search';
import './App.css';
import Daily from './components/Daily';
import Weather from './components/Weather';

const App = () => {
  return (
    <Router>
      <WeatherState>
        <div>
          <Search />
          <Switch>
            <Route exact path='/' component={Weather} />
            <Route exact path='/daily' component={Daily} />
          </Switch>
        </div>
      </WeatherState>
    </Router>
  );
};

export default App;
