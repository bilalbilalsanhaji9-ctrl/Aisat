import React, { useState } from 'react';
import { DICTIONARY_TERMS, CLINICAL_VERBS, ABBREVIATIONS_DATA } from '../data/dictionaryData';
import { DictionaryTerm, ClinicalVerb, Abbreviation } from '../types';
import {
  Search,
  Languages,
  BookOpen,
  Volume2,
  Bookmark,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export const DictionaryHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'verbs' | 'abbr'>('terms');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  const speakGerman = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    if (speakingText === text) {
      setSpeakingText(null);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.9;
    utterance.onend = () => setSpeakingText(null);
    utterance.onerror = () => setSpeakingText(null);
    setSpeakingText(text);
    window.speechSynthesis.speak(utterance);
  };

  // Filtered terms
  const filteredTerms = DICTIONARY_TERMS.filter(t => {
    const matchesSearch =
      t.german.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.arabic.includes(searchQuery) ||
      t.definitionDe.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.definitionAr.includes(searchQuery);
    const matchesCat = categoryFilter === 'all' || t.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  // Filtered verbs
  const filteredVerbs = CLINICAL_VERBS.filter(v => {
    return (
      v.verb.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.arabic.includes(searchQuery) ||
      v.clinicalSentenceDe.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Filtered abbreviations
  const filteredAbbr = ABBREVIATIONS_DATA.filter(a => {
    return (
      a.abbr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.fullGerman.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.meaningAr.includes(searchQuery)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-2">
          <span className="font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Languages className="w-4 h-4" />
            MEDIZINISCHES FACHWÖRTERBUCH & KLINISCHE VERBEN
          </span>
          <span className="text-slate-400 font-['Cairo']">
            المعجم الطبي المتخصص للمصطلحات، وتصريف الأفعال التمريضية والاختصارات
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-left font-['Plus_Jakarta_Sans']" dir="ltr">
            <h2 className="text-2xl font-bold text-white tracking-tight">Klinische Fachsprache Deutsch-Arabisch</h2>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Präzise Definitionen, grammatikalische Artikel (der/die/das), Pluralformen, Nativ-Aussprache und kontextuelle Anwendungsbeispiele.
            </p>
          </div>
          <div className="text-right font-['Cairo']" dir="rtl">
            <h2 className="text-2xl font-bold text-cyan-400 tracking-tight">القاموس السريري للمصطلحات وأفعال التمريض</h2>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
              شرح دقيق لجذور الكلمات، تصريف الأفعال الشائعة في المستشفى مع جمل حقيقية من بيئة العمل السريري والنطق الألماني المعتمد.
            </p>
          </div>
        </div>

        {/* Search Bar & Subtabs */}
        <div className="pt-6 space-y-3">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن مصطلح طبي، فعل سريري، أو اختصار (ألماني أو عربي)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-10 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 font-['Cairo'] text-right"
              dir="rtl"
            />
            <Search className="w-5 h-5 text-slate-400 absolute right-3 top-3.5" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
            {/* View tabs */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-medium">
              <button
                onClick={() => setActiveTab('terms')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'terms' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                المصطلحات الطبية ({DICTIONARY_TERMS.length})
              </button>
              <button
                onClick={() => setActiveTab('verbs')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'verbs' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                الأفعال السريرية ({CLINICAL_VERBS.length})
              </button>
              <button
                onClick={() => setActiveTab('abbr')}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'abbr' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                الاختصارات الشائعة ({ABBREVIATIONS_DATA.length})
              </button>
            </div>

            {/* Category filter if in terms */}
            {activeTab === 'terms' && (
              <div className="flex items-center gap-1 text-xs">
                {['all', 'clinical', 'device', 'legal'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-2.5 py-1 rounded-lg transition-colors capitalize ${
                      categoryFilter === cat
                        ? 'bg-slate-800 text-cyan-400 font-bold border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {cat === 'all' ? 'الكل' : cat === 'clinical' ? 'سريري' : cat === 'device' ? 'أجهزة' : 'قانوني'}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mode 1: Medical Terms Cards */}
      {activeTab === 'terms' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.map(term => {
            const isSpeaking = speakingText === term.german;
            return (
              <div
                key={term.id}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md space-y-3"
              >
                <div className="flex items-start justify-between border-b border-slate-800 pb-3">
                  <div className="text-left font-['Plus_Jakarta_Sans']" dir="ltr">
                    <div className="flex items-center gap-2">
                      {term.article && (
                        <span className="px-1.5 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-800">
                          {term.article}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-white tracking-tight">{term.german}</h3>
                    </div>
                    {term.plural && (
                      <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
                        Plural: {term.plural}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => speakGerman(term.german)}
                      className={`p-2 rounded-lg text-xs transition-colors ${
                        isSpeaking
                          ? 'bg-cyan-500 text-white animate-pulse'
                          : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                      }`}
                      title="استماع للنطق الصوتي"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-right font-['Cairo']" dir="rtl">
                  <h4 className="text-base font-bold text-cyan-300">{term.arabic}</h4>
                  {term.pronunciation && (
                    <span className="text-[11px] text-slate-400 font-mono block">
                      النطق التقريبي: {term.pronunciation}
                    </span>
                  )}
                </div>

                <div className="text-xs space-y-1.5 pt-1">
                  <p className="text-slate-300 text-right leading-relaxed font-['Cairo']" dir="rtl">
                    {term.definitionAr}
                  </p>
                  <p className="text-[11px] text-slate-400 text-left font-['Plus_Jakarta_Sans']" dir="ltr">
                    DE: {term.definitionDe}
                  </p>
                </div>

                {/* Real Hospital Example */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                  <span className="text-[10px] text-cyan-400 font-mono uppercase font-bold block">
                    Klinischer Beispielsatz / مثال الاستخدام السريري:
                  </span>
                  <p className="text-white font-medium text-left font-['Plus_Jakarta_Sans']" dir="ltr">
                    "{term.hospitalExampleDe}"
                  </p>
                  <p className="text-slate-300 text-right font-['Cairo'] pt-1" dir="rtl">
                    "{term.hospitalExampleAr}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Mode 2: Clinical Verbs */}
      {activeTab === 'verbs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVerbs.map(verb => {
            const isSpeaking = speakingText === verb.verb;
            return (
              <div
                key={verb.verb}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                      Verb
                    </span>
                    <h3 className="text-xl font-bold text-white font-mono tracking-tight">{verb.verb}</h3>
                  </div>

                  <button
                    onClick={() => speakGerman(verb.verb)}
                    className={`p-2 rounded-lg text-xs transition-colors ${
                      isSpeaking ? 'bg-cyan-500 text-white animate-pulse' : 'bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                    title="نطق الفعل"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-right font-['Cairo']" dir="rtl">
                  <h4 className="text-base font-bold text-cyan-300">{verb.arabic}</h4>
                  <span className="text-xs text-slate-400 font-mono block mt-0.5">
                    الاستخدام الشائع: {verb.typicalObjectDe}
                  </span>
                </div>

                {/* Conjugation Details */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Präsens (المضارع)</span>
                    <strong className="text-slate-200">{verb.present}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Perfekt (الماضي التام)</span>
                    <strong className="text-cyan-400">{verb.perfekt}</strong>
                  </div>
                </div>

                {/* Example sentence */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                  <p className="text-white font-medium text-left font-['Plus_Jakarta_Sans']" dir="ltr">
                    "{verb.clinicalSentenceDe}"
                  </p>
                  <p className="text-slate-300 text-right font-['Cairo'] pt-1" dir="rtl">
                    "{verb.clinicalSentenceAr}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Mode 3: Abbreviations */}
      {activeTab === 'abbr' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredAbbr.map(abbr => (
            <div
              key={abbr.abbr}
              className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-2"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xl font-bold font-mono text-cyan-400">{abbr.abbr}</span>
                <span className="text-[11px] text-slate-400 font-mono">Abkürzung</span>
              </div>
              <p className="text-xs font-bold text-white font-['Plus_Jakarta_Sans'] text-left" dir="ltr">
                {abbr.fullGerman}
              </p>
              <p className="text-xs font-bold text-cyan-200 font-['Cairo'] text-right" dir="rtl">
                {abbr.meaningAr}
              </p>
              <p className="text-[11px] text-slate-400 text-right font-['Cairo'] pt-1 border-t border-slate-800/80" dir="rtl">
                {abbr.clinicalContext}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
