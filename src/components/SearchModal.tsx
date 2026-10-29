import React, { useState } from 'react';
import { VOLUMES_DATA } from '../data/volumesData';
import { MEDICAL_DEVICES_DATA } from '../data/devicesData';
import { DICTIONARY_TERMS, CLINICAL_VERBS } from '../data/dictionaryData';
import { AppMode } from '../types';
import { Search, X, BookOpen, Cpu, Languages, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToChapter: (volumeId: number, chapterId: number) => void;
  onNavigateToDevice: (deviceId: string) => void;
  onNavigateToDictionary: () => void;
  onNavigateToFundamentals?: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateToChapter,
  onNavigateToDevice,
  onNavigateToDictionary,
  onNavigateToFundamentals
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  // Search in Chapters
  const chapterResults: { volumeId: number; chapterId: number; titleDe: string; titleAr: string }[] = [];
  VOLUMES_DATA.forEach(vol => {
    vol.chapters.forEach(chap => {
      if (
        query.trim() &&
        (chap.titleDe.toLowerCase().includes(query.toLowerCase()) ||
          chap.titleAr.includes(query) ||
          chap.keywords.some(k => k.toLowerCase().includes(query.toLowerCase())))
      ) {
        chapterResults.push({
          volumeId: vol.id,
          chapterId: chap.id,
          titleDe: chap.titleDe,
          titleAr: chap.titleAr
        });
      }
    });
  });

  // Search in Devices
  const deviceResults = query.trim()
    ? MEDICAL_DEVICES_DATA.filter(
        d =>
          d.nameDe.toLowerCase().includes(query.toLowerCase()) ||
          d.nameAr.includes(query) ||
          d.shortDescAr.includes(query)
      )
    : [];

  // Search in Dictionary
  const termResults = query.trim()
    ? DICTIONARY_TERMS.filter(
        t => t.german.toLowerCase().includes(query.toLowerCase()) || t.arabic.includes(query)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-fadeIn">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="ابحث في الموسوعة (أجهزة، فصول، مصطلحات، أدوية)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none font-['Cairo'] text-right"
            dir="rtl"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-4 text-right" dir="rtl">
          {!query.trim() && (
            <div className="py-6 space-y-4 text-center">
              {onNavigateToFundamentals && (
                <button
                  onClick={() => {
                    onNavigateToFundamentals();
                    onClose();
                  }}
                  className="w-full p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/60 hover:border-cyan-500 text-right flex items-center justify-between transition-colors group cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <span className="text-xs font-bold text-cyan-300 font-['Cairo'] block">
                      ✨ قسم أساسيات التمريض (المعدلات الطبيعية ودليل الحقن)
                    </span>
                    <span className="text-[11px] text-slate-400">
                      النبض بالثانية، ضغط الدم، سكر الدم، كم ملمتر للإبرة وأين وكيف تؤخذ
                    </span>
                  </div>
                </button>
              )}
              <div className="text-xs text-slate-500 space-y-1">
                <p>اكتب أي كلمة للبحث في كافة مجلدات التمريض وموسوعة الأجهزة والمصطلحات الطبية.</p>
                <p className="font-mono text-cyan-400">مثال: Blutdruck, Infusion, EKG, Schweigepflicht, Insulin</p>
              </div>
            </div>
          )}

          {/* Chapter Matches */}
          {chapterResults.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-cyan-400 font-bold block">
                فصول المنهج الدراسي ({chapterResults.length}):
              </span>
              <div className="space-y-1.5">
                {chapterResults.map(r => (
                  <button
                    key={r.chapterId}
                    onClick={() => {
                      onNavigateToChapter(r.volumeId, r.chapterId);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-right flex items-center justify-between transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div className="flex-1 px-3">
                      <p className="text-xs font-bold text-white font-['Cairo']">{r.titleAr}</p>
                      <p className="text-[11px] text-slate-400 font-['Plus_Jakarta_Sans'] text-left" dir="ltr">
                        {r.titleDe}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Device Matches */}
          {deviceResults.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-amber-400 font-bold block">
                الأجهزة الطبية السريرية ({deviceResults.length}):
              </span>
              <div className="space-y-1.5">
                {deviceResults.map(d => (
                  <button
                    key={d.id}
                    onClick={() => {
                      onNavigateToDevice(d.id);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-right flex items-center justify-between transition-colors"
                  >
                    <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
                    <div className="flex-1 px-3">
                      <p className="text-xs font-bold text-white font-['Cairo']">{d.nameAr}</p>
                      <p className="text-[11px] text-slate-400 font-['Plus_Jakarta_Sans'] text-left" dir="ltr">
                        {d.nameDe}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Term Matches */}
          {termResults.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-emerald-400 font-bold block">
                المصطلحات الطبية والمعجم ({termResults.length}):
              </span>
              <div className="space-y-1.5">
                {termResults.map(t => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onNavigateToDictionary();
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 text-right flex items-center justify-between transition-colors"
                  >
                    <Languages className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="flex-1 px-3">
                      <span className="text-xs font-bold text-white font-['Cairo']">
                        {t.arabic} ({t.german})
                      </span>
                      <p className="text-[11px] text-slate-400 truncate">{t.definitionAr}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() &&
            chapterResults.length === 0 &&
            deviceResults.length === 0 &&
            termResults.length === 0 && (
              <p className="text-center py-6 text-xs text-slate-400">
                لم يتم العثور على نتائج مطابقة لـ "{query}". جرب البحث بكلمة أخرى.
              </p>
            )}
        </div>
      </div>
    </div>
  );
};
