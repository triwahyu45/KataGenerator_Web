# KataGenerator - Viral Justified Typography & Meme Sticker Generator 💬✨

[![Deploy Next.js to GitHub Pages](https://github.com/triwahyu45/KataGenerator_Web/actions/workflows/deploy.yml/badge.svg)](https://github.com/triwahyu45/KataGenerator_Web/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Demo%20Web-Live%20Online-emerald?style=for-the-badge&logo=githubpages&logoColor=white)](https://triwahyu45.github.io/KataGenerator_Web/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%20v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

> 🌐 **Website Resmi & Live Demo Online:**  
> 👉 [**https://triwahyu45.github.io/KataGenerator_Web/**](https://triwahyu45.github.io/KataGenerator_Web/) 👈  
> *(Bisa langsung dibuka di HP Android/iPhone atau Laptop tanpa perlu install apapun!)*

---

## 📌 Cara Memunculkan Link Web di Deskripsi (About) GitHub

Jika link website belum tampil di bagian deskripsi utama (sidebar kanan repository GitHub), ikuti langkah mudah ini:

1. Buka repository [KataGenerator_Web](https://github.com/triwahyu45/KataGenerator_Web).
2. Di sebelah kanan halaman utama repository, temukan bagian **About**.
3. Klik ikon **⚙️ (Gear / Settings)** di sebelah kanan tulisan About.
4. Di bagian **Website**:
   - Beri tanda centang pada opsi **"Use your GitHub Pages website"**, **ATAU**
   - Masukkan langsung URL: `https://triwahyu45.github.io/KataGenerator_Web/`
5. Klik **Save changes**. Link website sekarang akan muncul permanen di profil utama repository kamu! 🎉

---

## 💡 Apa Itu KataGenerator?

**KataGenerator** adalah web app interaktif modern untuk membuat stiker kata-kata bertipografi **justified (rata kiri-kanan sempurna)** yang sedang viral di Instagram Story, TikTok, Twitter/X, dan WhatsApp (format khas *"coba lu belah dada/hati gua... isinya..."*). 

Dilengkapi dengan engine peregangan teks matematis real-time, preset band indie populer Indonesia, esport, meme ikon, upload gambar kustom dari galeri, serta ekspor stiker transparan beresolusi tinggi hingga 4x Ultra HD.

---

## 🌟 Fitur Unggulan

- **⚡ Real-Time Justified Text Engine**:
  - Tiap baris otomatis meregang rata ke tepi kiri & kanan (`flex justify-between` + mathematical spacing), mereproduksi gaya visual tipografi kotak yang khas.
  - Pengaturan perataan untuk baris dengan 1 kata (Rata Kiri, Rata Tengah, Rata Kanan, atau Renggang).
  - Kontrol *Letter Spacing* (kerning) dan *Line Gap* (jarak baris) yang presisi.

- **🎲 Acak Kata (Random Meme Generator)**:
  - Tombol 1-klik untuk langsung memunculkan ide-ide kata viral lucu, bucin, skripsi/kuliah, dan indie secara acak.

- **🎸 Koleksi Preset Logo & Punchline**:
  - **Indie Bands Indonesia**: *Hindia, Sheila on 7, BARASUARA, Silampukau, for Revenge, PERUNGGU, Elephant Kind, .FEAST, Reality Club, Efek Rumah Kaca (ERK)*.
  - **Esports & Pop Idol**: *RRQ Hoshi, ONIC Esports, JAEMIN NCT*.
  - **Ikon & Meme**: *Hati Bucin ❤️, Patah Hati 💔, Tengkorak 💀, Kucing Meong 🐱, Api Membara 🔥, Kopi Senja ☕*.
  - **Upload Gambar Kustom**: Bebas unggah file PNG, SVG, atau foto apapun dari galeri HP atau komputer.
  - Fitur **Invert Warna** (Hitam ⇄ Putih) dan skala ukuran logo.

- **🎨 Gaya Tampilan & Kanvas**:
  - **Pilihan Rasio**: *Stiker (Auto-Fit)*, *1:1 Kotak (Feed/DP)*, *4:5 Portrait*, dan *9:16 Story (IG Story / TikTok / WA Status)*.
  - **Warna Latar & Tema**:
    - *Putih Klasik*
    - *OLED Dark Mode*
    - *Kartu 3D Stiker*
    - *Bening / Transparan (Khusus Stiker PNG Instagram Story & WA)*
    - *Vintage Kertas Cream*
    - *Pastel Yellow (Memo Note)*
    - *Pastel Rose (Bucin)*
  - **Bentuk Sudut**: *Tajam*, *Bulat*, *Kurva*, dan *Kapsul (Pill)*.
  - **Efek Outline**: *Polos*, *Garis Tipis*, *Die-Cut Vinyl Sticker*, dan *Glow Neon*.

- **📱 Optimal untuk Smartphone & Desktop**:
  - Dilengkapi tab switcher mobile (`Editor` & `Live Preview`) dan sticky bottom action bar sehingga pengguna smartphone tidak perlu repot scroll naik-turun.

- **🚀 Ekspor Kualitas Tinggi & 1-Click Share**:
  - **Salin Gambar ke Clipboard** (1-klik langsung siap `Ctrl+V` atau Paste di WhatsApp Web, Telegram, Discord).
  - **Direct Web Share**: Kirim stiker langsung ke aplikasi chat dan media sosial di HP.
  - **Download PNG Transparan & JPEG**.
  - Pilihan resolusi hingga **4x Ultra HD** (anti pecah saat di-zoom).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (Turbopack)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Export Engine**: [html-to-image](https://github.com/bubkoo/html-to-image) & Native Canvas API
- **Celebration Effect**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment**: [GitHub Actions](https://github.com/features/actions) → [GitHub Pages](https://pages.github.com/)

---

## 💻 Menjalankan Project Secara Lokal

Pastikan komputer kamu sudah terpasang [Node.js](https://nodejs.org/) (v18+ atau v20+).

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
   Akses [http://localhost:3000](http://localhost:3000) untuk mendesain stiker kata kamu.

---

## 📦 Build untuk Production

```bash
npm run build
```
File static export yang siap di-deploy akan dihasilkan di dalam folder `./out`.

---

## 📄 Lisensi & Pembuat

Dibuat dengan ❤️ oleh [Tri Wahyu](https://github.com/triwahyu45).  
Kontribusi, ide preset kata, serta request logo band baru sangat dipersilakan melalui Pull Request & Issues!
