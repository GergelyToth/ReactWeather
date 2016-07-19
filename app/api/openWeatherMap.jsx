var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=2425c6fabd23a6d0d26a936c4b0c1a56';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

		return axios.get(requestUrl)
			.then(res => {
				if (res.data.cod && res.data.message) {
					throw new Error(res.data.message);
				}
				return res.data.main.temp;
			})
			.catch(res => {
				throw new Error(res.message);
			});
	}
}