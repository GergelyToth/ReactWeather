var React = require('react');

var About = props => (
	<div>
		<h1 className="text-center">About</h1>
		<p>
			This is weather application build on React. I have built this for The Compolete React Web App Developer Course.
		</p>
		<p>
			Here are some of the tools I used:
		</p>
		<ul>
			<li>
				<a target="_blank" href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
			</li>
			<li>
				<a target="_blank" href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
			</li>
		</ul>
	</div>
);

module.exports = About;