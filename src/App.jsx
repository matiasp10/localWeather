import { useState, useEffect } from 'react';
import Weather from './components/Weather';
import './App.css';

function App() {
  let [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });

      await fetch(
        `https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lng}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
    };
    fetchData();
  }, [lat, lng]);

  return (
    <main>
      {typeof weather.main != 'undefined' ? (
        <Weather data={weather} />
      ) : (
        <div></div>
      )}
    </main>
  );
}

export default App;
