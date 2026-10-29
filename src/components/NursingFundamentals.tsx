import React, { useState } from 'react';
import {
  Heart,
  Activity,
  Droplets,
  Thermometer,
  Wind,
  Syringe,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Info,
  ShieldCheck,
  Scale
} from 'lucide-react';

export const NursingFundamentals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vitals' | 'injections' | 'quick_card'>('vitals');
  const [activeVitalCategory, setActiveVitalCategory] = useState<'pulse' | 'bp' | 'glucose' | 'respiration' | 'temp'>('pulse');
  const [activeInjectionType, setActiveInjectionType] = useState<'sc' | 'im' | 'iv' | 'id'>('sc');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Main Section Header Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-1">
          <span className="font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            PFLEGERISCHE BASIS- & NORMWERTE · أساسيات التمريض السريري
          </span>
          <span className="text-slate-400 font-['Cairo']">
            الدليل المرجعي السريع للعلامات الحيوية الطبيعية ودليل الحقن الشامل
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-left font-['Plus_Jakarta_Sans']" dir="ltr">
            <h1 className="text-2xl font-bold text-white tracking-tight">Grundlagen der Pflege & Vitalparameter</h1>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Referenzbereiche für Herzfrequenz, Blutdruck, Blutzucker und Atemfrequenz sowie ein klinischer Leitfaden zu Injektionsarten, Nadellängen und Applikationstechniken.
            </p>
          </div>
          <div className="text-right font-['Cairo']" dir="rtl">
            <h2 className="text-2xl font-bold text-cyan-400 tracking-tight">أساسيات التمريض: المعدلات الطبيعية ودليل الحقن</h2>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
              مرجع سريري فوري ودقيق للمعدلات الطبيعية (النبض بالدقيقة والثانية، ضغط الدم، سكر الدم، التنفس، والحرارة)، وتفاصيل الحقن (كم ملمتر، أين تؤخذ، وكيف خطوة بخطوة).
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-4 border-t border-slate-800/80">
          <button
            onClick={() => setActiveTab('vitals')}
            className={`p-3 rounded-xl border text-center transition-all flex items-center justify-center gap-2 ${
              activeTab === 'vitals'
                ? 'bg-cyan-500/15 border-cyan-500 text-cyan-300 font-bold shadow-lg'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-['Cairo']">المعدلات الطبيعية للعلامات الحيوية (Normwerte)</span>
          </button>

          <button
            onClick={() => setActiveTab('injections')}
            className={`p-3 rounded-xl border text-center transition-all flex items-center justify-center gap-2 ${
              activeTab === 'injections'
                ? 'bg-cyan-500/15 border-cyan-500 text-cyan-300 font-bold shadow-lg'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Syringe className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-['Cairo']">دليل الحقن: المقاسات، المواضع، والكيفية</span>
          </button>

          <button
            onClick={() => setActiveTab('quick_card')}
            className={`p-3 rounded-xl border text-center transition-all flex items-center justify-center gap-2 ${
              activeTab === 'quick_card'
                ? 'bg-cyan-500/15 border-cyan-500 text-cyan-300 font-bold shadow-lg'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Scale className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-['Cairo']">بطاقة الجيب السريرية السريعة (Pocket Card)</span>
          </button>
        </div>
      </div>

      {/* TAB 1: VITAL SIGNS & NORMAL VALUES */}
      {activeTab === 'vitals' && (
        <div className="space-y-6">
          {/* Sub-selector for Vital Sign Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setActiveVitalCategory('pulse')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                activeVitalCategory === 'pulse'
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 ring-1 ring-rose-500/40'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Heart className="w-4 h-4 text-rose-400" />
              <span>نبض القلب (Herzfrequenz / Puls)</span>
            </button>

            <button
              onClick={() => setActiveVitalCategory('bp')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                activeVitalCategory === 'bp'
                  ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 ring-1 ring-cyan-500/40'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>ضغط الدم (Blutdruck - RR)</span>
            </button>

            <button
              onClick={() => setActiveVitalCategory('glucose')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                activeVitalCategory === 'glucose'
                  ? 'bg-amber-950/80 border-amber-500 text-amber-300 ring-1 ring-amber-500/40'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Droplets className="w-4 h-4 text-amber-400" />
              <span>سكر الدم (Blutzucker - BZ)</span>
            </button>

            <button
              onClick={() => setActiveVitalCategory('respiration')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                activeVitalCategory === 'respiration'
                  ? 'bg-blue-950/80 border-blue-500 text-blue-300 ring-1 ring-blue-500/40'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Wind className="w-4 h-4 text-blue-400" />
              <span>التنفس والأكسجين (Atmung & SpO₂)</span>
            </button>

            <button
              onClick={() => setActiveVitalCategory('temp')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                activeVitalCategory === 'temp'
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 ring-1 ring-emerald-500/40'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Thermometer className="w-4 h-4 text-emerald-400" />
              <span>حرارة الجسم (Körpertemperatur)</span>
            </button>
          </div>

          {/* 1. PULSE & HEART RATE */}
          {activeVitalCategory === 'pulse' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4 text-right" dir="rtl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-rose-400 font-bold uppercase">HERZFREQUENZ (HF) & PULS</span>
                  <h3 className="text-lg font-bold text-white font-['Cairo']">
                    عدد ضربات ونبضات القلب (في الدقيقة وفي الثانية) حسب العمر
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-['Cairo']">
                  معدل ضربات القلب الطبيعي للبالغ المستريح هو <strong>60 إلى 80 ضربة في الدقيقة</strong>. وبالتحويل إلى الثانية، فهذا يعني أن القلب ينبض بمعدل <strong>نبضة واحدة إلى 1.3 نبضة في كل ثانية</strong> (أي ضربة كل 0.75 إلى 1 ثانية).
                </p>

                {/* Age Reference Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-right border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono">
                        <th className="p-2.5 text-right font-['Cairo']">الفئة العمرية (Altersgruppe)</th>
                        <th className="p-2.5 text-center font-mono">النبض بالدقيقة (Schläge / min)</th>
                        <th className="p-2.5 text-center font-mono">النبض في الثانية الواحدة</th>
                        <th className="p-2.5 text-right font-['Cairo']">الملاحظات السريرية التمريضية</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono text-slate-200">
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-white font-['Cairo']">حديثو الولادة (Neugeborene: 0–28 Tage)</td>
                        <td className="p-2.5 text-center text-rose-400 font-bold">120 – 160 bpm</td>
                        <td className="p-2.5 text-center text-cyan-300">2 إلى 2.7 نبضة / ثانية</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">معدل مرتفع فيزيولوجياً لصغر حجم القلب وسرعة الأيض.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-white font-['Cairo']">الرضع (Säuglinge: 1–12 Monate)</td>
                        <td className="p-2.5 text-center text-rose-400 font-bold">100 – 140 bpm</td>
                        <td className="p-2.5 text-center text-cyan-300">1.6 إلى 2.3 نبضة / ثانية</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">يُقاس قميًا (apikal) بالسماعة الطبية على قمة القلب.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-white font-['Cairo']">الأطفال الصغار (Kleinkinder: 1–6 Jahre)</td>
                        <td className="p-2.5 text-center text-rose-400 font-bold">90 – 120 bpm</td>
                        <td className="p-2.5 text-center text-cyan-300">1.5 إلى 2.0 نبضة / ثانية</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">يتأثر سريعاً بالبكاء والخوف والحمى.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40 bg-cyan-950/20 border-cyan-800/40">
                        <td className="p-2.5 font-bold text-cyan-300 font-['Cairo']">البالغون في حالة الراحة (Erwachsene)</td>
                        <td className="p-2.5 text-center text-emerald-400 font-bold text-sm">60 – 80 bpm</td>
                        <td className="p-2.5 text-center text-emerald-300 font-bold">~1 إلى 1.3 نبضة / ثانية</td>
                        <td className="p-2.5 text-slate-200 font-['Cairo']">المعيار المعتمد؛ أقل من 60 = بطء، أعلى من 100 = تسرع.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-white font-['Cairo']">كبار السن (Senioren: ab 70 Jahre)</td>
                        <td className="p-2.5 text-center text-rose-400 font-bold">70 – 90 bpm</td>
                        <td className="p-2.5 text-center text-cyan-300">~1.2 إلى 1.5 نبضة / ثانية</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">انخفاض مرونة الشرايين وتغيرات التوصيل الكهربائي.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-white font-['Cairo']">الرياضيون المحترفون (Leistungssportler)</td>
                        <td className="p-2.5 text-center text-blue-400 font-bold">40 – 55 bpm</td>
                        <td className="p-2.5 text-center text-blue-300">~0.7 إلى 0.9 نبضة / ثانية</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">بطء نبض رياضي فيزيولوجي سليم (Sportlerherz).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pulse Assessment Points (Qualität) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <strong className="text-cyan-400 block font-['Cairo'] text-xs">1. سرعة النبض (Herzfrequenz):</strong>
                    <p className="text-[11px] text-slate-300">
                      • <strong>Bradykardie</strong>: &lt; 60 bpm (بطء نبض).<br />
                      • <strong>Normokardie</strong>: 60–80 bpm (طبيعي).<br />
                      • <strong>Tachykardie</strong>: &gt; 100 bpm (تسرع نبض).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <strong className="text-cyan-400 block font-['Cairo'] text-xs">2. انتظام النبض (Rhythmus):</strong>
                    <p className="text-[11px] text-slate-300">
                      • <strong>Regelmäßig</strong>: فترات متساوية بين النبضات.<br />
                      • <strong>Arrhythmisch</strong>: نبضات مبكرة (Extrasystolen) أو عشوائية تامة (Vorhofflimmern).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <strong className="text-cyan-400 block font-['Cairo'] text-xs">3. قوة وامتلاء النبض (Pulsqualität):</strong>
                    <p className="text-[11px] text-slate-300">
                      • <strong>Gut gefüllt / kräftig</strong>: نبض واضح وقوي.<br />
                      • <strong>Fadenförmig / weich</strong>: نبض خيطي ضعيف يختفي بأدنى ضغط (علامة صدمة ونزيف).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. BLOOD PRESSURE (RR) */}
          {activeVitalCategory === 'bp' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4 text-right" dir="rtl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase">BLUTDRUCK (RR) NACH ESC/DGK</span>
                  <h3 className="text-lg font-bold text-white font-['Cairo']">
                    تصنيف درجات ضغط الدم الشرياني (الانقباضي والانبساطي mmHg)
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-right border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono">
                        <th className="p-2.5 text-right font-['Cairo']">التصنيف السريري الألماني (Kategorie)</th>
                        <th className="p-2.5 text-center font-mono">الانقباضي (Systolisch)</th>
                        <th className="p-2.5 text-center font-mono">الانبساطي (Diastolisch)</th>
                        <th className="p-2.5 text-right font-['Cairo']">الإجراء التمريضي الموصى به</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono text-slate-200">
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-blue-400 font-['Cairo']">انخفاض ضغط الدم (Hypotonie)</td>
                        <td className="p-2.5 text-center text-blue-300">&lt; 100–105 mmHg</td>
                        <td className="p-2.5 text-center text-blue-300">&lt; 60 mmHg</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">فحص الدوخة، شرب سوائل كافية، ورفع الساقين عند الهبوط الحاد.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40 bg-emerald-950/20">
                        <td className="p-2.5 font-bold text-emerald-400 font-['Cairo']">المستوى المثالي (Optimal)</td>
                        <td className="p-2.5 text-center text-emerald-300">&lt; 120 mmHg</td>
                        <td className="p-2.5 text-center text-emerald-300">&lt; 80 mmHg</td>
                        <td className="p-2.5 text-slate-200 font-['Cairo']">أفضل معدل لحماية القلب والأوعية والكلى.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-white font-['Cairo']">طبيعي (Normal)</td>
                        <td className="p-2.5 text-center text-slate-200">120 – 129 mmHg</td>
                        <td className="p-2.5 text-center text-slate-200">80 – 84 mmHg</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">مستوى سليم فيزيولوجياً.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-amber-300 font-['Cairo']">طبيعي مرتفع (Hoch-normal)</td>
                        <td className="p-2.5 text-center text-amber-300">130 – 139 mmHg</td>
                        <td className="p-2.5 text-center text-amber-300">85 – 89 mmHg</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">مراقبة منتظمة وتعديل نمط الحياة (تقليل الملح والوزن).</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-amber-400 font-['Cairo']">ارتفاع ضغط درجة 1 (Hypertonie Grad 1)</td>
                        <td className="p-2.5 text-center text-amber-400">140 – 159 mmHg</td>
                        <td className="p-2.5 text-center text-amber-400">90 – 99 mmHg</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">عرض على الطبيب لبدء العلاج الدوائي المانع للتصلب.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-rose-400 font-['Cairo']">ارتفاع ضغط درجة 2 (Hypertonie Grad 2)</td>
                        <td className="p-2.5 text-center text-rose-400">160 – 179 mmHg</td>
                        <td className="p-2.5 text-center text-rose-400">100 – 109 mmHg</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">تعديل الأدوية الخافضة للضغط ومتابعة وظائف الكلى.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40 bg-rose-950/40">
                        <td className="p-2.5 font-bold text-rose-400 font-['Cairo']">أزمة فرط ضغط دم حرجة (Hypertensive Krise)</td>
                        <td className="p-2.5 text-center text-rose-400 font-bold">&gt; 220 mmHg</td>
                        <td className="p-2.5 text-center text-rose-400 font-bold">&gt; 120 mmHg</td>
                        <td className="p-2.5 text-rose-200 font-['Cairo']">🚨 طوارئ قصوى! إبلاغ الطبيب الفوري لتفادي نزيف الدماغ والجلطة.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <span className="text-cyan-400 font-bold block">ضغط النبض (Pulsdruck / Blutdruckamplitude):</span>
                  <p>
                    هو الفارق الحسابي بين الضغط الانقباضي والانبساطي (مثال: 120 - 80 = 40 mmHg). القيمة الطبيعية بين 30 إلى 50 mmHg. إذا زاد عن 60 mmHg فهذا يشير لتصلب الشرايين المتقدم أو قصور الصمام الأبهري.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 3. BLOOD GLUCOSE (BZ) */}
          {activeVitalCategory === 'glucose' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4 text-right" dir="rtl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">BLUTZUCKER (BZ) REFERENZ</span>
                  <h3 className="text-lg font-bold text-white font-['Cairo']">
                    معدلات سكر الدم الطبيعية والحدود الحرجة (mg/dl و mmol/l)
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold text-xs block font-['Cairo']">1. سكر الصيام (Nüchternblutzucker):</span>
                    <p className="text-xl font-bold font-mono text-white">70 – 99 mg/dl</p>
                    <p className="text-xs text-slate-400 font-mono">3.9 – 5.5 mmol/l</p>
                    <span className="text-[11px] text-slate-400 block pt-1 border-t border-slate-800">
                      بعد صيام 8 ساعات على الأقل.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold text-xs block font-['Cairo']">2. بعد الأكل بساعتين (postprandial):</span>
                    <p className="text-xl font-bold font-mono text-white">&lt; 140 mg/dl</p>
                    <p className="text-xs text-slate-400 font-mono">&lt; 7.8 mmol/l</p>
                    <span className="text-[11px] text-slate-400 block pt-1 border-t border-slate-800">
                      لدى غير المصابين بالسكري.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-purple-400 font-bold text-xs block font-['Cairo']">3. السكر التراكمي (HbA1c):</span>
                    <p className="text-xl font-bold font-mono text-white">&lt; 5.7 %</p>
                    <p className="text-xs text-slate-400 font-mono">&lt; 39 mmol/mol</p>
                    <span className="text-[11px] text-slate-400 block pt-1 border-t border-slate-800">
                      يعكس متوسط السكر لآخر 8 إلى 12 أسبوعاً.
                    </span>
                  </div>
                </div>

                {/* Critical Glucose Limits Table */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-rose-400 text-xs block font-['Cairo']">الحدود الخطيرة والإنذارات السريرية:</strong>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-900/40 text-slate-200">
                      <strong className="text-rose-400 block font-mono">&lt; 70 mg/dl (3.9 mmol/l) · هبوط سكر</strong>
                      تعرق بارد، ارتعاش، خفقان، وجوع شديد. يجب إعطاء سكريات سريعة فوراً.
                    </div>

                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-900/60 text-slate-200">
                      <strong className="text-rose-400 block font-mono">&lt; 40–50 mg/dl · هبوط حاد مهدد للوعي</strong>
                      خطر التشنجات والغيبوبة السكرية (Hypoglykämischer Schock). يمنع إعطاء سوائل بالفم!
                    </div>

                    <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-900/40 text-slate-200">
                      <strong className="text-amber-400 block font-mono">&gt; 180 mg/dl · عتبة الكلى (Nierenschwelle)</strong>
                      تتجاوز الكلى قدرتها على امتصاص السكر ويبدأ بالظهور في البول (Glukosurie) مسبباً كثرة التبول والعطش.
                    </div>

                    <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-900/40 text-slate-200">
                      <strong className="text-rose-400 block font-mono">&gt; 250 mg/dl · خطر الحماض الكيتوني (DKA)</strong>
                      رائحة الأسيتون في النفس، تنفس كوسماول (Kussmaul-Atmung)، وجفاف حاد يتطلب تدخلاً بالسوائل والإنسولين.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. RESPIRATION & SPO2 */}
          {activeVitalCategory === 'respiration' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4 text-right" dir="rtl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-blue-400 font-bold uppercase">RESPIRATION (AF) & SPO₂</span>
                  <h3 className="text-lg font-bold text-white font-['Cairo']">
                    معدل مرات التنفس في الدقيقة ونسبة تشبع الأكسجين
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                    <span className="text-blue-400 font-bold block text-sm font-['Cairo']">معدل التنفس حسب العمر (Atemfrequenz / min):</span>
                    <ul className="space-y-1.5 text-slate-300">
                      <li>• <strong>حديثو الولادة (Neugeborene)</strong>: 30 إلى 50 نفس / دقيقة.</li>
                      <li>• <strong>الأطفال (Kleinkinder)</strong>: 20 إلى 30 نفس / دقيقة.</li>
                      <li>• <strong>البالغون في الراحة (Erwachsene)</strong>: <strong className="text-emerald-400 text-sm font-mono">12 إلى 20 نفس / دقيقة</strong>.</li>
                      <li>• <strong>بطء التنفس (Bradypnoe)</strong>: أقل من 10 أنفاس في الدقيقة (تسمم أفيوني أو سكتة).</li>
                      <li>• <strong>تسرع التنفس (Tachypnoe)</strong>: أكثر من 20 نفس في الدقيقة (ألم، حمى، صدمة، نقص أكسجة).</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                    <span className="text-cyan-400 font-bold block text-sm font-['Cairo']">تشبع الأكسجين المحيطي (SpO₂ %):</span>
                    <ul className="space-y-1.5 text-slate-300">
                      <li>• <strong>الأصحاء والبالغون</strong>: <strong className="text-emerald-400 text-sm font-mono">94% إلى 98%</strong>.</li>
                      <li>• <strong>مرضى الانسداد الرئوي المزمن (COPD)</strong>: <strong className="text-amber-400 text-sm font-mono">88% إلى 92%</strong> (الهدف لتفادي إخماد مركز التنفس التلقائي!).</li>
                      <li>• <strong>نقص أكسجة طفيف (Leichte Hypoxämie)</strong>: 90% إلى 93%.</li>
                      <li>• <strong>نقص أكسجة حاد حرج (Schwere Hypoxämie)</strong>: أقل من 90% (يتطلب إعطاء أكسجين فوري وتصعيد طبي).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. TEMPERATURE */}
          {activeVitalCategory === 'temp' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4 text-right" dir="rtl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">KÖRPERTEMPERATUR-STADIEN</span>
                  <h3 className="text-lg font-bold text-white font-['Cairo']">
                    درجات حرارة الجسم السريرية وتصنيف مراحل الحمى
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-right border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono">
                        <th className="p-2.5 text-right font-['Cairo']">المرحلة السريرية</th>
                        <th className="p-2.5 text-center font-mono">المجال الحراري (°C)</th>
                        <th className="p-2.5 text-right font-['Cairo']">التوصيف والإجراء التمريضي</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono text-slate-200">
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-blue-400 font-['Cairo']">انخفاض الحرارة (Hypothermie)</td>
                        <td className="p-2.5 text-center text-blue-300 font-bold">&lt; 35.0 °C</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">تدفئة تدريجية عبر أغطية حرارية لتجنب اضطراب النظم البطيني.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40 bg-emerald-950/20">
                        <td className="p-2.5 font-bold text-emerald-400 font-['Cairo']">الحرارة الطبيعية (Normaltemperatur)</td>
                        <td className="p-2.5 text-center text-emerald-400 font-bold">36.0 – 37.4 °C</td>
                        <td className="p-2.5 text-slate-200 font-['Cairo']">الحالة الطبيعية المتوازنة في الجسم.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-amber-300 font-['Cairo']">ارتفاع خفيف / ما قبل الحمى (Subfebril)</td>
                        <td className="p-2.5 text-center text-amber-300">37.5 – 38.0 °C</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">مراقبة دورية والبحث عن بؤر التهابية محتملة.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-amber-400 font-['Cairo']">حمى خفيفة إلى معتدلة (Leichtes Fieber)</td>
                        <td className="p-2.5 text-center text-amber-400 font-bold">38.1 – 39.0 °C</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">راحة في السرير، تعويض السوائل المفقودة بالتعرق، وكمادات فاترة.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="p-2.5 font-bold text-rose-400 font-['Cairo']">حمى شديدة (Hohes Fieber)</td>
                        <td className="p-2.5 text-center text-rose-400 font-bold">39.1 – 39.9 °C</td>
                        <td className="p-2.5 text-slate-300 font-['Cairo']">خافضات الحرارة (باراسيتامول / نوفالجين) بأمر الطبيب ومراقبة الوعي.</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40 bg-rose-950/40">
                        <td className="p-2.5 font-bold text-rose-400 font-['Cairo']">فرط حرارة مهدد للحياة (Hyperpyrexie)</td>
                        <td className="p-2.5 text-center text-rose-400 font-bold">&ge; 40.0 °C</td>
                        <td className="p-2.5 text-rose-200 font-['Cairo']">🚨 خطر تخثر بروتينات الدماغ وتشنجات عصبية! تبريد فيزيائي عاجل واستدعاء الطبيب.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: COMPREHENSIVE INJECTIONS GUIDE */}
      {activeTab === 'injections' && (
        <div className="space-y-6">
          {/* Quick Comparison Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'sc', nameDe: 'Subkutan (s.c.)', nameAr: 'تحت الجلد', color: 'border-amber-500 text-amber-400', needle: '4–16 mm' },
              { id: 'im', nameDe: 'Intramuskulär (i.m.)', nameAr: 'في العضلة', color: 'border-rose-500 text-rose-400', needle: '25–40 mm' },
              { id: 'iv', nameDe: 'Intravenös (i.v.)', nameAr: 'في الوريد', color: 'border-blue-500 text-blue-400', needle: '19–45 mm' },
              { id: 'id', nameDe: 'Intradermal (i.d.)', nameAr: 'داخل الأدمة', color: 'border-emerald-500 text-emerald-400', needle: '4–10 mm' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveInjectionType(item.id as 'sc' | 'im' | 'iv' | 'id')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  activeInjectionType === item.id
                    ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-lg ring-1 ring-cyan-500'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="text-xs font-bold block font-['Cairo']">{item.nameAr}</span>
                <span className="text-[11px] font-mono block text-slate-400">{item.nameDe}</span>
                <span className="text-[10px] font-mono text-cyan-400 mt-1 block">طول الإبرة: {item.needle}</span>
              </button>
            ))}
          </div>

          {/* Detailed Guide for Active Injection Type */}
          {activeInjectionType === 'sc' && (
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-5 text-right" dir="rtl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">SUBKUTANE INJEKTION (S.C.)</span>
                <h3 className="text-xl font-bold text-white font-['Cairo']">
                  الحقن تحت الجلد: المقاسات، المواضع، وطريقة الحقن
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-['Cairo']">
                {/* Needle length & gauge */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-cyan-400 block text-sm">📏 كم مليمتر؟ (طول ومقاس الإبرة):</strong>
                  <p className="text-slate-200">
                    • <strong>طول الإبرة (Nadellänge)</strong>: من <strong>4 إلى 12 مم</strong> لأقلام الإنسولين الحديثة (Insulin-Pens)، ومن <strong>12 إلى 16 مم</strong> للإبر المستقلة وحقن الهيبارين.
                  </p>
                  <p className="text-slate-200">
                    • <strong>سُمك وقطر الإبرة (Gauge)</strong>: دقيقة جداً تتراوح بين <strong>25G إلى 31G</strong> (أي قطر خارجي يبلغ 0.25 إلى 0.5 ملم فقط لتجنب الألم وتلف الأنسجة).
                  </p>
                </div>

                {/* Where to inject */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-amber-400 block text-sm">📍 أين تؤخذ تشريحياً؟ (Injektionsorte):</strong>
                  <p className="text-slate-200">
                    1. <strong>جدار البطن (Bauchdecke)</strong>: المنطقة الأسرع امتصاصاً؛ مع الابتعاد مسافة لا تقل عن <strong>2 إلى 5 سم</strong> عن السرة (Nabel) لتجنب الأوعية الدموية الكبيرة.
                  </p>
                  <p className="text-slate-200">
                    2. <strong>السطح الخارجي والعلوي للفخذ (Oberschenkel-Außenseite)</strong>: امتصاص أبطأ وأكثر ثباتاً (مناسب لإنسولين المساء البطيء).
                  </p>
                  <p className="text-slate-200">
                    3. <strong>خلف الذراع (Oberarm-Rückseite)</strong>: في النسيج الشحمي السائب.
                  </p>
                  <span className="text-[11px] text-amber-300 block pt-1 border-t border-slate-800">
                    قاعدة ذهبية: يجب تدوير موضع الحقن دائماً (Rotationsschema) لتفادي التليف وتضخم النسيج الشحمي (Lipohypertrophie).
                  </span>
                </div>

                {/* How to inject */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-emerald-400 block text-sm">💉 كيف تؤخذ خطوة بخطوة؟ (Durchführung):</strong>
                  <p className="text-slate-200">
                    1. تطهير الجلد بالمسح والانتظار <strong>30 ثانية</strong> حتى يجف الكحول تماماً.
                  </p>
                  <p className="text-slate-200">
                    2. رفع ثنية جلدية لطيفة باليد غير المهيمنة بين الإبهام والسبابة (Hautfalte bilden).
                  </p>
                  <p className="text-slate-200">
                    3. إدخال الإبرة بزاوية <strong>45 درجة</strong> (أو <strong>90 درجة</strong> إذا كانت إبرة الإنسولين قصيرة 4–6 مم).
                  </p>
                  <p className="text-slate-200">
                    4. <strong className="text-rose-400">لا يُجرى سحب راجع (Keine Aspiration)</strong> عند حقن الإنسولين والهيبارين المعبأ مسبقاً منعاً لحدوث كدمات وتمزق للشعيرات.
                  </p>
                  <p className="text-slate-200">
                    5. حقن المحلول بهدوء، والانتظار <strong>10 ثوانٍ</strong> قبل سحب الإبرة لضمان اكتمال تسرب الجرعة، ثم التخلص في حاوية الأدوات الحادة.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeInjectionType === 'im' && (
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-5 text-right" dir="rtl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-rose-400 font-bold uppercase">INTRAMUSKULÄRE INJEKTION (I.M.)</span>
                <h3 className="text-xl font-bold text-white font-['Cairo']">
                  الحقن العضلي: المقاسات، تحديد المواضع الآمنة، وتفادي عصب النسا
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-['Cairo']">
                {/* Needle length & gauge */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-cyan-400 block text-sm">📏 كم مليمتر؟ (طول ومقاس الإبرة):</strong>
                  <p className="text-slate-200">
                    • <strong>طول الإبرة</strong>: طويل لاختراق الدهون والوصول لعمق العضلة:
                    <br />- عضلة الكتف (Deltoid): <strong>25 إلى 30 مم</strong>.
                    <br />- العضلة الألوية (Ventrogluteal): <strong>40 إلى 50 مم</strong> (وللمرضى الذين يعانون من سمنة مفرطة حتى <strong>70 مم</strong>).
                  </p>
                  <p className="text-slate-200">
                    • <strong>القطر (Gauge)</strong>: مقاس <strong>20G إلى 23G</strong> (قطر 0.6 إلى 0.9 ملم) للسماح بتدفق الأدوية الزيتية واللقاحات والمضادات الحيوية.
                  </p>
                </div>

                {/* Where to inject */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-rose-400 block text-sm">📍 أين تؤخذ تشريحياً بالتفصيل؟ (Injektionsorte):</strong>
                  <p className="text-slate-200">
                    1. <strong>المنطقة الألوية البطنية حسب فون هوخشتيتر (Ventrogluteal nach von Hochstetter)</strong>: أكثر المواضع أماناً في ألمانيا! وضع راحة اليد اليسرى على المدور الكبير (Trochanter major) لفخذ المريض الأيمن، وتوجيه السبابة نحو الشوكة الحرقفية (Spina iliaca)، وفتح الوسطى على عرف الحرقفة لتشكيل حرف V، والحقن في مركز المثلث. آمن تماماً وبعيد عن العصب الوركي.
                  </p>
                  <p className="text-slate-200">
                    2. <strong>العضلة الدالية بالكتف (M. deltoideus)</strong>: على بعد <strong>2 إلى 3 أصابع (3–5 سم)</strong> أسفل عظم الأخرم (Akromion). الحد الأقصى للحجم: <strong>1 إلى 2 مل فقط</strong> (اللقاحات).
                  </p>
                  <p className="text-slate-200">
                    3. <strong>العضلة المتسعة الوحشية بالفخذ (M. vastus lateralis)</strong>: خيار أساسي للأطفال والرضع.
                  </p>
                </div>

                {/* How to inject */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-emerald-400 block text-sm">💉 كيف تؤخذ خطوة بخطوة؟ (Durchführung):</strong>
                  <p className="text-slate-200">
                    1. تطهير موضعي مرتين والانتظار حتى يجف.
                  </p>
                  <p className="text-slate-200">
                    2. شد الجلد بإحكام بين الإبهام والسبابة لتثبيت العضلة (Haut straffen).
                  </p>
                  <p className="text-slate-200">
                    3. إدخال الإبرة عمودياً بالكامل بزاوية <strong>90 درجة</strong> بسرعة وحزم مع ترك ثلث طول الإبرة خارج الجلد تحسباً لانكسارها النادر.
                  </p>
                  <p className="text-slate-200">
                    4. <strong className="text-amber-300">السحب الراجع (Aspiration)</strong>: سحب المكبس بهدوء لمدة ثانية أو ثانيتين للتأكد من عدم خروج دم في المحقنة (إذا ظهر دم، تُسحب الإبرة فوراً وتُرمى ويُعاد الحقن بمحقنة جديدة).
                  </p>
                  <p className="text-slate-200">
                    5. الحقن ببطء بمعدل <strong>1 مل كل 10 ثوانٍ</strong> لتوزيع الدواء وتقليل الألم، ثم السحب والضغط دون تدليك.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeInjectionType === 'iv' && (
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-5 text-right" dir="rtl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-blue-400 font-bold uppercase">INTRAVENÖSER ZUGANG (I.V.)</span>
                <h3 className="text-xl font-bold text-white font-['Cairo']">
                  الحقن والقسطرة الوريدية: المقاسات، اختيار الأوردة، وتقنية الإدخال
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-['Cairo']">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-cyan-400 block text-sm">📏 كم مليمتر؟ (طول ومقاس القسطرة):</strong>
                  <p className="text-slate-200">
                    • <strong>طول القسطرة (Katheterlänge)</strong>: من <strong>19 مم</strong> (للأوردة الصغيرة والأطفال 24G) إلى <strong>32 مم</strong> (المعيار القياسي 20G وردي و18G أخضر)، ويصل إلى <strong>45 مم</strong> في قساطر الطوارئ الكبرى (14G برتقالي و16G رمادي).
                  </p>
                  <p className="text-slate-200">
                    • القطر: 0.7 مم (أصفر 24G) حتى 2.1 مم (برتقالي 14G).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-blue-400 block text-sm">📍 أين تؤخذ تشريحياً؟ (Venenwahl):</strong>
                  <p className="text-slate-200">
                    1. <strong>أوردة الساعد (Vena cephalica و Vena basilica)</strong>: المكان المفضل والمثالي لأنها مستقرة ولا تعيق حركة مفصل المريض.
                  </p>
                  <p className="text-slate-200">
                    2. <strong>ظهر اليد (Handrücken - Rete venosum dorsale)</strong>: شائعة وواضحة الرؤية، لكنها قد تكون مؤلمة وأكثر حركة.
                  </p>
                  <p className="text-slate-200">
                    3. <strong>ثنية المرفق (Vena mediana cubiti)</strong>: للطوارئ وسحب عينات الدم السريعة، وتُتجنب في التنويم الطويل لانثنائها مع حركة الذراع.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-emerald-400 block text-sm">💉 كيف تُركب خطوة بخطوة؟ (Vorgehensweise):</strong>
                  <p className="text-slate-200">
                    1. وضع التورنيكيه (Stauschlauch) أعلى الموضع بمسافة 10–15 سم، وجس الوريد بالإصبع للتأكد من ارتداده ومرونته.
                  </p>
                  <p className="text-slate-200">
                    2. تطهير الجلد بالبخاخ وتركه يجف تماماً.
                  </p>
                  <p className="text-slate-200">
                    3. شد الجلد لأسفل بإبهام اليد الحرة لمنع دوران الوريد (Vene fixieren).
                  </p>
                  <p className="text-slate-200">
                    4. الدخول بزاوية <strong>20 إلى 25 درجة</strong> بحيث يكون سن الإبرة المائل متجهاً لأعلى (Schliff nach oben).
                  </p>
                  <p className="text-slate-200">
                    5. فور تدفق قطرة الدم في الغرفة الشفافة (Flashback chamber)، خفض الزاوية بموازاة الجلد تماماً ودفع القسطرة البلاستيكية للأمام داخل الوريد وسحب الإبرة المعدنية للخلف.
                  </p>
                  <p className="text-slate-200">
                    6. فك التورنيكيه، وتثبيت الكانيولا باللاصق الشفاف المعقم، وغسلها بـ 10 مل محلول ملحي (NaCl 0.9%) للتأكد من عدم تسرب السائل تحت الجلد.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeInjectionType === 'id' && (
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-5 text-right" dir="rtl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase">INTRADERMALE INJEKTION (I.D.)</span>
                <h3 className="text-xl font-bold text-white font-['Cairo']">
                  الحقن داخل الأدمة: اختبارات التحسس وتكوين الحويصلة (Quaddel)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-['Cairo']">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-cyan-400 block text-sm">📏 كم مليمتر؟ (طول ومقاس الإبرة):</strong>
                  <p className="text-slate-200">
                    • <strong>طول الإبرة</strong>: قصيرة ودقيقة للغاية تتراوح بين <strong>4 إلى 10 مم</strong>.
                  </p>
                  <p className="text-slate-200">
                    • <strong>القطر</strong>: مقاس <strong>26G إلى 27G</strong> مخصص للحقن المجهري (حجم المحقون 0.05 إلى 0.1 مل فقط).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-emerald-400 block text-sm">📍 أين تؤخذ تشريحياً؟ (Injektionsort):</strong>
                  <p className="text-slate-200">
                    • <strong>السطح الداخلي للساعد (Volarseite des Unterarms)</strong>: خالي من الشعر وواضح الرؤية والأوعية الدموية سطحية.
                  </p>
                  <p className="text-slate-200">
                    • أعلى الظهر تحت عظم لوح الكتف في بعض اختبارات الحساسية التخصصية.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <strong className="text-amber-400 block text-sm">💉 كيف تؤخذ خطوة بخطوة؟ (Technik):</strong>
                  <p className="text-slate-200">
                    1. إمساك المحقنة بحيث تكون شفرة الإبرة المائلة متجهة لأعلى تماماً (Schliff nach oben).
                  </p>
                  <p className="text-slate-200">
                    2. الدخول بزاوية مسطحة للغاية وشبه موازية للجلد تتراوح بين <strong>10 إلى 15 درجة</strong>.
                  </p>
                  <p className="text-slate-200">
                    3. إدخال حافة سن الإبرة فقط بحيث تظهر تفاصيل المعدن من تحت طبقة البشرة الشفافة دون اختراق الدهون.
                  </p>
                  <p className="text-slate-200">
                    4. حقن 0.1 مل لملاحظة انتفاخ حويصلة جلدية شاحبة تشبه لدغة البعوض تسمى <strong>(Quaddel)</strong> بقطر 5–6 مم، وهي العلامة المؤكدة لنجاح الحقن داخل الأدمة.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: POCKET CLINICAL CHEAT SHEET */}
      {activeTab === 'quick_card' && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6 text-right" dir="rtl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase">KLINISCHE SPICKZETTEL · POCKET CHEAT SHEET</span>
            <h3 className="text-lg font-bold text-white font-['Cairo']">
              بطاقة الجيب التمريضية السريعة للقيم الحيوية ومقاسات الحقن
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
            {/* Card 1: Pulse */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-rose-400 font-bold block text-sm font-['Cairo']">❤️ نبض القلب (Puls / HF)</span>
              <p className="text-white">البالغ: 60 – 80 bpm (~1 ن/ثانية)</p>
              <p className="text-slate-300">حديث الولادة: 120 – 160 bpm</p>
              <p className="text-rose-300">بطء &lt; 60 bpm | تسرع &gt; 100 bpm</p>
            </div>

            {/* Card 2: BP */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-bold block text-sm font-['Cairo']">🩸 ضغط الدم (Blutdruck - RR)</span>
              <p className="text-white">المثالي: &lt; 120 / 80 mmHg</p>
              <p className="text-slate-300">طبيعي: 120–129 / 80–84 mmHg</p>
              <p className="text-rose-400">ارتفاع: &ge; 140/90 mmHg</p>
              <p className="text-blue-300">هبوط: &lt; 100/60 mmHg</p>
            </div>

            {/* Card 3: Glucose */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-amber-400 font-bold block text-sm font-['Cairo']">🍬 سكر الدم (Glukose - BZ)</span>
              <p className="text-white">صيام: 70 – 99 mg/dl (3.9–5.5 mmol)</p>
              <p className="text-slate-300">بعد الأكل: &lt; 140 mg/dl (&lt; 7.8 mmol)</p>
              <p className="text-rose-400">هبوط حرج: &lt; 70 mg/dl</p>
              <p className="text-purple-300">التراكمي HbA1c: &lt; 5.7%</p>
            </div>

            {/* Card 4: Respiration */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-blue-400 font-bold block text-sm font-['Cairo']">🫁 التنفس والأكسجين (AF & SpO₂)</span>
              <p className="text-white">التنفس بالغ: 12 – 20 نفس/دقيقة</p>
              <p className="text-slate-300">الأكسجين الطبيعي: 94% – 98%</p>
              <p className="text-amber-300">مرضى COPD: 88% – 92%</p>
              <p className="text-rose-400">نقص حاد: &lt; 90%</p>
            </div>

            {/* Card 5: Temperature */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-emerald-400 font-bold block text-sm font-['Cairo']">🌡️ حرارة الجسم (Temperatur)</span>
              <p className="text-white">طبيعي: 36.0 – 37.4 °C</p>
              <p className="text-amber-300">ارتفاع خفيف Subfebril: 37.5–38.0 °C</p>
              <p className="text-rose-400">حمى Fieber: &ge; 38.1 °C</p>
              <p className="text-rose-500 font-bold">فرط حرارة حرج: &ge; 40.0 °C</p>
            </div>

            {/* Card 6: Injections Summary */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-cyan-300 font-bold block text-sm font-['Cairo']">💉 زوايا وأطوال الإبر السريرية</span>
              <p className="text-white">s.c. تحت جلد: 45° | 4–16 mm</p>
              <p className="text-white">i.m. عضلي: 90° | 25–40 mm</p>
              <p className="text-white">i.v. وريدي: 20–25° | 19–45 mm</p>
              <p className="text-white">i.d. أدمة: 10–15° | 4–10 mm</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
