import React, { useState } from 'react';
import { CLINICAL_CASES } from '../data/examCasesData';
import { ClinicalCase } from '../types';
import {
  GraduationCap,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Heart,
  Activity,
  ArrowRight
} from 'lucide-react';

export const ExamHub: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<ClinicalCase>(CLINICAL_CASES[0]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (submittedQuestions[questionId]) return; // already submitted
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmitAnswer = (questionId: string) => {
    if (!selectedAnswers[questionId]) return;
    setSubmittedQuestions(prev => ({ ...prev, [questionId]: true }));
  };

  const handleResetCase = () => {
    setSelectedAnswers({});
    setSubmittedQuestions({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-2">
          <span className="font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4" />
            KLINISCHE FALLSIMULATION & STAATSEXAMEN-TRAINING
          </span>
          <span className="text-slate-400 font-['Cairo']">
            المحاكاة السريرية للحالات الواقعية والتحضير للامتحان الحكومي للتمريض
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-left font-['Plus_Jakarta_Sans']" dir="ltr">
            <h2 className="text-2xl font-bold text-white tracking-tight">Klinische Fallbeispiele & Notfall-Algorithmen</h2>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Realistische Patientenszenarien zur Schulung des klinischen Blicks, der Prioritätensetzung nach ABCDE und der Entscheidungsfindung im Schichtdienst.
            </p>
          </div>
          <div className="text-right font-['Cairo']" dir="rtl">
            <h2 className="text-2xl font-bold text-cyan-400 tracking-tight">محاكاة سيناريوهات المرضى واتخاذ القرار السريري</h2>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
              حالات حرجة واقعية لاختبار سرعتك في التدخل، وتطبيق بروتوكول الأولويات التمريضية والإجابة النموذجية المعتمدة للامتحان النهائي.
            </p>
          </div>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex items-center gap-2 pt-6 overflow-x-auto no-scrollbar">
          <span className="text-xs text-slate-400 shrink-0">اختر سيناريو الحالة:</span>
          {CLINICAL_CASES.map(c => {
            const isSelected = selectedCase.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCase(c);
                  handleResetCase();
                }}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span>{c.titleAr.split(':')[0]}</span>
                <span className="hidden sm:inline text-[11px] font-normal opacity-80">
                  ({c.patientProfile.age} J.)
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Patient Profile & Telemetry Monitor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Vital Sign Monitor Box (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
            <span className="font-mono text-emerald-400 font-bold flex items-center gap-1.5">
              <Activity className="w-4 h-4 animate-pulse" />
              PATIENTEN-MONITOR (TELEMETRIE)
            </span>
            <span className="text-slate-400 font-mono">Bett 14</span>
          </div>

          {/* Vitals Grid */}
          <div className="grid grid-cols-2 gap-3 text-center font-mono">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Blutdruck (RR)</span>
              <strong className="text-rose-400 text-lg">{selectedCase.vitals.rr}</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Herzfrequenz (HF)</span>
              <strong className="text-emerald-400 text-lg">{selectedCase.vitals.hf} bpm</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Atemfrequenz (AF)</span>
              <strong className="text-cyan-400 text-lg">{selectedCase.vitals.af} /min</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Sauerstoff (SpO₂)</span>
              <strong className="text-blue-400 text-lg">{selectedCase.vitals.spo2}%</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Blutzucker (BZ)</span>
              <strong className="text-amber-400 text-lg">{selectedCase.vitals.bz} mg/dl</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Bewusstsein (GCS)</span>
              <strong className="text-purple-400 text-lg">{selectedCase.vitals.gcs} / 15</strong>
            </div>
          </div>

          {/* Patient demographics */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 text-xs space-y-1 text-right" dir="rtl">
            <div className="flex items-center justify-between text-slate-400">
              <span className="font-mono">{selectedCase.patientProfile.age} Jahre ({selectedCase.patientProfile.gender === 'm' ? 'Männlich' : 'Weiblich'})</span>
              <span className="font-bold text-white font-['Cairo']">بيانات المريض وموقع الحالة:</span>
            </div>
            <p className="text-slate-300 font-mono text-[11px] pt-1">{selectedCase.patientProfile.setting}</p>
          </div>
        </div>

        {/* Right: Clinical Scenario Description (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4 text-right" dir="rtl">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold block">الوصف السريري للحالة:</span>
            <h3 className="text-xl font-bold text-white font-['Cairo'] mt-0.5">
              {selectedCase.titleAr}
            </h3>
            <p className="text-xs text-slate-400 font-['Plus_Jakarta_Sans'] text-left mt-0.5" dir="ltr">
              {selectedCase.titleDe}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <strong className="text-amber-400 text-xs block font-['Cairo']">الشكوى الرئيسية (Hauptbeschwerde):</strong>
            <p className="text-xs text-slate-200 leading-relaxed font-['Cairo']">
              {selectedCase.patientProfile.chiefComplaintAr}
            </p>
            <p className="text-[11px] text-slate-400 font-['Plus_Jakarta_Sans'] text-left pt-2 border-t border-slate-800/80" dir="ltr">
              DE: {selectedCase.patientProfile.chiefComplaintDe}
            </p>
          </div>

          <div className="text-xs text-slate-200 leading-relaxed font-['Cairo']">
            <strong className="text-cyan-400 block mb-1">التقرير السريري للواقعة:</strong>
            {selectedCase.scenarioAr}
          </div>

          {/* Quick ABCDE Analysis Collapsible */}
          <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1.5">
            <span className="text-cyan-400 font-bold block font-mono">ABCDE-SCHNELLBEURTEILUNG:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
              <p><strong>A:</strong> {selectedCase.abcdeAnalysis.a}</p>
              <p><strong>B:</strong> {selectedCase.abcdeAnalysis.b}</p>
              <p><strong>C:</strong> {selectedCase.abcdeAnalysis.c}</p>
              <p><strong>D:</strong> {selectedCase.abcdeAnalysis.d}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Tree Interactive Questions */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-white font-['Cairo'] text-right" dir="rtl">
          الأسئلة السريرية التفاعلية وقرارات التمريض (Entscheidungsbaum):
        </h3>

        {selectedCase.questions.map((q, idx) => {
          const selectedOptId = selectedAnswers[q.id];
          const isSubmitted = !!submittedQuestions[q.id];
          const selectedOption = q.options.find(o => o.id === selectedOptId);

          return (
            <div
              key={q.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4 text-right"
              dir="rtl"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-cyan-400 font-bold">
                  سؤال تفاعلي رقم {idx + 1}
                </span>
                <span className="text-xs text-slate-400 font-mono">Fallentscheidung</span>
              </div>

              <div className="space-y-1">
                <h4 className="text-base font-bold text-white font-['Cairo']">
                  {q.promptAr}
                </h4>
                <p className="text-xs text-slate-400 font-['Plus_Jakarta_Sans'] text-left" dir="ltr">
                  DE: {q.promptDe}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5 pt-2">
                {q.options.map(opt => {
                  const isChecked = selectedOptId === opt.id;
                  let borderStyle = 'border-slate-800 bg-slate-950/60 hover:border-slate-700';

                  if (isSubmitted) {
                    if (opt.isCorrect) {
                      borderStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-200';
                    } else if (isChecked && !opt.isCorrect) {
                      borderStyle = 'border-rose-500 bg-rose-950/40 text-rose-200';
                    }
                  } else if (isChecked) {
                    borderStyle = 'border-cyan-500 bg-cyan-950/30 text-white ring-1 ring-cyan-500';
                  }

                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleSelectOption(q.id, opt.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer space-y-1.5 ${borderStyle}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                          isChecked ? 'border-cyan-400 bg-cyan-500' : 'border-slate-600'
                        }`}>
                          {isChecked && <div className="w-2 h-2 rounded-full bg-white"></div>}
                        </div>
                        <div className="text-xs space-y-1 flex-1">
                          <p className="font-semibold text-slate-100 font-['Cairo'] leading-relaxed">
                            {opt.textAr}
                          </p>
                          <p className="text-[11px] text-slate-400 font-['Plus_Jakarta_Sans'] text-left" dir="ltr">
                            DE: {opt.textDe}
                          </p>
                        </div>
                      </div>

                      {/* Rationale if submitted */}
                      {isSubmitted && (
                        <div className={`mt-2 p-3 rounded-lg text-xs pt-2 border-t ${
                          opt.isCorrect ? 'border-emerald-800 text-emerald-100' : 'border-rose-800 text-rose-200'
                        }`}>
                          <div className="flex items-center gap-1.5 font-bold mb-1">
                            {opt.isCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <XCircle className="w-4 h-4 text-rose-400" />
                            )}
                            <span>{opt.isCorrect ? 'التفسير العلمي الصحيح:' : 'لماذا هذا الاختيار خاطئ أو خطير؟'}</span>
                          </div>
                          <p className="font-['Cairo']">{opt.rationaleAr}</p>
                          <p className="text-[10px] text-slate-400 font-['Plus_Jakarta_Sans'] text-left pt-1" dir="ltr">
                            DE: {opt.rationaleDe}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit Button */}
              {!isSubmitted ? (
                <div className="pt-2">
                  <button
                    disabled={!selectedOptId}
                    onClick={() => handleSubmitAnswer(q.id)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      selectedOptId
                        ? 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg cursor-pointer'
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    تأكيد الإجابة وتقييم القرار السريري
                  </button>
                </div>
              ) : (
                <div className="pt-2 text-xs flex items-center justify-between text-slate-400">
                  <span>تم التقييم والتسجيل</span>
                  <button
                    onClick={() => {
                      setSubmittedQuestions(prev => ({ ...prev, [q.id]: false }));
                      setSelectedAnswers(prev => {
                        const copy = { ...prev };
                        delete copy[q.id];
                        return copy;
                      });
                    }}
                    className="text-cyan-400 hover:underline"
                  >
                    إعادة المحاولة ↻
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
