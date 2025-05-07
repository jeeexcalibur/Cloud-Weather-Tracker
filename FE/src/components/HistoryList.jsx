import React from 'react';

const HistoryList = ({ data, onDelete, onDeleteAll }) => {
  if (data.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Riwayat Pencarian Cuaca</h3>


      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="px-6 py-3 text-lg font-medium">Kota</th>
              <th className="px-6 py-3 text-lg font-medium">Suhu (°C)</th>
              <th className="px-6 py-3 text-lg font-medium">Kelembapan</th>
              <th className="px-6 py-3 text-lg font-medium">Deskripsi</th>
              <th className="px-6 py-3 text-lg font-medium">Waktu</th>
              <th className="px-6 py-3 text-lg font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-t hover:bg-gray-50 transition">
                <td className="px-6 py-4">{row.city}</td>
                <td className="px-6 py-4">{row.temperature}</td>
                <td className="px-6 py-4">{row.humidity}%</td>
                <td className="px-6 py-4">{row.description}</td>
                <td className="px-6 py-4">{new Date(row.created_at).toLocaleString()}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onDelete(row.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryList;
