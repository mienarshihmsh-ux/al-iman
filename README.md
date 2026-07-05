# TPA AL IMAN - Sistem Pendaftaran Santri Baru Digital

Aplikasi web modern untuk manajemen pendaftaran santri baru di TPA AL IMAN. Dibangun dengan fokus pada kemudahan pengguna, keamanan data, dan integrasi pembayaran digital.

## 🚀 Fitur Utama

- **Landing Page Interaktif:** Tampilan responsif dengan desain bernuansa Islami yang modern.
- **Gallery Kegiatan:** Menampilkan dokumentasi kegiatan TPA menggunakan modal gambar yang elegan.
- **Formulir Pendaftaran Digital:** Pengisian data santri lengkap termasuk fitur unggah berkas (Foto, Ijazah, KK).
- **Integrasi Pembayaran (Midtrans):** Pembayaran biaya pendaftaran otomatis menggunakan Midtrans Snap API.
- **Penyimpanan Cloud (Google Sheets & Drive):** Data pendaftaran disimpan langsung ke Google Sheets dan berkas diunggah ke Google Drive melalui integrasi Google Apps Script.
- **Validasi Real-time:** Pengecekan data ganda (NISN, NIK, Email, No. Telp) untuk mencegah pendaftaran duplikat.
- **Notifikasi Terintegrasi:** Menggunakan SweetAlert2 untuk umpan balik pengguna yang profesional dan tidak menghalangi alur kerja.
- **Bukti PDF:** Fitur unduh bukti pendaftaran otomatis dalam format PDF setelah pembayaran berhasil.

## 📥 Cara Instalasi (Clone dari GitHub)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal Anda:

1. **Clone Repositori:**
   Buka terminal atau command prompt, lalu jalankan perintah berikut:
   ```bash
   git clone https://github.com/mienarshihmsh-ux/tpqaliman.git
   ```

2. **Masuk ke Direktori Proyek:**
   ```bash
   cd tpqaliman
   ```

3. **Instal Dependensi:**
   Pastikan Anda sudah menginstal Node.js, lalu jalankan:
   ```bash
   npm install
   ```

4. **Konfigurasi Environment Variables:**
   Buat file bernama `.env` di folder root dan isi dengan kunci API Anda (lihat bagian Konfigurasi di bawah).

5. **Jalankan Server Pengembangan:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:9002` (atau port yang tertera di terminal).

## 📁 Struktur Proyek (Garis Besar)

Berikut adalah struktur folder utama dalam proyek ini:

```text
AL-IMAN/
├── .idx/                   # Konfigurasi lingkungan pengembangan Cloud (Google IDX)
├── src/                    # Folder utama kode sumber
│   ├── ai/                 # Logika kecerdasan buatan (Genkit)
│   ├── app/                # Logika utama aplikasi (Next.js App Router)
│   │   ├── actions/        # Server Actions (misal: pemrosesan pembayaran)
│   │   ├── lib/            # Konfigurasi internal & placeholder data
│   │   ├── globals.css     # Styling global (Tailwind & Tema Shadcn)
│   │   ├── layout.tsx      # Tata letak induk
│   │   └── page.tsx        # Halaman beranda utama
│   ├── components/         # Komponen UI reusable
│   │   ├── layout/         # Navbar, Footer, Loading
│   │   ├── sections/       # Hero, Tentang, Gallery, Kontak, Modal
│   │   └── ui/             # Komponen dasar Shadcn UI
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utilitas (utils.ts) dan tipe data (types.ts)
├── .env                    # Variabel lingkungan (Rahasia)
├── package.json            # Daftar dependensi & skrip
└── tailwind.config.ts      # Konfigurasi styling Tailwind
```

## 🛠️ Teknologi yang Digunakan

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript.
- **Styling:** Tailwind CSS, Lucide Icons, Font Awesome.
- **UI Components:** Shadcn UI, Radix UI.
- **AI Integration:** Genkit.
- **Payment Gateway:** Midtrans Snap SDK.
- **Backend Bridge:** Google Apps Script.
- **Utility:** jsPDF (Generasi PDF), SweetAlert2 (Notifikasi).

## ⚙️ Konfigurasi Environment Variables

Pastikan Anda memiliki file `.env` dengan isi sebagai berikut:

```env
# Midtrans Keys
MIDTRANS_SERVER_KEY=SB-Mid-server-xxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=SB-Mid-client-xxxxxxxxxxxxxxxxxx

# Apps Script URL
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/xxxx/exec
```

---
© 2025 TPA AL IMAN - Dikembangkan dengan ❤️ untuk pendidikan Al-Qur'an yang lebih modern.
