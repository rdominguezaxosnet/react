import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import PropTypes from 'prop-types';
import './styles.css'
const WeatherLocation = () => (

    <div className="weatherLocationCont">
         <Location city={'Ciudad de Monterrey'}></Location>
         <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;