import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (

    <div className="weatherExtraInfo">
        <span className="extraInfoText">Humedad {`${humidity} % - `}</span>
        <span className="extraInfoText">Vientos {wind }</span>
    </div>
);


WeatherExtraInfo.propTypes = {
humidity: PropTypes.number.isRequired,
wind: PropTypes.number.isRequired,  
};

export default WeatherExtraInfo;