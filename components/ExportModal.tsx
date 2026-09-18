'use client';

import React, { useState } from 'react';
import { X, Download, Copy, Check, Sparkles, FileImage, Layers } from 'lucide-react';
import { exportElementAsImage, copyElementToClipboard } from '@/lib/exportUtils';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  canvasRef: React.RefObject<HTMLDivElement | null>;
  bgMode: 'white' | 'dark' | 'transparent' | 'card';
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  canvasRef,
  bgMode,
}) => {
  const [resolution, setResolution] = useState<number>(3); // 3x for crisp text
  const [format, setFormat] = useState<'png' | 'jpeg'>('png');
  const [isExporting, setIsExporting] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDownload = async () => {
    if (!canvasRef.current) return;
    setIsExporting(true);
    try {
      await exportElementAsImage(canvasRef.current, {
        pixelRatio: resolution,
        format,
        transparent: bgMode === 'transparent',
        filename: `katagenerator-${Date.now()}.${format}`,
      });
      showToast('Gambar berhasil di-download! Siap diposting.');
    } catch (err) {
      console.error('Download failed:', err);
      showToast('Gagal men-download gambar. Coba lagi.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopyClipboard = async () => {
    if (!canvasRef.current) return;
    setIsCopying(true);
    try {
      const success = await copyElementToClipboard(canvasRef.current, resolution);
      if (success) {
        setCopiedSuccess(true);
        showToast('Gambar tersalin ke clipboard! Langsung paste (Ctrl+V) di WA / IG / Discord.');
        setTimeout(() => setCopiedSuccess(false), 2500);
      }
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      showToast('Gagal menyalin ke clipboard. Gunakan tombol Download.');
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Export & Download Hasil</h3>
              <p className="text-[11px] text-slate-400">Pilih format dan resolusi stiker kamu</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Format Selection */}
          <div>
            <label className="text-xs font-semibold text-slate-300 mb-2 block flex items-center gap-1.5">
              <FileImage className="w-3.5 h-3.5 text-rose-400" /> Format File
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setFormat('png')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  format === 'png'
                    ? 'bg-rose-500/15 border-rose-500 text-white ring-1 ring-rose-500/40'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="font-bold text-xs mb-0.5">PNG (Direkomendasikan)</div>
                <div className="text-[10px] text-slate-400">
                  {bgMode === 'transparent'
                    ? 'Transparan tanpa background'
                    : 'Kualitas terbaik & teks tajam'}
                </div>
              </button>

              <button
                onClick={() => setFormat('jpeg')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  format === 'jpeg'
                    ? 'bg-rose-500/15 border-rose-500 text-white ring-1 ring-rose-500/40'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="font-bold text-xs mb-0.5">JPEG / JPG</div>
                <div className="text-[10px] text-slate-400">Ukuran file lebih ringan</div>
              </button>
            </div>
          </div>

          {/* Resolution Multiplier */}
          <div>
            <label className="text-xs font-semibold text-slate-300 mb-2 block flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-rose-400" /> Resolusi & Ketajaman Teks
            </label>
            <div className="grid grid-cols-3 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setResolution(1)}
                className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  resolution === 1
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                1x (Standar)
              </button>
              <button
                onClick={() => setResolution(2)}
                className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  resolution === 2
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                2x (Retina HD)
              </button>
              <button
                onClick={() => setResolution(4)}
                className={`py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  resolution === 4
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                4x (Ultra HD)
              </button>
            </div>
            <p className="text-[10px] text-slate-400 mt-1.5">
              Resolusi 2x dan 4x membuat teks tidak buram saat di-zoom di Instagram Story atau dicetak.
            </p>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-medium flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
              <Check className="w-4 h-4 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={handleCopyClipboard}
              disabled={isCopying}
              className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                copiedSuccess
                  ? 'bg-emerald-500 text-white border-emerald-400'
                  : 'bg-slate-800 hover:bg-slate-750 text-slate-200 border-slate-700'
              }`}
            >
              {copiedSuccess ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-rose-400" />
                  <span>{isCopying ? 'Menyalin...' : 'Salin ke Clipboard'}</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              disabled={isExporting}
              className="py-2.5 px-3 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-rose-500/25 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>{isExporting ? 'Memproses...' : 'Download Gambar'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
