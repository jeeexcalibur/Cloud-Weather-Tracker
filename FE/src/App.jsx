import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import AirQualityCard from './components/AirQualityCard';
import AirQualityChart from './components/AirQualityChart';
import HistoryList from './components/HistoryList';

const BASE_URL = 'https://cloud-weather-tracker-production.up.railway.app';

function App() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/history/weather`)
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error(err));
  }, []);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(`${BASE_URL}/api`, { city });
      setResult(res.data);
    } catch (err) {
      setError('Gagal mengambil data. Pastikan backend sudah jalan.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather();
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/history/weather/${id}`);
      setHistory(history.filter((item) => item.id !== id));
    } catch (err) {
      console.error('Error deleting history:', err);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await axios.delete(`${BASE_URL}/api/history/weather`);
      setHistory([]);
    } catch (err) {
      console.error('Error deleting all history:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-start p-8 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 mt-8">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8 drop-shadow-lg">
          🌤️ Weather & Air Quality Tracker
        </h1>
        
        <form onSubmit={handleSubmit} className="flex gap-4 mb-8 bg-blue-50 p-4 rounded-lg shadow-md">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Masukkan nama kota"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Cari
          </button>
        </form>

        {loading && <p className="text-center text-gray-600 animate-pulse">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {result && (
          <div className="space-y-6">
            <WeatherCard data={result.weather} />
            <AirQualityCard data={result.air_quality.list[0]} />
            <AirQualityChart components={result.air_quality.list[0].components} />
          </div>
        )}

        {/* History List */}
        <div className="mt-8">
          <HistoryList data={history} onDelete={handleDelete} />
          <div className="flex justify-center mt-6">
            <button
              onClick={handleDeleteAll}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
            >
              Hapus Semua Riwayat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
