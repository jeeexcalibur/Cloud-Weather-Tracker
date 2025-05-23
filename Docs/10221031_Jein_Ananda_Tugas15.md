# 🌦️ Cloud Weather Tracker
## Pekan 14: Monitoring, Logging, dan Scaling

## Link 
Backend : https://cloud-weather-tracker-production.up.railway.app/ 

Backend for test API : https://cloud-weather-tracker-production.up.railway.app/api

Frontend : https://cloud-weather-tracker.vercel.app/

# Checkpoint 
1. Finalisasi proyek dan perbaikan bug
2. Membuat dokumentasi komprehensif
3. Menyiapkan presentasi proyek
4. Melakukan security review sederhana

# Jawaban Checkpoint
## 1. Finalisasi proyek dan perbaikan bug
Proyek ini sudah diuji secara menyeluruh untuk memastikan semua fitur bekerja dengan baik. Beberapa bug yang ditemukan telah diperbaiki, termasuk masalah terkait pengambilan data cuaca yang sebelumnya gagal karena API key yang tidak terkonfigurasi dengan benar. Setelah perbaikan, aplikasi kini dapat mengambil data cuaca dan kualitas udara berdasarkan nama kota yang dimasukkan pengguna, serta menampilkan grafik kualitas udara yang akurat.

## 2. Membuat dokumentasi komprehensif
- Dokumentasi proyek telah dibuat secara lengkap dan mencakup semua aspek penting dari pengembangan proyek, antara lain:

- Deskripsi Proyek: Menjelaskan tujuan, fitur, dan teknologi yang digunakan dalam aplikasi Weather Tracker.

- Cara Menjalankan Aplikasi: Langkah-langkah untuk menjalankan aplikasi secara lokal menggunakan Docker Compose.

- Struktur Endpoint Backend: Rincian tentang endpoint API yang tersedia, termasuk deskripsi fungsi setiap endpoint.

- CI/CD dan Deployment: Penjelasan mengenai proses otomatisasi deployment dengan Railway untuk backend dan Vercel untuk frontend, serta pengaturan environment variables yang diperlukan.

- Monitoring dan Logging: Konfigurasi Prometheus untuk monitoring aplikasi dan ELK Stack untuk pengelolaan log secara terpusat.

- Security Review: Penjelasan mengenai langkah-langkah keamanan yang diterapkan pada aplikasi, seperti pengelolaan API key, validasi input, penggunaan HTTPS, dan pengaturan CORS.

## 3. Menyiapkan presentasi proyek
Link presentasi proyek dapat ditemukan di https://www.canva.com/design/DAGoMsT6nC4/OvJ1QGKE03Wkw2uNHI4vXA/edit?utm_content=DAGoMsT6nC4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## 4. Melakukan security review sederhana
- Pengelolaan API Key: API key untuk OpenWeatherMap disimpan di environment variables dan tidak dimasukkan ke dalam kode untuk menjaga kerahasiaannya.

- Validasi Input Pengguna: Semua input dari pengguna, seperti nama kota, divalidasi dan disanitasi untuk mencegah serangan SQL Injection dan XSS.

- Penggunaan HTTPS: Semua komunikasi antara frontend dan backend menggunakan HTTPS untuk mengenkripsi data yang dikirimkan dan mencegah Man-in-the-Middle (MITM) attacks.

- Pengelolaan CORS: CORS diatur untuk membatasi siapa saja yang dapat mengakses API backend, hanya memperbolehkan origin yang tepercaya.

Langkah-langkah ini diambil untuk memastikan bahwa aplikasi tetap aman dan dapat diandalkan dalam pengelolaan data cuaca dan kualitas udara.


# Kesimpulan

Proyek ini telah berhasil diselesaikan dan aplikasi Weather Tracker kini berfungsi dengan baik, menyediakan data cuaca dan kualitas udara dengan interface yang responsif. CI/CD sudah terintegrasi dengan baik menggunakan Railway dan Vercel, memudahkan proses deployment otomatis setiap kali ada perubahan pada repository. Sistem monitoring, logging, dan scaling telah berhasil diterapkan, dan semua pengujian terkait performa menunjukkan peningkatan yang signifikan. Keamanan aplikasi juga telah dipastikan dengan melakukan security review sederhana, mengamankan API key, memvalidasi input, dan menggunakan HTTPS.