import React from 'react';
import { AppMode, LanguageView } from '../types';
import {
  Sparkles,
  BookOpen,
  Cpu,
  Calculator,
  Activity,
  AlertTriangle,
  Languages,
  Moon,
  Sun,
  GraduationCap
} from 'lucide-react';

interface HeaderProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  languageView: LanguageView;
  onChangeLanguageView: (view: LanguageView) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  languageView,
  onChangeLanguageView,
  darkMode,
  onToggleDarkMode,
  onOpenSearch
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur border-b border-slate-800 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8 h-16">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <div
          onClick={() => onSelectMode('fundamentals')}
          className="cursor-pointer flex items-center gap-3 whitespace-nowrap shrink-0 group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Activity className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-['Plus_Jakarta_Sans']">
              PflegeEnzyklopädie
              <span className="text-xs font-normal text-cyan-400 font-['Cairo']">الموسوعة التمريضية</span>
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Single-line, whitespace-nowrap) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-medium overflow-x-auto no-scrollbar">
          <button
            onClick={() => onSelectMode('fundamentals')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              currentMode === 'fundamentals'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>أساسيات التمريض</span>
          </button>

          <button
            onClick={() => onSelectMode('reader')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              currentMode === 'reader'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>المجلدات والفصول</span>
          </button>

          <button
            onClick={() => onSelectMode('devices')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              currentMode === 'devices'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>الأجهزة الطبية</span>
          </button>

          <button
            onClick={() => onSelectMode('calculators')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              currentMode === 'calculators'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>حاسبة الجرعات</span>
          </button>

          <button
            onClick={() => onSelectMode('ecg')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              currentMode === 'ecg'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>مخطط القلب EKG</span>
          </button>

          <button
            onClick={() => onSelectMode('emergency')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              currentMode === 'emergency'
                ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>الطوارئ ABCDE</span>
          </button>

          <button
            onClick={() => onSelectMode('dictionary')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              currentMode === 'dictionary'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Languages className="w-4 h-4" />
            <span>المعجم والأفعال</span>
          </button>

          <button
            onClick={() => onSelectMode('cases')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              currentMode === 'cases'
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>الامتحانات</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action & Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Language display switcher */}
          <div className="hidden sm:flex items-center bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/80 text-xs">
            <button
              onClick={() => onChangeLanguageView('split')}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                languageView === 'split'
                  ? 'bg-cyan-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="عرض متزامن ألماني - عربي"
            >
              مزدوج De/Ar
            </button>
            <button
              onClick={() => onChangeLanguageView('german')}
              className={`px-2 py-1 rounded transition-colors whitespace-nowrap ${
                languageView === 'german'
                  ? 'bg-cyan-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Deutsch"
            >
              Deutsch
            </button>
            <button
              onClick={() => onChangeLanguageView('arabic')}
              className={`px-2 py-1 rounded transition-colors whitespace-nowrap ${
                languageView === 'arabic'
                  ? 'bg-cyan-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="عربي"
            >
              العربية
            </button>
          </div>

          {/* Quick search button */}
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
            title="بحث شامل في الموسوعة"
          >
            <span className="sr-only">Suche</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
            title={darkMode ? 'تفعيل النمط الفاتح' : 'تفعيل النمط الداكن'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="lg:hidden flex items-center gap-1 px-4 py-2 bg-slate-950/80 border-t border-slate-800/80 overflow-x-auto text-xs no-scrollbar">
        <button
          onClick={() => onSelectMode('fundamentals')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 flex items-center gap-1 font-bold ${
            currentMode === 'fundamentals' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>أساسيات التمريض</span>
        </button>
        <button
          onClick={() => onSelectMode('reader')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 ${
            currentMode === 'reader' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400'
          }`}
        >
          المجلدات
        </button>
        <button
          onClick={() => onSelectMode('devices')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 ${
            currentMode === 'devices' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400'
          }`}
        >
          الأجهزة الطبية
        </button>
        <button
          onClick={() => onSelectMode('calculators')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 ${
            currentMode === 'calculators' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400'
          }`}
        >
          الحاسبة
        </button>
        <button
          onClick={() => onSelectMode('ecg')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 ${
            currentMode === 'ecg' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400'
          }`}
        >
          مخطط EKG
        </button>
        <button
          onClick={() => onSelectMode('emergency')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 ${
            currentMode === 'emergency' ? 'bg-rose-500/20 text-rose-400' : 'text-slate-400'
          }`}
        >
          طوارئ ABCDE
        </button>
        <button
          onClick={() => onSelectMode('dictionary')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 ${
            currentMode === 'dictionary' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400'
          }`}
        >
          المعجم
        </button>
        <button
          onClick={() => onSelectMode('cases')}
          className={`px-3 py-1.5 rounded-md whitespace-nowrap shrink-0 ${
            currentMode === 'cases' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400'
          }`}
        >
          الامتحانات
        </button>
      </div>
    </header>
  );
};
