import React, { useState, useEffect } from 'react';

const WeatherHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('https://cloud-weather-tracker-production.up.railway.app/api/history/weather')
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error(err));
  }, []);
  

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Riwayat Cuaca</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Kota</th>
            <th className="border p-2">Suhu</th>
            <th className="border p-2">Kelembapan</th>
            <th className="border p-2">Deskripsi</th>
            <th className="border p-2">Waktu</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.city}</td>
              <td className="border p-2">{item.temperature}°C</td>
              <td className="border p-2">{item.humidity}%</td>
              <td className="border p-2">{item.description}</td>
              <td className="border p-2">{new Date(item.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherHistory;
