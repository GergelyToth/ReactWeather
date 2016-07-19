var React = require('react');
var WeatherForm = require('Components/WeatherForm');
var WeatherMessage = require('Components/WeatherMessage');
var openWeatherMap = require('API/openWeatherMap');
var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location) {
		this.setState({isLoading: true});
		openWeatherMap.getTemp(location)
			.then(temp => {
				this.setState({
					isLoading: false,
					location: location,
					temp: temp
				})
			}).catch(err => {
				this.setState({
					isLoading: false
				});
				alert(err)
			});
	},
	render: function() {
		var {isLoading, temp, location} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;