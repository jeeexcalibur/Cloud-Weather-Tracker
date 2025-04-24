import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const AirQualityChart = ({ components }) => {
  const data = [
    { name: 'PM2.5', value: components.pm2_5 },
    { name: 'PM10', value: components.pm10 },
    { name: 'CO', value: components.co },
    { name: 'NO2', value: components.no2 },
    { name: 'O3', value: components.o3 },
    { name: 'SO2', value: components.so2 },
  ];

  // Fungsi untuk memilih warna bar berdasarkan nilai
  const getBarColor = (value) => {
    if (value <= 50) return '#10b981'; // Green for good
    if (value <= 100) return '#fbbf24'; // Yellow for moderate
    if (value <= 150) return '#f97316'; // Orange for unhealthy for sensitive groups
    return '#e11d48'; // Red for unhealthy
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Grafik Kualitas Udara</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: '#4b5563' }}
            angle={-45} // Rotasi label agar lebih rapi
            textAnchor="end"
          />
          <YAxis
            label={{
              value: 'μg/m³',
              angle: -90,
              position: 'insideLeft',
              fontSize: 14,
              fill: '#4b5563'
            }}
            tick={{ fontSize: 12, fill: '#4b5563' }}
          />
          <Tooltip
            wrapperStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #ccc' }}
            contentStyle={{ fontSize: '14px' }}
            labelStyle={{ fontWeight: 'bold' }}
          />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.value)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AirQualityChart;
