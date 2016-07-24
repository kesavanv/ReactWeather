var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application, built on React. Below are some of the tools that are used...</p>
      <ol>
        <li>
          <Link to="https://facebook.github.io/react">React</Link> - This was the Javascript framework used.
        </li>
          <li>
            <Link to="http://openweathermap.org">Open Weather Map</Link> - Used to search weather data by city name.
          </li>
      </ol>
    </div>
  );
};

module.exports = About;
