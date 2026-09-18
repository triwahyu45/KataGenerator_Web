export interface TemplatePreset {
  id: string;
  name: string;
  category: 'Indie Bands' | 'Bucin & Lucu' | 'Idol & Esports' | 'Minimalist';
  description: string;
  lines: string[];
  logoId?: string;
  textCase: 'none' | 'uppercase' | 'lowercase';
  fontFamily: string;
  aspectRatio: 'auto' | '1:1' | '9:16' | '4:5';
  bgMode: 'white' | 'transparent' | 'dark' | 'card';
  watermark: string;
  fontWeight: string;
  letterSpacing: number;
}

export interface PresetLogo {
  id: string;
  name: string;
  category: 'Indie Bands' | 'Esports & Pop' | 'Icons';
  svg: string;
  aspectRatio?: string;
}

export const PRESET_LOGOS: PresetLogo[] = [
  {
    id: 'hindia',
    name: 'Hindia',
    category: 'Indie Bands',
    svg: `<svg viewBox="0 0 280 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 85 C 40 25, 50 15, 65 15 C 68 15, 65 35, 50 75 C 45 90, 60 45, 80 40 C 95 35, 95 55, 85 85 M60 55 L85 50 M100 85 L115 45 C 118 35, 128 35, 125 48 L115 85 M115 25 A 5 5 0 1 1 115 24 M130 85 L145 35 C 155 35, 165 42, 160 58 C 155 75, 140 85, 125 85 M160 85 L175 25 L165 85 M170 85 L185 45 M180 25 A 5 5 0 1 1 180 24 M200 85 C 190 85, 185 70, 195 50 C 205 35, 225 35, 215 65 L235 60 C 240 60, 235 75, 220 85 C 210 88, 205 85, 200 85 Z" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <text x="140" y="112" font-family="'Brush Script MT', cursive, sans-serif" font-size="60" font-weight="bold" font-style="italic" text-anchor="middle" fill="currentColor">Hindia</text>
    </svg>`
  },
  {
    id: 'sheila-on-7',
    name: 'Sheila on 7',
    category: 'Indie Bands',
    svg: `<svg viewBox="0 0 260 140" fill="#E11D48" xmlns="http://www.w3.org/2000/svg">
      <text x="130" y="65" font-family="Impact, Arial Black, sans-serif" font-size="52" font-weight="900" text-anchor="middle" letter-spacing="-1">SHEILA</text>
      <circle cx="130" cy="100" r="32" fill="#E11D48" />
      <text x="130" y="96" font-family="Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff">ON</text>
      <text x="130" y="122" font-family="Impact, sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#ffffff">7</text>
    </svg>`
  },
  {
    id: 'barasuara',
    name: 'BARASUARA',
    category: 'Indie Bands',
    svg: `<svg viewBox="0 0 320 70" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="160" y="52" font-family="Impact, 'Arial Black', sans-serif" font-size="46" font-weight="900" letter-spacing="4" text-anchor="middle" transform="skewX(-8)">BARASUARA</text>
    </svg>`
  },
  {
    id: 'silampukau',
    name: 'Silampukau',
    category: 'Indie Bands',
    svg: `<svg viewBox="0 0 300 90" fill="#2E7D32" xmlns="http://www.w3.org/2000/svg">
      <path d="M 15 45 C 50 15, 250 15, 285 45 C 250 75, 50 75, 15 45 Z" fill="none" stroke="#2E7D32" stroke-width="4" stroke-dasharray="6,3" />
      <text x="150" y="55" font-family="'Courier New', Georgia, serif" font-size="34" font-weight="900" font-style="italic" text-anchor="middle" letter-spacing="2">Silampukau</text>
    </svg>`
  },
  {
    id: 'for-revenge',
    name: 'for Revenge',
    category: 'Indie Bands',
    svg: `<svg viewBox="0 0 300 80" fill="#1D4ED8" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="54" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-weight="bold" font-style="italic" text-anchor="middle" letter-spacing="-1">for Revenge</text>
    </svg>`
  },
  {
    id: 'perunggu',
    name: 'PERUNGGU',
    category: 'Indie Bands',
    svg: `<svg viewBox="0 0 300 80" fill="#64748B" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="58" font-family="'Arial Black', Impact, sans-serif" font-size="48" font-weight="900" text-anchor="middle" letter-spacing="5">PERUNGGU</text>
    </svg>`
  },
  {
    id: 'elephant-kind',
    name: 'Elephant Kind',
    category: 'Indie Bands',
    svg: `<svg viewBox="0 0 320 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="160" y="54" font-family="'Brush Script MT', cursive, sans-serif" font-size="48" font-weight="bold" font-style="italic" text-anchor="middle">Elephant Kind</text>
    </svg>`
  },
  {
    id: 'feast',
    name: '.FEAST',
    category: 'Indie Bands',
    svg: `<svg viewBox="0 0 260 70" fill="#DC2626" xmlns="http://www.w3.org/2000/svg">
      <text x="130" y="52" font-family="Impact, 'Arial Black', sans-serif" font-size="52" font-weight="900" letter-spacing="6" text-anchor="middle">.FEAST</text>
    </svg>`
  },
  {
    id: 'rrq',
    name: 'RRQ Hoshi',
    category: 'Esports & Pop',
    svg: `<svg viewBox="0 0 240 120" fill="#EAB308" xmlns="http://www.w3.org/2000/svg">
      <path d="M 40 80 L 70 25 L 120 50 L 170 25 L 200 80 L 170 80 L 120 70 L 70 80 Z" fill="#EAB308"/>
      <circle cx="70" cy="22" r="8" fill="#EAB308"/>
      <circle cx="120" cy="45" r="8" fill="#EAB308"/>
      <circle cx="170" cy="22" r="8" fill="#EAB308"/>
      <text x="120" y="112" font-family="Impact, Arial Black, sans-serif" font-size="32" font-weight="900" text-anchor="middle" fill="#EAB308" letter-spacing="4">RRQ</text>
    </svg>`
  },
  {
    id: 'jaemin',
    name: 'JAEMIN (NCT)',
    category: 'Esports & Pop',
    svg: `<svg viewBox="0 0 280 80" fill="#06B6D4" xmlns="http://www.w3.org/2000/svg">
      <text x="140" y="52" font-family="'Arial Black', sans-serif" font-size="40" font-weight="900" letter-spacing="4" text-anchor="middle">JAEMIN 🐰</text>
    </svg>`
  },
  {
    id: 'love-heart',
    name: 'Hati / Ayang',
    category: 'Icons',
    svg: `<svg viewBox="0 0 100 100" fill="#EF4444" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 88 C25 65 5 45 5 28 C5 14 16 5 28 5 C37 5 45 10 50 18 C55 10 63 5 72 5 C84 5 95 14 95 28 C95 45 75 65 50 88 Z" />
    </svg>`
  }
];

export const PRESET_TEMPLATES: TemplatePreset[] = [
  {
    id: 'belah-hati-indie',
    name: 'Coba Lu Belah Hati Gua (Hindia)',
    category: 'Indie Bands',
    description: 'Format paling viral untuk pamer band favorit di IG Story.',
    lines: [
      'coba lu belah',
      'hati gua,',
      'terus lu liat',
      'pasti isinya'
    ],
    logoId: 'hindia',
    textCase: 'lowercase',
    fontFamily: 'system',
    aspectRatio: 'auto',
    bgMode: 'white',
    watermark: '@triwahyu45',
    fontWeight: 'normal',
    letterSpacing: 0
  },
  {
    id: 'belah-hati-sheila',
    name: 'Coba Lu Belah Hati Gua (Sheila On 7)',
    category: 'Indie Bands',
    description: 'Versi Sheila Gank klasik.',
    lines: [
      'coba lu belah',
      'hati gua,',
      'terus lu liat',
      'pasti isinya'
    ],
    logoId: 'sheila-on-7',
    textCase: 'lowercase',
    fontFamily: 'system',
    aspectRatio: 'auto',
    bgMode: 'white',
    watermark: '@sheilagank',
    fontWeight: 'normal',
    letterSpacing: 0
  },
  {
    id: 'eh-kocak-bucin',
    name: 'Eh Kocak! Coba Lu Belah Dada Gue',
    category: 'Bucin & Lucu',
    description: 'Format meme bucin cewe gue / ayang.',
    lines: [
      'eh kocak!',
      'coba lu belah',
      'dada gue',
      'isinya cewe',
      'gue!'
    ],
    textCase: 'lowercase',
    fontFamily: 'system',
    aspectRatio: 'auto',
    bgMode: 'white',
    watermark: '',
    fontWeight: 'normal',
    letterSpacing: 0
  },
  {
    id: 'belah-dada-bolong-rrq',
    name: 'Belah Dada Sampe Bolong (RRQ Hoshi)',
    category: 'Idol & Esports',
    description: 'Versi fanatik fans game / esport Indonesia.',
    lines: [
      'EH KOCAK.. COBA LU',
      'BELAH DADA GUA',
      'SAMPE BOLONG',
      'ISINYA APAAN...',
      'ISINYAA RRQ HOSHI',
      'BOSS ARTINYA GUA',
      'CINTA RRQ HOSHI',
      'UNTIL I DIE PAHAM🤪'
    ],
    textCase: 'uppercase',
    fontFamily: 'impact',
    aspectRatio: 'auto',
    bgMode: 'white',
    watermark: '@kingdom_rrq',
    fontWeight: 'bold',
    letterSpacing: 0
  },
  {
    id: 'pasti-isinya-minimal',
    name: 'Pasti Isinya (Minimalist 2 Baris)',
    category: 'Minimalist',
    description: 'Versi ringkas to the point 2 baris.',
    lines: [
      'pasti isinya'
    ],
    logoId: 'barasuara',
    textCase: 'lowercase',
    fontFamily: 'system',
    aspectRatio: 'auto',
    bgMode: 'white',
    watermark: '',
    fontWeight: 'normal',
    letterSpacing: 0
  }
];

export const FONT_OPTIONS = [
  { id: 'system', name: 'Original Meme (Arial / Sans)', style: 'font-sans' },
  { id: 'inter', name: 'Inter Clean', style: 'font-inter' },
  { id: 'impact', name: 'Impact / Meme Heavy', style: 'font-impact' },
  { id: 'bebas', name: 'Bebas Neue (Condensed)', style: 'font-bebas' },
  { id: 'comic', name: 'Comic Meme (Casual)', style: 'font-comic' },
  { id: 'serif', name: 'Editorial Serif (Classic)', style: 'font-serif' },
  { id: 'mono', name: 'Monospace (Terminal)', style: 'font-mono' }
];
