'use client';

import React, { useState, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { PresetTemplates } from '@/components/PresetTemplates';
import { TextEditorPanel } from '@/components/TextEditorPanel';
import { LogoUploader } from '@/components/LogoUploader';
import { StyleControls } from '@/components/StyleControls';
import { CanvasPreview } from '@/components/CanvasPreview';
import { ExportModal } from '@/components/ExportModal';
import { PRESET_TEMPLATES, TemplatePreset } from '@/lib/presets';
import { copyElementToClipboard } from '@/lib/exportUtils';
import { Sparkles, Heart } from 'lucide-react';

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
  const [fontWeight, setFontWeight] = useState<string>('bold');
  const [fontSize, setFontSize] = useState<number>(34);
  const [lineGap, setLineGap] = useState<number>(10);
  const [padding, setPadding] = useState<number>(32);
  const [bgMode, setBgMode] = useState<'white' | 'dark' | 'transparent' | 'card'>('white');
  const [aspectRatio, setAspectRatio] = useState<'auto' | '1:1' | '9:16' | '4:5'>('auto');
  const [watermark, setWatermark] = useState<string>('@triwahyu45');

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
    setLogoScale(1.0);
    setInvertLogo(false);
  };

  const handleReset = () => {
    handleSelectPreset(PRESET_TEMPLATES[0]);
    setFontSize(34);
    setLineGap(10);
    setPadding(32);
    showToast('Kanvas telah di-reset ke default.');
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
      showToast('Gagal menyalin. Silakan gunakan tombol Export.');
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Navbar */}
      <Navbar onReset={handleReset} />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <Sparkles className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Workspace Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Editor & Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* 1. Presets */}
            <PresetTemplates
              currentPresetId={currentPresetId}
              onSelectPreset={handleSelectPreset}
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
              fontWeight={fontWeight}
              onChangeFontWeight={setFontWeight}
              bgMode={bgMode}
              onChangeBgMode={setBgMode}
              aspectRatio={aspectRatio}
              onChangeAspectRatio={setAspectRatio}
              padding={padding}
              onChangePadding={setPadding}
              watermark={watermark}
              onChangeWatermark={setWatermark}
            />
          </div>

          {/* Right Column: Sticky Live Preview (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-20 space-y-4">
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
              padding={padding}
              bgMode={bgMode}
              aspectRatio={aspectRatio}
              watermark={watermark}
              onOpenExport={() => setIsExportModalOpen(true)}
              onQuickCopy={handleQuickCopy}
              isCopying={isCopying}
              copiedSuccess={copiedSuccess}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 px-4 text-center text-xs text-slate-500">
        <div className="flex items-center justify-center gap-1.5 mb-1 text-slate-400">
          <span>Dibuat dengan</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>untuk generator kata viral Indonesia</span>
        </div>
        <div>
          <a
            href="https://github.com/triwahyu45/KataGenerator_Web"
            target="_blank"
            rel="noreferrer"
            className="hover:text-rose-400 underline underline-offset-2 transition-colors"
          >
            GitHub: triwahyu45/KataGenerator_Web
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
