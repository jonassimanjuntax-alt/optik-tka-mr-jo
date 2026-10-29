import React from 'react';
import { Volume2, VolumeX, Grid, RotateCcw, Award, BookOpen, Compass, ChevronRight } from 'lucide-react';
import { narrator, TTSStatus } from '../utils/tts';

interface NavbarProps {
  currentView: 'home' | 'quiz' | 'results';
  onNavigate: (view: 'home' | 'quiz' | 'results') => void;
  onOpenDrawer: () => void;
  onOpenResetModal: () => void;
  onOpenPetaMateri: () => void;
  onOpenPetunjuk: () => void;
  currentScore: number;
  completedCount: number;
  totalQuestions: number;
  ttsStatus: TTSStatus;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenDrawer,
  onOpenResetModal,
  onOpenPetaMateri,
  onOpenPetunjuk,
  currentScore,
  completedCount,
  totalQuestions,
  ttsStatus,
}) => {
  const toggleMute = () => {
    narrator.setMute(!ttsStatus.isMuted);
  };

  const cycleRate = () => {
    const currentRate = ttsStatus.speechRate;
    const nextRate = currentRate === 1.0 ? 1.2 : currentRate === 1.2 ? 0.8 : 1.0;
    narrator.setRate(nextRate);
    narrator.speakText(`Kecepatan narator ${nextRate} kali.`);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Teacher Branding */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-rose-900 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl tracking-tight">FJ</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                  FISIKA JENIUS
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-red-100 text-red-700 uppercase tracking-wider">
                  TKA HOTS
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Alat Optik & Cacat Mata • Bimbingan Mister Jo
              </p>
            </div>
          </div>

          {/* Center Navigation Shortcuts */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                currentView === 'home'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => onNavigate('quiz')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                currentView === 'quiz'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Latihan 30 Soal</span>
              <span className="px-1.5 py-0.2 bg-slate-200 text-slate-700 rounded-full text-[10px]">
                {completedCount}/{totalQuestions}
              </span>
            </button>
            <button
              onClick={() => onNavigate('results')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                currentView === 'results'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Skor ({currentScore})</span>
            </button>
          </nav>

          {/* Right Tools & Audio controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio TTS Quick Controls */}
            <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
              <button
                onClick={toggleMute}
                title={ttsStatus.isMuted ? 'Aktifkan Suara Mister Jo' : 'Matikan Suara Mister Jo'}
                className={`p-1.5 rounded-lg transition-all ${
                  ttsStatus.isMuted
                    ? 'text-slate-400 hover:text-slate-700'
                    : 'text-red-600 bg-white shadow-xs font-bold'
                }`}
              >
                {ttsStatus.isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={cycleRate}
                title="Atur Kecepatan Suara Mister Jo (0.8x, 1.0x, 1.2x)"
                className="px-2 py-1 text-[11px] font-bold text-slate-700 hover:text-red-600 transition-colors"
              >
                {ttsStatus.speechRate}×
              </button>
            </div>

            {/* Peta 30 Soal Drawer Trigger */}
            <button
              onClick={onOpenDrawer}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl border border-slate-200 transition-all flex items-center gap-1.5 active:scale-95"
              title="Buka Peta 30 Soal"
            >
              <Grid className="w-4 h-4 text-slate-600" />
              <span className="hidden sm:inline">Peta Soal</span>
            </button>

            {/* Reset Progress Button */}
            <button
              onClick={onOpenResetModal}
              title="Reset Progres Latihan"
              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl border border-transparent hover:border-red-100 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
