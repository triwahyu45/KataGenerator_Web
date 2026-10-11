'use client';

import React from 'react';
import {
  Download,
  Copy,
  Check,
  Dices,
  SlidersHorizontal,
  Sparkles,
  Layers,
  FileImage
} from 'lucide-react';

interface QuickEditorProps {
  rawText: string;
  onChangeRawText: (text: string) => void;
  textCase: 'none' | 'uppercase' | 'lowercase';
  onChangeTextCase: (c: 'none' | 'uppercase' | 'lowercase') => void;
  bgMode: 'white' | 'dark' | 'transparent' | 'card' | 'cream' | 'pastel-yellow' | 'pastel-rose';
  onChangeBgMode: (mode: 'white' | 'dark' | 'transparent' | 'card' | 'cream' | 'pastel-yellow' | 'pastel-rose') => void;
  onQuickDownload: () => void;
  onQuickCopy: () => void;
  onRandomMeme: () => void;
  onOpenAdvancedModal: () => void;
  onScrollToCustomization: () => void;
  isDownloading: boolean;
  isCopying: boolean;
  copiedSuccess: boolean;
  activeLogoName?: string;
}

export const QuickEditor: React.FC<QuickEditorProps> = ({
  rawText,
  onChangeRawText,
  textCase,
  onChangeTextCase,
  bgMode,
  onChangeBgMode,
  onQuickDownload,
  onQuickCopy,
  onRandomMeme,
  onOpenAdvancedModal,
  onScrollToCustomization,
  isDownloading,
  isCopying,
  copiedSuccess,
  activeLogoName,
}) => {
  const lineCount = rawText.split('\n').filter((l) => l.trim().length > 0).length;

  return (
    <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              1. Ketik Kata-Kata Stiker
            </h2>
            <span className="text-[10px] font-mono bg-rose-500/15 text-rose-400 border border-rose-500/30 px-2 py-0.5 rounded-full font-semibold">
              {lineCount} baris
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Tiap baris baru (enter) otomatis dibuat rata kiri-kanan sempurna.
          </p>
        </div>

        {/* Random meme button */}
        <button
          onClick={onRandomMeme}
          className="text-xs bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 px-3 py-1.5 rounded-xl flex items-center gap-1.5 font-semibold transition-all cursor-pointer shadow-sm shrink-0"
          title="Acak ide meme kata viral"
        >
          <Dices className="w-3.5 h-3.5 text-amber-400" />
          <span>Acak Kata</span>
        </button>
      </div>

      {/* Main Textarea */}
      <div className="relative">
        <textarea
          value={rawText}
          onChange={(e) => onChangeRawText(e.target.value)}
          rows={5}
          placeholder={`coba lu belah\nhati gua,\nterus lu liat\npasti isinya`}
          className="w-full bg-slate-950 text-slate-100 text-sm sm:text-base rounded-xl p-3.5 sm:p-4 border border-slate-750 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/40 outline-none font-medium leading-relaxed resize-y transition-all"
        />
      </div>

      {/* Quick Option Pills (Huruf & Background) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {/* Quick Format Huruf */}
        <div>
          <label className="text-[11px] font-semibold text-slate-400 mb-1.5 block">
            Format Huruf:
          </label>
          <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onChangeTextCase('lowercase')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                textCase === 'lowercase'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              abc
            </button>
            <button
              onClick={() => onChangeTextCase('uppercase')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                textCase === 'uppercase'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ABC
            </button>
            <button
              onClick={() => onChangeTextCase('none')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                textCase === 'none'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Bebas
            </button>
          </div>
        </div>

        {/* Quick Tema Background */}
        <div>
          <label className="text-[11px] font-semibold text-slate-400 mb-1.5 block">
            Warna Stiker:
          </label>
          <div className="grid grid-cols-4 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onChangeBgMode('white')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                bgMode === 'white'
                  ? 'bg-white text-slate-950 font-bold shadow-sm'
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
              onClick={() => onChangeBgMode('transparent')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                bgMode === 'transparent'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Bening tanpa background (stiker IG/WA)"
            >
              Bening
            </button>
            <button
              onClick={() => onChangeBgMode('cream')}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                bgMode === 'cream'
                  ? 'bg-amber-100 text-amber-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Vintage
            </button>
          </div>
        </div>
      </div>

      {/* Active Logo Indicator if any */}
      {activeLogoName && (
        <div className="flex items-center justify-between text-xs bg-slate-950/70 px-3 py-2 rounded-xl border border-rose-500/20 text-slate-300">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Logo aktif: <strong className="text-white">{activeLogoName}</strong></span>
          </span>
          <button
            onClick={onScrollToCustomization}
            className="text-rose-400 hover:text-rose-300 text-[11px] underline underline-offset-2 cursor-pointer"
          >
            Ganti / Hapus
          </button>
        </div>
      )}

      {/* Primary Big Action Buttons: Simpan & Salin */}
      <div className="pt-2 border-t border-slate-800/80 space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* 1-Click Fast Download */}
          <button
            onClick={onQuickDownload}
            disabled={isDownloading}
            className="py-3 px-4 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>{isDownloading ? 'Menyimpan...' : 'Simpan Gambar (Download)'}</span>
          </button>

          {/* 1-Click Fast Copy */}
          <button
            onClick={onQuickCopy}
            disabled={isCopying}
            className={`py-3 px-4 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              copiedSuccess
                ? 'bg-emerald-500 text-white border-emerald-400 ring-2 ring-emerald-500/30'
                : 'bg-slate-800 hover:bg-slate-750 text-slate-100 border-slate-700'
            }`}
          >
            {copiedSuccess ? (
              <>
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>Tersalin ke Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-rose-400" />
                <span>{isCopying ? 'Menyalin...' : 'Salin Gambar (Ctrl+V)'}</span>
              </>
            )}
          </button>
        </div>

        {/* Secondary helper links: Advance export & Jump to Customization */}
        <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
          <button
            onClick={onScrollToCustomization}
            className="flex items-center gap-1.5 text-slate-300 hover:text-rose-400 transition-colors cursor-pointer group"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-rose-400 group-hover:rotate-45 transition-transform" />
            <span>Mau tambah <strong>Logo Band</strong>, ganti <strong>Font</strong>, atau <strong>Preset</strong>?</span>
          </button>

          <button
            onClick={onOpenAdvancedModal}
            className="text-[11px] text-slate-400 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
          >
            Opsi Ekspor (4x HD / JPG)
          </button>
        </div>
      </div>
    </div>
  );
};
