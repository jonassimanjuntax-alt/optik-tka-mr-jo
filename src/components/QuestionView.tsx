import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Zap,
  BookOpen,
  ArrowRight,
  Eye,
  Check,
  X
} from 'lucide-react';
import { Question, UserAnswer, OptionId } from '../types/quiz';
import { OpticsRayTracer } from './OpticsRayTracer';
import { narrator, TTSStatus } from '../utils/tts';

interface QuestionViewProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  userAnswer?: UserAnswer;
  onSaveAnswer: (answer: UserAnswer) => void;
  onPrev: () => void;
  onNext: () => void;
  onOpenDrawer: () => void;
  ttsStatus: TTSStatus;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  currentIndex,
  totalQuestions,
  userAnswer,
  onSaveAnswer,
  onPrev,
  onNext,
  onOpenDrawer,
  ttsStatus,
}) => {
  // Local interaction states
  const [selectedOption, setSelectedOption] = useState<OptionId | undefined>(
    userAnswer?.selectedOption
  );
  const [selectedOptions, setSelectedOptions] = useState<OptionId[]>(
    userAnswer?.selectedOptions || []
  );
  const [booleanAnswers, setBooleanAnswers] = useState<{ [statementId: number]: boolean }>(
    userAnswer?.booleanAnswers || {}
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(userAnswer?.isSubmitted || false);
  const [showFullDiscussion, setShowFullDiscussion] = useState<boolean>(
    userAnswer?.isSubmitted || false
  );
  const [activeSpeechSection, setActiveSpeechSection] = useState<string>('stimulus');

  // Sync when question changes
  useEffect(() => {
    setSelectedOption(userAnswer?.selectedOption);
    setSelectedOptions(userAnswer?.selectedOptions || []);
    setBooleanAnswers(userAnswer?.booleanAnswers || {});
    setIsSubmitted(userAnswer?.isSubmitted || false);
    setShowFullDiscussion(userAnswer?.isSubmitted || false);

    // Auto-read stimulus & question when navigating to a question
    if (!ttsStatus.isMuted) {
      narrator.speakSegments([
        `Soal nomor ${question.id}. ${question.stimulus.title}.`,
        question.stimulus.context,
        question.questionText,
        question.ttsScripts.clue
      ]);
      setActiveSpeechSection('stimulus');
    }
  }, [question.id]);

  // Handle single choice selection (PG)
  const handleSelectOption = (optId: OptionId) => {
    if (isSubmitted) return;
    setSelectedOption(optId);
  };

  // Handle multi choice selection (PGK)
  const handleToggleOption = (optId: OptionId) => {
    if (isSubmitted) return;
    if (selectedOptions.includes(optId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optId));
    } else {
      setSelectedOptions([...selectedOptions, optId]);
    }
  };

  // Handle True / False selection (BS)
  const handleSetBoolean = (stmtId: number, value: boolean) => {
    if (isSubmitted) return;
    setBooleanAnswers({
      ...booleanAnswers,
      [stmtId]: value,
    });
  };

  // Check answer button
  const handleCheckAnswer = () => {
    const newAnswer: UserAnswer = {
      questionId: question.id,
      selectedOption,
      selectedOptions,
      booleanAnswers,
      isSubmitted: true,
      earnedScoreRatio: 0,
    };
    setIsSubmitted(true);
    setShowFullDiscussion(true);
    onSaveAnswer(newAnswer);

    // Narrate normal discussion and quick trick in order
    if (!ttsStatus.isMuted) {
      narrator.speakSegments([
        "Jawaban telah diperiksa. Mari kita simak pembahasan normal dan cara cepat dari Mister Jo.",
        question.ttsScripts.normalDiscussion,
        question.ttsScripts.quickTrick,
        question.ttsScripts.conclusion
      ]);
      setActiveSpeechSection('discussion');
    }
  };

  // Reveal discussion without locking answer if student requests
  const handleRevealDiscussion = () => {
    setShowFullDiscussion(true);
    if (!ttsStatus.isMuted) {
      narrator.speakSegments([
        "Membuka pembahasan soal.",
        question.ttsScripts.normalDiscussion,
        question.ttsScripts.quickTrick
      ]);
      setActiveSpeechSection('discussion');
    }
  };

  const handleReadSection = (section: 'stimulus' | 'clue' | 'discussion' | 'quickTrick' | 'conclusion') => {
    setActiveSpeechSection(section);
    if (section === 'stimulus') {
      narrator.speakSegments([
        `Soal nomor ${question.id}. ${question.stimulus.title}.`,
        question.stimulus.context,
        question.questionText,
        question.ttsScripts.options
      ]);
    } else if (section === 'clue') {
      narrator.speakSegments([
        "Bimbingan awal Mister Jo:",
        question.misterJoClue
      ]);
    } else if (section === 'discussion') {
      narrator.speakSegments([
        "Pembahasan matematis normal:",
        question.ttsScripts.normalDiscussion
      ]);
    } else if (section === 'quickTrick') {
      narrator.speakSegments([
        "Cara cepat Mister Jo:",
        question.ttsScripts.quickTrick
      ]);
    } else if (section === 'conclusion') {
      narrator.speakSegments([
        "Kesimpulan konsep dan pembelajaran lanjutan:",
        question.ttsScripts.conclusion,
        question.keyTakeaway.quote
      ]);
    }
  };

  const isAnswerProvided = () => {
    if (question.type === 'pg') return !!selectedOption;
    if (question.type === 'pgk') return selectedOptions.length > 0;
    if (question.type === 'bs') {
      const stmts = question.statements || [];
      return stmts.length > 0 && stmts.every((s) => booleanAnswers[s.id] !== undefined);
    }
    return false;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Question Top Bar Navigation & Identification */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDrawer}
            className="flex items-center gap-2 px-3.5 py-2 bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-black shadow-xs hover:bg-slate-800 transition-all active:scale-95"
          >
            <span>Soal {question.id}</span>
            <span className="text-slate-400 font-normal">/ {totalQuestions}</span>
          </button>

          <span
            className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wide uppercase ${
              question.type === 'pg'
                ? 'bg-blue-100 text-blue-800 border border-blue-200'
                : question.type === 'pgk'
                ? 'bg-purple-100 text-purple-800 border border-purple-200'
                : 'bg-amber-100 text-amber-800 border border-amber-200'
            }`}
          >
            {question.type === 'pg'
              ? 'Pilihan Ganda'
              : question.type === 'pgk'
              ? 'Pilihan Ganda Kompleks'
              : 'Benar / Salah'}
          </span>

          <span
            className={`hidden sm:inline-flex px-2.5 py-1 rounded-lg text-xs font-bold ${
              question.difficulty === 'Menengah'
                ? 'bg-emerald-100 text-emerald-800'
                : question.difficulty === 'Sulit'
                ? 'bg-amber-100 text-amber-800'
                : 'bg-rose-100 text-rose-800'
            }`}
          >
            Tingkat {question.difficulty}
          </span>
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="p-2 sm:px-3 sm:py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Sebelumnya</span>
          </button>

          <button
            onClick={onNext}
            disabled={currentIndex === totalQuestions - 1}
            className="p-2 sm:px-3 sm:py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1"
          >
            <span className="hidden sm:inline">Berikutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Materi & Kompetensi Card */}
      <div className="bg-red-50/60 border border-red-200/80 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-red-900 font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
          <span>Topik: {question.topic}</span>
        </div>
        <div className="text-slate-600 font-medium">
          Kompetensi: <span className="text-slate-900 font-bold">{question.competency}</span>
        </div>
      </div>

      {/* Stimulus Section: Wacana & Data Numerik (IFP / Projector Readable) */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-red-600" />
            <span>STIMULUS: {question.stimulus.title}</span>
          </h2>
          <button
            onClick={() => handleReadSection('stimulus')}
            title="Dengarkan Stimulus Lengkap"
            className="p-2 bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-xl transition-all"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Context Narrative */}
        <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
          {question.stimulus.context}
        </p>

        {/* Data Table if present */}
        {question.stimulus.table && (
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  {question.stimulus.table.headers.map((h, i) => (
                    <th key={i} className="p-3 sm:p-4 border-r border-slate-800 last:border-r-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-slate-50/50">
                {question.stimulus.table.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-100/70 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-3 sm:p-4 font-medium text-slate-800 border-r border-slate-200 last:border-r-0">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Schematic Diagram Description */}
        {question.stimulus.diagramDescription && (
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <Eye className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Informasi Skematik Optik:</span>
              <p>{question.stimulus.diagramDescription}</p>
            </div>
          </div>
        )}
      </div>

      {/* Bimbingan Awal Mister Jo (Clue tanpa membocorkan jawaban) */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-500 p-5 rounded-2xl bg-white shadow-2xs space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-xs">
              MJ
            </div>
            <h3 className="font-black text-slate-900 text-sm sm:text-base">
              Bimbingan Awal Mister Jo
            </h3>
          </div>
          <button
            onClick={() => handleReadSection('clue')}
            className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 transition-colors"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Dengarkan Petunjuk</span>
          </button>
        </div>
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic">
          "{question.misterJoClue}"
        </p>
      </div>

      {/* Naskah Pertanyaan */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
            Pertanyaan Soal
          </span>
          <h3 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
            {question.questionText}
          </h3>

          {question.type === 'pgk' && (
            <div className="inline-block px-3 py-1 rounded-lg bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold">
              ℹ️ Pilihan Ganda Kompleks: Anda dapat memilih lebih dari satu jawaban benar.
            </div>
          )}
          {question.type === 'bs' && (
            <div className="inline-block px-3 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
              ℹ️ Tentukan pilihan BENAR (B) atau SALAH (S) untuk setiap pernyataan di bawah ini.
            </div>
          )}
        </div>

        {/* Respons Siswa: Pilihan Ganda Biasa (PG) */}
        {question.type === 'pg' && question.options && (
          <div className="space-y-3 pt-2">
            {question.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              const isCorrectOpt = question.correctOption === opt.id;
              let optStyle = 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100';

              if (isSubmitted) {
                if (isCorrectOpt) {
                  optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                } else if (isSelected && !isCorrectOpt) {
                  optStyle = 'bg-rose-50 border-rose-500 text-rose-950';
                } else {
                  optStyle = 'bg-slate-50 border-slate-200 opacity-60';
                }
              } else if (isSelected) {
                optStyle = 'bg-red-50 border-red-600 text-red-950 ring-2 ring-red-500/20';
              }

              return (
                <button
                  key={opt.id}
                  disabled={isSubmitted}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`w-full flex items-center gap-4 p-4 sm:p-5 rounded-2xl border-2 transition-all text-left active:scale-99 ${optStyle}`}
                >
                  <span
                    className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center font-black text-sm sm:text-base transition-colors ${
                      isSubmitted && isCorrectOpt
                        ? 'bg-emerald-600 text-white'
                        : isSelected
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-slate-700 border border-slate-300'
                    }`}
                  >
                    {opt.id}
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed flex-1">
                    {opt.text}
                  </span>
                  {isSubmitted && isCorrectOpt && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isSubmitted && isSelected && !isCorrectOpt && (
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Respons Siswa: Pilihan Ganda Kompleks (PGK) */}
        {question.type === 'pgk' && question.options && (
          <div className="space-y-3 pt-2">
            {question.options.map((opt) => {
              const isSelected = selectedOptions.includes(opt.id);
              const isCorrectOpt = question.correctOptions?.includes(opt.id);
              let optStyle = 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100';

              if (isSubmitted) {
                if (isCorrectOpt && isSelected) {
                  optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                } else if (isCorrectOpt && !isSelected) {
                  optStyle = 'bg-emerald-50/50 border-dashed border-emerald-400 text-emerald-900';
                } else if (isSelected && !isCorrectOpt) {
                  optStyle = 'bg-rose-50 border-rose-500 text-rose-950';
                } else {
                  optStyle = 'bg-slate-50 border-slate-200 opacity-60';
                }
              } else if (isSelected) {
                optStyle = 'bg-purple-50 border-purple-600 text-purple-950 ring-2 ring-purple-500/20';
              }

              return (
                <button
                  key={opt.id}
                  disabled={isSubmitted}
                  onClick={() => handleToggleOption(opt.id)}
                  className={`w-full flex items-center gap-4 p-4 sm:p-5 rounded-2xl border-2 transition-all text-left active:scale-99 ${optStyle}`}
                >
                  <div
                    className={`w-6 h-6 shrink-0 rounded-lg flex items-center justify-center border-2 transition-colors ${
                      isSelected
                        ? isSubmitted && !isCorrectOpt
                          ? 'bg-rose-600 border-rose-600 text-white'
                          : 'bg-purple-600 border-purple-600 text-white'
                        : 'border-slate-400 bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4" />}
                  </div>
                  <span className="font-bold text-sm sm:text-base shrink-0 w-6">
                    {opt.id}.
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed flex-1">
                    {opt.text}
                  </span>
                  {isSubmitted && isCorrectOpt && (
                    <span className="text-xs font-bold text-emerald-700 px-2 py-0.5 bg-emerald-100 rounded-md">
                      Kunci Benar
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Respons Siswa: Benar / Salah (BS) */}
        {question.type === 'bs' && question.statements && (
          <div className="space-y-4 pt-2">
            {question.statements.map((stmt) => {
              const currentVal = booleanAnswers[stmt.id];
              const isAnswered = currentVal !== undefined;
              const isMatch = isAnswered && currentVal === stmt.isCorrect;

              return (
                <div
                  key={stmt.id}
                  className={`p-4 sm:p-5 rounded-2xl border-2 transition-all ${
                    isSubmitted
                      ? isMatch
                        ? 'bg-emerald-50/70 border-emerald-500'
                        : 'bg-rose-50/70 border-rose-500'
                      : isAnswered
                      ? 'bg-slate-50 border-slate-300'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <span className="text-xs font-bold text-slate-500">
                        Pernyataan #{stmt.id}
                      </span>
                      <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                        {stmt.statement}
                      </p>
                    </div>

                    {/* Toggle Buttons: B (Benar) or S (Salah) */}
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <button
                        type="button"
                        disabled={isSubmitted}
                        onClick={() => handleSetBoolean(stmt.id, true)}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                          currentVal === true
                            ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/30'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        BENAR (B)
                      </button>

                      <button
                        type="button"
                        disabled={isSubmitted}
                        onClick={() => handleSetBoolean(stmt.id, false)}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                          currentVal === false
                            ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-500/30'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        SALAH (S)
                      </button>
                    </div>
                  </div>

                  {/* Feedback line after submit */}
                  {isSubmitted && (
                    <div className="mt-3 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold">
                      <span className={isMatch ? 'text-emerald-700' : 'text-rose-700'}>
                        {isMatch ? '✓ Ketetapan Anda Tepat!' : '✗ Evaluasi Kurang Tepat'}
                      </span>
                      <span className="text-slate-600">
                        Kunci Fisis: <strong className="text-slate-900">{stmt.isCorrect ? 'BENAR' : 'SALAH'}</strong>
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Action Buttons: PERIKSA JAWABAN & BAHAS SOAL */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {!isSubmitted ? (
              <button
                onClick={handleCheckAnswer}
                disabled={!isAnswerProvided()}
                className="px-6 py-3 bg-red-600 hover:bg-red-500 disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs sm:text-sm font-black rounded-xl shadow-md shadow-red-600/20 transition-all flex items-center gap-2 active:scale-98"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>PERIKSA JAWABAN</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Jawaban Telah Terkunci & Tersimpan</span>
              </div>
            )}

            {!showFullDiscussion && !isSubmitted && (
              <button
                onClick={handleRevealDiscussion}
                className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-slate-600" />
                <span>Bahas Soal Langsung</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleReadSection('discussion')}
              className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
            >
              <Volume2 className="w-4 h-4 text-red-600" />
              <span>Putar Narasi Pembahasan</span>
            </button>
          </div>
        </div>
      </div>

      {/* SINGLE SEAMLESS FLOW: ANIMASI PEMBUKTIAN & PEMBAHASAN & CARA CEPAT (On the same page) */}
      {showFullDiscussion && (
        <div className="space-y-6 pt-4 animate-in fade-in duration-300">
          {/* 1. Animasi Pembuktian Konsep */}
          <OpticsRayTracer config={question.animationConfig} title={question.stimulus.title} />

          {/* 2. Pembahasan Normal Berstandar Fisika */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-blue-100 text-blue-700 rounded-xl">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    PEMBAHASAN MATEMATIS NORMAL
                  </h3>
                  <p className="text-xs text-slate-500">Langkah penyelesaian bertahap & analisis opsi</p>
                </div>
              </div>

              <button
                onClick={() => handleReadSection('discussion')}
                className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                title="Dengarkan Pembahasan Normal"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* Diketahui */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                1. Diketahui
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-800 font-medium bg-slate-50 p-4 rounded-xl border border-slate-200">
                {question.discussion.known.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            </div>

            {/* Ditanya */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                2. Ditanya
              </h4>
              <p className="text-sm sm:text-base text-slate-800 font-bold bg-slate-50 p-3 rounded-xl border border-slate-200">
                {question.discussion.asked}
              </p>
            </div>

            {/* Konsep Fisika */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">
                3. Konsep Fisika
              </h4>
              <div className="text-sm sm:text-base text-slate-800 leading-relaxed bg-blue-50/50 p-4 rounded-xl border border-blue-100 whitespace-pre-line">
                {question.discussion.physicsConcept}
              </div>
            </div>

            {/* Langkah Penyelesaian Matematis */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                4. Langkah Perhitungan Matematis
              </h4>
              <div className="space-y-2 bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-xs sm:text-sm leading-relaxed border border-slate-800">
                {question.discussion.solutionSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold shrink-0">{`>`}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Analisis Opsi */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                5. Analisis Pilihan Jawaban & Pengecoh
              </h4>
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                {question.discussion.optionsAnalysis.map((ana, idx) => (
                  <p key={idx} className="leading-relaxed">
                    • {ana}
                  </p>
                ))}
              </div>
            </div>

            {/* Kesimpulan */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-600">
                6. Kesimpulan
              </h4>
              <p className="text-sm sm:text-base font-bold text-slate-900 bg-red-50 p-4 rounded-xl border border-red-200">
                {question.discussion.conclusion}
              </p>
            </div>
          </div>

          {/* 3. Cara Cepat Mister Jo */}
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white rounded-3xl border-2 border-amber-400/80 shadow-md p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-amber-200 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-500 text-white rounded-xl shadow-sm">
                  <Zap className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    CARA CEPAT MISTER JO: {question.quickTrick.title}
                  </h3>
                  <p className="text-xs text-amber-800 font-semibold">Trik Cerdas Berbasis Logika Fisika</p>
                </div>
              </div>

              <button
                onClick={() => handleReadSection('quickTrick')}
                className="p-2 text-amber-700 hover:text-amber-900 hover:bg-amber-100 rounded-xl transition-all"
                title="Dengarkan Cara Cepat"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* Formula Cepat Box */}
            <div className="p-4 bg-amber-100/70 rounded-2xl border border-amber-300 font-mono text-sm sm:text-base text-amber-950 font-black text-center shadow-inner">
              ⚡ {question.quickTrick.formulaOrMethod}
            </div>

            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
              {question.quickTrick.explanation}
            </p>

            <div className="p-3 bg-white/80 rounded-xl border border-amber-200 text-xs text-slate-600 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Batasan Penggunaan Cara Cepat:</strong> {question.quickTrick.limitation}
              </div>
            </div>
          </div>

          {/* 4. Pembelajaran Lanjutan & Motivasi */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5 border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-2 text-red-400">
                <Sparkles className="w-5 h-5" />
                <span>PEMBELAJARAN LANJUTAN</span>
              </h3>
              <button
                onClick={() => handleReadSection('conclusion')}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Dengarkan Motivasi</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
                <span className="text-emerald-400 font-bold block">Inti Konsep Wajib:</span>
                <p className="text-slate-300 leading-relaxed">{question.keyTakeaway.coreConcept}</p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1">
                <span className="text-rose-400 font-bold block">Hindari Miskonsepsi Ini:</span>
                <p className="text-slate-300 leading-relaxed">{question.keyTakeaway.commonPitfall}</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/60 to-slate-900 border border-red-900/40 text-center italic text-amber-300 text-sm sm:text-base font-semibold">
              "{question.keyTakeaway.quote}"
            </div>
          </div>
        </div>
      )}

      {/* Bottom Sticky-like Next Question Navigator */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold disabled:opacity-40 transition-all flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Soal Sebelumnya</span>
        </button>

        <button
          onClick={onNext}
          disabled={currentIndex === totalQuestions - 1}
          className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold disabled:opacity-40 transition-all flex items-center gap-1.5 shadow-sm"
        >
          <span>Soal Berikutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
