import React from 'react';
import { VOLUMES_DATA } from '../data/volumesData';
import { BookOpen, Clock, ChevronLeft, ArrowRight, ShieldCheck, Activity, Syringe, Bed, Cpu, AlertTriangle, Bandage, MessageSquare, GraduationCap, FileText } from 'lucide-react';

interface VolumesIndexProps {
  onSelectChapter: (volumeId: number, chapterId: number) => void;
}

const getVolumeIcon = (iconName: string) => {
  switch (iconName) {
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    case 'Activity': return <Activity className="w-5 h-5 text-emerald-400" />;
    case 'Syringe': return <Syringe className="w-5 h-5 text-rose-400" />;
    case 'Bed': return <Bed className="w-5 h-5 text-blue-400" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
    case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-rose-400" />;
    case 'Bandage': return <Bandage className="w-5 h-5 text-purple-400" />;
    case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-teal-400" />;
    case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-indigo-400" />;
    case 'BookOpen': return <BookOpen className="w-5 h-5 text-cyan-400" />;
    default: return <FileText className="w-5 h-5 text-slate-400" />;
  }
};

export const VolumesIndex: React.FC<VolumesIndexProps> = ({ onSelectChapter }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Index Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
          <span className="font-mono text-cyan-400 font-bold uppercase tracking-wider">
            GESAMTREGISTER & CURRICULUM · المنهج الدراسي المتكامل
          </span>
          <span>12 مجلداً تعليمياً معتمداً للتكوين التمريضي في ألمانيا</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-left font-['Plus_Jakarta_Sans']" dir="ltr">
            <h2 className="text-2xl font-bold text-white tracking-tight">Curriculum der Pflegeausbildung</h2>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Vollständige Übersicht aller 12 Mappen von der Grundpflege bis zum Notfallmanagement und der Staatsexamensvorbereitung.
            </p>
          </div>
          <div className="text-right font-['Cairo']" dir="rtl">
            <h2 className="text-2xl font-bold text-cyan-400 tracking-tight">الفهرس الشامل لموسوعة علوم التمريض السريرية</h2>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
              تصفح سريع لكافة المجلدات والوحدات العلمية؛ انقر على أي فصل للبدء في القراءة المتزامنة أو محاكاة أجهزته الطبية.
            </p>
          </div>
        </div>
      </div>

      {/* 12 Volumes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {VOLUMES_DATA.map(volume => (
          <div
            key={volume.id}
            className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                    {getVolumeIcon(volume.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    المجلد {volume.number}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {volume.chapters.length} فصول
                </span>
              </div>

              <div className="text-right font-['Cairo']" dir="rtl">
                <h3 className="text-base font-bold text-white leading-snug">
                  {volume.titleAr}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {volume.descriptionAr}
                </p>
              </div>

              <div className="text-left font-['Plus_Jakarta_Sans'] text-xs text-slate-400 pt-1" dir="ltr">
                <p className="text-[11px] font-medium text-slate-300 truncate">{volume.titleDe}</p>
              </div>
            </div>

            {/* Chapters list inside volume */}
            <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
              {volume.chapters.map(chap => (
                <button
                  key={chap.id}
                  onClick={() => onSelectChapter(volume.id, chap.id)}
                  className="w-full p-2 rounded-lg bg-slate-950/70 hover:bg-cyan-950/40 border border-slate-800/80 hover:border-cyan-500/40 text-right flex items-center justify-between transition-colors group"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  <div className="text-right">
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 font-['Cairo'] block">
                      فصل {chap.number}: {chap.titleAr.split(':')[1] || chap.titleAr}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      ~{chap.readTimeMin} دقيقة قراءة
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
