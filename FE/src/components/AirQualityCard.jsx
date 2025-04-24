import React from 'react';

const getAQIDescription = (aqi) => {
  switch (aqi) {
    case 1:
      return { label: 'Baik', color: 'bg-green-500' };
    case 2:
      return { label: 'Sedang', color: 'bg-yellow-400' };
    case 3:
      return { label: 'Tidak Sehat untuk Sensitif ', color: 'bg-orange-400' };
    case 4:
      return { label: 'Tidak Sehat', color: 'bg-red-500' };
    case 5:
      return { label: 'Sangat Tidak Sehat', color: 'bg-purple-700' };
    default:
      return { label: 'Tidak diketahui', color: 'bg-gray-400' };
  }
};

const AirQualityCard = ({ data }) => {
  const components = data.components;
  const { label, color } = getAQIDescription(data.main.aqi);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
        🌫️ Kualitas Udara
      </h3>

      <div className="flex items-center gap-3 mb-6">
        <div className={`w-4 h-4 rounded-full ${color}`} />
        <p className="text-gray-700 font-medium text-lg">
          AQI: {data.main.aqi} - {label}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
        <div title="Partikel kecil yang bisa masuk ke paru-paru">
          <span className="flex items-center gap-2">
            🌫️ PM2.5: <span className="font-semibold">{components.pm2_5} μg/m³</span>
          </span>
        </div>
        <div title="Karbon Monoksida dari kendaraan & pembakaran">
          <span className="flex items-center gap-2">
            🚗 CO: <span className="font-semibold">{components.co} μg/m³</span>
          </span>
        </div>
        <div title="Nitrogen Dioksida, emisi kendaraan & industri">
          <span className="flex items-center gap-2">
            🏭 NO₂: <span className="font-semibold">{components.no2} μg/m³</span>
          </span>
        </div>
        <div title="Ozon permukaan, bisa berbahaya jika terlalu tinggi">
          <span className="flex items-center gap-2">
            🌞 O₃: <span className="font-semibold">{components.o3} μg/m³</span>
          </span>
        </div>
        <div title="Sulfur Dioksida, dari industri & pembakaran batu bara">
          <span className="flex items-center gap-2">
            🌋 SO₂: <span className="font-semibold">{components.so2} μg/m³</span>
          </span>
        </div>
        <div title="PM10 adalah partikel berukuran lebih besar dari PM2.5">
          <span className="flex items-center gap-2">
            💨 PM10: <span className="font-semibold">{components.pm10} μg/m³</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AirQualityCard;
