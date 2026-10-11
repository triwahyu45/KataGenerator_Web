export interface TemplatePreset {
  id: string;
  name: string;
  category: 'Indie Bands' | 'Bucin & Galau' | 'Esports & Pop' | 'Kocak & Relatable' | 'Minimalist';
  description: string;
  lines: string[];
  logoId?: string;
  textCase: 'none' | 'uppercase' | 'lowercase';
  fontFamily: string;
  aspectRatio: 'auto' | '1:1' | '9:16' | '4:5';
  bgMode: 'white' | 'transparent' | 'dark' | 'card' | 'cream' | 'pastel-yellow' | 'pastel-rose';
  watermark: string;
  fontWeight: string;
  letterSpacing: number;
}

export interface PresetLogo {
  id: string;
  name: string;
  category: 'Indie Bands' | 'Esports & Pop' | 'Icons & Meme';
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
    id: 'reality-club',
    name: 'Reality Club',
    category: 'Indie Bands',
    svg: `<svg viewBox="0 0 300 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="38" font-family="'Courier New', monospace" font-size="30" font-weight="900" letter-spacing="3" text-anchor="middle">REALITY</text>
      <text x="150" y="70" font-family="'Courier New', monospace" font-size="30" font-weight="900" letter-spacing="6" text-anchor="middle">CLUB</text>
    </svg>`
  },
  {
    id: 'efek-rumah-kaca',
    name: 'Efek Rumah Kaca',
    category: 'Indie Bands',
    svg: `<svg viewBox="0 0 320 70" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="10" width="280" height="50" rx="6" fill="none" stroke="currentColor" stroke-width="3" />
      <text x="160" y="44" font-family="Arial, sans-serif" font-size="24" font-weight="900" letter-spacing="3" text-anchor="middle">EFEK RUMAH KACA</text>
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
    id: 'onic',
    name: 'ONIC Esports',
    category: 'Esports & Pop',
    svg: `<svg viewBox="0 0 260 100" fill="#FACC15" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,70 80,15 110,40 140,15 180,70 140,60 110,75 80,60" fill="#FACC15" />
      <text x="130" y="95" font-family="Impact, sans-serif" font-size="30" font-weight="900" letter-spacing="5" text-anchor="middle" fill="#FACC15">ONIC</text>
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
    category: 'Icons & Meme',
    svg: `<svg viewBox="0 0 100 100" fill="#EF4444" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 88 C25 65 5 45 5 28 C5 14 16 5 28 5 C37 5 45 10 50 18 C55 10 63 5 72 5 C84 5 95 14 95 28 C95 45 75 65 50 88 Z" />
    </svg>`
  },
  {
    id: 'broken-heart',
    name: 'Patah Hati 💔',
    category: 'Icons & Meme',
    svg: `<svg viewBox="0 0 100 100" fill="#EF4444" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 88 C25 65 5 45 5 28 C5 14 16 5 28 5 C37 5 45 10 50 18 C55 10 63 5 72 5 C84 5 95 14 95 28 C95 45 75 65 50 88 Z" />
      <path d="M48 20 L56 38 L43 52 L54 66 L47 84" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`
  },
  {
    id: 'skull',
    name: 'Tengkorak 💀',
    category: 'Icons & Meme',
    svg: `<svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15 C30 15 20 30 20 50 C20 62 25 72 32 78 L32 86 L68 86 L68 78 C75 72 80 62 80 50 C80 30 70 15 50 15 Z" fill="currentColor"/>
      <ellipse cx="38" cy="48" rx="8" ry="10" fill="#000000" />
      <ellipse cx="62" cy="48" rx="8" ry="10" fill="#000000" />
      <path d="M50 62 L46 70 L54 70 Z" fill="#000000" />
      <line x1="42" y1="80" x2="42" y2="86" stroke="#000000" stroke-width="3" />
      <line x1="50" y1="80" x2="50" y2="86" stroke="#000000" stroke-width="3" />
      <line x1="58" y1="80" x2="58" y2="86" stroke="#000000" stroke-width="3" />
    </svg>`
  },
  {
    id: 'cat',
    name: 'Kucing Meong 🐱',
    category: 'Icons & Meme',
    svg: `<svg viewBox="0 0 100 100" fill="#F97316" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,20 35,45 15,48" fill="#F97316" />
      <polygon points="80,20 65,45 85,48" fill="#F97316" />
      <circle cx="50" cy="55" r="32" fill="#F97316" />
      <ellipse cx="40" cy="50" rx="4" ry="6" fill="#ffffff" />
      <ellipse cx="60" cy="50" rx="4" ry="6" fill="#ffffff" />
      <polygon points="50,60 46,65 54,65" fill="#EF4444" />
      <path d="M46 66 C48 70 52 70 54 66" stroke="#000000" stroke-width="2" fill="none" />
    </svg>`
  },
  {
    id: 'fire',
    name: 'Api Membara 🔥',
    category: 'Icons & Meme',
    svg: `<svg viewBox="0 0 100 100" fill="#F97316" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10 C50 10 32 32 32 55 C32 75 42 90 55 90 C70 90 80 75 80 55 C80 38 68 25 68 25 C68 25 64 38 52 38 C45 38 45 28 50 10 Z" fill="#EA580C" />
      <path d="M52 45 C52 45 42 55 42 68 C42 80 48 88 56 88 C65 88 70 80 70 68 C70 58 62 52 62 52 C62 52 60 60 54 60 C50 60 50 54 52 45 Z" fill="#FACC15" />
    </svg>`
  },
  {
    id: 'coffee',
    name: 'Kopi Senja ☕',
    category: 'Icons & Meme',
    svg: `<svg viewBox="0 0 100 100" fill="#78350F" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 40 L25 75 C26 82 32 86 40 86 L60 86 C68 86 74 82 75 75 L80 40 Z" fill="#78350F" />
      <path d="M76 46 C86 46 90 54 90 62 C90 70 84 76 75 76" stroke="#78350F" stroke-width="6" fill="none" stroke-linecap="round" />
      <line x1="15" y1="92" x2="85" y2="92" stroke="#78350F" stroke-width="5" stroke-linecap="round" />
      <path d="M38 18 C35 24 42 28 39 34" stroke="#D97706" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M50 16 C47 22 54 26 51 32" stroke="#D97706" stroke-width="3" stroke-linecap="round" fill="none" />
      <path d="M62 18 C59 24 66 28 63 34" stroke="#D97706" stroke-width="3" stroke-linecap="round" fill="none" />
    </svg>`
  }
];

export const PRESET_TEMPLATES: TemplatePreset[] = [
  {
    id: 'belah-hati-indie',
    name: 'Coba Lu Belah Hati Gua (Hindia)',
    category: 'Indie Bands',
    description: 'Format paling viral untuk pamer band favorit di IG Story & TikTok.',
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
    description: 'Versi Sheila Gank setia seumur hidup.',
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
    id: 'belah-hati-feast',
    name: 'Coba Lu Belah Dada Gua (.FEAST)',
    category: 'Indie Bands',
    description: 'Format rock indie underground energik.',
    lines: [
      'coba lu belah',
      'dada gua,',
      'terus lu liat',
      'isinya cuma'
    ],
    logoId: 'feast',
    textCase: 'uppercase',
    fontFamily: 'impact',
    aspectRatio: 'auto',
    bgMode: 'white',
    watermark: '@feast_indo',
    fontWeight: 'bold',
    letterSpacing: 1
  },
  {
    id: 'belah-hati-reality',
    name: 'Coba Lu Belah Hati Gua (Reality Club)',
    category: 'Indie Bands',
    description: 'Vibe romantis indie pop kekinian.',
    lines: [
      'coba lu belah',
      'hati gua,',
      'terus lu liat',
      'pasti isinya'
    ],
    logoId: 'reality-club',
    textCase: 'lowercase',
    fontFamily: 'system',
    aspectRatio: 'auto',
    bgMode: 'cream',
    watermark: '@realityclub',
    fontWeight: 'normal',
    letterSpacing: 0
  },
  {
    id: 'belah-hati-for-revenge',
    name: 'Perayaan Patah Hati (for Revenge)',
    category: 'Indie Bands',
    description: 'Untuk yang sedang larut dalam lagu galau maksimal.',
    lines: [
      'coba lu belah',
      'dada gua,',
      'isinya cuma',
      'perayaan patah',
      'hati'
    ],
    logoId: 'for-revenge',
    textCase: 'lowercase',
    fontFamily: 'serif',
    aspectRatio: 'auto',
    bgMode: 'dark',
    watermark: '@forrevenge',
    fontWeight: 'normal',
    letterSpacing: 0
  },
  {
    id: 'eh-kocak-bucin',
    name: 'Eh Kocak! Coba Lu Belah Dada Gue (Bucin)',
    category: 'Bucin & Galau',
    description: 'Format meme bucin cewe gue / ayang tersayang.',
    lines: [
      'eh kocak!',
      'coba lu belah',
      'dada gue',
      'isinya cewe',
      'gue!'
    ],
    logoId: 'love-heart',
    textCase: 'lowercase',
    fontFamily: 'system',
    aspectRatio: 'auto',
    bgMode: 'white',
    watermark: '',
    fontWeight: 'normal',
    letterSpacing: 0
  },
  {
    id: 'mati-rasa-galau',
    name: 'Gak Ada Isinya (Mati Rasa)',
    category: 'Bucin & Galau',
    description: 'Meme patah hati santai tapi mengena.',
    lines: [
      'coba lu belah',
      'hati gua,',
      'ternyata kosong',
      'soalnya udah',
      'mati rasa'
    ],
    logoId: 'broken-heart',
    textCase: 'lowercase',
    fontFamily: 'system',
    aspectRatio: 'auto',
    bgMode: 'dark',
    watermark: '',
    fontWeight: 'normal',
    letterSpacing: 0
  },
  {
    id: 'belah-dada-bolong-rrq',
    name: 'Belah Dada Sampe Bolong (RRQ Hoshi)',
    category: 'Esports & Pop',
    description: 'Versi fanatik fans game & esport Indonesia.',
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
    logoId: 'rrq',
    textCase: 'uppercase',
    fontFamily: 'impact',
    aspectRatio: 'auto',
    bgMode: 'white',
    watermark: '@kingdom_rrq',
    fontWeight: 'bold',
    letterSpacing: 0
  },
  {
    id: 'belah-dada-onic',
    name: 'Raja Langit (ONIC Esports)',
    category: 'Esports & Pop',
    description: 'Dukungan penuh untuk sang Landak Kuning.',
    lines: [
      'COBA LU BELAH',
      'DADA GUA',
      'ISINYA KUNING',
      'SEMUA BOSSS'
    ],
    logoId: 'onic',
    textCase: 'uppercase',
    fontFamily: 'impact',
    aspectRatio: 'auto',
    bgMode: 'white',
    watermark: '@sonic_official',
    fontWeight: 'bold',
    letterSpacing: 0
  },
  {
    id: 'belah-otak-skripsi',
    name: 'Overthinking & Skripsi (Mahasiswa)',
    category: 'Kocak & Relatable',
    description: 'Format meme relatable anak kuliahan & pejuang tugas.',
    lines: [
      'coba lu belah',
      'kepala gua,',
      'isinya cuma',
      'revisian bab 4,',
      'kopi sachet &',
      'pengen wisuda'
    ],
    logoId: 'coffee',
    textCase: 'lowercase',
    fontFamily: 'comic',
    aspectRatio: 'auto',
    bgMode: 'pastel-yellow',
    watermark: '@mahasiswa_abadi',
    fontWeight: 'normal',
    letterSpacing: 0
  },
  {
    id: 'belah-dompet-bon',
    name: 'Dompet Isi Angin & Struk',
    category: 'Kocak & Relatable',
    description: 'Kondisi dompet akhir bulan yang bikin nangis.',
    lines: [
      'coba lu belah',
      'dompet gua,',
      'isinya struk',
      'indomaret sama',
      'angin doang'
    ],
    logoId: 'skull',
    textCase: 'lowercase',
    fontFamily: 'system',
    aspectRatio: 'auto',
    bgMode: 'white',
    watermark: '@tanggal_tua',
    fontWeight: 'normal',
    letterSpacing: 0
  },
  {
    id: 'kocak-kucing-meong',
    name: 'Isinya Video Kucing Meong',
    category: 'Kocak & Relatable',
    description: 'Ketika otak isinya hanya video meme kucing seharian.',
    lines: [
      'coba lu belah',
      'otak gua,',
      'isinya cuma',
      'video kucing',
      'berantem jam 3 pagi'
    ],
    logoId: 'cat',
    textCase: 'lowercase',
    fontFamily: 'system',
    aspectRatio: 'auto',
    bgMode: 'white',
    watermark: '@catlovers',
    fontWeight: 'normal',
    letterSpacing: 0
  },
  {
    id: 'pasti-isinya-minimal',
    name: 'Pasti Isinya (Minimalist 2 Baris)',
    category: 'Minimalist',
    description: 'Versi ringkas to-the-point 1-2 baris.',
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

export const RANDOM_MEME_PRESETS: { lines: string[]; logoId?: string; textCase: 'lowercase' | 'uppercase' | 'none'; bgMode?: 'white' | 'dark' | 'cream' | 'pastel-yellow' }[] = [
  {
    lines: ['coba lu belah', 'hati gua,', 'terus lu liat', 'pasti isinya'],
    logoId: 'hindia',
    textCase: 'lowercase',
    bgMode: 'white'
  },
  {
    lines: ['eh kocak!', 'coba lu belah', 'dada gue', 'isinya cewe', 'gue!'],
    logoId: 'love-heart',
    textCase: 'lowercase',
    bgMode: 'white'
  },
  {
    lines: ['coba lu belah', 'kepala gua,', 'isinya cuma', 'revisian bab 4,', 'kopi & pengen tidur'],
    logoId: 'coffee',
    textCase: 'lowercase',
    bgMode: 'pastel-yellow'
  },
  {
    lines: ['coba lu belah', 'hati gua,', 'isinya cuma', 'playlist galau', 'tiap jam 2 malam'],
    logoId: 'for-revenge',
    textCase: 'lowercase',
    bgMode: 'dark'
  },
  {
    lines: ['coba lu belah', 'hati gua,', 'gak ada isinya', 'soalnya udah', 'mati rasa 🙏'],
    logoId: 'broken-heart',
    textCase: 'lowercase',
    bgMode: 'dark'
  },
  {
    lines: ['coba lu belah', 'dompet gua,', 'isinya cuma', 'struk belanja', 'sama uang lecek'],
    logoId: 'skull',
    textCase: 'lowercase',
    bgMode: 'white'
  },
  {
    lines: ['EH KOCAK!!', 'COBA LU BELAH', 'DADA GUA', 'SAMPE BOLONG', 'ISINYA RRQ HOSHI!'],
    logoId: 'rrq',
    textCase: 'uppercase',
    bgMode: 'white'
  },
  {
    lines: ['coba lu belah', 'layar hp gua,', 'isinya cuma', 'chat kamu', 'yang ga dibalas'],
    logoId: 'broken-heart',
    textCase: 'lowercase',
    bgMode: 'cream'
  },
  {
    lines: ['coba lu belah', 'dada gua,', 'isinya cuma', 'video meong', 'lucu seharian'],
    logoId: 'cat',
    textCase: 'lowercase',
    bgMode: 'white'
  },
  {
    lines: ['coba lu belah', 'hati gua,', 'isinya seratus', 'persen cinta', 'sheila gank'],
    logoId: 'sheila-on-7',
    textCase: 'lowercase',
    bgMode: 'white'
  },
  {
    lines: ['coba lu belah', 'pikiran gua,', 'isinya cuma', 'lagu reality club', 'terngiang-ngiang'],
    logoId: 'reality-club',
    textCase: 'lowercase',
    bgMode: 'cream'
  }
];

export const FONT_OPTIONS = [
  { id: 'system', name: 'Original Meme (Arial / Sans)', style: 'font-sans' },
  { id: 'inter', name: 'Inter Clean (Modern)', style: 'font-inter' },
  { id: 'impact', name: 'Impact (Heavy Meme)', style: 'font-impact' },
  { id: 'bebas', name: 'Bebas Neue (Condensed)', style: 'font-bebas' },
  { id: 'comic', name: 'Comic Casual (Santai)', style: 'font-comic' },
  { id: 'serif', name: 'Editorial Serif (Vintage)', style: 'font-serif' },
  { id: 'mono', name: 'Monospace (Terminal)', style: 'font-mono' }
];
