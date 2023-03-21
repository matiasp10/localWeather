function Weather({ data }) {
  return (
    <div className="container">
      <div className="image">
        {data.weather[0]?.main === 'Rain' ? (
          <div>
            <img src="https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg" />
          </div>
        ) : data.weather[0]?.main === 'Clouds' ? (
          <div>
            <img src="https://images.pexels.com/photos/3941855/pexels-photo-3941855.jpeg" />
          </div>
        ) : (
          'No image for this weather'
        )}
      </div>
      <div className="info">
        <h1>City: {data.name}</h1>
        <p>Temp: {data.main.temp}</p>
      </div>
    </div>
  );
}

export default Weather;
