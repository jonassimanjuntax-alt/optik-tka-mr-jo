import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { QuestionView } from './components/QuestionView';
import { ResultsView } from './components/ResultsView';
import { QuestionDrawer } from './components/QuestionDrawer';
import { PetaMateriModal } from './components/PetaMateriModal';
import { PetunjukModal } from './components/PetunjukModal';
import { ResetConfirmModal } from './components/ResetConfirmModal';

import { allQuestions } from './data/questionsData';
import { UserAnswer, Question } from './types/quiz';
import { calculateOverallScore, evaluateAnswer } from './utils/scoring';
import { loadProgress, saveProgress, resetProgress, AppProgress } from './utils/storage';
import { narrator, TTSStatus } from './utils/tts';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'quiz' | 'results'>('home');
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [userAnswers, setUserAnswers] = useState<{ [id: number]: UserAnswer }>({});
  const [hasVisitedBefore, setHasVisitedBefore] = useState<boolean>(false);

  // Modals
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isPetaMateriOpen, setIsPetaMateriOpen] = useState<boolean>(false);
  const [isPetunjukOpen, setIsPetunjukOpen] = useState<boolean>(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);

  // TTS status
  const [ttsStatus, setTtsStatus] = useState<TTSStatus>({
    state: 'idle',
    currentSegment: -1,
    isMuted: false,
    speechRate: 1.0,
  });

  // Load progress on initial mount
  useEffect(() => {
    const saved = loadProgress();
    setUserAnswers(saved.userAnswers || {});
    setCurrentQuestionId(saved.currentQuestionId || 1);
    setHasVisitedBefore(saved.hasVisitedBefore || false);
    narrator.setRate(saved.ttsRate || 1.0);
    narrator.setMute(saved.ttsMuted || false);

    // Support autostart parameter from Ultra Mode
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autostart') === '1') {
      setCurrentView('quiz');
    }
    const qParam = urlParams.get('q');
    if (qParam && !isNaN(Number(qParam))) {
      const qNum = Math.max(1, Math.min(30, Number(qParam)));
      setCurrentQuestionId(qNum);
      setCurrentView('quiz');
    }
  }, []);

  // Subscribe to TTS changes
  useEffect(() => {
    const unsub = narrator.subscribeStatus((status) => {
      setTtsStatus(status);
    });
    return () => unsub();
  }, []);

  // Compute overall score report
  const scoreReport = useMemo(() => {
    return calculateOverallScore(allQuestions, userAnswers);
  }, [userAnswers]);

  // Save progress helper
  const handleSaveAnswer = (answer: UserAnswer) => {
    const targetQuestion = allQuestions.find((q) => q.id === answer.questionId);
    let updatedAnswer = { ...answer };
    if (targetQuestion) {
      const { isCorrect, ratio } = evaluateAnswer(targetQuestion, answer);
      updatedAnswer.isCorrect = isCorrect;
      updatedAnswer.earnedScoreRatio = ratio;
    }

    const updatedAnswers = {
      ...userAnswers,
      [answer.questionId]: updatedAnswer,
    };
    setUserAnswers(updatedAnswers);
    saveProgress({
      userAnswers: updatedAnswers,
      currentQuestionId,
    });
  };

  const handleSelectQuestion = (qId: number) => {
    setCurrentQuestionId(qId);
    setCurrentView('quiz');
    saveProgress({ currentQuestionId: qId });
  };

  const handleNextQuestion = () => {
    if (currentQuestionId < allQuestions.length) {
      const nextId = currentQuestionId + 1;
      setCurrentQuestionId(nextId);
      saveProgress({ currentQuestionId: nextId });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionId > 1) {
      const prevId = currentQuestionId - 1;
      setCurrentQuestionId(prevId);
      saveProgress({ currentQuestionId: prevId });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleConfirmReset = () => {
    resetProgress();
    setUserAnswers({});
    setCurrentQuestionId(1);
    setCurrentView('home');
    narrator.speakText('Seluruh progres latihan berhasil direset ke kondisi awal.');
  };

  const currentQuestion = allQuestions.find((q) => q.id === currentQuestionId) || allQuestions[0];
  const completedCount = Object.values(userAnswers).filter((a) => a.isSubmitted).length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-red-500 selection:text-white font-sans">
      {/* Top Header Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => {
          narrator.stop();
          setCurrentView(view);
        }}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenResetModal={() => setIsResetModalOpen(true)}
        onOpenPetaMateri={() => setIsPetaMateriOpen(true)}
        onOpenPetunjuk={() => setIsPetunjukOpen(true)}
        currentScore={scoreReport.scaledScore}
        completedCount={completedCount}
        totalQuestions={allQuestions.length}
        ttsStatus={ttsStatus}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeHero
            onStartQuiz={() => {
              setCurrentQuestionId(1);
              setCurrentView('quiz');
            }}
            onResumeQuiz={() => {
              // Find first unattempted question or use current
              const unattempted = allQuestions.find((q) => !userAnswers[q.id]?.isSubmitted);
              const targetId = unattempted ? unattempted.id : currentQuestionId;
              setCurrentQuestionId(targetId);
              setCurrentView('quiz');
            }}
            onOpenPetaMateri={() => setIsPetaMateriOpen(true)}
            onOpenPetunjuk={() => setIsPetunjukOpen(true)}
            onViewResults={() => setCurrentView('results')}
            onOpenResetModal={() => setIsResetModalOpen(true)}
            completedCount={completedCount}
            totalQuestions={allQuestions.length}
            currentScore={scoreReport.scaledScore}
            lastQuestionId={currentQuestionId}
            hasVisitedBefore={hasVisitedBefore}
          />
        )}

        {currentView === 'quiz' && (
          <QuestionView
            question={currentQuestion}
            currentIndex={currentQuestionId - 1}
            totalQuestions={allQuestions.length}
            userAnswer={userAnswers[currentQuestion.id]}
            onSaveAnswer={handleSaveAnswer}
            onPrev={handlePrevQuestion}
            onNext={handleNextQuestion}
            onOpenDrawer={() => setIsDrawerOpen(true)}
            ttsStatus={ttsStatus}
          />
        )}

        {currentView === 'results' && (
          <ResultsView
            report={scoreReport}
            onSelectQuestion={handleSelectQuestion}
            onResetProgress={() => setIsResetModalOpen(true)}
            onBackToQuestions={() => setCurrentView('quiz')}
          />
        )}
      </main>

      {/* Global Modals */}
      <QuestionDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        questions={allQuestions}
        currentQuestionId={currentQuestionId}
        userAnswers={userAnswers}
        onSelectQuestion={handleSelectQuestion}
      />

      <PetaMateriModal
        isOpen={isPetaMateriOpen}
        onClose={() => setIsPetaMateriOpen(false)}
      />

      <PetunjukModal
        isOpen={isPetunjukOpen}
        onClose={() => setIsPetunjukOpen(false)}
      />

      <ResetConfirmModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirmReset={handleConfirmReset}
      />

      {/* Minimal clean footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-semibold text-slate-700">
            FISIKA JENIUS — TKA ALAT OPTIK DAN CACAT MATA • Pengajar: Mister Jo
          </p>
          <p className="text-slate-400">
            Aplikasi Pembelajaran Mandiri & IFP Kelas • Dilengkapi Narator TTS Bahasa Indonesia & Animasi Optik
          </p>
        </div>
      </footer>
    </div>
  );
}
