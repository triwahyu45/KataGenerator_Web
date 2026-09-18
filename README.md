# KataGenerator - Viral Justified Typography & Meme Sticker Generator 💬✨

Web aplikasi interaktif untuk membuat stiker kata-kata bertipografi **justified (rata kiri-kanan)** yang sedang viral di Instagram Story, TikTok, dan Twitter/X (format *"Coba lu belah dada/hati gua... isinya..."*). Dilengkapi dengan preset band indie, custom upload logo/gambar, dan export kualitas tinggi.

![KataGenerator Banner](https://raw.githubusercontent.com/triwahyu45/KataGenerator_Web/main/public/banner.png)

---

## 🌟 Fitur Utama

- **⚡ Engine Teks Justify Real-Time**: Tiap baris kata secara otomatis meregang rata ke tepi kiri dan kanan (`flex justify-between` + mathematical spacing), mereproduksi gaya visual tipografi kotak yang khas.
- **🎨 Editor Baris Fleksibel**: 
  - Tambah, pindahkan, dan hapus baris dengan leluasa.
  - Opsi format teks instan: `abc` (huruf kecil santai ala meme), `ABC` (semua kapital), atau `Bebas`.
  - Slider ukuran font dan jarak antar baris secara real-time.
  - Fitur **Paste Teks Panjang** (otomatis memecah paragraf menjadi baris-baris justify).
- **🎸 Logo & Punchline Image Inserter**:
  - Pilihan preset logo band indie Indonesia: **Hindia, Sheila on 7, BARASUARA, Silampukau, for Revenge, PERUNGGU, Elephant Kind, .FEAST**, RRQ Hoshi, Jaemin NCT, hingga ikon hati.
  - **Upload Gambar Sendiri** (PNG / SVG / JPG transparan dari galeri HP atau laptop).
  - Slider skala logo dan fitur **Invert Warna** (hitam ⇄ putih).
- **📐 Pengaturan Kanvas & Gaya**:
  - Pilihan rasio kanvas: **Stiker (Auto-fit)**, **1:1 Kotak (Feed/DP)**, **4:5 Portrait**, dan **9:16 Story (IG Story / TikTok / WA Status)**.
  - Mode latar belakang: **Putih Klasik**, **OLED Dark Mode**, **Kartu Stiker dengan Shadow**, dan **Bening (PNG Transparan)**.
  - Watermark pojok kanan atas kustom (misal `@username_kamu`).
- **🚀 Multi-Format Export & 1-Click Copy**:
  - **Salin Gambar ke Clipboard** (1-klik langsung bisa di-paste `Ctrl+V` di WhatsApp Web, Telegram, Discord, atau Instagram Web).
  - **Download File PNG** (Transparan atau dengan background) dan **JPEG**.
  - Pilihan resolusi ekspor hingga **4x Ultra HD** (anti buram/pecah saat di-zoom).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Export Engine**: [html-to-image](https://github.com/bubkoo/html-to-image) & Native Canvas API
- **Celebration**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Menjalankan Project Secara Lokal

Pastikan komputer kamu sudah terpasang [Node.js](https://nodejs.org/) (v18.17+ atau v20+ direkomendasikan).

1. **Clone repository ini**:
   ```bash
   git clone https://github.com/triwahyu45/KataGenerator_Web.git
   cd KataGenerator_Web
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```

4. **Buka browser**:
   Akses [http://localhost:3000](http://localhost:3000) untuk mulai mendesain stiker kata kamu.

---

## 📦 Build untuk Production

Untuk membuat build produksi yang dioptimalkan:
```bash
npm run build
npm run start
```

---

## 📄 Lisensi & Kontribusi

Dibuat dengan ❤️ oleh [Tri Wahyu](https://github.com/triwahyu45). Kontribusi, issue, dan ide preset baru sangat dipersilakan!
