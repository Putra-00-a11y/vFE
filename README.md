# V-Tools Frontend

**V-Tools** adalah antarmuka pengguna (frontend) dari proyek utama **V-Pendulum**,
 sebuah sistem eksekusi "tools" balas dendam berbasis web dengan metode pemesanan client yang dirancang
 untuk memberi efek jera kepada pelaku kekerasan,
 perundungan, atau tekanan sosial yang pernah dialami oleh pengguna.

> Dibuat dengan tampilan dark, vibe misterius, dan efek visual mendukung nuansa “balas dendam yang elegan.”

---

## 🚀 Fitur Utama

- **Halaman Utama** — Informasi dasar dan akses ke fitur utama.
- **Form Pemesanan Tools** — Client dapat memesan tools berdasarkan kebutuhan (spam WA, dsb).
- **Dashboard Admin** — Menampilkan data device, pemesanan, tracking aktivitas user, dsb.
- **Halaman Tools** — Daftar semua tools beserta detail: nama, harga, tingkat, efek, dan rating.
- **Halaman Sejarah & Tentang** — Penjelasan cerita, ideologi, filosofi dibalik proyek V-Pendulum.
- **QR Redirect** — Setiap pesanan menghasilkan QR code dan hanya admin yang bisa scan dan lihat.
- **Partikel & Suara Latar** — Efek visual dan audio mendukung suasana situs gelap dan intens.

---

## 📂 Struktur Proyek (Frontend)

v-tools-frontend/
├── index.html
├── home.html
├── dashboard.html
├── tools.html
├── admin.html
├── dir_tools/
│ └── form1.html
├── dir_checks/
│ └── check1.html
├── dir_dwld/
├── sejarah.html
├── tentang.html
├── bg-audio.mp3
├── *.css
├── script.js
├── particles-config.json
└── README.md

---

## 🔧 Teknologi yang Digunakan

- **HTML, CSS, JavaScript**  100% Pure, no Framework.
- **JSON Database** — Tipe database backend .json (High-Risk).
- **Fetch API** — Terhubung ke backend untuk submit dan ambil data.
- **WebSocket (on process)** — Untuk komunikasi real-time di dashboard admin.
- **Framework (Dipertimbangkan)** — Untuk tampilan yang responsif dan modern.

---

## 🌐 Cara Akses

Frontend ini di-deploy menggunakan **Vercel**:
👉 [https://namadomaingw.vercel.app](https://namadomaingw.vercel.app)

Jika kamu ingin mencoba langsung:
1. Buka halaman utama V-Pendulum
2. Lanjutkan login → isi data pemesanan di Pemesanan Tools
3. Cek QR atau lihat data dari Dashboard Admin/Dev (khusus admin/dev)

---

## 📌 Catatan Penting

- Username & IP tersimpan otomatis via LocalStorage dan dikirim ke backend untuk identifikasi menggunakan JSON.
- Harap gunakan tools secara bertanggung jawab. Tujuan utama proyek ini adalah untuk aktivitas semi-ilegal dan efek jera.
- Semua data bersifat high-safe & melibatkan sistem real-target atau semi-illegal action.

---

## 👤 Pembuat

Project ini dibuat oleh **Putra**, dibantu oleh **Moses** teman se-codingan 🤝  
Konsep dari pengalaman pribadi & semangat memperjuangkan keadilan.

---

Kalau ada pertanyaan atau pengembangan lanjutan, langsung aja kontak Putra (082234435745) Via WA 💻
### © 2025 Putra - Unauthorized use is strictly prohibited.