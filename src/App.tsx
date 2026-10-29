import React, { useState, useEffect } from 'react';
import { AppMode, LanguageView } from './types';
import { VOLUMES_DATA } from './data/volumesData';
import { Header } from './components/Header';
import { NursingFundamentals } from './components/NursingFundamentals';
import { BilingualReader } from './components/BilingualReader';
import { DeviceCatalog } from './components/DeviceCatalog';
import { ClinicalCalculator } from './components/ClinicalCalculator';
import { ECGSimulator } from './components/ECGSimulator';
import { EmergencyWard } from './components/EmergencyWard';
import { DictionaryHub } from './components/DictionaryHub';
import { ExamHub } from './components/ExamHub';
import { VolumesIndex } from './components/VolumesIndex';
import { SearchModal } from './components/SearchModal';
import {
  BookOpen,
  Cpu,
  Calculator,
  Activity,
  AlertTriangle,
  Languages,
  GraduationCap,
  List,
  Search,
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [currentMode, setCurrentMode] = useState<AppMode>('fundamentals');
  const [languageView, setLanguageView] = useState<LanguageView>('split');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [currentVolumeId, setCurrentVolumeId] = useState<number>(1);
  const [currentChapterId, setCurrentChapterId] = useState<number>(101);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>('infusomat');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Sync dark class on documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSelectChapter = (volumeId: number, chapterId: number) => {
    setCurrentVolumeId(volumeId);
    setCurrentChapterId(chapterId);
    setCurrentMode('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDevice = (deviceId: string) => {
    setSelectedDeviceId(deviceId);
    setCurrentMode('devices');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      {/* 3-Zone Header Bar */}
      <Header
        currentMode={currentMode}
        onSelectMode={(mode) => {
          setCurrentMode(mode);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        languageView={languageView}
        onChangeLanguageView={setLanguageView}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {currentMode === 'fundamentals' && <NursingFundamentals />}

        {currentMode === 'reader' && (
          <BilingualReader
            volumes={VOLUMES_DATA}
            currentVolumeId={currentVolumeId}
            currentChapterId={currentChapterId}
            onSelectChapter={handleSelectChapter}
            languageView={languageView}
          />
        )}

        {currentMode === 'devices' && (
          <DeviceCatalog initialDeviceId={selectedDeviceId} />
        )}

        {currentMode === 'calculators' && <ClinicalCalculator />}

        {currentMode === 'ecg' && <ECGSimulator />}

        {currentMode === 'emergency' && <EmergencyWard />}

        {currentMode === 'dictionary' && <DictionaryHub />}

        {currentMode === 'cases' && <ExamHub />}

        {currentMode === 'index' && (
          <VolumesIndex onSelectChapter={handleSelectChapter} />
        )}
      </main>

      {/* Search Drawer Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToChapter={handleSelectChapter}
        onNavigateToDevice={handleSelectDevice}
        onNavigateToFundamentals={() => {
          setCurrentMode('fundamentals');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateToDictionary={() => {
          setCurrentMode('dictionary');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="space-y-1 text-center sm:text-right" dir="rtl">
            <p className="text-slate-200 font-semibold font-['Cairo']">
              المشروع الموسوعي الشامل في علوم التمريض والرعاية الصحية والتقنيات السريرية (ألماني - عربي)
            </p>
            <p className="text-[11px] text-slate-400">
              مخصص لطلاب التكوين المهني في ألمانيا (Ausbildung zur Pflegefachfrau / zum Pflegefachmann) وامتحانات التعديل المهني.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1 text-cyan-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Evidenz: RKI · ERC · DGK · DNQP
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <button
              onClick={() => {
                setCurrentMode('fundamentals');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" /> أساسيات التمريض
            </button>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <button
              onClick={() => {
                setCurrentMode('index');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <List className="w-3.5 h-3.5" /> الفهرس الكامل
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
