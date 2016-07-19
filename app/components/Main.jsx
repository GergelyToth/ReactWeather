var React = require('react');
var Nav = require('Components/Nav');

var Main = props => (
	<div>
		<Nav />
		<h2>Main Component</h2>
		{props.children}
	</div>
);

module.exports = Main;