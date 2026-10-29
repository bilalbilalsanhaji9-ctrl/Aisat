import React, { useState } from 'react';
import { MEDICAL_DEVICES_DATA } from '../data/devicesData';
import { DeviceViewer } from './DeviceViewer';
import { NeedleGaugeVisualizer } from './NeedleGaugeVisualizer';
import { MedicalDevice } from '../types';
import { Cpu, Syringe, Heart, Activity, Droplets, Wind, Gauge } from 'lucide-react';

interface DeviceCatalogProps {
  initialDeviceId?: string;
}

export const DeviceCatalog: React.FC<DeviceCatalogProps> = ({ initialDeviceId }) => {
  const [activeTab, setActiveTab] = useState<'devices' | 'needles'>(
    initialDeviceId === 'gauge_system' ? 'needles' : 'devices'
  );
  const [selectedDevice, setSelectedDevice] = useState<MedicalDevice>(
    MEDICAL_DEVICES_DATA.find(d => d.id === initialDeviceId) || MEDICAL_DEVICES_DATA[0]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Category Toggle: Electronic Hardware vs Needle Gauge System */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-slate-900 border border-slate-800 rounded-2xl">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('devices')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'devices'
                ? 'bg-cyan-500 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>أجهزة المراقبة والتسريب الحجمي (Gerätetechnik)</span>
          </button>

          <button
            onClick={() => setActiveTab('needles')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'needles'
                ? 'bg-cyan-500 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Syringe className="w-4 h-4" />
            <span>نظام مقاييس الإبر وزوايا الحقن (Gauge-System)</span>
          </button>
        </div>

        <span className="text-xs text-slate-400 px-3 hidden sm:inline font-mono">
          Medizinprodukte nach MPBetreibV
        </span>
      </div>

      {activeTab === 'devices' && (
        <div className="space-y-6">
          {/* Device Switcher Horizontal Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {MEDICAL_DEVICES_DATA.map(dev => {
              const isSelected = selectedDevice.id === dev.id;
              return (
                <button
                  key={dev.id}
                  onClick={() => setSelectedDevice(dev)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-md ring-1 ring-cyan-500/40'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <Cpu className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span className="font-['Cairo']">{dev.nameAr.split('(')[0]}</span>
                  <span className="text-[10px] font-mono opacity-60">({dev.nameDe.split('(')[0]})</span>
                </button>
              );
            })}
          </div>

          {/* Render Active Device Viewer */}
          <DeviceViewer device={selectedDevice} />
        </div>
      )}

      {activeTab === 'needles' && <NeedleGaugeVisualizer />}
    </div>
  );
};
