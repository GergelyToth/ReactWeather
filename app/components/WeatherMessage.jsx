var React = require('react');

var WeatherMessage = ({location, temp}) => (
	<h3>It's {temp}&#176;C in {location}</h3>
);

module.exports = WeatherMessage;