import React from 'react';

const WeatherCard = ({ data }) => {
  const iconCode = data.weather[0].icon;
  const weatherIconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-6">
      {/* Icon Cuaca */}
      <div className="flex-shrink-0">
        <img
          src={weatherIconUrl}
          alt={data.weather[0].description}
          className="w-20 h-20"
        />
      </div>

      {/* Info Cuaca */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          Cuaca di {data.name}
        </h2>
        <p className="text-gray-700 text-lg">
          🌡️ <span className="font-semibold">{data.main.temp}°C</span> | 💧{' '}
          <span className="font-semibold">{data.main.humidity}%</span> kelembapan
        </p>
        <p className="text-gray-600 italic capitalize mt-1">
          {data.weather[0].description}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
