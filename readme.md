# 🌤️ Cloud Weather Tracker

**Cloud Weather Tracker** adalah aplikasi web interaktif untuk memantau cuaca dan kualitas udara terkini berdasarkan lokasi pengguna. Aplikasi ini dibangun dengan arsitektur modern menggunakan **React** di frontend, **Flask** di backend, dan **PostgreSQL** sebagai database. Aplikasi ini dikemas menggunakan **Docker** untuk kemudahan deployment dan manajemen layanan.

---

## 🚀 Teknologi yang Digunakan

- **Frontend**: React + Tailwind CSS + Vite
- **Backend**: Flask (Python)
- **Database**: PostgreSQL
- **Visualisasi**: Recharts (untuk grafik kualitas udara)
- **Containerization**: Docker, Docker Compose
- **API**: OpenWeatherMap API (cuaca dan kualitas udara)

---

## 🎯 Fitur Utama

- ✅ Input lokasi untuk mendapatkan data cuaca terkini
- 🌡️ Menampilkan suhu, kelembaban, dan deskripsi cuaca
- 🏭 Menampilkan komponen kualitas udara seperti PM2.5, PM10, CO, NO2, O3, dan SO2
- 📊 Menampilkan grafik kualitas udara dengan visualisasi bar chart
- 🕒 Menyimpan riwayat pencarian cuaca ke database PostgreSQL
- 🧹 Fitur penghapusan riwayat secara individual maupun sekaligus
- 🌗 Tampilan UI dinamis berdasarkan waktu (siang/malam) dan kondisi cuaca
- 🐳 Multi-container environment menggunakan Docker Compose

---

## ⚙️ Cara Menjalankan Aplikasi
### 1. Jalankan dengan Docker Compose
Pastikan Docker dan Docker Compose sudah terinstal.

```bash
docker-compose up --build
```
- Frontend React akan berjalan di http://localhost

- Backend Flask diakses di http://localhost:5000

- PostgreSQL berjalan di port 5432

### 2. Struktur Endpoint Backend
- GET /weather?city=... → Mengambil data cuaca berdasarkan kota

- GET /air-quality?lat=...&lon=... → Mengambil data kualitas udara berdasarkan koordinat

- GET /history → Menampilkan riwayat pencarian

- POST /search → Menyimpan data pencarian

- DELETE /history/:id → Menghapus satu riwayat

- DELETE /history → Menghapus seluruh riwayat

### 3. CI/CD Deployment
Proyek ini menggunakan Railway untuk proses CI/CD otomatis. Setiap kali ada push ke branch main di repository GitHub, Railway akan otomatis melakukan hal berikut:
- Menarik perubahan terbaru dari repository.
- Membangun ulang environment backend dan frontend.
- Deploy aplikasi ke cloud.

Setiap perubahan di GitHub (baik frontend atau backend) akan otomatis dideploy ke platform cloud tanpa memerlukan tindakan manual.

#### Environment Variables di Railway
Terdapat beberapa environment variables yang digunakan oleh aplikasi, yang disetting melalui Railway:
- API_KEY: Kunci API untuk mengakses OpenWeatherMap.
- DATABASE_URL: URL untuk menghubungkan ke database PostgreSQL yang di-host di Railway.




