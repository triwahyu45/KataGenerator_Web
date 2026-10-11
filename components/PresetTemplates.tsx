'use client';

import React, { useState } from 'react';
import { PRESET_TEMPLATES, TemplatePreset } from '@/lib/presets';
import { Sparkles, Tag } from 'lucide-react';

interface PresetTemplatesProps {
  currentPresetId: string;
  onSelectPreset: (preset: TemplatePreset) => void;
}

export const PresetTemplates: React.FC<PresetTemplatesProps> = ({
  currentPresetId,
  onSelectPreset,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = [
    'Semua',
    'Indie Bands',
    'Bucin & Galau',
    'Esports & Pop',
    'Kocak & Relatable',
    'Minimalist',
  ];

  const filteredPresets =
    selectedCategory === 'Semua'
      ? PRESET_TEMPLATES
      : PRESET_TEMPLATES.filter((t) => t.category === selectedCategory);

  return (
    <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Preset Template Meme</h2>
            <p className="text-[11px] text-slate-400">Pilih template viral untuk memulai instan</p>
          </div>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800">
          {PRESET_TEMPLATES.length} preset
        </span>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800/80'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Preset Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-[290px] overflow-y-auto pr-1">
        {filteredPresets.map((tmpl) => {
          const isActive = currentPresetId === tmpl.id;
          return (
            <button
              key={tmpl.id}
              onClick={() => onSelectPreset(tmpl)}
              className={`text-left p-3 rounded-xl border transition-all relative group cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-rose-500/15 border-rose-500/80 text-white shadow-md ring-1 ring-rose-500/40'
                  : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                    {tmpl.category}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  )}
                </div>
                <div className="font-semibold text-xs text-white line-clamp-1 mb-1 group-hover:text-rose-400 transition-colors">
                  {tmpl.name}
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed opacity-85">
                  {tmpl.description}
                </div>
              </div>

              {/* Sample first line snippet */}
              <div className="mt-2.5 pt-2 border-t border-slate-800/70 text-[10px] font-mono text-slate-400 truncate">
                &ldquo;{tmpl.lines[0]}&rdquo;
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
