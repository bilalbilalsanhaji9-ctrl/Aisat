import React, { useState } from 'react';
import {
  Calculator,
  Droplets,
  Clock,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ArrowRightLeft,
  Syringe,
  Sparkles
} from 'lucide-react';

export const ClinicalCalculator: React.FC = () => {
  const [calcTab, setCalcTab] = useState<'rate' | 'drops' | 'perfusor' | 'converter'>('rate');

  // Mode 1: ml/h rate
  const [volumeMl, setVolumeMl] = useState<number>(500);
  const [durationHours, setDurationHours] = useState<number>(4);

  // Mode 2: Drops per min
  const [dropVolumeMl, setDropVolumeMl] = useState<number>(1000);
  const [dropDurationHours, setDropDurationHours] = useState<number>(8);
  const [dropFactor, setDropFactor] = useState<number>(20); // 20 drops/ml default

  // Mode 3: Perfusor / Syringe Pump
  const [drugAmountMg, setDrugAmountMg] = useState<number>(5); // e.g. 5 mg Noradrenalin
  const [syringeVolumeMl, setSyringeVolumeMl] = useState<number>(50); // in 50 ml
  const [patientWeightKg, setPatientWeightKg] = useState<number>(75);
  const [targetDoseMcgKgMin, setTargetDoseMcgKgMin] = useState<number>(0.1); // 0.1 µg/kg/min

  // Mode 4: Converter
  const [mgValue, setMgValue] = useState<number>(10);
  const [glucoseMgDl, setGlucoseMgDl] = useState<number>(120);

  // Calculations
  const calculatedRateMlH = durationHours > 0 ? (volumeMl / durationHours).toFixed(1) : '0';

  const totalMinutes = dropDurationHours * 60;
  const calculatedDropsPerMin = totalMinutes > 0 ? Math.round((dropVolumeMl * dropFactor) / totalMinutes) : 0;

  // Perfusor calculation:
  // Concentration = (drugAmountMg * 1000 µg) / syringeVolumeMl -> µg/ml
  // Required dose per minute = targetDoseMcgKgMin * patientWeightKg -> µg/min
  // Required dose per hour = Required dose per minute * 60 -> µg/h
  // Rate ml/h = Required dose per hour / Concentration
  const concentrationMcgMl = syringeVolumeMl > 0 ? (drugAmountMg * 1000) / syringeVolumeMl : 0;
  const doseMcgH = targetDoseMcgKgMin * patientWeightKg * 60;
  const calculatedPerfusorRate = concentrationMcgMl > 0 ? (doseMcgH / concentrationMcgMl).toFixed(2) : '0';

  // Glucose converter
  const calculatedMmolL = (glucoseMgDl / 18.0182).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-2">
          <span className="font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Calculator className="w-4 h-4" />
            KLINISCHER DOSIS- & INFUSIONSRECHNER
          </span>
          <span className="text-slate-400 font-['Cairo']">
            حاسبة الجرعات ومعدلات التدفق الوريدي ونقاط التسريب في الدقيقة
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-left font-['Plus_Jakarta_Sans']" dir="ltr">
            <h2 className="text-2xl font-bold text-white tracking-tight">Medikamenten- & Infusionsberechnung</h2>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Exakte mathematische Ermittlung von Laufraten, Tropfengeschwindigkeiten und Perfusorkonzentrationen mit Schritt-für-Schritt-Formelherleitung.
            </p>
          </div>
          <div className="text-right font-['Cairo']" dir="rtl">
            <h2 className="text-2xl font-bold text-cyan-400 tracking-tight">الحسابات السريرية المتقدمة لتمريض المشافي</h2>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
              تحديد دقيق لمعدل ضخ المحاليل، سرعة التنقيط بالجاذبية، وضبط مضخات الحقن الدقيقة بالوزن والميكروغرام لتجنب التسمم الدوائي القاتل.
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-6">
          <button
            onClick={() => setCalcTab('rate')}
            className={`p-3 rounded-xl border transition-all text-center flex flex-col items-center gap-1 ${
              calcTab === 'rate'
                ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Clock className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-bold font-['Cairo']">معدل التدفق (مل/ساعة)</span>
            <span className="text-[10px] font-mono text-slate-400">Förderrate ml/h</span>
          </button>

          <button
            onClick={() => setCalcTab('drops')}
            className={`p-3 rounded-xl border transition-all text-center flex flex-col items-center gap-1 ${
              calcTab === 'drops'
                ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Droplets className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-bold font-['Cairo']">القطرات في الدقيقة</span>
            <span className="text-[10px] font-mono text-slate-400">Tropfen / Minute</span>
          </button>

          <button
            onClick={() => setCalcTab('perfusor')}
            className={`p-3 rounded-xl border transition-all text-center flex flex-col items-center gap-1 ${
              calcTab === 'perfusor'
                ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Syringe className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-bold font-['Cairo']">مضخة السرنجة بالوزن</span>
            <span className="text-[10px] font-mono text-slate-400">Perfusor µg/kg/min</span>
          </button>

          <button
            onClick={() => setCalcTab('converter')}
            className={`p-3 rounded-xl border transition-all text-center flex flex-col items-center gap-1 ${
              calcTab === 'converter'
                ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <ArrowRightLeft className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-bold font-['Cairo']">تحويل الوحدات والسكر</span>
            <span className="text-[10px] font-mono text-slate-400">Einheiten & BZ</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Rate ml/h */}
      {calcTab === 'rate' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white font-['Cairo'] text-right" dir="rtl">
              مدخلات الحساب: حجم المحلول والمدة الزمنية
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-right" dir="rtl">
                  حجم المحلول الكلي (Volumen in ml):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={volumeMl}
                    onChange={(e) => setVolumeMl(Number(e.target.value))}
                    className="w-full accent-cyan-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <input
                    type="number"
                    value={volumeMl}
                    onChange={(e) => setVolumeMl(Number(e.target.value))}
                    className="w-24 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-cyan-400 font-mono font-bold text-center"
                  />
                  <span className="text-slate-400 font-mono">ml</span>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-right" dir="rtl">
                  مدة التسريب المطلوبة (Laufzeit in Stunden):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0.5"
                    max="24"
                    step="0.5"
                    value={durationHours}
                    onChange={(e) => setDurationHours(Number(e.target.value))}
                    className="w-full accent-cyan-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <input
                    type="number"
                    step="0.5"
                    value={durationHours}
                    onChange={(e) => setDurationHours(Number(e.target.value))}
                    className="w-24 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-cyan-400 font-mono font-bold text-center"
                  />
                  <span className="text-slate-400 font-mono">ساعات</span>
                </div>
              </div>
            </div>

            {/* Formula Reference */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs space-y-1">
              <span className="font-mono text-cyan-400 block font-bold">Die Standardformel:</span>
              <p className="font-mono text-slate-300">
                Förderrate (ml/h) = Gesamtvolumen (ml) ÷ Laufzeit (h)
              </p>
              <p className="text-slate-400 text-right pt-1 font-['Cairo']" dir="rtl">
                السرعة (مل/ساعة) = الحجم الكلي بالمليلتر ÷ الزمن بالساعات
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-3 text-center">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                النتيجة المضبوطة على مضخة التسريب (Infusomat)
              </span>
              <div className="py-6 px-4 bg-slate-950 rounded-2xl border border-cyan-500/30 shadow-inner">
                <span className="text-5xl font-bold font-mono text-cyan-400 tracking-tight">
                  {calculatedRateMlH}
                </span>
                <span className="text-lg text-slate-400 font-mono block mt-1">ml/h (مليلتر / ساعة)</span>
              </div>
              <p className="text-xs text-slate-300 font-['Cairo'] text-right" dir="rtl">
                لتسريب <strong>{volumeMl} مل</strong> خلال <strong>{durationHours} ساعة</strong>، يجب ضبط مضخة الإنفوسومات بدقة على معدل: <strong>{calculatedRateMlH} مل/ساعة</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs space-y-1 text-right" dir="rtl">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5 justify-end">
                <Sparkles className="w-4 h-4" /> تنبيه أمان مزدوج (Vier-Augen-Prinzip):
              </span>
              <p className="text-slate-300">
                في الأدوية عالية الخطورة (كالكهربائيات المركزة والأنسولين)، يلزم قانوناً في المشافي الألمانية تدقيق الحسابات بواسطة ممرضين اثنين والتوقيع المشترك.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Gravity Drop Rate */}
      {calcTab === 'drops' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white font-['Cairo'] text-right" dir="rtl">
              حساب التنقيط بالجاذبية (بدون مضخة إلكترونية)
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-right" dir="rtl">
                  حجم المحلول (ml):
                </label>
                <input
                  type="number"
                  value={dropVolumeMl}
                  onChange={(e) => setDropVolumeMl(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-cyan-400 font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-right" dir="rtl">
                  مدة التسريب (ساعات):
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={dropDurationHours}
                  onChange={(e) => setDropDurationHours(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-cyan-400 font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-right" dir="rtl">
                  معامل التنقيط لجهاز التسريب (Tropfenfaktor):
                </label>
                <select
                  value={dropFactor}
                  onChange={(e) => setDropFactor(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono"
                >
                  <option value={20}>20 نقطة/مل (جهاز التسريب القياسي للمحاليل المائية)</option>
                  <option value={60}>60 نقطة/مل (جهاز التنقيط المجهري للأطفال Pädiatrie)</option>
                  <option value={15}>15 نقطة/مل (جهاز نقل الدم عالي اللزوجة)</option>
                </select>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs space-y-1">
              <span className="font-mono text-cyan-400 block font-bold">Formel: Tropfen pro Minute:</span>
              <p className="font-mono text-slate-300">
                Tropfen/min = (Volumen in ml × Tropfenfaktor) ÷ (Stunden × 60)
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-3 text-center">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                سرعة التنقيط المطلوبة في حجرة التنقيط
              </span>
              <div className="py-6 px-4 bg-slate-950 rounded-2xl border border-cyan-500/30 shadow-inner">
                <span className="text-5xl font-bold font-mono text-cyan-400 tracking-tight">
                  {calculatedDropsPerMin}
                </span>
                <span className="text-lg text-slate-400 font-mono block mt-1">قطرة / دقيقة (Gtt/min)</span>
              </div>
              <p className="text-xs text-slate-300 font-['Cairo'] text-right" dir="rtl">
                يجب ضبط منظم التدفق اليدوي (Rollklemme) بحيث تسقط في حجرة التنقيط <strong>{calculatedDropsPerMin} قطرة</strong> كل 60 ثانية (أي حوالي قطرة واحدة كل {(60 / (calculatedDropsPerMin || 1)).toFixed(1)} ثانية).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-900/40 text-xs space-y-1 text-right" dir="rtl">
              <span className="text-amber-400 font-bold flex items-center gap-1.5 justify-end">
                <AlertTriangle className="w-4 h-4" /> مراقبة مستوى ذراع المريض:
              </span>
              <p className="text-slate-300">
                في التسريب بالجاذبية يتغير معدل التدفق إذا تحرك ذراع المريض أو انثنى، لذلك يجب مراقبة حجرة التنقيط دورياً كل ساعة.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Perfusor Weight-Based */}
      {calcTab === 'perfusor' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white font-['Cairo'] text-right" dir="rtl">
              حساب مضخة السرنجة بالوزن (Katecholamine & Perfusoren)
            </h3>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1 text-right" dir="rtl">
                    كمية المادة الفعالة (mg):
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={drugAmountMg}
                    onChange={(e) => setDrugAmountMg(Number(e.target.value))}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-cyan-400 font-mono font-bold"
                  />
                  <span className="text-[11px] text-slate-400">مثال: 5 ملغ نورادرينالين</span>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1 text-right" dir="rtl">
                    حجم السرنجة (ml):
                  </label>
                  <input
                    type="number"
                    value={syringeVolumeMl}
                    onChange={(e) => setSyringeVolumeMl(Number(e.target.value))}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-cyan-400 font-mono font-bold"
                  />
                  <span className="text-[11px] text-slate-400">عادة في 50 مل NaCl</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1 text-right" dir="rtl">
                    وزن المريض (kg):
                  </label>
                  <input
                    type="number"
                    value={patientWeightKg}
                    onChange={(e) => setPatientWeightKg(Number(e.target.value))}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-cyan-400 font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1 text-right" dir="rtl">
                    الجرعة المستهدفة (µg/kg/min):
                  </label>
                  <input
                    type="number"
                    step="0.02"
                    value={targetDoseMcgKgMin}
                    onChange={(e) => setTargetDoseMcgKgMin(Number(e.target.value))}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-cyan-400 font-mono font-bold"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs space-y-1">
              <span className="font-mono text-cyan-400 block font-bold">Rechenschritte / خطوات الحل:</span>
              <p className="font-mono text-slate-300">
                1. Konzentration = {drugAmountMg} mg × 1000 = {drugAmountMg * 1000} µg ÷ {syringeVolumeMl} ml = {concentrationMcgMl.toFixed(1)} µg/ml
              </p>
              <p className="font-mono text-slate-300">
                2. Dosis/min = {targetDoseMcgKgMin} × {patientWeightKg} kg = {(targetDoseMcgKgMin * patientWeightKg).toFixed(1)} µg/min
              </p>
              <p className="font-mono text-slate-300">
                3. Dosis/h = {doseMcgH.toFixed(1)} µg/h ÷ {concentrationMcgMl.toFixed(1)} µg/ml = {calculatedPerfusorRate} ml/h
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-3 text-center">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                معدل ضخ مضخة البيرفيوزور (Perfusor-Laufrate)
              </span>
              <div className="py-6 px-4 bg-slate-950 rounded-2xl border border-rose-500/40 shadow-inner">
                <span className="text-5xl font-bold font-mono text-rose-400 tracking-tight">
                  {calculatedPerfusorRate}
                </span>
                <span className="text-lg text-slate-400 font-mono block mt-1">ml/h (مليلتر / ساعة)</span>
              </div>
              <p className="text-xs text-slate-300 font-['Cairo'] text-right" dir="rtl">
                لإعطاء جرعة <strong>{targetDoseMcgKgMin} ميكروغرام/كغ/دقيقة</strong> لمريض وزنه <strong>{patientWeightKg} كغ</strong>، يتم ضبط المضخة على: <strong>{calculatedPerfusorRate} مل/ساعة</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 text-xs space-y-1 text-right" dir="rtl">
              <span className="text-rose-400 font-bold flex items-center gap-1.5 justify-end">
                <AlertTriangle className="w-4 h-4" /> تحذير الأدوية عالية الخطورة (High-Alert):
              </span>
              <p className="text-slate-300">
                أدوية تضييق الأوعية (Vasopressoren) لا تُوقف فجأة أبداً وتُحقن حصراً عبر قسطرة وريدية مركزية ZVK.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mode 4: Unit & Glucose Converter */}
      {calcTab === 'converter' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white font-['Cairo'] text-right" dir="rtl">
              تحويل وحدات الكتلة الدوائية (g ↔ mg ↔ µg)
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-right" dir="rtl">
                  القيمة بالميليغرام (Milligramm - mg):
                </label>
                <input
                  type="number"
                  value={mgValue}
                  onChange={(e) => setMgValue(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-cyan-400 font-mono font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-slate-400 block text-[11px]">بالغرام (Gramm - g)</span>
                  <strong className="text-white text-base font-mono">{(mgValue / 1000).toFixed(4)} g</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-slate-400 block text-[11px]">بالميكروغرام (Mikrogramm - µg)</span>
                  <strong className="text-cyan-400 text-base font-mono">{mgValue * 1000} µg</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white font-['Cairo'] text-right" dir="rtl">
              تحويل سكر الدم (mg/dl ↔ mmol/l)
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-right" dir="rtl">
                  قيمة سكر الدم بوحدة (mg/dl - المتبعة بغرب ألمانيا):
                </label>
                <input
                  type="number"
                  value={glucoseMgDl}
                  onChange={(e) => setGlucoseMgDl(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-cyan-400 font-mono font-bold"
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 text-center">
                <span className="text-slate-400 block text-[11px] mb-1">القيمة بوحدة (mmol/l - المتبعة بشرق ألمانيا ودولياً)</span>
                <strong className="text-cyan-400 text-3xl font-mono">{calculatedMmolL}</strong>
                <span className="text-xs text-slate-400 font-mono block mt-1">mmol/l</span>
              </div>
              <p className="text-[11px] text-slate-400 text-right font-['Cairo']" dir="rtl">
                معامل التحويل الثابت: 1 ميليمول/لتر = 18.02 ملغ/ديسيلتر (mg/dl ÷ 18.02 = mmol/l).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
