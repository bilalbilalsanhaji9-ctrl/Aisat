import React, { useState, useEffect, useRef } from 'react';
import { ECG_RHYTHMS } from '../data/examCasesData';
import { ECGRhythm } from '../types';
import {
  Activity,
  Heart,
  Volume2,
  VolumeX,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ShieldAlert
} from 'lucide-react';

export const ECGSimulator: React.FC = () => {
  const [selectedRhythm, setSelectedRhythm] = useState<ECGRhythm>(ECG_RHYTHMS[0]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'monitor' | 'leads'>('monitor');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const sweepXRef = useRef<number>(0);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Play heart beep sound
  const playBeep = () => {
    if (!soundEnabled || selectedRhythm.rateBpm === 0) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(selectedRhythm.isEmergency ? 750 : 520, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Audio not permitted
    }
  };

  // Live Canvas Waveform Drawing Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let localX = 0;
    const width = canvas.width;
    const height = canvas.height;
    const baseline = height / 2;
    let lastTime = performance.now();
    let beatTimer = 0;
    const beatInterval = selectedRhythm.rateBpm > 0 ? (60 / selectedRhythm.rateBpm) * 1000 : 999999;

    // Draw ECG Background Grid
    const drawGrid = () => {
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      // Fine grid
      ctx.strokeStyle = '#064e3b';
      ctx.lineWidth = 0.5;
      const step = 20;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    drawGrid();

    const generateY = (phase: number, rhythm: ECGRhythm) => {
      // Phase 0 to 1 along a cardiac cycle
      const p = phase % 1;

      if (rhythm.id === 'asystole') {
        return baseline + (Math.random() - 0.5) * 2;
      }

      if (rhythm.id === 'vfib') {
        // Chaotic fibrillation waveform
        return baseline + Math.sin(p * Math.PI * 14) * 35 * (0.8 + Math.random() * 0.4);
      }

      if (rhythm.id === 'vtach') {
        // Monomorphic wide QRS
        return baseline - Math.sin(p * Math.PI * 2) * 55;
      }

      // Standard / modified P-QRS-T complex
      if (p < 0.15) {
        // Isoelectric baseline
        return baseline;
      } else if (p >= 0.15 && p < 0.25) {
        // P-wave (Atrial depolarization)
        if (rhythm.id === 'atrial_fib') {
          // Fibrillatory baseline waves
          return baseline + Math.sin(p * 80) * 4;
        }
        return baseline - Math.sin(((p - 0.15) / 0.1) * Math.PI) * 12;
      } else if (p >= 0.25 && p < 0.32) {
        // PR segment
        return baseline;
      } else if (p >= 0.32 && p < 0.34) {
        // Q-wave (Septal)
        return baseline + 10;
      } else if (p >= 0.34 && p < 0.38) {
        // R-wave (Ventricular depolarization peak)
        const progress = (p - 0.34) / 0.04;
        return baseline - 75 * Math.sin(progress * Math.PI);
      } else if (p >= 0.38 && p < 0.42) {
        // S-wave
        return baseline + 22;
      } else if (p >= 0.42 && p < 0.52) {
        // ST segment
        if (rhythm.id === 'stemi') {
          // Significant ST elevation above baseline!
          return baseline - 24;
        }
        return baseline;
      } else if (p >= 0.52 && p < 0.70) {
        // T-wave (Ventricular repolarization)
        if (rhythm.id === 'stemi') {
          // Hyperacute T-wave
          return baseline - 35 * Math.sin(((p - 0.52) / 0.18) * Math.PI);
        }
        return baseline - 20 * Math.sin(((p - 0.52) / 0.18) * Math.PI);
      } else {
        // TP segment
        return baseline;
      }
    };

    let cardiacPhase = 0;

    const animate = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;
      beatTimer += dt;

      if (beatTimer >= beatInterval) {
        beatTimer = 0;
        playBeep();
      }

      // Advance sweep line
      const speed = 2.4; // pixels per frame
      const clearWidth = 24;

      // Clear upcoming slice and redraw grid behind it
      ctx.fillStyle = '#020617';
      ctx.fillRect(localX, 0, clearWidth, height);

      // Faint grid in cleared section
      ctx.strokeStyle = '#064e3b';
      ctx.lineWidth = 0.5;
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(localX, y);
        ctx.lineTo(Math.min(width, localX + clearWidth), y);
        ctx.stroke();
      }

      // Compute y
      const phaseSpeed = (selectedRhythm.rateBpm / 60) * 0.015;
      cardiacPhase += phaseSpeed;
      const y = generateY(cardiacPhase, selectedRhythm);

      // Draw glowing ECG sweep trace
      ctx.beginPath();
      ctx.strokeStyle = selectedRhythm.isEmergency ? '#f43f5e' : '#10b981';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = selectedRhythm.isEmergency ? '#f43f5e' : '#10b981';
      ctx.shadowBlur = 4;
      ctx.lineCap = 'round';
      ctx.moveTo(localX, y);
      ctx.lineTo(localX + speed, y);
      ctx.stroke();
      ctx.shadowBlur = 0;

      localX += speed;
      if (localX >= width) {
        localX = 0;
      }
      sweepXRef.current = localX;

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [selectedRhythm, soundEnabled]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-2">
          <span className="font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-4 h-4" />
            12-KANAL-EKG-MONITOR & RHYTHMUSSIMULATOR
          </span>
          <span className="text-slate-400 font-['Cairo']">
            محاكي تخطيط القلب 12 اشتقاق وتحليل اضطرابات النظم الحادة
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-left font-['Plus_Jakarta_Sans']" dir="ltr">
            <h2 className="text-2xl font-bold text-white tracking-tight">Elektrokardiographie in Echtzeit</h2>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Interaktive Analyse von Sinusrhythmus, Herzinfarkt (STEMI), Vorhofflimmern und Notfall-Stillstandsrhythmen.
            </p>
          </div>
          <div className="text-right font-['Cairo']" dir="rtl">
            <h2 className="text-2xl font-bold text-cyan-400 tracking-tight">مراقبة نظم القلب وتفسير المنحنيات السريرية</h2>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
              تحليل مباشر لموجات التخطيط، التعرف على إشارات الجلطة القلبية، وقواعد تركيب الأقطاب العشرة بالترميز اللوني الدقيق.
            </p>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 pt-6">
          <button
            onClick={() => setActiveTab('monitor')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'monitor'
                ? 'bg-cyan-500 text-white shadow-lg'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>شاشة المنحنيات الحية (EKG-Monitor)</span>
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'leads'
                ? 'bg-cyan-500 text-white shadow-lg'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>دليل مواضع الأقطاب العشرة (Ableitungsorte)</span>
          </button>
        </div>
      </div>

      {activeTab === 'monitor' && (
        <div className="space-y-6">
          {/* Main ECG Screen Box */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 font-mono text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  LIVE LEAD II (Ableitung II)
                </span>
                <span className="text-slate-500 font-mono">25 mm/s · 10 mm/mV</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-slate-400">HF (Herzfrequenz):</span>
                  <span className={`text-lg font-bold ${selectedRhythm.isEmergency ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {selectedRhythm.rateBpm} bpm
                  </span>
                </div>

                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`p-1.5 rounded-lg border transition-colors flex items-center gap-1 text-xs ${
                    soundEnabled
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                  title={soundEnabled ? 'كتم صوت النبض' : 'تشغيل صوت نبض القلب'}
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
                  <span className="text-[11px] hidden sm:inline">{soundEnabled ? 'الصوت مفعّل' : 'صوت صامت'}</span>
                </button>
              </div>
            </div>

            {/* Canvas ECG Screen */}
            <div className="relative w-full rounded-xl overflow-hidden border border-slate-800 bg-[#020617] flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={780}
                height={260}
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur px-2.5 py-1 rounded-md border border-slate-800 text-[11px] font-mono text-slate-300">
                {selectedRhythm.nameDe}
              </div>
            </div>

            {/* Rhythm Selector Buttons Grid */}
            <div className="space-y-2 pt-2">
              <span className="text-xs text-slate-400 font-medium block text-right font-['Cairo']" dir="rtl">
                اختر النمط القلبي لمحاكاته وفحص استجابة التمريض:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ECG_RHYTHMS.map(rhythm => {
                  const isCurrent = selectedRhythm.id === rhythm.id;
                  return (
                    <button
                      key={rhythm.id}
                      onClick={() => setSelectedRhythm(rhythm)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        isCurrent
                          ? rhythm.isEmergency
                            ? 'bg-rose-950/60 border-rose-500 text-white shadow-lg ring-1 ring-rose-500'
                            : 'bg-cyan-950/60 border-cyan-500 text-white shadow-lg ring-1 ring-cyan-500'
                          : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono mb-0.5">
                        <span className={rhythm.isEmergency ? 'text-rose-400 font-bold' : 'text-cyan-400'}>
                          {rhythm.rateBpm} bpm
                        </span>
                        {rhythm.isEmergency && (
                          <span className="px-1 py-0.2 bg-rose-500 text-[9px] text-white font-bold rounded uppercase">
                            NOTFALL
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-bold text-white font-['Cairo'] text-right truncate" dir="rtl">
                        {rhythm.nameAr}
                      </p>
                      <p className="text-[10px] text-slate-400 font-['Plus_Jakarta_Sans'] truncate" dir="ltr">
                        {rhythm.nameDe}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Clinical Interpretation Deck for Selected Rhythm */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 text-right" dir="rtl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono text-cyan-400 font-bold">التشخيص والأهمية السريرية</span>
                <span className="text-sm font-bold text-white font-['Cairo']">{selectedRhythm.nameAr}</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <strong className="text-cyan-300 block font-['Cairo']">الأهمية السريرية للمريض:</strong>
                  <p className="text-slate-200 leading-relaxed">{selectedRhythm.clinicalSignificanceAr}</p>
                  <p className="text-[11px] text-slate-400 text-left font-['Plus_Jakarta_Sans'] pt-1" dir="ltr">
                    DE: {selectedRhythm.clinicalSignificanceDe}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">موجة P (Vorhoferregung):</span>
                    <strong className="text-white block mt-0.5">{selectedRhythm.pWave}</strong>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">مركب QRS (Kammererregung):</span>
                    <strong className="text-white block mt-0.5">{selectedRhythm.qrsDuration}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 text-right" dir="rtl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono text-emerald-400 font-bold">الإجراءات التمريضية الفورية المطلوبة</span>
                <span className="text-xs text-slate-400 font-mono">Pflegerische Maßnahmen</span>
              </div>

              <div className="space-y-2.5">
                {selectedRhythm.nursingActionsAr.map((action, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="text-xs space-y-1">
                      <p className="text-slate-100 font-medium">{action}</p>
                      <p className="text-[11px] text-slate-400 font-['Plus_Jakarta_Sans'] text-left" dir="ltr">
                        {selectedRhythm.nursingActionsDe[idx]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Leads Tab: 10 Electrodes Placement Guide */}
      {activeTab === 'leads' && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
          <div className="text-right" dir="rtl">
            <h3 className="text-lg font-bold text-white font-['Cairo']">
              المواضع التشريحية الدقيقة للأقطاب العشرة (10 Elektroden für 12 Ableitungen)
            </h3>
            <p className="text-xs text-slate-400">
              أقطاب الصدر الستة وأقطاب الأطراف الأربعة وفق قاعدة إشارة المرور المعتمدة بألمانيا
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Vector Chest Diagram (6 cols) */}
            <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-6 border border-slate-800 flex flex-col items-center justify-center">
              <svg viewBox="0 0 400 320" className="w-full max-w-sm h-64 text-slate-400">
                {/* Torso Outline */}
                <path d="M 120 40 Q 200 60 280 40 L 320 120 L 300 300 L 100 300 L 80 120 Z" fill="#1e293b" stroke="#334155" strokeWidth="3" />
                {/* Clavicles */}
                <path d="M 130 50 Q 200 65 270 50" fill="none" stroke="#64748b" strokeWidth="3" />
                {/* Sternum */}
                <rect x="190" y="65" width="20" height="90" rx="4" fill="#334155" />

                {/* Chest Lead Dots V1 to V6 */}
                {/* V1: 4. ICR rechts parasternal (Rot) */}
                <circle cx="175" cy="140" r="10" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
                <text x="171" y="144" fill="#ffffff" fontSize="9" fontWeight="bold">V1</text>

                {/* V2: 4. ICR links parasternal (Gelb) */}
                <circle cx="225" cy="140" r="10" fill="#eab308" stroke="#ffffff" strokeWidth="2" />
                <text x="221" y="144" fill="#000000" fontSize="9" fontWeight="bold">V2</text>

                {/* V3: Zwischen V2 und V4 (Grün) */}
                <circle cx="235" cy="165" r="10" fill="#22c55e" stroke="#ffffff" strokeWidth="2" />
                <text x="231" y="169" fill="#ffffff" fontSize="9" fontWeight="bold">V3</text>

                {/* V4: 5. ICR Medioklavikularlinie (Braun) */}
                <circle cx="250" cy="190" r="10" fill="#854d0e" stroke="#ffffff" strokeWidth="2" />
                <text x="246" y="194" fill="#ffffff" fontSize="9" fontWeight="bold">V4</text>

                {/* V5: Vordere Axillarlinie (Schwarz) */}
                <circle cx="275" cy="195" r="10" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
                <text x="271" y="199" fill="#ffffff" fontSize="9" fontWeight="bold">V5</text>

                {/* V6: Mittlere Axillarlinie (Violett) */}
                <circle cx="295" cy="190" r="10" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
                <text x="291" y="194" fill="#ffffff" fontSize="9" fontWeight="bold">V6</text>

                {/* Limb Electrodes Badges */}
                <rect x="50" y="90" width="30" height="30" rx="6" fill="#ef4444" />
                <text x="60" y="110" fill="#ffffff" fontSize="12" fontWeight="bold">R</text>

                <rect x="320" y="90" width="30" height="30" rx="6" fill="#eab308" />
                <text x="330" y="110" fill="#000000" fontSize="12" fontWeight="bold">L</text>

                <rect x="305" y="270" width="30" height="30" rx="6" fill="#22c55e" />
                <text x="316" y="290" fill="#ffffff" fontSize="12" fontWeight="bold">F</text>

                <rect x="65" y="270" width="30" height="30" rx="6" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
                <text x="75" y="290" fill="#ffffff" fontSize="12" fontWeight="bold">N</text>
              </svg>
              <span className="text-[11px] text-slate-500 font-mono mt-2">
                مخطط الصدر البشري: V1 يمين القص، وV2 إلى V6 يساراً
              </span>
            </div>

            {/* Limb Leads Mnemonic & Wilson Explanation (6 cols) */}
            <div className="lg:col-span-6 space-y-4 text-right" dir="rtl">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-cyan-400 font-bold text-xs block font-['Cairo']">
                  قاعدة الحفظ الألمانية لأقطاب الأطراف (Ampel-Prinzip):
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  "تبدأ إشارة المرور من أعلى اليمين باتجاه عقارب الساعة:
                  <strong className="text-rose-400 block mt-1">● أحمر (Rot): الذراع الأيمن</strong>
                  <strong className="text-amber-400 block">● أصفر (Gelb): الذراع الأيسر</strong>
                  <strong className="text-emerald-400 block">● أخضر (Grün): الساق اليسرى</strong>
                  <strong className="text-slate-400 block">● أسود (Schwarz): الساق اليمنى (الأرضي / Erde)</strong>"
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <span className="text-white font-bold block">مواضع أقطاب الصدر (V1 - V6):</span>
                <ul className="space-y-1.5 text-slate-300">
                  <li><strong>V1 (أحمر):</strong> الفراغ الوربي الرابع (4. ICR) على الحافة اليمنى لعظم القص.</li>
                  <li><strong>V2 (أصفر):</strong> الفراغ الوربي الرابع (4. ICR) على الحافة اليسرى لعظم القص.</li>
                  <li><strong>V3 (أخضر):</strong> في المنتصف تماماً بين القطبين V2 وV4.</li>
                  <li><strong>V4 (بني):</strong> الفراغ الوربي الخامس (5. ICR) على خط منتصف الترقوة الأيسر.</li>
                  <li><strong>V5 (أسود):</strong> الفراغ الوربي الخامس على الخط الإبطي الأمامي الأيسر.</li>
                  <li><strong>V6 (بنفسجي):</strong> الفراغ الوربي الخامس على الخط الإبطي الأوسط الأيسر.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
