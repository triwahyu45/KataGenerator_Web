import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KataGenerator - Viral Justified Typography & Meme Sticker Generator",
  description: "Bikin kata-kata justify viral ala meme Instagram & TikTok (Coba lu belah dada gua... isinya...) dengan logo band indie, custom gambar, dan export PNG kualitas tinggi.",
  keywords: ["kata generator", "belah hati aku", "belah dada gua", "meme instagram", "sticker generator", "typography justify", "hindia meme", "sheila on 7 meme"],
  authors: [{ name: "Tri Wahyu" }],
  openGraph: {
    title: "KataGenerator - Viral Justified Typography Generator",
    description: "Generate meme teks rata kiri-kanan viral instan dengan logo band atau foto sendiri.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
