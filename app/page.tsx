'use client';

import React, { useState, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { PresetTemplates } from '@/components/PresetTemplates';
import { TextEditorPanel } from '@/components/TextEditorPanel';
import { LogoUploader } from '@/components/LogoUploader';
import { StyleControls } from '@/components/StyleControls';
import { CanvasPreview } from '@/components/CanvasPreview';
import { ExportModal } from '@/components/ExportModal';
import { PRESET_TEMPLATES, TemplatePreset, RANDOM_MEME_PRESETS } from '@/lib/presets';
import { copyElementToClipboard, shareElementAsImage } from '@/lib/exportUtils';
import { Sparkles, Heart, Edit3, Eye, Download, Copy, Share2 } from 'lucide-react';

export default function HomePage() {
  const initialPreset = PRESET_TEMPLATES[0];

  // Editor State
  const [currentPresetId, setCurrentPresetId] = useState<string>(initialPreset.id);
  const [lines, setLines] = useState<string[]>(initialPreset.lines);
  const [selectedLogoId, setSelectedLogoId] = useState<string | undefined>(initialPreset.logoId);
  const [customLogoUrl, setCustomLogoUrl] = useState<string | undefined>(undefined);
  const [logoScale, setLogoScale] = useState<number>(1.0);
  const [invertLogo, setInvertLogo] = useState<boolean>(false);
  const [textCase, setTextCase] = useState<'none' | 'uppercase' | 'lowercase'>('lowercase');
  const [fontFamily, setFontFamily] = useState<string>('system');
  const [fontSize, setFontSize] = useState<number>(34);
  const [lineGap, setLineGap] = useState<number>(10);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [singleWordAlign, setSingleWordAlign] = useState<'left' | 'center' | 'right' | 'justify'>('left');
  const [padding, setPadding] = useState<number>(32);
  const [bgMode, setBgMode] = useState<'white' | 'dark' | 'transparent' | 'card' | 'cream' | 'pastel-yellow' | 'pastel-rose'>('white');
  const [aspectRatio, setAspectRatio] = useState<'auto' | '1:1' | '9:16' | '4:5'>('auto');
  const [cornerRadius, setCornerRadius] = useState<'none' | 'md' | 'xl' | 'full'>('none');
  const [borderStyle, setBorderStyle] = useState<'none' | 'thin' | 'sticker' | 'neon'>('none');
  const [watermark, setWatermark] = useState<string>('@triwahyu45');

  // Mobile View Switcher: 'editor' | 'preview'
  const [mobileTab, setMobileTab] = useState<'editor' | 'preview'>('editor');

  // Export & UI State
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isCopying, setIsCopying] = useState<boolean>(false);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const canvasRef = useRef<HTMLDivElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSelectPreset = (preset: TemplatePreset) => {
    setCurrentPresetId(preset.id);
    setLines([...preset.lines]);
    setSelectedLogoId(preset.logoId);
    setCustomLogoUrl(undefined);
    setTextCase(preset.textCase);
    setFontFamily(preset.fontFamily || 'system');
    setBgMode(preset.bgMode || 'white');
    setAspectRatio(preset.aspectRatio || 'auto');
    setWatermark(preset.watermark || '');
    setLetterSpacing(preset.letterSpacing || 0);
    setLogoScale(1.0);
    setInvertLogo(false);
    showToast(`Template "${preset.name}" diterapkan!`);
  };

  const handleReset = () => {
    handleSelectPreset(PRESET_TEMPLATES[0]);
    setFontSize(34);
    setLineGap(10);
    setLetterSpacing(0);
    setSingleWordAlign('left');
    setPadding(32);
    setCornerRadius('none');
    setBorderStyle('none');
    showToast('Kanvas telah di-reset ke pengaturan awal.');
  };

  const handleRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * RANDOM_MEME_PRESETS.length);
    const item = RANDOM_MEME_PRESETS[randomIndex];
    setLines([...item.lines]);
    setSelectedLogoId(item.logoId);
    setCustomLogoUrl(undefined);
    setTextCase(item.textCase || 'lowercase');
    if (item.bgMode) setBgMode(item.bgMode);
    setCurrentPresetId('custom');
    showToast('🎲 Ide meme acak berhasil dimuat!');
  };

  const handleQuickCopy = async () => {
    if (!canvasRef.current) return;
    setIsCopying(true);
    try {
      const ok = await copyElementToClipboard(canvasRef.current, 3);
      if (ok) {
        setCopiedSuccess(true);
        showToast('Gambar tersalin ke clipboard! Langsung paste (Ctrl+V) di WA / IG.');
        setTimeout(() => setCopiedSuccess(false), 2500);
      }
    } catch (err) {
      console.error('Quick copy error:', err);
      showToast('Gagal menyalin. Silakan gunakan tombol Export / Download.');
    } finally {
      setIsCopying(false);
    }
  };

  const handleShare = async () => {
    if (!canvasRef.current) return;
    try {
      const ok = await shareElementAsImage(canvasRef.current, 'Stiker KataGenerator');
      if (ok) {
        showToast('Stiker siap dibagikan!');
      }
    } catch (err) {
      console.error('Share error:', err);
      showToast('Gagal membagikan langsung. Menggunakan salin gambar...');
      handleQuickCopy();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Navbar */}
      <Navbar onReset={handleReset} onShowToast={showToast} />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-6 z-50 bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Workspace Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 lg:p-8 pb-24 lg:pb-8">
        {/* Mobile Tab Switcher (< lg) */}
        <div className="lg:hidden flex items-center bg-slate-900/90 backdrop-blur-md p-1 rounded-xl border border-slate-800 mb-4 sticky top-18 z-30 shadow-lg">
          <button
            onClick={() => setMobileTab('editor')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mobileTab === 'editor'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Editor & Opsi</span>
          </button>
          <button
            onClick={() => setMobileTab('preview')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mobileTab === 'preview'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Live Preview Stiker</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Editor & Controls (7 cols) */}
          <div
            className={`lg:col-span-7 space-y-5 ${
              mobileTab === 'preview' ? 'hidden lg:block' : 'block'
            }`}
          >
            {/* 1. Presets */}
            <PresetTemplates
              currentPresetId={currentPresetId}
              onSelectPreset={(p) => {
                handleSelectPreset(p);
                // On mobile, if user picks a preset, switch to preview smoothly
                if (window.innerWidth < 1024) {
                  setMobileTab('preview');
                }
              }}
            />

            {/* 2. Text Editor */}
            <TextEditorPanel
              lines={lines}
              onChangeLines={(newLines) => {
                setLines(newLines);
                setCurrentPresetId('custom');
              }}
              textCase={textCase}
              onChangeTextCase={setTextCase}
              fontSize={fontSize}
              onChangeFontSize={setFontSize}
              lineGap={lineGap}
              onChangeLineGap={setLineGap}
              letterSpacing={letterSpacing}
              onChangeLetterSpacing={setLetterSpacing}
              singleWordAlign={singleWordAlign}
              onChangeSingleWordAlign={setSingleWordAlign}
              onRandomMeme={handleRandomMeme}
            />

            {/* 3. Logo & Image Inserter */}
            <LogoUploader
              selectedLogoId={selectedLogoId}
              customLogoUrl={customLogoUrl}
              logoScale={logoScale}
              invertLogo={invertLogo}
              onSelectPresetLogo={(id) => {
                setSelectedLogoId(id);
                setCustomLogoUrl(undefined);
              }}
              onUploadCustomLogo={(url) => {
                setCustomLogoUrl(url);
                setSelectedLogoId(undefined);
              }}
              onRemoveLogo={() => {
                setSelectedLogoId(undefined);
                setCustomLogoUrl(undefined);
              }}
              onChangeLogoScale={setLogoScale}
              onToggleInvertLogo={() => setInvertLogo(!invertLogo)}
            />

            {/* 4. Style & Canvas Controls */}
            <StyleControls
              fontFamily={fontFamily}
              onChangeFontFamily={setFontFamily}
              bgMode={bgMode}
              onChangeBgMode={setBgMode}
              aspectRatio={aspectRatio}
              onChangeAspectRatio={setAspectRatio}
              cornerRadius={cornerRadius}
              onChangeCornerRadius={setCornerRadius}
              borderStyle={borderStyle}
              onChangeBorderStyle={setBorderStyle}
              padding={padding}
              onChangePadding={setPadding}
              watermark={watermark}
              onChangeWatermark={setWatermark}
            />
          </div>

          {/* Right Column: Sticky Live Preview (5 cols) */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-20 space-y-4 ${
              mobileTab === 'editor' ? 'hidden lg:block' : 'block'
            }`}
          >
            <CanvasPreview
              ref={canvasRef}
              lines={lines}
              selectedLogoId={selectedLogoId}
              customLogoUrl={customLogoUrl}
              logoScale={logoScale}
              invertLogo={invertLogo}
              textCase={textCase}
              fontFamily={fontFamily}
              fontSize={fontSize}
              lineGap={lineGap}
              letterSpacing={letterSpacing}
              singleWordAlign={singleWordAlign}
              padding={padding}
              bgMode={bgMode}
              aspectRatio={aspectRatio}
              cornerRadius={cornerRadius}
              borderStyle={borderStyle}
              watermark={watermark}
              onOpenExport={() => setIsExportModalOpen(true)}
              onQuickCopy={handleQuickCopy}
              onShare={handleShare}
              isCopying={isCopying}
              copiedSuccess={copiedSuccess}
            />
          </div>
        </div>
      </main>

      {/* Floating Bottom Action Bar for Mobile (< lg) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800 p-3 px-4 backdrop-blur-lg flex items-center justify-between gap-2 shadow-2xl">
        <button
          onClick={() => setMobileTab(mobileTab === 'editor' ? 'preview' : 'editor')}
          className="flex-1 py-2 px-3 bg-slate-900 border border-slate-750 text-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
        >
          {mobileTab === 'editor' ? (
            <>
              <Eye className="w-3.5 h-3.5 text-rose-400" />
              <span>Lihat Preview</span>
            </>
          ) : (
            <>
              <Edit3 className="w-3.5 h-3.5 text-rose-400" />
              <span>Edit Teks</span>
            </>
          )}
        </button>

        <button
          onClick={handleQuickCopy}
          disabled={isCopying}
          className="py-2 px-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Copy className="w-3.5 h-3.5 text-rose-400" />
          <span>{copiedSuccess ? 'Tersalin' : 'Salin'}</span>
        </button>

        <button
          onClick={() => setIsExportModalOpen(true)}
          className="flex-1 py-2 px-3 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-rose-500/20 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Export</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 px-4 text-center text-xs text-slate-500">
        <div className="flex items-center justify-center gap-1.5 mb-1.5 text-slate-400">
          <span>Dibuat dengan</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>oleh</span>
          <a
            href="https://github.com/triwahyu45"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-white font-medium underline underline-offset-2"
          >
            Tri Wahyu
          </a>
        </div>
        <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500">
          <a
            href="https://triwahyu45.github.io/KataGenerator_Web/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            🌐 Web Demo Live
          </a>
          <span>•</span>
          <a
            href="https://github.com/triwahyu45/KataGenerator_Web"
            target="_blank"
            rel="noreferrer"
            className="hover:text-rose-400 transition-colors"
          >
            GitHub Repository
          </a>
        </div>
      </footer>

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        canvasRef={canvasRef}
        bgMode={bgMode}
      />
    </div>
  );
}
