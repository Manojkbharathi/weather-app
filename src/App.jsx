import { useState } from 'react';

const api = {
  key: '251619f52a4a4969c146bdbcc82276ae',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const App = () => {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});
  const clickHandler = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };
  return (
    <div className='app'>
      <h1> Weather App</h1>
      <h2>Enter you country/ city name to get weather</h2>
      <input
        type='text'
        placeholder='search...'
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='btn' onClick={clickHandler}>
        Search
      </button>

      {typeof weather.main != 'undefined' ? (
        <div className='details'>
          <h2>
            <span>City</span> :{weather.name}
          </h2>
          <h2>
            <span>Country</span> : {weather.sys.country}
          </h2>
          <h2>
            <span>Temprature</span> : {weather.main.temp}
          </h2>
          <h2>
            <span> Latitude</span> : {weather.coord.lat}
          </h2>
          <h2>
            <span> Longitude</span> : {weather.coord.lon}
          </h2>
          <h2>
            <span> Wind</span> : {weather.wind.speed}mph
          </h2>
          <h2>
            <span> Sky</span> : {weather.weather[0].main}
          </h2>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default App;
