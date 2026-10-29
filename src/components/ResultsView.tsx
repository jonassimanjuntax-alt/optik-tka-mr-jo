import React from 'react';
import { Award, CheckCircle2, AlertCircle, HelpCircle, BarChart3, ArrowRight, RotateCcw, Sparkles, BookOpen } from 'lucide-react';
import { ScoreReport, Question } from '../types/quiz';
import { narrator } from '../utils/tts';

interface ResultsViewProps {
  report: ScoreReport;
  onSelectQuestion: (questionId: number) => void;
  onResetProgress: () => void;
  onBackToQuestions: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  report,
  onSelectQuestion,
  onResetProgress,
  onBackToQuestions,
}) => {
  const readResultsSummary = () => {
    narrator.speakText(
      `Hasil evaluasi latihan Anda: Skor simulasi adalah ${report.scaledScore} dari 800. Anda telah menjawab ${report.attempted} dari ${report.totalQuestions} soal dengan persentase ketepatan ${report.accuracyPercentage} persen. Jawaban benar ${report.fullyCorrect}, skor parsial ${report.partialCorrect}, dan salah ${report.incorrect}. Terus tingkatkan kemampuan fisikamu!`
    );
  };

  const getScoreBadge = (score: number) => {
    if (score >= 700) {
      return {
        label: 'Sangat Mahir (Jenius Fisika)',
        color: 'from-amber-400 to-amber-600 text-amber-950',
        textColor: 'text-amber-600',
        bgColor: 'bg-amber-50 border-amber-200'
      };
    } else if (score >= 550) {
      return {
        label: 'Kompeten (Siap Ujian TKA)',
        color: 'from-emerald-400 to-emerald-600 text-white',
        textColor: 'text-emerald-600',
        bgColor: 'bg-emerald-50 border-emerald-200'
      };
    } else if (score >= 400) {
      return {
        label: 'Berkembang (Perlu Penguatan Konsep)',
        color: 'from-blue-400 to-blue-600 text-white',
        textColor: 'text-blue-600',
        bgColor: 'bg-blue-50 border-blue-200'
      };
    } else {
      return {
        label: 'Perlu Latihan Intensif',
        color: 'from-slate-400 to-slate-600 text-white',
        textColor: 'text-slate-600',
        bgColor: 'bg-slate-50 border-slate-200'
      };
    }
  };

  const badge = getScoreBadge(report.scaledScore);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/40 border border-red-500/40 rounded-full text-xs font-bold text-red-200">
              <Award className="w-4 h-4 text-amber-300" />
              <span>LAPORAN EVALUASI & CAPAIAN BELAJAR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              HASIL DAN PROGRES TKA FISIKA
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Skor simulasi model 200–800 dihitung secara transparan dan monoton berdasarkan penguasaan dan ketepatan penyelesaian 30 soal HOTS.
            </p>

            <button
              onClick={readResultsSummary}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-bold transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Dengarkan Evaluasi Mister Jo</span>
            </button>
          </div>

          {/* Scaled Score Circle Display */}
          <div className="bg-slate-900/90 backdrop-blur-md p-6 rounded-3xl border border-slate-700/80 text-center shadow-xl min-w-[220px]">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
              Skor Simulasi TKA
            </span>
            <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400">
              {report.scaledScore}
            </div>
            <span className="text-xs text-slate-400 font-medium block mt-1">
              Rentang Skala: 200 – 800
            </span>

            <div className={`mt-3 px-3 py-1.5 rounded-xl text-xs font-extrabold ${badge.bgColor} ${badge.textColor} border`}>
              {badge.label}
            </div>
          </div>
        </div>
      </div>

      {/* Numerical Stats 4 Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Jawaban Benar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-emerald-600">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Benar Sempurna</span>
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="text-3xl font-black text-slate-900">{report.fullyCorrect}</div>
          <span className="text-xs text-slate-500">dari 30 soal</span>
        </div>

        {/* Skor Parsial */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-amber-500">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Skor Parsial</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="text-3xl font-black text-slate-900">{report.partialCorrect}</div>
          <span className="text-xs text-slate-500">pada PGK / Benar-Salah</span>
        </div>

        {/* Jawaban Salah */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-rose-500">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Salah</span>
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="text-3xl font-black text-slate-900">{report.incorrect}</div>
          <span className="text-xs text-slate-500">perlu dikaji ulang</span>
        </div>

        {/* Belum Dikerjakan */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Belum Selesai</span>
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="text-3xl font-black text-slate-900">{report.unattempted}</div>
          <span className="text-xs text-slate-500">soal tersisa</span>
        </div>
      </div>

      {/* Analisis Penguasaan Materi per Topik */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-red-600" />
            <h3 className="text-lg font-black text-slate-900">
              ANALISIS PENGUASAAN MATERI PER TOPIK
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-500">
            Akurasi Rata-Rata: {report.accuracyPercentage}%
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(report.topicBreakdown).map(([topic, data]) => {
            const pct = data.accuracy;
            return (
              <div key={topic} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">{topic}</span>
                  <span className={`text-xs font-black ${pct >= 70 ? 'text-emerald-600' : pct >= 40 ? 'text-amber-600' : 'text-rose-600'}`}>
                    {pct}% ({data.earned.toFixed(1)}/{data.total})
                  </span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      pct >= 70 ? 'bg-emerald-500' : pct >= 40 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rekomendasi Belajar Personal */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-black text-amber-950 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <span>REKOMENDASI BELAJAR MISTER JO</span>
        </h3>

        <div className="space-y-2">
          {report.recommendations.map((rec, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">•</span>
              <p className="leading-relaxed font-medium">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Metodologi Skor Penilaian Simulasi 200-800 */}
      <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-1">
        <strong className="text-slate-800 block">Metodologi Pemetaan Skor:</strong>
        <p>
          Skor dihitung menggunakan model simulasi linier terkalibrasi monoton: Skor = 200 + (Total Rasio Skor / 30) × 600. Batas bawah 200 mewakili 0% pemenuhan kriteria, dan batas atas 800 mewakili 100% ketepatan sempurna. Pada soal PG Kompleks dan Benar-Salah, poin parsial dihitung adil tanpa duplikasi bobot.
        </p>
      </div>

      {/* Action Footer Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onBackToQuestions}
          className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-red-600/20 transition-all flex items-center gap-2 active:scale-98"
        >
          <BookOpen className="w-4 h-4" />
          <span>Lanjutkan Pengerjaan Soal</span>
        </button>

        <button
          onClick={onResetProgress}
          className="px-4 py-3 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 font-bold text-xs rounded-xl transition-all flex items-center gap-1.5"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Semua Jawaban</span>
        </button>
      </div>
    </div>
  );
};
