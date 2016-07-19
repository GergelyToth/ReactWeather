var React = require('react');
var WeatherForm = require('Components/WeatherForm');
var WeatherMessage = require('Components/WeatherMessage');
var openWeatherMap = require('API/openWeatherMap');
var ErrorModal = require('Components/ErrorModal');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	componentDidMount: function() {
		var location = this.props.location.query.location;

		if (location && location.length) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},
	componentWillReceiveProps: function(newProps) {
		var location =  newProps.location.query.location;

		if (location && location.length) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},
	handleSearch: function(location) {
		this.setState({
			isLoading: true,
			errorMsg: undefined,
			location: undefined,
			temp: undefined
		});
		openWeatherMap.getTemp(location)
			.then(temp => {
				this.setState({
					isLoading: false,
					location: location,
					temp: temp
				})
			}).catch(err => {
				this.setState({
					isLoading: false,
					errorMsg: err.message
				});
			});
	},
	render: function() {
		var {isLoading, errorMsg, temp, location} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		function renderError() {
			if (errorMsg) {
				return <ErrorModal msg={errorMsg}/>
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;