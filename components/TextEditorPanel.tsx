'use client';

import React, { useState } from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown, Type, AlignJustify, ClipboardList } from 'lucide-react';

interface TextEditorPanelProps {
  lines: string[];
  onChangeLines: (newLines: string[]) => void;
  textCase: 'none' | 'uppercase' | 'lowercase';
  onChangeTextCase: (c: 'none' | 'uppercase' | 'lowercase') => void;
  fontSize: number;
  onChangeFontSize: (s: number) => void;
  lineGap: number;
  onChangeLineGap: (g: number) => void;
}

export const TextEditorPanel: React.FC<TextEditorPanelProps> = ({
  lines,
  onChangeLines,
  textCase,
  onChangeTextCase,
  fontSize,
  onChangeFontSize,
  lineGap,
  onChangeLineGap,
}) => {
  const [bulkText, setBulkText] = useState('');
  const [showBulkModal, setShowBulkModal] = useState(false);

  const handleLineChange = (index: number, val: string) => {
    const updated = [...lines];
    updated[index] = val;
    onChangeLines(updated);
  };

  const handleAddLine = () => {
    onChangeLines([...lines, '']);
  };

  const handleDeleteLine = (index: number) => {
    if (lines.length <= 1) return;
    const updated = lines.filter((_, i) => i !== index);
    onChangeLines(updated);
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...lines];
    const temp = updated[index - 1];
    updated[index - 1] = updated[index];
    updated[index] = temp;
    onChangeLines(updated);
  };

  const handleMoveDown = (index: number) => {
    if (index === lines.length - 1) return;
    const updated = [...lines];
    const temp = updated[index + 1];
    updated[index + 1] = updated[index];
    updated[index] = temp;
    onChangeLines(updated);
  };

  const applyBulkText = () => {
    if (!bulkText.trim()) return;
    const splitLines = bulkText
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
    if (splitLines.length > 0) {
      onChangeLines(splitLines);
    }
    setBulkText('');
    setShowBulkModal(false);
  };

  return (
    <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlignJustify className="w-4 h-4 text-rose-400" />
          <h2 className="text-sm font-semibold text-white">Edit Baris Kata (Justified)</h2>
        </div>
        <button
          onClick={() => setShowBulkModal(!showBulkModal)}
          className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-medium transition-colors cursor-pointer"
        >
          <ClipboardList className="w-3.5 h-3.5" />
          <span>{showBulkModal ? 'Tutup' : 'Paste Teks Panjang'}</span>
        </button>
      </div>

      {/* Bulk Text Area */}
      {showBulkModal && (
        <div className="bg-slate-950 p-3.5 rounded-xl border border-rose-500/30 space-y-2.5 animate-in fade-in duration-200">
          <label className="text-xs text-slate-300 font-medium block">
            Paste teks kamu di sini (tiap baris baru otomatis jadi 1 baris justify):
          </label>
          <textarea
            value={bulkText}
            onChange={(e) => setBulkText(e.target.value)}
            rows={4}
            placeholder={`coba lu belah\nhati gua,\nterus lu liat\npasti isinya`}
            className="w-full bg-slate-900 text-slate-100 text-xs rounded-lg p-2.5 border border-slate-800 focus:outline-none focus:border-rose-500 font-mono resize-none"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowBulkModal(false)}
              className="px-3 py-1 text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              Batal
            </button>
            <button
              onClick={applyBulkText}
              className="px-3 py-1 bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer"
            >
              Terapkan Teks
            </button>
          </div>
        </div>
      )}

      {/* Line Inputs */}
      <div className="space-y-2">
        {lines.map((line, idx) => {
          const wordCount = line.trim() ? line.trim().split(/\s+/).length : 0;
          return (
            <div key={idx} className="flex items-center gap-1.5 group">
              <span className="text-[11px] font-mono text-slate-500 w-5 text-center select-none">
                {idx + 1}
              </span>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={line}
                  onChange={(e) => handleLineChange(idx, e.target.value)}
                  placeholder={`Baris ke-${idx + 1}...`}
                  className="w-full bg-slate-950/90 text-slate-100 text-xs sm:text-sm px-3 py-2 pr-12 rounded-xl border border-slate-800 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/40 transition-all font-medium"
                />
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 pointer-events-none">
                  {wordCount} kata
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleMoveUp(idx)}
                  disabled={idx === 0}
                  className="p-1.5 text-slate-400 hover:text-white disabled:opacity-20 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  title="Pindah ke atas"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleMoveDown(idx)}
                  disabled={idx === lines.length - 1}
                  className="p-1.5 text-slate-400 hover:text-white disabled:opacity-20 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  title="Pindah ke bawah"
                >
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDeleteLine(idx)}
                  disabled={lines.length <= 1}
                  className="p-1.5 text-slate-400 hover:text-rose-400 disabled:opacity-20 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  title="Hapus baris"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Line Button */}
      <button
        onClick={handleAddLine}
        className="w-full py-2 border border-dashed border-slate-700 hover:border-rose-500/70 hover:bg-rose-500/5 text-slate-300 hover:text-rose-400 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
      >
        <Plus className="w-3.5 h-3.5" />
        <span>Tambah Baris Baru</span>
      </button>

      {/* Quick Typography Adjustments */}
      <div className="pt-2 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Case Transform */}
        <div>
          <label className="text-[11px] font-medium text-slate-400 mb-1.5 block">Format Huruf</label>
          <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onChangeTextCase('lowercase')}
              className={`py-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer ${
                textCase === 'lowercase'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="semua huruf kecil (gaya meme santai)"
            >
              abc
            </button>
            <button
              onClick={() => onChangeTextCase('uppercase')}
              className={`py-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer ${
                textCase === 'uppercase'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="SEMUA HURUF BESAR"
            >
              ABC
            </button>
            <button
              onClick={() => onChangeTextCase('none')}
              className={`py-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer ${
                textCase === 'none'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Sesuai ketikan asli"
            >
              Bebas
            </button>
          </div>
        </div>

        {/* Font Size Slider */}
        <div>
          <div className="flex justify-between items-center text-[11px] font-medium text-slate-400 mb-1.5">
            <span>Ukuran Font</span>
            <span className="text-white font-mono">{fontSize}px</span>
          </div>
          <input
            type="range"
            min="18"
            max="64"
            step="2"
            value={fontSize}
            onChange={(e) => onChangeFontSize(Number(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
          />
        </div>

        {/* Line Gap Slider */}
        <div>
          <div className="flex justify-between items-center text-[11px] font-medium text-slate-400 mb-1.5">
            <span>Jarak Baris</span>
            <span className="text-white font-mono">{lineGap}px</span>
          </div>
          <input
            type="range"
            min="2"
            max="28"
            step="2"
            value={lineGap}
            onChange={(e) => onChangeLineGap(Number(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
          />
        </div>
      </div>
    </div>
  );
};
