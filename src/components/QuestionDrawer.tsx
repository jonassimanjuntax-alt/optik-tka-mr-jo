import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Circle, Filter } from 'lucide-react';
import { Question, UserAnswer, QuestionType } from '../types/quiz';

interface QuestionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  currentQuestionId: number;
  userAnswers: { [id: number]: UserAnswer };
  onSelectQuestion: (questionId: number) => void;
}

export const QuestionDrawer: React.FC<QuestionDrawerProps> = ({
  isOpen,
  onClose,
  questions,
  currentQuestionId,
  userAnswers,
  onSelectQuestion,
}) => {
  const [filterType, setFilterType] = useState<string>('all');

  if (!isOpen) return null;

  const filteredQuestions = questions.filter((q) => {
    if (filterType === 'all') return true;
    return q.type === filterType;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-black">PETA 30 SOAL TKA FISIKA</h2>
            <p className="text-xs text-slate-400">Pilih nomor soal untuk langsung menuju ke soal tersebut</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Badges */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'all'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Semua (30)
          </button>
          <button
            onClick={() => setFilterType('pg')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'pg'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Pilihan Ganda (10)
          </button>
          <button
            onClick={() => setFilterType('pgk')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'pgk'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            PG Kompleks (10)
          </button>
          <button
            onClick={() => setFilterType('bs')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'bs'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Benar / Salah (10)
          </button>
        </div>

        {/* Question Grid */}
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
            {filteredQuestions.map((q) => {
              const ans = userAnswers[q.id];
              const isCurrent = q.id === currentQuestionId;
              const isSubmitted = ans && ans.isSubmitted;
              const isCorrect = isSubmitted && ans.isCorrect;
              const isPartial = isSubmitted && !ans.isCorrect && ans.earnedScoreRatio > 0;
              const isWrong = isSubmitted && ans.earnedScoreRatio === 0;

              let statusBg = 'bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300';
              if (isCorrect) {
                statusBg = 'bg-emerald-500 text-white border-emerald-600 shadow-xs shadow-emerald-500/20';
              } else if (isPartial) {
                statusBg = 'bg-amber-500 text-white border-amber-600 shadow-xs shadow-amber-500/20';
              } else if (isWrong) {
                statusBg = 'bg-rose-500 text-white border-rose-600 shadow-xs shadow-rose-500/20';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onSelectQuestion(q.id);
                    onClose();
                  }}
                  className={`relative flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all active:scale-95 ${statusBg} ${
                    isCurrent ? 'ring-4 ring-red-500/30 font-black' : 'font-bold'
                  }`}
                >
                  <span className="text-base sm:text-lg">{q.id}</span>
                  <span className="text-[10px] uppercase font-semibold tracking-wider opacity-90 mt-0.5">
                    {q.type}
                  </span>

                  {isCurrent && (
                    <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-white" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-slate-200 border border-slate-300" />
              <span>Belum Dikerjakan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
              <span>Benar Sempurna</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-500" />
              <span>Skor Parsial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-500" />
              <span>Salah</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full ring-2 ring-red-500 bg-white" />
              <span>Soal Aktif</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
