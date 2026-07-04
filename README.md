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

## 📁 Struktur Proyek (Garis Besar)

Berikut adalah struktur folder dan file utama dalam proyek ini:

```text
AL-IMAN/
├── .idx/                   # Konfigurasi lingkungan pengembangan Cloud (Google IDX)
├── src/                    # Folder utama kode sumber
│   ├── ai/                 # Logika kecerdasan buatan (Genkit)
│   ├── app/                # Logika utama aplikasi (Next.js App Router)
│   │   ├── actions/        # Server Actions (misal: pemrosesan pembayaran)
│   │   ├── lib/            # Konfigurasi internal aplikasi & placeholder data
│   │   ├── globals.css     # Styling global (Tailwind & Tema Shadcn)
│   │   ├── layout.tsx      # Tata letak induk aplikasi
│   │   └── page.tsx        # Halaman beranda utama
│   ├── components/         # Komponen UI yang dapat digunakan kembali
│   │   ├── icons/          # Komponen ikon custom
│   │   ├── layout/         # Komponen layout (Navbar, Footer, Loading)
│   │   ├── sections/       # Bagian-bagian halaman (Hero, Gallery, Kontak, Modal)
│   │   └── ui/             # Komponen dasar Shadcn UI (Button, Input, Dialog, dll)
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utilitas (utils.ts) dan definisi tipe (types.ts)
├── .env                    # Variabel lingkungan untuk kunci API rahasia
├── apphosting.yaml         # Konfigurasi untuk Firebase App Hosting
├── components.json         # Konfigurasi library Shadcn UI
├── next.config.ts          # Konfigurasi framework Next.js
├── package.json            # Daftar dependensi dan skrip proyek
├── tailwind.config.ts      # Konfigurasi styling Tailwind CSS
└── tsconfig.json           # Konfigurasi TypeScript
```

## 🛠️ Teknologi yang Digunakan

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript.
- **Styling:** Tailwind CSS, Lucide Icons, Font Awesome.
- **UI Components:** Shadcn UI, Radix UI.
- **AI Integration:** Genkit.
- **Payment Gateway:** Midtrans Snap SDK.
- **Backend/Logic:** Next.js Server Actions & Google Apps Script (sebagai API Bridge).
- **Utilitas:** jsPDF (Generasi PDF), SweetAlert2 (Notifikasi).

## ⚙️ Konfigurasi Environment Variables

Aplikasi ini menggunakan variabel lingkungan untuk menjaga keamanan kunci API. Pastikan Anda memiliki file `.env` di folder root dengan isi sebagai berikut:

```env
# Midtrans Keys (Ganti dengan kunci Anda)
MIDTRANS_SERVER_KEY=SB-Mid-server-xxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=SB-Mid-client-xxxxxxxxxxxxxxxxxx

# Apps Script URL (URL Web App yang di-deploy di Google Apps Script)
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/xxxx/exec
```

---
© 2025 TPA AL IMAN - Dikembangkan dengan ❤️ untuk pendidikan Al-Qur'an yang lebih modern.