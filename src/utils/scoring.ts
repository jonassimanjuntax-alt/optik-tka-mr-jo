import { Question, UserAnswer, ScoreReport } from '../types/quiz';

/**
 * Calculates individual question score ratio (0.0 to 1.0)
 */
export function evaluateAnswer(question: Question, answer: UserAnswer): { isCorrect: boolean; ratio: number } {
  if (question.type === 'pg') {
    if (!answer.selectedOption) return { isCorrect: false, ratio: 0 };
    const isCorrect = answer.selectedOption === question.correctOption;
    return { isCorrect, ratio: isCorrect ? 1.0 : 0.0 };
  }

  if (question.type === 'pgk') {
    const selected = answer.selectedOptions || [];
    const correct = question.correctOptions || [];
    if (selected.length === 0 || correct.length === 0) return { isCorrect: false, ratio: 0 };

    const correctCount = correct.length;
    let earned = 0;
    
    // Reward correct choices
    for (const opt of selected) {
      if (correct.includes(opt)) {
        earned += 1 / correctCount;
      } else {
        // Deduct for false positives to discourage blindly selecting all 5
        earned -= 0.5 / correctCount;
      }
    }

    const ratio = Math.max(0, Math.min(1.0, earned));
    const isFullyCorrect = ratio >= 0.99 && selected.length === correct.length;
    return { isCorrect: isFullyCorrect, ratio };
  }

  if (question.type === 'bs') {
    const answers = answer.booleanAnswers || {};
    const statements = question.statements || [];
    if (statements.length === 0) return { isCorrect: false, ratio: 0 };

    let correctCount = 0;
    let answeredCount = 0;

    for (const stmt of statements) {
      if (answers[stmt.id] !== undefined) {
        answeredCount++;
        if (answers[stmt.id] === stmt.isCorrect) {
          correctCount++;
        }
      }
    }

    if (answeredCount === 0) return { isCorrect: false, ratio: 0 };

    const ratio = correctCount / statements.length;
    const isFullyCorrect = correctCount === statements.length;
    return { isCorrect: isFullyCorrect, ratio };
  }

  return { isCorrect: false, ratio: 0 };
}

/**
 * Calculates overall simulation score on a transparent 200–800 scale.
 */
export function calculateOverallScore(
  questions: Question[],
  userAnswers: { [questionId: number]: UserAnswer }
): ScoreReport {
  const totalQuestions = questions.length;
  let attempted = 0;
  let fullyCorrect = 0;
  let partialCorrect = 0;
  let incorrect = 0;
  let totalScoreRatio = 0;

  const topicBreakdown: ScoreReport['topicBreakdown'] = {
    Miopi: { total: 0, earned: 0, accuracy: 0 },
    Hipermetropi: { total: 0, earned: 0, accuracy: 0 },
    Presbiopi: { total: 0, earned: 0, accuracy: 0 },
    Lup: { total: 0, earned: 0, accuracy: 0 },
    Mikroskop: { total: 0, earned: 0, accuracy: 0 },
    Teropong: { total: 0, earned: 0, accuracy: 0 },
  };

  for (const q of questions) {
    const group = q.topicGroup;
    if (!topicBreakdown[group]) {
      topicBreakdown[group] = { total: 0, earned: 0, accuracy: 0 };
    }
    topicBreakdown[group].total += 1;

    const ans = userAnswers[q.id];
    if (ans && ans.isSubmitted) {
      attempted += 1;
      const { isCorrect, ratio } = evaluateAnswer(q, ans);
      totalScoreRatio += ratio;
      topicBreakdown[group].earned += ratio;

      if (isCorrect) {
        fullyCorrect += 1;
      } else if (ratio > 0) {
        partialCorrect += 1;
      } else {
        incorrect += 1;
      }
    }
  }

  const unattempted = totalQuestions - attempted;
  const accuracyPercentage = totalQuestions > 0 ? (totalScoreRatio / totalQuestions) * 100 : 0;
  // Scaled score between 200 (0% earned) and 800 (100% earned)
  const scaledScore = Math.round(200 + (totalScoreRatio / (totalQuestions || 1)) * 600);

  // Compute percentage accuracy for each topic
  const recommendations: string[] = [];
  for (const key of Object.keys(topicBreakdown)) {
    const item = topicBreakdown[key];
    item.accuracy = item.total > 0 ? Math.round((item.earned / item.total) * 100) : 0;

    if (item.total > 0 && item.accuracy < 60) {
      if (key === 'Miopi') {
        recommendations.push('Perdalam penentuan titik jauh (PR) dan konvensi fokus lensa cekung f = -PR.');
      } else if (key === 'Hipermetropi') {
        recommendations.push('Kaji ulang rumus kekuatan lensa hipermetropi P = 100/Sn - 100/PP dan bayangan maya.');
      } else if (key === 'Presbiopi') {
        recommendations.push('Pelajari kebutuhan koreksi kacamata rangkap/bifokal pada penderita presbiopi usia lanjut.');
      } else if (key === 'Lup') {
        recommendations.push('Cermati perbedaan perbesaran lup saat mata berakomodasi maksimum (Sn/f + 1) dan tak berakomodasi (Sn/f).');
      } else if (key === 'Mikroskop') {
        recommendations.push('Latih kembali perhitungan panjang tabung mikroskop d = s\'ob + fok serta perbesaran total M_tot = Mob × Mok.');
      } else if (key === 'Teropong') {
        recommendations.push('Kuasai karakteristik teropong bintang, bumi (lensa pembalik 4fp), dan panggung (okuler lensa cekung fok < 0).');
      }
    }
  }

  if (recommendations.length === 0 && unattempted === 0) {
    recommendations.push('Luar biasa! Pemahaman konsep alat optik dan cacat mata Anda sudah sangat matang dan siap menghadapi ujian TKA HOTS!');
  } else if (recommendations.length === 0 && unattempted > 0) {
    recommendations.push('Lanjutkan pengerjaan sisa soal untuk menguji seluruh materi secara komprehensif.');
  }

  return {
    totalQuestions,
    attempted,
    unattempted,
    fullyCorrect,
    partialCorrect,
    incorrect,
    accuracyPercentage: Math.round(accuracyPercentage * 10) / 10,
    scaledScore,
    topicBreakdown,
    recommendations,
  };
}
