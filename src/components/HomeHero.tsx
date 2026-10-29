import React from 'react';
import { Play, ArrowRight, BookOpen, Compass, Award, RotateCcw, Volume2, Sparkles, CheckCircle, Flame } from 'lucide-react';
import { narrator } from '../utils/tts';

interface HomeHeroProps {
  onStartQuiz: () => void;
  onResumeQuiz: () => void;
  onOpenPetaMateri: () => void;
  onOpenPetunjuk: () => void;
  onViewResults: () => void;
  onOpenResetModal: () => void;
  completedCount: number;
  totalQuestions: number;
  currentScore: number;
  lastQuestionId: number;
  hasVisitedBefore: boolean;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onStartQuiz,
  onResumeQuiz,
  onOpenPetaMateri,
  onOpenPetunjuk,
  onViewResults,
  onOpenResetModal,
  completedCount,
  totalQuestions,
  currentScore,
  lastQuestionId,
  hasVisitedBefore,
}) => {
  const introNarration = `Halo, para calon jagoan Fisika! Selamat datang di Fisika Jenius bersama Mister Jo. Di sini, kita tidak sekadar menghafal rumus. Kita akan belajar membaca fenomena, menganalisis data, memahami pembentukan bayangan, menghitung kekuatan lensa, dan menalar cara kerja berbagai alat optik. Ada 30 soal menantang yang akan membawa kalian dari memahami konsep dasar sampai mampu memecahkan persoalan optik yang kompleks. Dengarkan petunjuknya, amati stimulusnya, kerjakan soalnya, lalu bandingkan cara berpikirmu dengan pembahasan Mister Jo. Siap menjadi jenius optik? Mari kita mulai!`;

  const playWelcomeSpeech = () => {
    narrator.speakText(introNarration);
  };

  const handleStart = () => {
    narrator.speakText("Mari kita mulai belajar dari soal pertama. Cermati stimulus dan dengarkan bimbingan Mister Jo!");
    onStartQuiz();
  };

  const handleResume = () => {
    narrator.speakText(`Melanjutkan latihan ke soal nomor ${lastQuestionId}. Tetap semangat dan fokus!`);
    onResumeQuiz();
  };

  const handlePetaMateri = () => {
    narrator.speakText("Membuka peta materi alat optik dan cacat mata. Pelajari hubungan konsep dan rumus intinya.");
    onOpenPetaMateri();
  };

  const handlePetunjuk = () => {
    narrator.speakText("Membuka petunjuk penggunaan aplikasi. Pahami tipe soal dan sistem penilaian simulasi 200 hingga 800.");
    onOpenPetunjuk();
  };

  const handleHasil = () => {
    narrator.speakText(`Melihat hasil dan capaian belajar. Skor simulasi Anda saat ini adalah ${currentScore}.`);
    onViewResults();
  };

  const handleReset = () => {
    narrator.speakText("Perhatian, menu reset progres akan menghapus seluruh rekaman jawaban latihan.");
    onOpenResetModal();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Top Banner Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-700 via-red-800 to-slate-900 text-white shadow-2xl border border-red-500/20 p-6 sm:p-10 mb-8">
        {/* Optical Ray Backdrop Accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-red-500/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 -mb-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/50 border border-red-400/40 text-red-100 text-xs font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>MODUL TKA HOTS FISIKA 2026/2027</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              FISIKA JENIUS
              <span className="block text-xl sm:text-3xl font-extrabold text-red-200 mt-1">
                Alat Optik & Cacat Mata
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Bersama <strong className="text-amber-300 font-bold">Mister Jo</strong>, kuasai 30 soal HOTS penalaran kompleks mencakup mata miopi, hipermetropi, presbiopi, lup, mikroskop, teropong bintang, bumi, hingga teropong panggung dengan narator suara, animasi berkas cahaya, dan cara cepat!
            </p>

            {/* Audio Greeting Trigger Button */}
            <div className="pt-2">
              <button
                onClick={playWelcomeSpeech}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all backdrop-blur-sm active:scale-95"
              >
                <Volume2 className="w-4 h-4 text-amber-300" />
                <span>Dengarkan Sambutan Mister Jo (TTS)</span>
              </button>
            </div>
          </div>

          {/* Teacher Badge / Score Simulation Card */}
          <div className="lg:col-span-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-700/80 p-5 shadow-xl">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center text-white font-black text-xl shadow-md">
                MJ
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Mister Jo</h2>
                <p className="text-xs text-amber-400 font-medium">Pengajar Utama Fisika Optik</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Progres Soal</span>
                <span className="text-white font-bold">{completedCount} dari {totalQuestions} Soal</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-red-500 to-amber-400 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${(completedCount / totalQuestions) * 100}%` }}
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Skor Simulasi</span>
                  <span className="text-2xl font-black text-emerald-400">{currentScore}</span>
                  <span className="text-xs text-slate-400 font-normal"> / 800</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Skala Penilaian</span>
                  <span className="text-xs font-bold text-slate-300">200 - 800</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 6 Action Buttons as strictly required by prompt */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
        {/* 1. MULAI BELAJAR */}
        <button
          onClick={handleStart}
          className="group relative flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-600/20 border border-red-500 transition-all active:scale-98 text-left"
        >
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-red-200">Langkah Awal</span>
            <h2 className="text-lg font-black tracking-tight">MULAI BELAJAR</h2>
            <p className="text-xs text-red-100">Mulai dari Soal No. 1 dengan bimbingan lengkap</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <Play className="w-5 h-5 fill-white text-white" />
          </div>
        </button>

        {/* 2. LANJUTKAN LATIHAN */}
        <button
          onClick={handleResume}
          className="group relative flex items-center justify-between p-5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 shadow-md border-2 border-red-600/30 hover:border-red-600 transition-all active:scale-98 text-left"
        >
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">Simpanan Otomatis</span>
            <h2 className="text-lg font-black tracking-tight text-slate-900">LANJUTKAN LATIHAN</h2>
            <p className="text-xs text-slate-500">
              Lompat langsung ke Soal No. {lastQuestionId}
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>

        {/* 3. PETA MATERI */}
        <button
          onClick={handlePetaMateri}
          className="group relative flex items-center justify-between p-5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 shadow-sm border border-slate-200 hover:border-slate-300 transition-all active:scale-98 text-left"
        >
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Konsep Kunci</span>
            <h2 className="text-lg font-black tracking-tight text-slate-900">PETA MATERI</h2>
            <p className="text-xs text-slate-500">Rangkuman rumus & diagram optik</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5" />
          </div>
        </button>

        {/* 4. PETUNJUK PENGGUNAAN */}
        <button
          onClick={handlePetunjuk}
          className="group relative flex items-center justify-between p-5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 shadow-sm border border-slate-200 hover:border-slate-300 transition-all active:scale-98 text-left"
        >
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Panduan Siswa</span>
            <h2 className="text-lg font-black tracking-tight text-slate-900">PETUNJUK PENGGUNAAN</h2>
            <p className="text-xs text-slate-500">Fitur suara, cara cepat, & pembuktian</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
        </button>

        {/* 5. HASIL DAN PROGRES */}
        <button
          onClick={handleHasil}
          className="group relative flex items-center justify-between p-5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 shadow-sm border border-slate-200 hover:border-slate-300 transition-all active:scale-98 text-left"
        >
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Evaluasi IRT 200–800</span>
            <h2 className="text-lg font-black tracking-tight text-slate-900">HASIL DAN PROGRES</h2>
            <p className="text-xs text-slate-500">Analisis topik & rekomendasi belajar</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Award className="w-5 h-5" />
          </div>
        </button>

        {/* 6. RESET PROGRES */}
        <button
          onClick={handleReset}
          className="group relative flex items-center justify-between p-5 rounded-2xl bg-white hover:bg-rose-50/50 text-slate-900 shadow-sm border border-slate-200 hover:border-rose-200 transition-all active:scale-98 text-left"
        >
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-500">Mulai Dari Nol</span>
            <h2 className="text-lg font-black tracking-tight text-slate-900">RESET PROGRES</h2>
            <p className="text-xs text-slate-500">Hapus jawaban tersimpan dengan konfirmasi</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center group-hover:rotate-45 transition-transform">
            <RotateCcw className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* Feature Highlights Grid */}
      <div className="bg-slate-100/80 rounded-2xl p-6 border border-slate-200">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
          Keunggulan Belajar Bersama Mister Jo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>30 Soal HOTS Penalaran</span>
            </div>
            <p className="text-slate-600">
              Tepat 10 Pilihan Ganda biasa, 10 Pilihan Ganda Kompleks multi-opsi, dan 10 Benar-Salah 3 pernyataan berbobot.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-red-600" />
              <span>Narator Suara Bahasa Indonesia</span>
            </div>
            <p className="text-slate-600">
              Membacakan stimulus, petunjuk, pembahasan normal bertahap, dan cara cepat dengan pelafalan rumus yang fasih.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>Animasi Pembuktian & Cara Cepat</span>
            </div>
            <p className="text-slate-600">
              Diagram sinar terkalibrasi secara saintifik tanpa membocorkan jawaban sebelum dikerjakan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
