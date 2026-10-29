import React, { useState } from 'react';
import {
  AlertTriangle,
  Activity,
  Heart,
  Thermometer,
  ShieldAlert,
  Brain,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  FileCheck
} from 'lucide-react';

export const EmergencyWard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'abcde' | 'news2'>('abcde');

  // NEWS2 State variables
  const [af, setAf] = useState<number>(18);
  const [spo2, setSpo2] = useState<number>(96);
  const [hasOxygen, setHasOxygen] = useState<boolean>(false);
  const [rrSystolic, setRrSystolic] = useState<number>(120);
  const [hf, setHf] = useState<number>(75);
  const [consciousness, setConsciousness] = useState<'A' | 'V' | 'P' | 'U'>('A');
  const [temp, setTemp] = useState<number>(37.0);

  // Compute NEWS2 Score points according to official Royal College of Physicians / German Guidelines
  const getAfScore = (rate: number) => {
    if (rate <= 8) return 3;
    if (rate >= 9 && rate <= 11) return 1;
    if (rate >= 12 && rate <= 20) return 0;
    if (rate >= 21 && rate <= 24) return 2;
    return 3;
  };

  const getSpo2Score = (sat: number) => {
    if (sat <= 91) return 3;
    if (sat >= 92 && sat <= 93) return 2;
    if (sat >= 94 && sat <= 95) return 1;
    return 0;
  };

  const getOxygenScore = (onO2: boolean) => (onO2 ? 2 : 0);

  const getBpScore = (bp: number) => {
    if (bp <= 90) return 3;
    if (bp >= 91 && bp <= 100) return 2;
    if (bp >= 101 && bp <= 110) return 1;
    if (bp >= 111 && bp <= 219) return 0;
    return 3;
  };

  const getHfScore = (pulse: number) => {
    if (pulse <= 40) return 3;
    if (pulse >= 41 && pulse <= 50) return 1;
    if (pulse >= 51 && pulse <= 90) return 0;
    if (pulse >= 91 && pulse <= 110) return 1;
    if (pulse >= 111 && pulse <= 130) return 2;
    return 3;
  };

  const getAvpuScore = (state: string) => (state === 'A' ? 0 : 3);

  const getTempScore = (t: number) => {
    if (t <= 35.0) return 3;
    if (t >= 35.1 && t <= 36.0) return 1;
    if (t >= 36.1 && t <= 38.0) return 0;
    if (t >= 38.1 && t <= 39.0) return 1;
    return 2;
  };

  const afPts = getAfScore(af);
  const spo2Pts = getSpo2Score(spo2);
  const o2Pts = getOxygenScore(hasOxygen);
  const bpPts = getBpScore(rrSystolic);
  const hfPts = getHfScore(hf);
  const avpuPts = getAvpuScore(consciousness);
  const tempPts = getTempScore(temp);

  const totalNews2 = afPts + spo2Pts + o2Pts + bpPts + hfPts + avpuPts + tempPts;

  // Tiers: Low (0-4), Medium (5-6 or 3 in any single param), High (>=7)
  const isSingleParamRed = [afPts, spo2Pts, bpPts, hfPts, avpuPts, tempPts].includes(3);
  let riskLevel: 'low' | 'medium' | 'high' = 'low';
  if (totalNews2 >= 7) {
    riskLevel = 'high';
  } else if (totalNews2 >= 5 || isSingleParamRed) {
    riskLevel = 'medium';
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-2">
          <span className="font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            NOTFALLMANAGEMENT & KLINISCHES ESKALATIONSSYSTEM
          </span>
          <span className="text-slate-400 font-['Cairo']">
            الفحص الأولي المنهجي ABCDE وحاسبة الإنذار المبكر الوطني NEWS2
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-left font-['Plus_Jakarta_Sans']" dir="ltr">
            <h2 className="text-2xl font-bold text-white tracking-tight">Strukturierte Notfallerfassung</h2>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Standardisiertes Vorgehen zur Früherkennung und Beherrschung lebensbedrohlicher Zustände auf Normal- und Überwachungsstationen.
            </p>
          </div>
          <div className="text-right font-['Cairo']" dir="rtl">
            <h2 className="text-2xl font-bold text-rose-400 tracking-tight">إدارة الحالات الحرجة والتصعيد الطبي العاجل</h2>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
              تطبيق بروتوكول المسح الأولي ABCDE لتحديد الأولويات الحيوية وحساب نقاط الخطورة السريرية لمنع توقف القلب المفاجئ.
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 pt-6">
          <button
            onClick={() => setActiveTab('abcde')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'abcde'
                ? 'bg-rose-500 text-white shadow-lg'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>بروتوكول الفحص الشامل ABCDE</span>
          </button>
          <button
            onClick={() => setActiveTab('news2')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'news2'
                ? 'bg-rose-500 text-white shadow-lg'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>حاسبة مقياس التحذير المبكر NEWS2</span>
          </button>
        </div>
      </div>

      {/* ABCDE Interactive Deck */}
      {activeTab === 'abcde' && (
        <div className="space-y-4">
          {[
            {
              letter: 'A',
              titleDe: 'Airway - Freie Atemwege & HWS-Schutz',
              titleAr: 'A - مجرى الهواء: التحقق من سالكية المسالك الهوائية',
              color: 'text-amber-400',
              borderColor: 'border-amber-500/40',
              bgColor: 'bg-amber-950/15',
              assessmentDe: 'Atmet der Patient geräuschlos? Liegt Stridor (Inspiratorisch = Kehlkopf / Exspiratorisch = Bronchien), Schnarchen (Zungengrund), Gurgeln (Sekret/Blut) oder Heiserkeit vor?',
              assessmentAr: 'هل يتنفس المريض بهدوء دون صوت؟ هل يوجد صرير (Stridor) أو شخير أو قرقرة سوائل في الحلق؟ هل المجرى مهدد بالانسداد؟',
              interventionsDe: [
                'Kopf überstrecken und Kinn anheben (Head-Tilt / Chin-Lift) - Cave bei V.a. HWS-Trauma: Nur Esmarch-Handgriff!',
                'Mundhöhle und Rachenraum unter Sicht absaugen.',
                'Guedel-Tubus (Wendl-Tubus bei erhaltenem Schluckreflex) zur Zungenstabilisierung einsetzen.'
              ],
              interventionsAr: [
                'إمالة الرأس ورفع الذقن للخلف (في إصابات الرقبة يُستخدم فقط فك إسمارش دون تحريك العنق).',
                'شفط الإفرازات والدم من الفم والبلعوم فوراً بالقسطرة.',
                'إدخال أنبوب غيدل (Guedel-Tubus) لمنع سقوط اللسان للخلف.'
              ]
            },
            {
              letter: 'B',
              titleDe: 'Breathing - Belüftung, Sauerstoff & Thoraxmechanik',
              titleAr: 'B - التنفس: كفاءة التهوية وميكانيكا القفص الصدري',
              color: 'text-cyan-400',
              borderColor: 'border-cyan-500/40',
              bgColor: 'bg-cyan-950/15',
              assessmentDe: 'Atemfrequenz zählen (Norm: 12–20/min; Bradypnoe < 10 oder Tachypnoe > 25 sind Alarmsignale!). Thoraxexkursion seitengleich? Zyanose (Lippen/Fingernägel)? Einsatz der Atemhilfsmuskulatur? SpO₂ messen.',
              assessmentAr: 'عدّ مرات التنفس بالدقيقة (الطبيعي 12-20؛ أقل من 10 أو أكثر من 25 خطر داهم!). تناظر حركة الصدر، وجود زرقة بالشفاه، استخدام عضلات الرقبة للتنفس، وقياس SpO2.',
              interventionsDe: [
                'Oberkörper sofort aufrecht lagern (Kutschersitz / Herzkissen).',
                'Sauerstoffgabe: 2–4 l/min über Nasenbrille bei milder Hypoxie; 10–15 l/min über Maske mit Reservoirbeutel bei schwerer Not.',
                'Auskultation beidseits: Rasselgeräusche (Lungenödem) oder fehlendes Atemgeräusch (Spannungspneumothorax!).'
              ],
              interventionsAr: [
                'رفع ظهر السرير بزاوية قائمة فوراً (وضعية الجلوس المستقيمة) لتوسيع الرئة.',
                'إعطاء الأكسجين: 2-4 لتر بالقنية في النقص البسيط؛ أو 10-15 لتر بقناع خزان في الحالات الحرجة.',
                'الاستماع لصوت الرئتين بالسماعة لكشف تجمع السوائل أو انكماش الرئة.'
              ]
            },
            {
              letter: 'C',
              titleDe: 'Circulation - Kreislauf, Perfusion & Blutstillung',
              titleAr: 'C - الدوران: سلامة الدورة الدموية والقلب والتروية',
              color: 'text-rose-400',
              borderColor: 'border-rose-500/40',
              bgColor: 'bg-rose-950/15',
              assessmentDe: 'Pulsfrequenz und Rhythmus (zentral an A. carotis und peripher an A. radialis). Blutdruck (RR). Rekapillarisierungszeit am Fingernagel (Rekap-Zeit normal < 2 Sekunden). Hautkolorit (blass, marmoriert, kaltschweißig).',
              assessmentAr: 'فحص النبض المركزي والمحيطي وقوته، قياس ضغط الدم، زمن عودة امتلاء الشعيرات الدموية (الضغط على الظفر؛ الطبيعي أقل من ثانيتين)، ودفء أو برودة الجلد.',
              interventionsDe: [
                'Sofort 2 großlumige venöse Zugänge (mindestens 18G grün oder 16G grau) etablieren.',
                'Volumengabe: Vollblutelektrolytlösung (z.B. Jonosteril / Ringer-Acetat) im Schock nach ärztlicher Anordnung.',
                'Sichtbare arterielle Blutungen durch Druckverband oder Tourniquet unverzüglich stillen.',
                '12-Kanal-EKG anfertigen und Schockindex berechnen (Herzfrequenz ÷ systolischer Blutdruck; > 1 = Schock!).'
              ],
              interventionsAr: [
                'فتح خطين وريديين فوريين بمقاس كبير (على الأقل 18G أخضر أو 16G رمادي).',
                'بدء تعويض السوائل بمحاليل متوازنة (رينغر) بأمر الطبيب لإنقاذ الضغط.',
                'إيقاف أي نزيف خارجي مباشر بالضماد الضاغط القوي.',
                'حساب مؤشر الصدمة (النبض ÷ الضغط الانقباضي؛ إذا زاد عن 1 فهناك صدمة حادة!).'
              ]
            },
            {
              letter: 'D',
              titleDe: 'Disability - Neurologischer Status & Blutzucker',
              titleAr: 'D - الحالة العصبية: مستوى الوعي والحدقات وسكر الدم',
              color: 'text-purple-400',
              borderColor: 'border-purple-500/40',
              bgColor: 'bg-purple-950/15',
              assessmentDe: 'Bewusstseinsprüfung nach AVPU (Alert, Voice, Pain, Unresponsive) oder Glasgow Coma Scale (GCS 3–15). Pupillenkontrolle (Größe, Seitengleichheit, Lichtreaktion). FAST-Schema bei V.a. Schlaganfall. OBLIGAT: Blutzuckermessung!',
              assessmentAr: 'تقييم الوعي بنظام AVPU أو مقياس غلاسكو GCS. فحص حدقتي العين وتناظرهما للضوء. اختبار FAST للسكتة الدماغية. وإلزامي: قياس سكر الدم الفوري!',
              interventionsDe: [
                'Hypoglykämie (< 70 mg/dl) SOFORT behandeln mit Glukose 20–40% i.v.',
                'Bei Bewusstlosigkeit mit vorhandener Spontanatmung: Stabile Seitenlage.',
                'Bei V.a. Hirndruck (Anisokorie, Cushing-Triade): Oberkörper 30° hochlagern, Not-CT anfordern.'
              ],
              interventionsAr: [
                'علاج هبوط السكر الفوري بحقن الجلوكوز الوريدي المركز.',
                'عند فقدان الوعي مع وجود تنفس: وضعية الإفاقة الجانبية لحماية مجرى الهواء من القيء.',
                'عند اختلاف حجم الحدقتين (اشتباه نزيف دماغي): رفع الرأس 30 درجة وطلب أشعة مقطعية عاجلة.'
              ]
            },
            {
              letter: 'E',
              titleDe: 'Exposure - Ganzkörperuntersuchung & Wärmeerhalt',
              titleAr: 'E - الفحص الشامل: كشف الجسم وحفظ حرارة المريض',
              color: 'text-emerald-400',
              borderColor: 'border-emerald-500/40',
              bgColor: 'bg-emerald-950/15',
              assessmentDe: 'Entkleiden des Patienten unter Wahrung der Intimsphäre zur Inspektion auf unentdeckte Wunden, Hämatome, Ausschläge (Anaphylaxie / Meningokokken-Purpura) oder Ödeme. Körperkerntemperatur messen.',
              assessmentAr: 'كشف ملابس المريض مع احترام الخصوصية للبحث عن أي نزيف خفي أو طفح جلدي تحسسي أو وذمات، وقياس درجة حرارة الجسم الأساسية.',
              interventionsDe: [
                'Hypothermie strikt vermeiden: Patient sofort mit aktiver Wärmedecke zudecken (Unterkühlung verschlechtert Blutgerinnung drastisch!).',
                'Patient wieder zudecken und alle erhobenen Parameter im KIS lückenlos dokumentieren.'
              ],
              interventionsAr: [
                'منع انخفاض حرارة الجسم (Hypothermie) عبر التدفئة الفورية بالأغطية الحرارية لأن البرودة تعطل تخثر الدم وتزيد النزيف.',
                'إعادة تغطية المريض وتوثيق كامل المشاهدات في السجل الطبي.'
              ]
            }
          ].map(step => (
            <div
              key={step.letter}
              className={`p-5 rounded-2xl border ${step.borderColor} ${step.bgColor} space-y-3 shadow-lg`}
            >
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-3">
                  <span className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-xl font-bold font-mono ${step.color}`}>
                    {step.letter}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white font-['Cairo'] text-right" dir="rtl">{step.titleAr}</h3>
                    <p className="text-xs text-slate-400 font-['Plus_Jakarta_Sans'] text-left" dir="ltr">{step.titleDe}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Assessment */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1 text-right" dir="rtl">
                  <strong className="text-cyan-400 block font-['Cairo']">ماذا تفحص وتلاحظ سريرياً؟ (Beurteilung):</strong>
                  <p className="text-slate-200 leading-relaxed">{step.assessmentAr}</p>
                  <p className="text-[11px] text-slate-400 text-left font-['Plus_Jakarta_Sans'] pt-1" dir="ltr">
                    DE: {step.assessmentDe}
                  </p>
                </div>

                {/* Nursing Interventions */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1 text-right" dir="rtl">
                  <strong className="text-emerald-400 block font-['Cairo']">التدابير التمريضية الفورية (Maßnahmen):</strong>
                  <ul className="space-y-1.5 text-slate-200">
                    {step.interventionsAr.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* NEWS2 Interactive Calculator Deck */}
      {activeTab === 'news2' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs Section (7 cols) */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
            <h3 className="text-base font-bold text-white font-['Cairo'] text-right" dir="rtl">
              إدخال العلامات الحيوية السريرية لمريضك
            </h3>

            <div className="space-y-4 text-xs">
              {/* AF */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-cyan-400 font-bold">{af} Atemzüge/min ({afPts} نقاط)</span>
                  <label className="text-slate-300 font-semibold font-['Cairo']">1. معدل التنفس (Atemfrequenz - AF)</label>
                </div>
                <input
                  type="range"
                  min="6"
                  max="35"
                  value={af}
                  onChange={(e) => setAf(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* SpO2 */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-cyan-400 font-bold">{spo2}% SpO₂ ({spo2Pts} نقاط)</span>
                  <label className="text-slate-300 font-semibold font-['Cairo']">2. تشبع الأكسجين (Sauerstoffsättigung)</label>
                </div>
                <input
                  type="range"
                  min="80"
                  max="100"
                  value={spo2}
                  onChange={(e) => setSpo2(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Oxygen Supply */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-mono text-cyan-400 font-bold">+{o2Pts} نقاط</span>
                <div className="flex items-center gap-3">
                  <span className="text-slate-300 font-['Cairo']">هل يتلقى المريض أكسجيناً إضافياً؟ (Sauerstoffgabe)</span>
                  <input
                    type="checkbox"
                    checked={hasOxygen}
                    onChange={(e) => setHasOxygen(e.target.checked)}
                    className="w-5 h-5 accent-cyan-500 rounded cursor-pointer"
                  />
                </div>
              </div>

              {/* Systolic BP */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-cyan-400 font-bold">{rrSystolic} mmHg ({bpPts} نقاط)</span>
                  <label className="text-slate-300 font-semibold font-['Cairo']">4. الضغط الانقباضي (RR systolisch)</label>
                </div>
                <input
                  type="range"
                  min="60"
                  max="220"
                  value={rrSystolic}
                  onChange={(e) => setRrSystolic(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Heart Rate */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-cyan-400 font-bold">{hf} bpm ({hfPts} نقاط)</span>
                  <label className="text-slate-300 font-semibold font-['Cairo']">5. النبض / ضربات القلب (Herzfrequenz - HF)</label>
                </div>
                <input
                  type="range"
                  min="30"
                  max="160"
                  value={hf}
                  onChange={(e) => setHf(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* AVPU Consciousness */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-right font-['Cairo']" dir="rtl">
                  6. مستوى الوعي العصبي (Bewusstseinslage - AVPU):
                </label>
                <div className="grid grid-cols-4 gap-2 text-center font-mono">
                  {[
                    { id: 'A', label: 'Alert (واعي تماماً)', pts: 0 },
                    { id: 'V', label: 'Voice (يستجيب للصوت)', pts: 3 },
                    { id: 'P', label: 'Pain (يستجيب للألم)', pts: 3 },
                    { id: 'U', label: 'Unresponsive (غائب)', pts: 3 }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setConsciousness(item.id as 'A' | 'V' | 'P' | 'U')}
                      className={`p-2 rounded-lg border text-xs transition-all ${
                        consciousness === item.id
                          ? 'bg-cyan-600 text-white font-bold border-cyan-400'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      <span className="block font-bold">{item.id}</span>
                      <span className="text-[10px] block mt-0.5">{item.pts} Pkt</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Temp */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-cyan-400 font-bold">{temp.toFixed(1)} °C ({tempPts} نقاط)</span>
                  <label className="text-slate-300 font-semibold font-['Cairo']">7. درجة حرارة الجسم (Körpertemperatur)</label>
                </div>
                <input
                  type="range"
                  min="34.0"
                  max="41.0"
                  step="0.1"
                  value={temp}
                  onChange={(e) => setTemp(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Results & Clinical Escalation (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4 text-center">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                مجموع نقاط مقياس NEWS2 الكلي
              </span>

              <div className={`py-6 px-4 rounded-2xl border shadow-inner ${
                riskLevel === 'high'
                  ? 'bg-rose-950/40 border-rose-500/60 text-rose-400'
                  : riskLevel === 'medium'
                  ? 'bg-amber-950/40 border-amber-500/60 text-amber-400'
                  : 'bg-emerald-950/40 border-emerald-500/60 text-emerald-400'
              }`}>
                <span className="text-6xl font-bold font-mono tracking-tight">
                  {totalNews2}
                </span>
                <span className="text-sm font-bold block mt-1 uppercase font-mono">
                  {riskLevel === 'high' ? 'HOHE GEFÄHRDUNG (خطورة حرجة قصوى)' : riskLevel === 'medium' ? 'MITTLERE GEFÄHRDUNG (خطورة متوسطة)' : 'NIEDRIGE GEFÄHRDUNG (حالة مستقرة)'}
                </span>
              </div>

              <div className="text-right text-xs space-y-2 p-4 rounded-xl bg-slate-950 border border-slate-800" dir="rtl">
                <span className="text-cyan-400 font-bold block font-['Cairo']">
                  بروتوكول التصعيد المعتمد في المستشفيات الألمانية:
                </span>
                {riskLevel === 'high' && (
                  <div className="text-rose-200 space-y-1">
                    <p className="font-bold">🚨 إجراء طارئ فوري (Sofortiger Notruf):</p>
                    <p>• استدعاء فريق الطوارئ الطبي (Medical Emergency Team - MET) أو طبيب العناية المركزة فوراً.</p>
                    <p>• نقل المريض فورا إلى وحدة المراقبة أو العناية المركزة (Intensivstation).</p>
                    <p>• تجهيز عربة الإنعاش وجهاز الصدمات بجانب السرير ومراقبة مستمرة للعلامات الحيوية.</p>
                  </div>
                )}
                {riskLevel === 'medium' && (
                  <div className="text-amber-200 space-y-1">
                    <p className="font-bold">⚠️ استدعاء عاجل للطبيب (Dringende ärztliche Visite):</p>
                    <p>• إبلاغ طبيب القسم المناوب خلال 15 دقيقة للحضور ومعاينة المريض.</p>
                    <p>• إعادة قياس العلامات الحيوية كل 30 إلى 60 دقيقة وتجهيز تحاليل الغازات الشريانية.</p>
                  </div>
                )}
                {riskLevel === 'low' && (
                  <div className="text-emerald-200 space-y-1">
                    <p className="font-bold">✅ خطة المتابعة الروتينية (Standardüberwachung):</p>
                    <p>• إعادة تقييم وتسجيل العلامات الحيوية كل 4 إلى 6 ساعات وفق خطة الرعاية التمريضية.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400 text-right" dir="rtl">
              * مقياس NEWS2 معتمد دولياً ومن معهد التمريض الملكي لتقليل وفيات الصدمة والإنتان في أقسام التنويم.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
