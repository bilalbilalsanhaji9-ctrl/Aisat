import React, { useState } from 'react';
import { Volume, Chapter, LanguageView } from '../types';
import {
  Volume2,
  Bookmark,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Share2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface BilingualReaderProps {
  volumes: Volume[];
  currentVolumeId: number;
  currentChapterId: number;
  onSelectChapter: (volumeId: number, chapterId: number) => void;
  languageView: LanguageView;
}

export const BilingualReader: React.FC<BilingualReaderProps> = ({
  volumes,
  currentVolumeId,
  currentChapterId,
  onSelectChapter,
  languageView
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [bookmarkedSections, setBookmarkedSections] = useState<Record<string, boolean>>({});
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  const currentVolume = volumes.find(v => v.id === currentVolumeId) || volumes[0];
  const currentChapter = currentVolume.chapters.find(c => c.id === currentChapterId) || currentVolume.chapters[0];

  // Speech synthesis for German pronunciation
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

  const toggleAnswer = (sectionId: string) => {
    setRevealedAnswers(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const toggleBookmark = (sectionId: string) => {
    setBookmarkedSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Volume & Chapter Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-cyan-400">{currentVolume.titleDe}</span>
              <span aria-hidden="true">·</span>
              <span>{currentVolume.titleAr}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span>وقت القراءة: ~{currentChapter.readTimeMin} دقيقة</span>
              <span aria-hidden="true">·</span>
              <span className="text-cyan-400 font-mono">الفصل {currentChapter.number}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="text-left font-['Plus_Jakarta_Sans']">
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentChapter.titleDe}
              </h1>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                {currentChapter.summaryDe}
              </p>
            </div>
            <div className="text-right font-['Cairo']">
              <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-tight">
                {currentChapter.titleAr}
              </h2>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                {currentChapter.summaryAr}
              </p>
            </div>
          </div>

          {/* Quick Volume Selector Pills */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-xs text-slate-400 whitespace-nowrap pl-2">انتقال سريع:</span>
            {volumes.map(vol => (
              <button
                key={vol.id}
                onClick={() => onSelectChapter(vol.id, vol.chapters[0].id)}
                className={`px-3 py-1 text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  vol.id === currentVolumeId
                    ? 'bg-cyan-600 text-white font-medium shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span>م {vol.number}</span>
                <span className="hidden sm:inline text-[11px] opacity-80">{vol.titleAr.split(':')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chapters in current volume if multiple */}
      {currentVolume.chapters.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto p-1.5 bg-slate-900/60 rounded-xl border border-slate-800/80">
          <span className="text-xs text-slate-400 px-2 shrink-0">فصول هذا المجلد:</span>
          {currentVolume.chapters.map(chap => (
            <button
              key={chap.id}
              onClick={() => onSelectChapter(currentVolume.id, chap.id)}
              className={`px-3 py-1.5 text-xs rounded-lg transition-all shrink-0 ${
                chap.id === currentChapterId
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              فصل {chap.number}: {chap.titleAr.split(':')[1] || chap.titleAr}
            </button>
          ))}
        </div>
      )}

      {/* Main Content Sections */}
      <div className="space-y-6">
        {currentChapter.sections.map((section, idx) => {
          const isBookmarked = !!bookmarkedSections[section.id];
          const isAnswerRevealed = !!revealedAnswers[section.id];
          const isSpeaking = speakingText === section.contentDe;

          return (
            <article
              key={section.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                activeSectionId === section.id
                  ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/5 ring-1 ring-cyan-500/30'
                  : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
              }`}
              onClick={() => setActiveSectionId(section.id)}
            >
              {/* Section Header Bar */}
              <div className="px-6 py-3.5 bg-slate-950/60 border-b border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">
                    {idx + 1}
                  </span>
                  {section.level && (
                    <span className="text-xs font-medium text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700/60 font-mono">
                      مستوى {section.level}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakGerman(section.contentDe);
                    }}
                    className={`p-1.5 rounded-lg text-xs transition-colors flex items-center gap-1.5 ${
                      isSpeaking
                        ? 'bg-cyan-500 text-white animate-pulse'
                        : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                    }`}
                    title="استماع للنطق الألماني السليم"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[11px] font-sans">
                      {isSpeaking ? 'جاري القراءة...' : 'نطق ألماني'}
                    </span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(section.id);
                    }}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isBookmarked
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                    title="حفظ في الإشارات المرجعية"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Text Body (Split or Single view) */}
              <div className="p-6">
                <div className={`grid gap-6 ${languageView === 'split' ? 'grid-cols-1 lg:grid-cols-2 lg:divide-x-reverse lg:divide-x lg:divide-slate-800' : 'grid-cols-1'}`}>
                  {/* German Column */}
                  {(languageView === 'split' || languageView === 'german') && (
                    <div className="text-left font-['Plus_Jakarta_Sans'] space-y-3" dir="ltr">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {section.titleDe}
                        </h3>
                        <span className="text-[11px] font-medium text-cyan-400/80 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                          DEUTSCH
                        </span>
                      </div>
                      <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                        {section.contentDe}
                      </div>
                    </div>
                  )}

                  {/* Arabic Column */}
                  {(languageView === 'split' || languageView === 'arabic') && (
                    <div className="text-right font-['Cairo'] space-y-3" dir="rtl">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-cyan-300 tracking-tight">
                          {section.titleAr}
                        </h3>
                        <span className="text-[11px] font-medium text-blue-400/80 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-800/40">
                          العربية
                        </span>
                      </div>
                      <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">
                        {section.contentAr}
                      </div>
                    </div>
                  )}
                </div>

                {/* Clinical Callout Box if present */}
                {(section.clinicalNoteDe || section.clinicalNoteAr) && (
                  <div className="mt-5 p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50 space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      <span>قاعدة سريرية ذهبية · Klinischer Merksatz</span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-xs">
                      {section.clinicalNoteDe && (
                        <p className="text-slate-300 font-['Plus_Jakarta_Sans'] text-left" dir="ltr">
                          {section.clinicalNoteDe}
                        </p>
                      )}
                      {section.clinicalNoteAr && (
                        <p className="text-cyan-200 font-['Cairo'] text-right" dir="rtl">
                          {section.clinicalNoteAr}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Hospital Colloquial Phrase / Klinikalltag */}
                {section.hospitalPhrase && (
                  <div className="mt-4 p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-semibold text-slate-300">لغة المستشفى اليومية vs المصطلح الأكاديمي</span>
                      <span className="text-[11px] font-mono text-cyan-400">Klinikjargon</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left" dir="ltr">
                        <span className="text-[10px] text-slate-400 block uppercase font-mono mb-1">Offiziell / تعبير رسمي</span>
                        <p className="text-white font-medium">{section.hospitalPhrase.formalDe}</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-left" dir="ltr">
                        <span className="text-[10px] text-cyan-400 block uppercase font-mono mb-1">Stationsalltag / التعبير الدارج</span>
                        <p className="text-cyan-300 font-medium">{section.hospitalPhrase.colloquialDe}</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-right" dir="rtl">
                        <span className="text-[10px] text-slate-400 block uppercase font-mono mb-1">المعنى العربي</span>
                        <p className="text-slate-200">{section.hospitalPhrase.meaningAr}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Common Errors Pitfall */}
                {section.commonErrors && (
                  <div className="mt-4 p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-2">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-bold">
                      <AlertCircle className="w-4 h-4" />
                      <span>خطأ سريري شائع وتصحيحه المعتمد (Typischer Fehler)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1 text-right" dir="rtl">
                        <span className="text-rose-400 font-medium">❌ الخطأ الشائع:</span>
                        <p className="text-slate-300">{section.commonErrors.errorAr}</p>
                      </div>
                      <div className="space-y-1 text-right" dir="rtl">
                        <span className="text-emerald-400 font-medium">✅ التصرف المهني الصحيح:</span>
                        <p className="text-slate-200">{section.commonErrors.correctionAr}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Review Question with Toggleable Answer */}
                {section.reviewQuestion && (
                  <div className="mt-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-400 flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4" />
                        سؤال مراجعة للاختبار الشفهي · Prüfungsfrage
                      </span>
                      <button
                        onClick={() => toggleAnswer(section.id)}
                        className="text-xs text-cyan-400 hover:text-cyan-300 underline font-medium"
                      >
                        {isAnswerRevealed ? 'إخفاء الإجابة النموذجية' : 'إظهار الإجابة النموذجية'}
                      </button>
                    </div>

                    <div className="text-xs text-slate-200 space-y-1">
                      <p className="font-['Cairo'] text-right" dir="rtl">
                        {section.reviewQuestion.questionAr}
                      </p>
                      <p className="font-['Plus_Jakarta_Sans'] text-slate-400 text-left text-[11px]" dir="ltr">
                        DE: {section.reviewQuestion.questionDe}
                      </p>
                    </div>

                    {isAnswerRevealed && (
                      <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700/80 text-xs space-y-2 pt-2 animate-fadeIn">
                        <div className="text-emerald-400 font-medium flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>الإجابة النموذجية (Musterantwort):</span>
                        </div>
                        <p className="text-slate-200 font-['Cairo'] text-right" dir="rtl">
                          {section.reviewQuestion.answerAr}
                        </p>
                        <p className="text-slate-400 font-['Plus_Jakarta_Sans'] text-left text-[11px]" dir="ltr">
                          DE: {section.reviewQuestion.answerDe}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
