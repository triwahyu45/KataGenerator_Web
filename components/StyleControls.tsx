'use client';

import React from 'react';
import { FONT_OPTIONS } from '@/lib/presets';
import { Palette, Maximize, AtSign, Layers, Sparkles, Square, Circle } from 'lucide-react';

interface StyleControlsProps {
  fontFamily: string;
  onChangeFontFamily: (font: string) => void;
  bgMode: 'white' | 'dark' | 'transparent' | 'card' | 'cream' | 'pastel-yellow' | 'pastel-rose';
  onChangeBgMode: (mode: 'white' | 'dark' | 'transparent' | 'card' | 'cream' | 'pastel-yellow' | 'pastel-rose') => void;
  aspectRatio: 'auto' | '1:1' | '9:16' | '4:5';
  onChangeAspectRatio: (ratio: 'auto' | '1:1' | '9:16' | '4:5') => void;
  cornerRadius: 'none' | 'md' | 'xl' | 'full';
  onChangeCornerRadius: (r: 'none' | 'md' | 'xl' | 'full') => void;
  borderStyle: 'none' | 'thin' | 'sticker' | 'neon';
  onChangeBorderStyle: (b: 'none' | 'thin' | 'sticker' | 'neon') => void;
  padding: number;
  onChangePadding: (p: number) => void;
  watermark: string;
  onChangeWatermark: (w: string) => void;
}

export const StyleControls: React.FC<StyleControlsProps> = ({
  fontFamily,
  onChangeFontFamily,
  bgMode,
  onChangeBgMode,
  aspectRatio,
  onChangeAspectRatio,
  cornerRadius,
  onChangeCornerRadius,
  borderStyle,
  onChangeBorderStyle,
  padding,
  onChangePadding,
  watermark,
  onChangeWatermark,
}) => {
  return (
    <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center">
          <Palette className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Gaya Kanvas & Estetika</h2>
          <p className="text-[11px] text-slate-400">Pilih tema, rasio, bentuk sudut, dan efek stiker</p>
        </div>
      </div>

      {/* Font Family Selection */}
      <div>
        <label className="text-xs text-slate-400 font-medium mb-2 block">
          Pilihan Font Tipografi:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {FONT_OPTIONS.map((font) => {
            const isSelected = fontFamily === font.id;
            return (
              <button
                key={font.id}
                onClick={() => onChangeFontFamily(font.id)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-rose-500/15 border-rose-500/80 text-white ring-1 ring-rose-500/40 shadow-sm'
                    : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className={`text-sm mb-0.5 ${font.style}`}>Contoh Teks</div>
                <div className="text-[10px] text-slate-400 truncate">{font.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Background Theme Modes */}
      <div>
        <label className="text-xs text-slate-400 font-medium mb-1.5 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-rose-400" /> Warna Latar & Tema
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => onChangeBgMode('white')}
            className={`py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              bgMode === 'white'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white border border-slate-400"></span>
            <span>Putih</span>
          </button>
          <button
            onClick={() => onChangeBgMode('dark')}
            className={`py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              bgMode === 'dark'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-black border border-slate-700"></span>
            <span>OLED</span>
          </button>
          <button
            onClick={() => onChangeBgMode('card')}
            className={`py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              bgMode === 'card'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span>Kartu 3D</span>
          </button>
          <button
            onClick={() => onChangeBgMode('transparent')}
            className={`py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              bgMode === 'transparent'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Transparan PNG (Stiker Bening)"
          >
            <span className="w-2.5 h-2.5 rounded-full border border-dashed border-rose-400"></span>
            <span>Bening</span>
          </button>
          <button
            onClick={() => onChangeBgMode('cream')}
            className={`py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              bgMode === 'cream'
                ? 'bg-amber-100 text-amber-950 shadow-sm font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#fbf6ed] border border-amber-300"></span>
            <span>Vintage</span>
          </button>
          <button
            onClick={() => onChangeBgMode('pastel-yellow')}
            className={`py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              bgMode === 'pastel-yellow'
                ? 'bg-yellow-200 text-yellow-950 shadow-sm font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#fef9c3] border border-yellow-400"></span>
            <span>Memo</span>
          </button>
          <button
            onClick={() => onChangeBgMode('pastel-rose')}
            className={`py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 col-span-2 ${
              bgMode === 'pastel-rose'
                ? 'bg-rose-200 text-rose-950 shadow-sm font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffe4e6] border border-rose-300"></span>
            <span>Pastel Bucin</span>
          </button>
        </div>
      </div>

      {/* Aspect Ratio & Corner Radius */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Aspect Ratio */}
        <div>
          <label className="text-xs text-slate-400 font-medium mb-1.5 flex items-center gap-1.5">
            <Maximize className="w-3.5 h-3.5 text-rose-400" /> Rasio Kanvas
          </label>
          <div className="grid grid-cols-4 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onChangeAspectRatio('auto')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                aspectRatio === 'auto'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Stiker Auto-Fit (Pas Ukuran Teks)"
            >
              Stiker
            </button>
            <button
              onClick={() => onChangeAspectRatio('1:1')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                aspectRatio === '1:1'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="1:1 Kotak (Feed & Avatar)"
            >
              1:1
            </button>
            <button
              onClick={() => onChangeAspectRatio('4:5')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                aspectRatio === '4:5'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="4:5 Portrait Feed"
            >
              4:5
            </button>
            <button
              onClick={() => onChangeAspectRatio('9:16')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                aspectRatio === '9:16'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="9:16 Story (Instagram / TikTok / WA)"
            >
              9:16
            </button>
          </div>
        </div>

        {/* Corner Radius */}
        <div>
          <label className="text-xs text-slate-400 font-medium mb-1.5 flex items-center gap-1.5">
            <Square className="w-3.5 h-3.5 text-rose-400" /> Bentuk Sudut Stiker
          </label>
          <div className="grid grid-cols-4 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onChangeCornerRadius('none')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                cornerRadius === 'none'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Tajam
            </button>
            <button
              onClick={() => onChangeCornerRadius('md')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                cornerRadius === 'md'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Bulat
            </button>
            <button
              onClick={() => onChangeCornerRadius('xl')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                cornerRadius === 'xl'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Kurva
            </button>
            <button
              onClick={() => onChangeCornerRadius('full')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                cornerRadius === 'full'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Kapsul
            </button>
          </div>
        </div>
      </div>

      {/* Border & Outline Effects */}
      <div>
        <label className="text-xs text-slate-400 font-medium mb-1.5 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" /> Gaya Outline / Efek Stiker
        </label>
        <div className="grid grid-cols-4 gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => onChangeBorderStyle('none')}
            className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              borderStyle === 'none'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Polos
          </button>
          <button
            onClick={() => onChangeBorderStyle('thin')}
            className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              borderStyle === 'thin'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Garis Tipis
          </button>
          <button
            onClick={() => onChangeBorderStyle('sticker')}
            className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              borderStyle === 'sticker'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Gaya cutting sticker vinyl tebal"
          >
            Die-Cut Vinyl
          </button>
          <button
            onClick={() => onChangeBorderStyle('neon')}
            className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              borderStyle === 'neon'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Efek glow neon berpendar"
          >
            Glow Neon
          </button>
        </div>
      </div>

      {/* Padding & Watermark */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
        {/* Padding Slider */}
        <div>
          <div className="flex justify-between items-center text-[11px] font-medium text-slate-400 mb-1.5">
            <span>Ruang Tepi (Padding)</span>
            <span className="text-white font-mono">{padding}px</span>
          </div>
          <input
            type="range"
            min="12"
            max="64"
            step="2"
            value={padding}
            onChange={(e) => onChangePadding(Number(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
          />
        </div>

        {/* Watermark Input */}
        <div>
          <label className="text-xs text-slate-400 font-medium mb-1.5 flex items-center gap-1.5">
            <AtSign className="w-3.5 h-3.5 text-rose-400" /> Watermark Pojok Kanan Atas
          </label>
          <input
            type="text"
            value={watermark}
            onChange={(e) => onChangeWatermark(e.target.value)}
            placeholder="misal: @nama_ig_kamu (opsional)"
            className="w-full bg-slate-950 text-slate-100 text-xs px-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-rose-500 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};
