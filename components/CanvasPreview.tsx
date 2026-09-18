'use client';

import React, { forwardRef, useState } from 'react';
import { PRESET_LOGOS } from '@/lib/presets';
import { Download, Copy, ZoomIn, ZoomOut, Check, Sparkles } from 'lucide-react';

interface CanvasPreviewProps {
  lines: string[];
  selectedLogoId?: string;
  customLogoUrl?: string;
  logoScale: number;
  invertLogo: boolean;
  textCase: 'none' | 'uppercase' | 'lowercase';
  fontFamily: string;
  fontSize: number;
  lineGap: number;
  padding: number;
  bgMode: 'white' | 'dark' | 'transparent' | 'card';
  aspectRatio: 'auto' | '1:1' | '9:16' | '4:5';
  watermark: string;
  onOpenExport: () => void;
  onQuickCopy: () => void;
  isCopying: boolean;
  copiedSuccess: boolean;
}

export const CanvasPreview = forwardRef<HTMLDivElement, CanvasPreviewProps>(
  (
    {
      lines,
      selectedLogoId,
      customLogoUrl,
      logoScale,
      invertLogo,
      textCase,
      fontFamily,
      fontSize,
      lineGap,
      padding,
      bgMode,
      aspectRatio,
      watermark,
      onOpenExport,
      onQuickCopy,
      isCopying,
      copiedSuccess,
    },
    ref
  ) => {
    const [zoom, setZoom] = useState(1);

    const presetLogo = selectedLogoId
      ? PRESET_LOGOS.find((l) => l.id === selectedLogoId)
      : null;

    // Formatting word according to casing
    const formatWord = (word: string) => {
      if (textCase === 'uppercase') return word.toUpperCase();
      if (textCase === 'lowercase') return word.toLowerCase();
      return word;
    };

    // Font family class mapping
    const getFontClass = () => {
      switch (fontFamily) {
        case 'inter':
          return 'font-inter';
        case 'impact':
          return 'font-impact';
        case 'bebas':
          return 'font-bebas tracking-wide';
        case 'comic':
          return 'font-comic';
        case 'serif':
          return 'font-serif';
        case 'mono':
          return 'font-mono';
        default:
          return 'font-system';
      }
    };

    // Background and text color styles
    const getThemeStyles = () => {
      switch (bgMode) {
        case 'dark':
          return {
            containerBg: 'bg-black text-white',
            border: 'border border-neutral-900',
            textColor: '#ffffff',
            invertDefault: false,
          };
        case 'transparent':
          return {
            containerBg: 'bg-transparent text-black',
            border: 'border border-dashed border-slate-700/50',
            textColor: '#000000',
            invertDefault: false,
          };
        case 'card':
          return {
            containerBg: 'bg-white text-black shadow-2xl rounded-2xl',
            border: 'border border-slate-200/80',
            textColor: '#000000',
            invertDefault: false,
          };
        case 'white':
        default:
          return {
            containerBg: 'bg-white text-black',
            border: 'border border-slate-200',
            textColor: '#000000',
            invertDefault: false,
          };
      }
    };

    const theme = getThemeStyles();

    // Aspect ratio container constraints
    const getAspectRatioStyle = (): React.CSSProperties => {
      switch (aspectRatio) {
        case '1:1':
          return { aspectRatio: '1 / 1', minWidth: '380px', minHeight: '380px' };
        case '4:5':
          return { aspectRatio: '4 / 5', minWidth: '360px', minHeight: '450px' };
        case '9:16':
          return { aspectRatio: '9 / 16', minWidth: '320px', minHeight: '568px' };
        case 'auto':
        default:
          return { width: '380px', minHeight: 'auto' };
      }
    };

    return (
      <div className="flex flex-col items-center w-full">
        {/* Top Floating Control Bar */}
        <div className="w-full flex items-center justify-between gap-2 mb-3 px-1 no-export">
          <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 p-1 rounded-xl shadow-sm text-xs">
            <button
              onClick={() => setZoom((z) => Math.max(0.6, z - 0.1))}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Perkecil Kanvas"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono font-semibold text-slate-300 w-10 text-center select-none">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom((z) => Math.min(1.5, z + 0.1))}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Perbesar Kanvas"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoom(1)}
              className="px-2 py-1 text-[10px] text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer ml-1"
            >
              100%
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onQuickCopy}
              disabled={isCopying}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer shadow-sm ${
                copiedSuccess
                  ? 'bg-emerald-500 text-white border-emerald-400 ring-2 ring-emerald-500/30'
                  : 'bg-slate-900 hover:bg-slate-850 text-slate-200 border-slate-750 hover:text-white'
              }`}
            >
              {copiedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-rose-400" />
                  <span>{isCopying ? 'Menyalin...' : 'Salin Gambar'}</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenExport}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-xs font-bold rounded-xl shadow-md shadow-rose-500/20 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Canvas Outer Stage with Checkered pattern for transparent support */}
        <div className="w-full min-h-[460px] sm:min-h-[520px] rounded-2xl bg-slate-925 border border-slate-800/90 flex items-center justify-center p-4 sm:p-8 overflow-auto relative">
          <div
            className="transition-transform duration-100 ease-out origin-center"
            style={{ transform: `scale(${zoom})` }}
          >
            {/* The Actual Export Target Node */}
            <div
              ref={ref}
              id="kata-export-canvas"
              className={`relative flex flex-col justify-center select-none ${theme.containerBg} ${theme.border} ${getFontClass()}`}
              style={{
                ...getAspectRatioStyle(),
                padding: `${padding}px`,
                color: theme.textColor,
              }}
            >
              {/* Optional Watermark */}
              {watermark && (
                <div
                  className="absolute top-3 right-3 text-[11px] font-bold opacity-85 tracking-tight select-none pointer-events-none"
                  style={{
                    color: bgMode === 'dark' ? '#94a3b8' : '#000000',
                  }}
                >
                  {watermark}
                </div>
              )}

              {/* Justified Text Lines Container */}
              <div
                className="w-full flex flex-col justify-center"
                style={{ rowGap: `${lineGap}px` }}
              >
                {lines.map((line, idx) => {
                  const words = line
                    .trim()
                    .split(/\s+/)
                    .filter((w) => w.length > 0);

                  if (words.length === 0) {
                    return (
                      <div
                        key={idx}
                        style={{ height: `${fontSize}px` }}
                        className="w-full"
                      />
                    );
                  }

                  if (words.length === 1) {
                    return (
                      <div
                        key={idx}
                        className="w-full flex justify-start items-baseline font-bold"
                        style={{
                          fontSize: `${fontSize}px`,
                          lineHeight: 1.15,
                        }}
                      >
                        <span>{formatWord(words[0])}</span>
                      </div>
                    );
                  }

                  // 2 or more words: flex justify-between delivers the authentic justified meme aesthetic!
                  return (
                    <div
                      key={idx}
                      className="w-full flex justify-between items-baseline font-bold"
                      style={{
                        fontSize: `${fontSize}px`,
                        lineHeight: 1.15,
                      }}
                    >
                      {words.map((word, wIdx) => (
                        <span key={wIdx} className="inline-block whitespace-nowrap">
                          {formatWord(word)}
                        </span>
                      ))}
                    </div>
                  );
                })}
              </div>

              {/* Logo / Punchline Image */}
              {(presetLogo || customLogoUrl) && (
                <div
                  className="w-full flex items-center justify-center mt-3 pt-1"
                  style={{
                    transform: `scale(${logoScale})`,
                    transformOrigin: 'center center',
                    filter: invertLogo ? 'invert(1)' : 'none',
                  }}
                >
                  {customLogoUrl ? (
                    <img
                      src={customLogoUrl}
                      alt="Custom Punchline Logo"
                      className="max-h-24 max-w-[90%] object-contain"
                      crossOrigin="anonymous"
                    />
                  ) : presetLogo ? (
                    <div
                      className="w-full max-h-24 flex items-center justify-center [&>svg]:max-h-20 [&>svg]:max-w-[90%]"
                      dangerouslySetInnerHTML={{ __html: presetLogo.svg }}
                    />
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tip caption below preview */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>
            Tips: Gunakan mode <strong>Bening</strong> untuk stiker transparan di Instagram Story & WhatsApp!
          </span>
        </div>
      </div>
    );
  }
);

CanvasPreview.displayName = 'CanvasPreview';
