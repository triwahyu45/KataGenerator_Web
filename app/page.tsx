'use client';

import React, { useState, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { QuickEditor } from '@/components/QuickEditor';
import { CanvasPreview } from '@/components/CanvasPreview';
import { PresetTemplates } from '@/components/PresetTemplates';
import { TextEditorPanel } from '@/components/TextEditorPanel';
import { LogoUploader } from '@/components/LogoUploader';
import { StyleControls } from '@/components/StyleControls';
import { ExportModal } from '@/components/ExportModal';
import { PRESET_TEMPLATES, PRESET_LOGOS, TemplatePreset, RANDOM_MEME_PRESETS } from '@/lib/presets';
import { copyElementToClipboard, exportElementAsImage, shareElementAsImage } from '@/lib/exportUtils';
import { Sparkles, Heart, Sliders, Image as ImageIcon, Palette, AlignJustify, Eye, Edit3, ArrowDown } from 'lucide-react';

export default function HomePage() {
  const initialPreset = PRESET_TEMPLATES[0];

  // Core Editor State
  const [currentPresetId, setCurrentPresetId] = useState<string>(initialPreset.id);
  const [lines, setLines] = useState<string[]>(initialPreset.lines);
  const [rawText, setRawText] = useState<string>(initialPreset.lines.join('\n'));
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

  // Customization Section Tab: 'logo' | 'preset' | 'style' | 'lines'
  const [activeCustomTab, setActiveCustomTab] = useState<'logo' | 'preset' | 'style' | 'lines'>('logo');

  // Mobile View Switcher: 'editor' | 'preview'
  const [mobileTab, setMobileTab] = useState<'editor' | 'preview'>('editor');

  // Action / Export States
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [isCopying, setIsCopying] = useState<boolean>(false);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const canvasRef = useRef<HTMLDivElement>(null);
  const customizationRef = useRef<HTMLDivElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Sync raw text with lines
  const handleRawTextChange = (text: string) => {
    setRawText(text);
    const splitLines = text.split('\n');
    setLines(splitLines);
    setCurrentPresetId('custom');
  };

  const handleSelectPreset = (preset: TemplatePreset) => {
    setCurrentPresetId(preset.id);
    setLines([...preset.lines]);
    setRawText(preset.lines.join('\n'));
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
    setRawText(item.lines.join('\n'));
    setSelectedLogoId(item.logoId);
    setCustomLogoUrl(undefined);
    setTextCase(item.textCase || 'lowercase');
    if (item.bgMode) setBgMode(item.bgMode);
    setCurrentPresetId('custom');
    showToast('🎲 Ide meme acak berhasil dimuat!');
  };

  // 1-Click Fast Download
  const handleQuickDownload = async () => {
    if (!canvasRef.current) return;
    setIsDownloading(true);
    try {
      await exportElementAsImage(canvasRef.current, {
        pixelRatio: 3,
        format: 'png',
        transparent: bgMode === 'transparent',
        filename: `katagenerator-${Date.now()}.png`,
      });
      showToast('Gambar berhasil di-download! Siap diposting.');
    } catch (err) {
      console.error('Quick download failed:', err);
      showToast('Gagal men-download gambar. Silakan gunakan Opsi Ekspor.');
    } finally {
      setIsDownloading(false);
    }
  };

  // 1-Click Fast Copy
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
      showToast('Gagal menyalin. Silakan gunakan tombol Simpan Gambar.');
    } finally {
      setIsCopying(false);
    }
  };

  // 1-Click Share
  const handleShare = async () => {
    if (!canvasRef.current) return;
    try {
      const ok = await shareElementAsImage(canvasRef.current, 'Stiker KataGenerator');
      if (ok) {
        showToast('Stiker siap dibagikan!');
      }
    } catch (err) {
      console.error('Share error:', err);
      handleQuickCopy();
    }
  };

  const scrollToCustomization = (tab?: 'logo' | 'preset' | 'style' | 'lines') => {
    if (tab) setActiveCustomTab(tab);
    customizationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeLogoName = customLogoUrl
    ? 'Gambar Upload Sendiri'
    : selectedLogoId
    ? PRESET_LOGOS.find((l) => l.id === selectedLogoId)?.name
    : undefined;

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

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 lg:p-8 pb-24 lg:pb-12 space-y-8 sm:space-y-12">
        {/* Mobile Tab Switcher (< lg) */}
        <div className="lg:hidden flex items-center bg-slate-900/90 backdrop-blur-md p-1 rounded-xl border border-slate-800 sticky top-18 z-30 shadow-lg">
          <button
            onClick={() => setMobileTab('editor')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mobileTab === 'editor'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Ketik Teks</span>
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
            <span>Lihat Stiker</span>
          </button>
        </div>

        {/* SECTION 1: SUPER SIMPLE STUDIO (Ketik Teks & Simpan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Quick Typing & Fast Actions (7 cols) */}
          <div
            className={`lg:col-span-7 space-y-4 ${
              mobileTab === 'preview' ? 'hidden lg:block' : 'block'
            }`}
          >
            <QuickEditor
              rawText={rawText}
              onChangeRawText={handleRawTextChange}
              textCase={textCase}
              onChangeTextCase={setTextCase}
              bgMode={bgMode}
              onChangeBgMode={setBgMode}
              onQuickDownload={handleQuickDownload}
              onQuickCopy={handleQuickCopy}
              onRandomMeme={handleRandomMeme}
              onOpenAdvancedModal={() => setIsExportModalOpen(true)}
              onScrollToCustomization={() => scrollToCustomization('logo')}
              isDownloading={isDownloading}
              isCopying={isCopying}
              copiedSuccess={copiedSuccess}
              activeLogoName={activeLogoName}
            />
          </div>

          {/* Right Column: Live Stiker Preview (5 cols) */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-20 space-y-4 ${
              mobileTab === 'editor' ? 'hidden lg:block' : 'block'
            }`}
          >
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>2. Hasil Stiker (Live Preview)</span>
              </span>
              <button
                onClick={() => scrollToCustomization('style')}
                className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Atur Kanvas</span>
                <ArrowDown className="w-3 h-3" />
              </button>
            </div>

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

        {/* SECTION 2: PENGATURAN TAMBAHAN / KUSTOMISASI (DI BAWAHNYA, RAPI & OPSIONAL) */}
        <div ref={customizationRef} className="pt-6 sm:pt-10 border-t border-slate-800/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-rose-400" />
                <span>Pengaturan Tambahan & Kustomisasi</span>
                <span className="text-xs font-normal text-slate-400">(Opsional)</span>
              </h3>
              <p className="text-xs text-slate-400">
                Pilih tab di bawah jika ingin menambahkan logo band, memilih template viral, atau mengganti jenis font.
              </p>
            </div>

            {/* Customization Tabs Switcher */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs overflow-x-auto">
              <button
                onClick={() => setActiveCustomTab('logo')}
                className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                  activeCustomTab === 'logo'
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Logo Band / Foto</span>
              </button>
              <button
                onClick={() => setActiveCustomTab('preset')}
                className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                  activeCustomTab === 'preset'
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Template Viral</span>
              </button>
              <button
                onClick={() => setActiveCustomTab('style')}
                className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                  activeCustomTab === 'style'
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Gaya & Font</span>
              </button>
              <button
                onClick={() => setActiveCustomTab('lines')}
                className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                  activeCustomTab === 'lines'
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <AlignJustify className="w-3.5 h-3.5" />
                <span>Atur Per-Baris</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="animate-in fade-in duration-200">
            {activeCustomTab === 'logo' && (
              <LogoUploader
                selectedLogoId={selectedLogoId}
                customLogoUrl={customLogoUrl}
                logoScale={logoScale}
                invertLogo={invertLogo}
                onSelectPresetLogo={(id) => {
                  setSelectedLogoId(id);
                  setCustomLogoUrl(undefined);
                  showToast('Logo band diterapkan!');
                }}
                onUploadCustomLogo={(url) => {
                  setCustomLogoUrl(url);
                  setSelectedLogoId(undefined);
                  showToast('Gambar sendiri diterapkan!');
                }}
                onRemoveLogo={() => {
                  setSelectedLogoId(undefined);
                  setCustomLogoUrl(undefined);
                  showToast('Logo dihapus.');
                }}
                onChangeLogoScale={setLogoScale}
                onToggleInvertLogo={() => setInvertLogo(!invertLogo)}
              />
            )}

            {activeCustomTab === 'preset' && (
              <PresetTemplates
                currentPresetId={currentPresetId}
                onSelectPreset={handleSelectPreset}
              />
            )}

            {activeCustomTab === 'style' && (
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
            )}

            {activeCustomTab === 'lines' && (
              <TextEditorPanel
                lines={lines}
                onChangeLines={(newLines) => {
                  setLines(newLines);
                  setRawText(newLines.join('\n'));
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
            )}
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
              <span>Lihat Stiker</span>
            </>
          ) : (
            <>
              <Edit3 className="w-3.5 h-3.5 text-rose-400" />
              <span>Ketik Teks</span>
            </>
          )}
        </button>

        <button
          onClick={handleQuickCopy}
          disabled={isCopying}
          className="py-2 px-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>{copiedSuccess ? 'Tersalin' : 'Salin'}</span>
        </button>

        <button
          onClick={handleQuickDownload}
          disabled={isDownloading}
          className="flex-1 py-2 px-3 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-rose-500/20 cursor-pointer"
        >
          <span>Simpan PNG</span>
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

      {/* Export Modal (for optional 4x HD / JPG) */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        canvasRef={canvasRef}
        bgMode={bgMode}
      />
    </div>
  );
}
