'use client';

import React, { useRef } from 'react';
import { PRESET_LOGOS, PresetLogo } from '@/lib/presets';
import { Image as ImageIcon, Upload, X, Sliders, Contrast } from 'lucide-react';

interface LogoUploaderProps {
  selectedLogoId?: string;
  customLogoUrl?: string;
  logoScale: number;
  invertLogo: boolean;
  onSelectPresetLogo: (id: string) => void;
  onUploadCustomLogo: (dataUrl: string) => void;
  onRemoveLogo: () => void;
  onChangeLogoScale: (scale: number) => void;
  onToggleInvertLogo: () => void;
}

export const LogoUploader: React.FC<LogoUploaderProps> = ({
  selectedLogoId,
  customLogoUrl,
  logoScale,
  invertLogo,
  onSelectPresetLogo,
  onUploadCustomLogo,
  onRemoveLogo,
  onChangeLogoScale,
  onToggleInvertLogo,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        onUploadCustomLogo(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const hasLogo = !!selectedLogoId || !!customLogoUrl;

  return (
    <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-rose-400" />
          <h2 className="text-sm font-semibold text-white">Logo / Gambar Punchline</h2>
        </div>
        {hasLogo && (
          <button
            onClick={onRemoveLogo}
            className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-medium transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
            <span>Hapus Logo</span>
          </button>
        )}
      </div>

      {/* Preset Logos Grid */}
      <div>
        <label className="text-xs text-slate-400 font-medium mb-2 block">
          Pilih Logo Preset Band / Pop:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESET_LOGOS.map((logo) => {
            const isSelected = selectedLogoId === logo.id && !customLogoUrl;
            return (
              <button
                key={logo.id}
                onClick={() => onSelectPresetLogo(logo.id)}
                className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all text-center h-18 cursor-pointer ${
                  isSelected
                    ? 'bg-rose-500/15 border-rose-500/80 shadow-sm ring-1 ring-rose-500/40 text-white'
                    : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div
                  className="w-full h-8 flex items-center justify-center [&>svg]:max-h-full [&>svg]:max-w-[85%] text-slate-200"
                  dangerouslySetInnerHTML={{ __html: logo.svg }}
                />
                <span className="text-[11px] font-semibold truncate w-full px-1">
                  {logo.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Upload Custom Image */}
      <div>
        <label className="text-xs text-slate-400 font-medium mb-2 block">
          Atau Upload Logo / Foto Sendiri (PNG / SVG Transparan):
        </label>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        {customLogoUrl ? (
          <div className="flex items-center gap-3 p-3 bg-slate-950 rounded-xl border border-rose-500/40">
            <div className="w-14 h-14 bg-slate-900 rounded-lg p-1 flex items-center justify-center overflow-hidden border border-slate-800">
              <img
                src={customLogoUrl}
                alt="Custom Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white">Gambar Kustom Aktif</div>
              <div className="text-[11px] text-slate-400">Siap diekspor ke stiker</div>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-750 text-slate-200 rounded-lg border border-slate-700 cursor-pointer"
            >
              Ganti
            </button>
          </div>
        ) : (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-3.5 px-4 border border-dashed border-slate-750 hover:border-rose-500/60 hover:bg-rose-500/5 rounded-xl text-xs text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Upload className="w-4 h-4 text-rose-400" />
            <span>Pilih File Gambar dari Komputer / HP</span>
          </button>
        )}
      </div>

      {/* Logo Controls (if logo active) */}
      {hasLogo && (
        <div className="pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Scale Slider */}
          <div>
            <div className="flex justify-between items-center text-[11px] font-medium text-slate-400 mb-1.5">
              <span className="flex items-center gap-1">
                <Sliders className="w-3 h-3 text-rose-400" /> Ukuran Logo
              </span>
              <span className="text-white font-mono">{Math.round(logoScale * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.05"
              value={logoScale}
              onChange={(e) => onChangeLogoScale(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
            />
          </div>

          {/* Invert Color Toggle */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0">
            <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
              <Contrast className="w-3.5 h-3.5 text-rose-400" />
              Invert Warna (Hitam ⇄ Putih)
            </span>
            <button
              onClick={onToggleInvertLogo}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors cursor-pointer ${
                invertLogo ? 'bg-rose-500' : 'bg-slate-800'
              }`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                  invertLogo ? 'translate-x-4.5' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
