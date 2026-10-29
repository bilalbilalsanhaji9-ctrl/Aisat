import React, { useState } from 'react';
import { MedicalDevice, DeviceHotspot, DeviceAlarm } from '../types';
import {
  AlertTriangle,
  Info,
  ShieldAlert,
  Sparkles,
  Volume2,
  Wrench,
  CheckCircle2,
  Bell
} from 'lucide-react';

interface DeviceViewerProps {
  device: MedicalDevice;
}

export const DeviceViewer: React.FC<DeviceViewerProps> = ({ device }) => {
  const [selectedHotspot, setSelectedHotspot] = useState<DeviceHotspot>(device.hotspots[0]);
  const [activeAlarm, setActiveAlarm] = useState<DeviceAlarm | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Play synthesized web audio alarm beep
  const triggerAlarmSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // 880 Hz high pitch
      osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch {
      // AudioContext unavailable
    }
  };

  const handleSimulateAlarm = (alarm: DeviceAlarm) => {
    setActiveAlarm(alarm);
    if (soundEnabled) {
      triggerAlarmSound();
    }
  };

  return (
    <div className="space-y-6">
      {/* Device Overview Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="font-mono text-cyan-400 font-semibold uppercase tracking-wider">
            MEDIZINISCHES GERÄTEPROFIL · {device.category.toUpperCase()}
          </span>
          <span className="text-slate-400">
            فترة الفحص الفني الدوري: <strong className="text-slate-200">{device.recommendedIntervals}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="text-left font-['Plus_Jakarta_Sans']" dir="ltr">
            <h2 className="text-2xl font-bold text-white tracking-tight">{device.nameDe}</h2>
            <p className="text-xs text-cyan-400 font-mono mt-0.5">{device.nameEn}</p>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">{device.shortDescDe}</p>
            <div className="mt-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400">
              <strong className="text-cyan-400 block mb-1">Physikalisches Funktionsprinzip:</strong>
              {device.physicalPrincipleDe}
            </div>
          </div>

          <div className="text-right font-['Cairo']" dir="rtl">
            <h2 className="text-2xl font-bold text-cyan-400 tracking-tight">{device.nameAr}</h2>
            <p className="text-xs text-slate-400 font-mono mt-0.5">{device.category}</p>
            <p className="text-sm text-slate-200 mt-2 leading-relaxed">{device.shortDescAr}</p>
            <div className="mt-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
              <strong className="text-cyan-400 block mb-1">المبدأ الفيزيائي والتقني للجهاز:</strong>
              {device.physicalPrincipleAr}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Blueprint Canvas & Hotspot Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Visual SVG Schematic (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[440px]">
          <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-4 pb-2 border-b border-slate-800">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              مخطط تفاعلي دقيق بالأجزاء الحقيقية للجهاز (انقر على النقاط)
            </span>
            <span className="text-[11px] font-mono text-cyan-400">Hotspot Interactive Blueprint</span>
          </div>

          {/* SVG Vector Device Representation with Real Dimensions */}
          <div className="relative w-full max-w-md aspect-[4/3] bg-slate-900/80 rounded-xl border border-slate-800 p-4 flex items-center justify-center shadow-inner">
            {/* Background Graphic Blueprint based on device id */}
            {device.id === 'infusomat' && (
              <svg viewBox="0 0 400 300" className="w-full h-full text-slate-400">
                {/* Main Body */}
                <rect x="50" y="20" width="300" height="260" rx="20" fill="#1e293b" stroke="#334155" strokeWidth="4" />
                {/* Screen */}
                <rect x="80" y="45" width="240" height="90" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="2" />
                <text x="95" y="75" fill="#38bdf8" fontSize="16" fontFamily="monospace" fontWeight="bold">RATE: 125.0 ml/h</text>
                <text x="95" y="100" fill="#94a3b8" fontSize="12" fontFamily="monospace">VTBI: 500 ml | TIME: 03:59</text>
                <text x="95" y="122" fill="#22c55e" fontSize="11" fontFamily="monospace">STATUS: RUNNING ● BAT: 98%</text>
                {/* Door Latch Handle */}
                <rect x="150" y="145" width="100" height="24" rx="6" fill="#475569" stroke="#64748b" strokeWidth="2" />
                {/* Peristaltic Channel */}
                <path d="M 70 170 Q 200 240 330 170" fill="none" stroke="#0284c7" strokeWidth="6" strokeDasharray="6,4" />
                {/* Sensors */}
                <circle cx="100" cy="220" r="14" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="300" cy="220" r="14" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
                {/* Battery LED */}
                <rect x="310" y="28" width="24" height="12" rx="2" fill="#10b981" />
              </svg>
            )}

            {device.id === 'perfusor' && (
              <svg viewBox="0 0 400 300" className="w-full h-full text-slate-400">
                <rect x="40" y="30" width="320" height="240" rx="16" fill="#1e293b" stroke="#334155" strokeWidth="4" />
                {/* 50ml Syringe Chamber */}
                <rect x="80" y="80" width="180" height="50" rx="6" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
                <rect x="260" y="90" width="70" height="30" rx="3" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
                {/* Drive Head */}
                <rect x="310" y="70" width="35" height="70" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="3" />
                {/* Syringe Volume Graduations */}
                <line x1="110" y1="80" x2="110" y2="100" stroke="#94a3b8" strokeWidth="2" />
                <line x1="140" y1="80" x2="140" y2="100" stroke="#94a3b8" strokeWidth="2" />
                <line x1="170" y1="80" x2="170" y2="100" stroke="#94a3b8" strokeWidth="2" />
                <line x1="200" y1="80" x2="200" y2="100" stroke="#94a3b8" strokeWidth="2" />
                <text x="140" y="115" fill="#38bdf8" fontSize="13" fontFamily="monospace">50 ml BD Plastipak</text>
                {/* Screen Display */}
                <rect x="80" y="150" width="240" height="65" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="2" />
                <text x="95" y="175" fill="#f43f5e" fontSize="15" fontFamily="monospace" fontWeight="bold">NORADRENALIN: 2.4 ml/h</text>
                <text x="95" y="198" fill="#38bdf8" fontSize="12" fontFamily="monospace">Dosis: 0.08 µg/kg/min</text>
                {/* Bolus Button */}
                <circle cx="200" cy="245" r="16" fill="#e11d48" stroke="#fda4af" strokeWidth="2" />
                <text x="187" y="250" fill="#ffffff" fontSize="10" fontWeight="bold">BOLUS</text>
              </svg>
            )}

            {device.id === 'ekg_monitor' && (
              <svg viewBox="0 0 400 300" className="w-full h-full text-slate-400">
                <rect x="30" y="20" width="340" height="260" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="4" />
                {/* Monitor Waveform Canvas */}
                <rect x="50" y="40" width="300" height="150" rx="8" fill="#020617" stroke="#1e293b" strokeWidth="2" />
                {/* ECG Grid Lines */}
                <path d="M 50 80 H 350 M 50 115 H 350 M 50 150 H 350" stroke="#064e3b" strokeWidth="1" strokeDasharray="3,3" />
                {/* Green ECG Rhythm Line */}
                <path d="M 50 115 L 90 115 L 95 105 L 100 115 L 110 115 L 115 125 L 122 55 L 130 145 L 135 115 L 150 115 Q 165 95 180 115 L 210 115 L 215 105 L 220 115 L 230 115 L 235 125 L 242 55 L 250 145 L 255 115 L 270 115 Q 285 95 300 115 L 350 115" fill="none" stroke="#10b981" strokeWidth="2.5" />
                <text x="60" y="60" fill="#10b981" fontSize="14" fontFamily="monospace" fontWeight="bold">HF: 72 bpm</text>
                <text x="260" y="60" fill="#38bdf8" fontSize="13" fontFamily="monospace">SpO2: 98%</text>
                {/* Lead Connection Cable Ports */}
                <rect x="60" y="210" width="280" height="50" rx="6" fill="#1e293b" />
                <circle cx="90" cy="235" r="12" fill="#ef4444" />
                <circle cx="130" cy="235" r="12" fill="#eab308" />
                <circle cx="170" cy="235" r="12" fill="#22c55e" />
                <circle cx="210" cy="235" r="12" fill="#000000" stroke="#64748b" strokeWidth="2" />
                <text x="245" y="240" fill="#94a3b8" fontSize="11" fontFamily="monospace">Wilson V1-V6</text>
              </svg>
            )}

            {device.id === 'pulsoximeter' && (
              <svg viewBox="0 0 400 300" className="w-full h-full text-slate-400">
                <rect x="100" y="30" width="200" height="240" rx="28" fill="#1e293b" stroke="#334155" strokeWidth="4" />
                {/* Display Screen */}
                <rect x="125" y="60" width="150" height="110" rx="12" fill="#020617" stroke="#0ea5e9" strokeWidth="2" />
                <text x="140" y="95" fill="#38bdf8" fontSize="28" fontFamily="monospace" fontWeight="bold">98</text>
                <text x="180" y="85" fill="#94a3b8" fontSize="11">%SpO₂</text>
                <text x="215" y="95" fill="#10b981" fontSize="24" fontFamily="monospace" fontWeight="bold">74</text>
                <text x="250" y="85" fill="#94a3b8" fontSize="10">PR bpm</text>
                {/* Pleth Waveform */}
                <path d="M 130 145 Q 145 115 160 145 T 190 145 T 220 145 T 250 145" fill="none" stroke="#eab308" strokeWidth="2" />
                {/* Button */}
                <circle cx="200" cy="210" r="18" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                {/* Finger Clip Chamber */}
                <path d="M 150 270 Q 200 290 250 270" fill="none" stroke="#475569" strokeWidth="8" />
              </svg>
            )}

            {device.id === 'blutzucker' && (
              <svg viewBox="0 0 400 300" className="w-full h-full text-slate-400">
                <rect x="120" y="30" width="160" height="240" rx="30" fill="#1e293b" stroke="#475569" strokeWidth="4" />
                {/* Screen */}
                <rect x="140" y="60" width="120" height="100" rx="10" fill="#0f172a" stroke="#0284c7" strokeWidth="2" />
                <text x="155" y="115" fill="#38bdf8" fontSize="32" fontFamily="monospace" fontWeight="bold">104</text>
                <text x="210" y="140" fill="#94a3b8" fontSize="12" fontFamily="sans-serif">mg/dl</text>
                <text x="150" y="80" fill="#22c55e" fontSize="11">08:15 Nüchtern</text>
                {/* Test Strip Slot */}
                <rect x="180" y="20" width="40" height="12" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
                {/* Test Strip Inserted */}
                <rect x="188" y="5" width="24" height="25" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
                <circle cx="200" cy="10" r="3" fill="#dc2626" />
                {/* Buttons */}
                <circle cx="170" cy="190" r="14" fill="#334155" />
                <circle cx="230" cy="190" r="14" fill="#334155" />
                <rect x="185" y="220" width="30" height="30" rx="8" fill="#0284c7" />
              </svg>
            )}

            {device.id === 'beatmung' && (
              <svg viewBox="0 0 400 300" className="w-full h-full text-slate-400">
                <rect x="40" y="20" width="320" height="260" rx="20" fill="#0f172a" stroke="#334155" strokeWidth="4" />
                {/* Touchscreen UI */}
                <rect x="60" y="40" width="280" height="150" rx="8" fill="#020617" stroke="#0284c7" strokeWidth="2" />
                {/* Pressure Waveform (P-t) */}
                <path d="M 70 90 L 100 65 L 140 68 L 150 95 L 200 95 L 230 65 L 270 68 L 280 95 L 330 95" fill="none" stroke="#38bdf8" strokeWidth="2" />
                {/* Flow Waveform (V-t) */}
                <path d="M 70 140 L 90 120 L 120 140 L 140 160 L 160 140 L 200 140 L 220 120 L 250 140 L 270 160 L 290 140" fill="none" stroke="#22c55e" strokeWidth="2" />
                <text x="75" y="180" fill="#38bdf8" fontSize="12" fontFamily="monospace">Ppeak: 18 mbar | PEEP: 5.0 | FiO2: 30%</text>
                {/* Valve Connections */}
                <circle cx="120" cy="235" r="18" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="280" cy="235" r="18" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
                <path d="M 120 253 Q 200 290 280 253" fill="none" stroke="#64748b" strokeWidth="6" />
              </svg>
            )}

            {/* Clickable Hotspot Circles */}
            {device.hotspots.map((hs, index) => {
              const isSelected = selectedHotspot.id === hs.id;
              return (
                <button
                  key={hs.id}
                  onClick={() => setSelectedHotspot(hs)}
                  style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    isSelected
                      ? 'bg-cyan-500 text-white ring-4 ring-cyan-400/40 scale-110'
                      : 'bg-slate-900/90 text-cyan-400 border border-cyan-500/60 hover:bg-cyan-600 hover:text-white'
                  }`}
                  title={`${hs.nameDe} (${hs.nameAr})`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          <p className="text-[11px] text-slate-500 mt-3 text-center">
            انقر على الأرقام أعلاه لفحص المكون ووظيفته السريرية والمخاطر المحتملة للخطأ
          </p>
        </div>

        {/* Right: Selected Component Details Card (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                مكون الجهاز المحدد · Baugruppe
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono">
                Hotspot #{device.hotspots.findIndex(h => h.id === selectedHotspot.id) + 1}
              </span>
            </div>

            <div className="text-left font-['Plus_Jakarta_Sans']" dir="ltr">
              <h3 className="text-lg font-bold text-white tracking-tight">{selectedHotspot.nameDe}</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{selectedHotspot.functionDe}</p>
            </div>

            <div className="text-right font-['Cairo'] pt-1 border-t border-slate-800/60" dir="rtl">
              <h3 className="text-lg font-bold text-cyan-300 tracking-tight">{selectedHotspot.nameAr}</h3>
              <p className="text-xs text-slate-200 mt-1 leading-relaxed">{selectedHotspot.functionAr}</p>
            </div>

            {/* Clinical Hazard Callout */}
            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-900/50 space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>الخطر السريري عند الخطأ أو العطل · Klinisches Risiko</span>
              </div>
              <p className="text-xs text-amber-100 font-['Cairo'] text-right" dir="rtl">
                {selectedHotspot.clinicalRiskAr}
              </p>
              <p className="text-[11px] text-amber-200/70 font-['Plus_Jakarta_Sans'] text-left" dir="ltr">
                {selectedHotspot.clinicalRiskDe}
              </p>
            </div>

            {selectedHotspot.alarmConditionDe && (
              <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-900/40 text-xs text-rose-300 space-y-1">
                <span className="font-bold flex items-center gap-1 text-rose-400">
                  <Bell className="w-3.5 h-3.5" /> حالة الإنذار المقترنة:
                </span>
                <p className="text-right" dir="rtl">{selectedHotspot.alarmConditionAr}</p>
                <p className="text-left text-[11px] text-rose-300/80" dir="ltr">{selectedHotspot.alarmConditionDe}</p>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>اختر مكوناً آخر للتعرف عليه:</span>
            <div className="flex items-center gap-1">
              {device.hotspots.map((hs, i) => (
                <button
                  key={hs.id}
                  onClick={() => setSelectedHotspot(hs)}
                  className={`w-6 h-6 rounded text-xs font-mono font-medium transition-colors ${
                    selectedHotspot.id === hs.id ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alarms and Error Troubleshooting Deck */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Cairo']">
                محاكي إنذارات الجهاز والتعامل السريري السريع (Gerätealarme)
              </h3>
              <p className="text-xs text-slate-400 font-['Plus_Jakarta_Sans']">
                Fehlercodes, Ursachenanalyse und Handlungsalgorithmen
              </p>
            </div>
          </div>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
              soundEnabled ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>صوت الإنذار: {soundEnabled ? 'مفعّل' : 'مكتوم'}</span>
          </button>
        </div>

        {/* Alarm Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {device.alarms.map(alarm => {
            const isCurrent = activeAlarm?.code === alarm.code;
            return (
              <button
                key={alarm.code}
                onClick={() => handleSimulateAlarm(alarm)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-rose-950/60 border-rose-500 text-white shadow-lg ring-1 ring-rose-500'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="font-mono text-[11px] text-rose-400 font-bold">{alarm.code}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded uppercase font-bold ${
                    alarm.priority === 'critical' ? 'bg-rose-500 text-white' : 'bg-amber-500 text-slate-950'
                  }`}>
                    {alarm.priority}
                  </span>
                </div>
                <p className="text-xs font-bold text-white font-['Cairo'] text-right" dir="rtl">{alarm.labelAr}</p>
                <p className="text-[11px] text-slate-400 font-['Plus_Jakarta_Sans'] truncate">{alarm.labelDe}</p>
              </button>
            );
          })}
        </div>

        {/* Detailed Alarm Resolution Box */}
        {activeAlarm && (
          <div className="p-5 rounded-xl bg-slate-950 border border-rose-900/60 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                تحليل الإنذار المختار: {activeAlarm.labelAr} ({activeAlarm.code})
              </span>
              <button
                onClick={() => setActiveAlarm(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                إغلاق التحليل ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1 text-right" dir="rtl">
                <strong className="text-amber-400 block font-['Cairo']">السبب المحتمل للعطل (Ursache):</strong>
                <p className="text-slate-200">{activeAlarm.causeAr}</p>
                <p className="text-[11px] text-slate-400 text-left font-['Plus_Jakarta_Sans'] pt-1" dir="ltr">
                  DE: {activeAlarm.causeDe}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/50 space-y-1 text-right" dir="rtl">
                <strong className="text-emerald-400 block font-['Cairo']">الإجراء التمريضي الفوري المطلوب (Sofortmaßnahme):</strong>
                <p className="text-emerald-100 font-medium">{activeAlarm.immediateActionAr}</p>
                <p className="text-[11px] text-emerald-300/80 text-left font-['Plus_Jakarta_Sans'] pt-1" dir="ltr">
                  DE: {activeAlarm.immediateActionDe}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cleaning, Hygiene & Safety Protocol */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
            <Wrench className="w-4 h-4" />
            <span>بروتوكول التطهير والنظافة المعتمد (Wischdesinfektion)</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300 text-right" dir="rtl">
            {device.cleaningProtocolsAr.map((p, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-bold">
            <ShieldAlert className="w-4 h-4" />
            <span>تعليمات السلامة الصارمة للمريض (Sicherheitsregeln)</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300 text-right" dir="rtl">
            {device.safetyGuidelinesAr.map((p, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
