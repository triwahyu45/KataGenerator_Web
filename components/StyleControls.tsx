'use client';

import React from 'react';
import { FONT_OPTIONS } from '@/lib/presets';
import { Palette, Maximize, AtSign, Layout, Layers, ShieldCheck } from 'lucide-react';

interface StyleControlsProps {
  fontFamily: string;
  onChangeFontFamily: (font: string) => void;
  fontWeight: string;
  onChangeFontWeight: (weight: string) => void;
  bgMode: 'white' | 'dark' | 'transparent' | 'card';
  onChangeBgMode: (mode: 'white' | 'dark' | 'transparent' | 'card') => void;
  aspectRatio: 'auto' | '1:1' | '9:16' | '4:5';
  onChangeAspectRatio: (ratio: 'auto' | '1:1' | '9:16' | '4:5') => void;
  padding: number;
  onChangePadding: (p: number) => void;
  watermark: string;
  onChangeWatermark: (w: string) => void;
}

export const StyleControls: React.FC<StyleControlsProps> = ({
  fontFamily,
  onChangeFontFamily,
  fontWeight,
  onChangeFontWeight,
  bgMode,
  onChangeBgMode,
  aspectRatio,
  onChangeAspectRatio,
  padding,
  onChangePadding,
  watermark,
  onChangeWatermark,
}) => {
  return (
    <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Palette className="w-4 h-4 text-rose-400" />
        <h2 className="text-sm font-semibold text-white">Gaya Tampilan & Kanvas</h2>
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
                <div className={`text-sm mb-1 ${font.style}`}>Contoh Teks</div>
                <div className="text-[10px] text-slate-400 truncate">{font.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Aspect Ratio & Background Modes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Aspect Ratio */}
        <div>
          <label className="text-xs text-slate-400 font-medium mb-1.5 flex items-center gap-1.5">
            <Maximize className="w-3.5 h-3.5 text-rose-400" /> Ukuran Rasio Kanvas
          </label>
          <div className="grid grid-cols-4 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onChangeAspectRatio('auto')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                aspectRatio === 'auto'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Sesuai ukuran teks (Pas untuk stiker)"
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
              title="1:1 Kotak (Instagram Feed / DP)"
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
              title="9:16 Story (IG Story / TikTok / WA Status)"
            >
              9:16
            </button>
          </div>
        </div>

        {/* Background Mode */}
        <div>
          <label className="text-xs text-slate-400 font-medium mb-1.5 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-rose-400" /> Warna Latar (Background)
          </label>
          <div className="grid grid-cols-4 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onChangeBgMode('white')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                bgMode === 'white'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Putih
            </button>
            <button
              onClick={() => onChangeBgMode('dark')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                bgMode === 'dark'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              OLED
            </button>
            <button
              onClick={() => onChangeBgMode('card')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                bgMode === 'card'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Kartu
            </button>
            <button
              onClick={() => onChangeBgMode('transparent')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                bgMode === 'transparent'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Transparan PNG (Tanpa Background)"
            >
              Bening
            </button>
          </div>
        </div>
      </div>

      {/* Padding & Watermark */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
        {/* Padding Slider */}
        <div>
          <div className="flex justify-between items-center text-[11px] font-medium text-slate-400 mb-1.5">
            <span>Padding / Ruang Tepi</span>
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
            className="w-full bg-slate-950 text-slate-100 text-xs px-3 py-1.5 rounded-xl border border-slate-800 focus:outline-none focus:border-rose-500 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};
