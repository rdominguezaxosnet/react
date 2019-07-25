import React from 'react';
import WeatherIncons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    cloud: "cloud",
    cloudy: "cloudy",
    sun: "day-sunny",
    rain: "rain",
    snow: "snow",
    fog: "day-fog",

}
const getWeatherIcon =  weatherState => {
    const icon = icons[weatherState];

    const sizeIcon ="4x";
    if (icon)
    return <WeatherIncons className="wicon" name={icon} size={sizeIcon} />;
    else
    return <WeatherIncons className="wicon" name={'day-sunny'} size={sizeIcon} />;
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">
             {temperature}
            </span>
            <span className="temperatureType">
                {"C°"}

            </span>
        </div>

);

WeatherTemperature.propTypes = {

    temperature: PropTypes.number.isRequired, 
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;