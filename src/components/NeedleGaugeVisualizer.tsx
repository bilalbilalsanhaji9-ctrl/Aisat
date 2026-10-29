import React, { useState } from 'react';
import { Sparkles, Syringe, AlertCircle, Info, Check } from 'lucide-react';

interface GaugeItem {
  gauge: number;
  colorNameDe: string;
  colorNameAr: string;
  hexColor: string;
  outerDiameterMm: number;
  flowRateMlMin: number;
  typicalLengthMm: number;
  indicationDe: string;
  indicationAr: string;
}

export const NEEDLE_GAUGES: GaugeItem[] = [
  {
    gauge: 14,
    colorNameDe: 'Orange',
    colorNameAr: 'برتقالي',
    hexColor: '#f97316',
    outerDiameterMm: 2.1,
    flowRateMlMin: 300,
    typicalLengthMm: 45,
    indicationDe: 'Massentransfusion, Notfallmedizin, Schockraum, Polytrauma.',
    indicationAr: 'نقل الدم السريع، غرف الإنعاش والصدمات، وحالات الحوادث المتعددة والنزيف الحاد.'
  },
  {
    gauge: 16,
    colorNameDe: 'Grau',
    colorNameAr: 'رمادي',
    hexColor: '#64748b',
    outerDiameterMm: 1.7,
    flowRateMlMin: 180,
    typicalLengthMm: 45,
    indicationDe: 'Große chirurgische Eingriffe, schnelle Volumensubstitution.',
    indicationAr: 'العمليات الجراحية الكبرى وتعويض كميات السوائل السريعة أثناء التخدير.'
  },
  {
    gauge: 18,
    colorNameDe: 'Grün',
    colorNameAr: 'أخضر',
    hexColor: '#22c55e',
    outerDiameterMm: 1.3,
    flowRateMlMin: 90,
    typicalLengthMm: 32,
    indicationDe: 'Bluttransfusionen (Erythrozytenkonzentrate), Standard in der Chirurgie.',
    indicationAr: 'نقل أكياس الدم ومشتقاته (لمنع تكسر كريات الدم الحمراء) ومعيار العمليات القياسي.'
  },
  {
    gauge: 20,
    colorNameDe: 'Rosa / Pink',
    colorNameAr: 'وردي / زهري',
    hexColor: '#ec4899',
    outerDiameterMm: 1.1,
    flowRateMlMin: 60,
    typicalLengthMm: 32,
    indicationDe: 'Klinischer Standard für Infusionen und Medikamentengaben bei Erwachsenen.',
    indicationAr: 'المقاس الأكثر استخداماً في المستشفيات للأدوية والمحاليل الوريدية للبالغين.'
  },
  {
    gauge: 22,
    colorNameDe: 'Blau',
    colorNameAr: 'أزرق',
    hexColor: '#0284c7',
    outerDiameterMm: 0.9,
    flowRateMlMin: 36,
    typicalLengthMm: 25,
    indicationDe: 'Schwierige, zarte oder sklerosierte Venen, Geriatrie, Onkologie.',
    indicationAr: 'الأوردة الدقيقة والهشة، كبار السن، ومرضى العلاج الكيماوي.'
  },
  {
    gauge: 24,
    colorNameDe: 'Gelb',
    colorNameAr: 'أصفر',
    hexColor: '#eab308',
    outerDiameterMm: 0.7,
    flowRateMlMin: 22,
    typicalLengthMm: 19,
    indicationDe: 'Pädiatrie, Kleinkinder, extrem grazile Venenverhältnisse.',
    indicationAr: 'طب الأطفال والرضع، والأوردة السطحية الدقيقة جداً.'
  },
  {
    gauge: 26,
    colorNameDe: 'Violett',
    colorNameAr: 'بنفسجي',
    hexColor: '#8b5cf6',
    outerDiameterMm: 0.6,
    flowRateMlMin: 13,
    typicalLengthMm: 19,
    indicationDe: 'Neonatologie, Frühgeborene.',
    indicationAr: 'الأطفال الخدج وحديثو الولادة في الحاضنات.'
  }
];

export const NeedleGaugeVisualizer: React.FC = () => {
  const [selectedGauge, setSelectedGauge] = useState<GaugeItem>(NEEDLE_GAUGES[3]); // 20G default
  const [activeAngleTab, setActiveAngleTab] = useState<'im' | 'sc' | 'iv' | 'id'>('sc');

  const anglesInfo = {
    im: {
      nameDe: 'Intramuskulär (i.m.)',
      nameAr: 'الحقن العضلي',
      angle: 90,
      targetLayerDe: 'Skelettmuskel (M. deltoideus, M. gluteus medius)',
      targetLayerAr: 'النسيج العضلي العميق (عضلة الكتف أو الألوية)',
      needleLengthDe: 'Lang (25–40 mm), 20G bis 23G',
      needleLengthAr: 'إبرة طويلة (25-40 ملم) لضمان اختراق الدهون إلى عمق العضلة',
      notesAr: 'الحقن عمودي بزاوية 90 درجة بالكامل مع تثبيت العضلة بين الأصابع.'
    },
    sc: {
      nameDe: 'Subkutan (s.c.)',
      nameAr: 'الحقن تحت الجلد',
      angle: 45,
      targetLayerDe: 'Subkutanes Fettgewebe (Bauch, Oberschenkel)',
      targetLayerAr: 'النسيج الدهني تحت الأدمة (البطن، الفخذ)',
      needleLengthDe: 'Kurz (8–16 mm), 25G bis 30G',
      needleLengthAr: 'إبرة قصيرة ورفيعة (مثل أقلام الإنسولين والهيبارين)',
      notesAr: 'الحقن بزاوية 45 درجة (أو 90 درجة إذا كانت إبرة الإنسولين قصيرة 4-6 ملم وثنية الجلد مرفوعة).'
    },
    iv: {
      nameDe: 'Intravenös (i.v.)',
      nameAr: 'الحقن والقسطرة الوريدية',
      angle: 25,
      targetLayerDe: 'Venenlumen (z.B. V. cephalica, V. basilica)',
      targetLayerAr: 'داخل تجويف الوريد الطرفي مباشرة',
      needleLengthDe: '25–45 mm (Venenverweilkanüle)',
      needleLengthAr: 'قسطرة بلاستيكية مرنة مع سن معدني مسحوب',
      notesAr: 'الإدخال بزاوية 20-25 درجة مع مراقبة تدفق الدم الراجع في حجرة الكانيولا، ثم خفض الزاوية والدفع.'
    },
    id: {
      nameDe: 'Intradermal (i.d.)',
      nameAr: 'الحقن داخل الأدمة',
      angle: 12,
      targetLayerDe: 'Dermis (Lederhaut) direkt unter Epidermis',
      targetLayerAr: 'طبقة الأدمة السطحية تحت البشرة مباشرة',
      needleLengthDe: 'Sehr kurz (4–6 mm), 26G bis 27G',
      needleLengthAr: 'إبرة دقيقة جداً لاختبارات التحسس والسل',
      notesAr: 'زاوية مسطحة للغاية 10-15 درجة مع بروز حافة الإبرة المائلة لأعلى وتكوين انتباخ جلدي (Quaddel).'
    }
  };

  const currentAngle = anglesInfo[activeAngleTab];

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-2">
          <span className="font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Syringe className="w-4 h-4" />
            ISO 10555 KANÜLENKLASSIFIKATION & INJEKTIONSWINKEL
          </span>
          <span className="text-slate-400 font-['Cairo']">
            نظام غيج (Gauge) الدولي وتدفق القساطر الوريدية
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-left font-['Plus_Jakarta_Sans']" dir="ltr">
            <h2 className="text-xl font-bold text-white tracking-tight">Das internationale Gauge-System (G)</h2>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Die Gauge-Zahl verhält sich <strong>invers</strong> zum Durchmesser: Je <strong>höher</strong> die Gauge-Zahl, desto <strong>dünner</strong> ist die Nadel und desto <strong>geringer</strong> ist die maximale Durchflussrate.
            </p>
          </div>
          <div className="text-right font-['Cairo']" dir="rtl">
            <h2 className="text-xl font-bold text-cyan-400 tracking-tight">المبدأ العكسي لنظام مقاييس الإبر (Gauge)</h2>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
              العلاقة <strong>عكسية تماماً</strong> بين رقم الغيج والقطر: كلما <strong>ارتفع</strong> الرقم (مثل 24G)، كانت الإبرة <strong>أرق</strong> وتدفقها أقل، وكلما <strong>انخفض</strong> الرقم (مثل 14G)، كانت الإبرة <strong>أسمك</strong> وتدفقها هائلاً لحالات النزيف الحاد.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Gauge Selection Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {NEEDLE_GAUGES.map(item => {
          const isSelected = selectedGauge.gauge === item.gauge;
          return (
            <button
              key={item.gauge}
              onClick={() => setSelectedGauge(item)}
              className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-between relative overflow-hidden ${
                isSelected
                  ? 'bg-slate-900 border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg scale-105'
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div
                className="w-full h-1.5 rounded-full mb-2"
                style={{ backgroundColor: item.hexColor }}
              />
              <span className="text-lg font-bold font-mono text-white">
                {item.gauge}G
              </span>
              <span className="text-xs font-semibold mt-0.5" style={{ color: item.hexColor }}>
                {item.colorNameAr}
              </span>
              <span className="text-[10px] text-slate-400 font-mono mt-1">
                Ø {item.outerDiameterMm} mm
              </span>
              <span className="text-[10px] text-cyan-400 font-mono font-medium">
                {item.flowRateMlMin} ml/min
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Gauge In-Depth Card & Flow Graphic */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Needle Size & Visualizer (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl p-5 border border-slate-800 text-center space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
            <span className="font-mono text-cyan-400 font-bold">PROFIL: {selectedGauge.gauge} GAUGE</span>
            <span style={{ color: selectedGauge.hexColor }} className="font-bold">
              {selectedGauge.colorNameDe} ({selectedGauge.colorNameAr})
            </span>
          </div>

          {/* Visual SVG Cross-Section Comparison */}
          <div className="h-32 flex flex-col items-center justify-center relative">
            {/* Visual Tube Diameter representation */}
            <div
              className="rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border-2 border-white/20"
              style={{
                width: `${Math.max(24, selectedGauge.outerDiameterMm * 30)}px`,
                height: `${Math.max(24, selectedGauge.outerDiameterMm * 30)}px`,
                backgroundColor: selectedGauge.hexColor
              }}
            >
              <div className="w-2 h-2 rounded-full bg-slate-950"></div>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              القطر الخارجي الحقيقي: <strong className="text-white">{selectedGauge.outerDiameterMm} ملم</strong>
            </p>
            <p className="text-xs text-cyan-400 font-mono font-bold">
              معدل التدفق الأقصى: {selectedGauge.flowRateMlMin} مل / دقيقة
            </p>
          </div>

          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(selectedGauge.flowRateMlMin / 300) * 100}%`,
                backgroundColor: selectedGauge.hexColor
              }}
            />
          </div>
          <span className="text-[11px] text-slate-500 block">
            نسبة سعة التدفق مقارنة بأكبر مقاس طوارئ (14G = 300 مل/دقيقة)
          </span>
        </div>

        {/* Clinical Application and Details (7 cols) */}
        <div className="lg:col-span-7 space-y-4 text-right" dir="rtl">
          <div>
            <span className="text-xs text-slate-400 font-mono">دواعي الاستخدام السريرية المعتمدة في ألمانيا:</span>
            <h3 className="text-xl font-bold text-white font-['Cairo'] mt-0.5">
              استخدامات قسطرة {selectedGauge.gauge}G ({selectedGauge.colorNameAr})
            </h3>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <p className="text-sm text-cyan-200 font-['Cairo'] leading-relaxed">
              {selectedGauge.indicationAr}
            </p>
            <p className="text-xs text-slate-400 font-['Plus_Jakarta_Sans'] text-left pt-2 border-t border-slate-800/80" dir="ltr">
              DE: {selectedGauge.indicationDe}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
              <span className="text-slate-400 block text-[11px]">الطول القياسي للإبرة</span>
              <strong className="text-white text-sm">{selectedGauge.typicalLengthMm} mm</strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
              <span className="text-slate-400 block text-[11px]">السرعة باللتر في الساعة</span>
              <strong className="text-cyan-400 text-sm">{((selectedGauge.flowRateMlMin * 60) / 1000).toFixed(1)} L/h</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Injection Angles Section */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="text-right" dir="rtl">
            <h3 className="text-lg font-bold text-white font-['Cairo']">
              زوايا الحقن السريرية وطبقات الجلد المستهدفة
            </h3>
            <p className="text-xs text-slate-400">
              Injektionswinkel und anatomische Gewebeschichten
            </p>
          </div>

          {/* Segmented Angle Tabs */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-medium">
            <button
              onClick={() => setActiveAngleTab('im')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeAngleTab === 'im' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              عضلي 90° (i.m.)
            </button>
            <button
              onClick={() => setActiveAngleTab('sc')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeAngleTab === 'sc' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              تحت الجلد 45° (s.c.)
            </button>
            <button
              onClick={() => setActiveAngleTab('iv')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeAngleTab === 'iv' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              وريدي 25° (i.v.)
            </button>
            <button
              onClick={() => setActiveAngleTab('id')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeAngleTab === 'id' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              داخل الأدمة 10° (i.d.)
            </button>
          </div>
        </div>

        {/* Anatomical Cross-Section Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Visual SVG Skin Layers with Needle Angle (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-xl p-4 border border-slate-800 flex flex-col items-center justify-center">
            <svg viewBox="0 0 400 240" className="w-full h-56">
              {/* Layer 1: Epidermis (Top Surface) */}
              <rect x="20" y="50" width="360" height="20" fill="#fbcfe8" opacity="0.6" stroke="#f472b6" strokeWidth="1" />
              <text x="30" y="65" fill="#f43f5e" fontSize="10" fontWeight="bold">Epidermis (البشرة 1-2 mm)</text>

              {/* Layer 2: Dermis (Corium) */}
              <rect x="20" y="70" width="360" height="35" fill="#fed7aa" opacity="0.6" stroke="#fb923c" strokeWidth="1" />
              <text x="30" y="90" fill="#ea580c" fontSize="10" fontWeight="bold">Dermis / Lederhaut (الأدمة)</text>

              {/* Layer 3: Subcutis (Fat layer) */}
              <rect x="20" y="105" width="360" height="60" fill="#fef08a" opacity="0.6" stroke="#eab308" strokeWidth="1" />
              <text x="30" y="135" fill="#ca8a04" fontSize="10" fontWeight="bold">Subkutis / Fettgewebe (النسيج الشحمي)</text>

              {/* Layer 4: Muscle */}
              <rect x="20" y="165" width="360" height="65" fill="#fca5a5" opacity="0.6" stroke="#ef4444" strokeWidth="1" />
              <text x="30" y="200" fill="#dc2626" fontSize="10" fontWeight="bold">Muskelgewebe (النسيج العضلي العميق)</text>

              {/* Needle entering at dynamic angle based on activeAngleTab */}
              {activeAngleTab === 'im' && (
                <g>
                  {/* 90-degree straight down needle */}
                  <line x1="200" y1="5" x2="200" y2="190" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                  <polygon points="195,190 205,190 200,205" fill="#0284c7" />
                  <circle cx="200" cy="5" r="8" fill="#38bdf8" />
                  <text x="215" y="30" fill="#38bdf8" fontSize="13" fontWeight="bold">90° (i.m.)</text>
                </g>
              )}

              {activeAngleTab === 'sc' && (
                <g>
                  {/* 45-degree angled needle into subcutis */}
                  <line x1="120" y1="10" x2="220" y2="135" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                  <polygon points="215,130 225,133 228,142" fill="#0284c7" />
                  <circle cx="120" cy="10" r="8" fill="#38bdf8" />
                  <text x="145" y="35" fill="#38bdf8" fontSize="13" fontWeight="bold">45° (s.c.)</text>
                </g>
              )}

              {activeAngleTab === 'iv' && (
                <g>
                  {/* 25-degree shallow needle into vein */}
                  <line x1="90" y1="25" x2="240" y2="95" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                  <polygon points="235,90 245,92 248,100" fill="#0284c7" />
                  <circle cx="90" cy="25" r="8" fill="#38bdf8" />
                  {/* Vein inside Dermis/Subcutis */}
                  <ellipse cx="255" cy="102" rx="16" ry="8" fill="#3b82f6" opacity="0.8" />
                  <text x="125" y="45" fill="#38bdf8" fontSize="13" fontWeight="bold">25° (i.v.)</text>
                </g>
              )}

              {activeAngleTab === 'id' && (
                <g>
                  {/* 10-15 degree flat needle into dermis */}
                  <line x1="80" y1="50" x2="240" y2="78" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                  <polygon points="235,74 245,76 248,82" fill="#0284c7" />
                  <circle cx="80" cy="50" r="8" fill="#38bdf8" />
                  {/* Wheal (Quaddel) */}
                  <ellipse cx="250" cy="74" rx="14" ry="6" fill="#f43f5e" opacity="0.6" />
                  <text x="110" y="45" fill="#38bdf8" fontSize="13" fontWeight="bold">10°–15° (i.d.) Quaddel</text>
                </g>
              )}
            </svg>
            <span className="text-[11px] text-slate-500 font-mono mt-1">
              مخطط تشريحي لعمق اختراق سن الإبرة للطبقات النسيجية
            </span>
          </div>

          {/* Angle Details (5 cols) */}
          <div className="lg:col-span-5 space-y-3 text-right" dir="rtl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                {currentAngle.nameDe}
              </span>
              <span className="text-sm font-bold text-white font-['Cairo']">
                الزاوية: {currentAngle.angle}°
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">الطبقة النسيجية المستهدفة (Zielgewebe):</span>
                <strong className="text-cyan-300 block text-xs mt-0.5">{currentAngle.targetLayerAr}</strong>
                <span className="text-slate-400 text-[10px] font-mono block text-left" dir="ltr">{currentAngle.targetLayerDe}</span>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">طول ومقاس الإبرة الموصى به:</span>
                <strong className="text-amber-300 block text-xs mt-0.5">{currentAngle.needleLengthAr}</strong>
                <span className="text-slate-400 text-[10px] font-mono block text-left" dir="ltr">{currentAngle.needleLengthDe}</span>
              </div>

              <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-cyan-200">
                <span className="font-bold block text-cyan-400 mb-0.5">تعليمات الأداء السريري:</span>
                {currentAngle.notesAr}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
