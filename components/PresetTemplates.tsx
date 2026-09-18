'use client';

import React from 'react';
import { PRESET_TEMPLATES, TemplatePreset } from '@/lib/presets';
import { Sparkles } from 'lucide-react';

interface PresetTemplatesProps {
  currentPresetId: string;
  onSelectPreset: (preset: TemplatePreset) => void;
}

export const PresetTemplates: React.FC<PresetTemplatesProps> = ({
  currentPresetId,
  onSelectPreset,
}) => {
  return (
    <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-rose-400" />
        <h2 className="text-sm font-semibold text-white">Preset Meme Viral</h2>
        <span className="text-[11px] text-slate-400 ml-auto">Pilih template instan</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {PRESET_TEMPLATES.map((tmpl) => {
          const isActive = currentPresetId === tmpl.id;
          return (
            <button
              key={tmpl.id}
              onClick={() => onSelectPreset(tmpl)}
              className={`text-left p-2.5 rounded-xl border transition-all text-xs font-medium relative group cursor-pointer ${
                isActive
                  ? 'bg-rose-500/10 border-rose-500/60 text-white shadow-sm ring-1 ring-rose-500/40'
                  : 'bg-slate-800/60 border-slate-750/70 text-slate-300 hover:border-slate-600 hover:bg-slate-800'
              }`}
            >
              <div className="font-semibold line-clamp-1 mb-0.5">{tmpl.name}</div>
              <div className="text-[10px] text-slate-400 line-clamp-1 opacity-80">
                {tmpl.description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
