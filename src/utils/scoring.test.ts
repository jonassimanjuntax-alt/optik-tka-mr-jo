import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateAnswer, calculateOverallScore } from './scoring';
import { Question, UserAnswer } from '../types/quiz';

const samplePG: Question = {
  id: 1,
  type: 'pg',
  difficulty: 'Menengah',
  topic: 'Cacat Mata (Miopi)',
  topicGroup: 'Miopi',
  competency: 'Menghitung kekuatan lensa miopi',
  stimulus: { title: 'Uji Miopi', context: 'Siswa hanya bisa melihat hingga 2 meter.' },
  misterJoClue: 'Gunakan hubungan f = -PR.',
  questionText: 'Berapakah daya lensa?',
  options: [
    { id: 'A', text: '-0.5 D' },
    { id: 'B', text: '-1.0 D' },
    { id: 'C', text: '-2.0 D' },
    { id: 'D', text: '+0.5 D' },
    { id: 'E', text: '+2.0 D' }
  ],
  correctOption: 'A',
  discussion: {
    known: ['PR = 2 m = 200 cm'],
    asked: 'P',
    physicsConcept: 'Lensa cekung',
    solutionSteps: ['P = -100/PR = -100/200 = -0.5 D'],
    optionsAnalysis: ['A benar'],
    conclusion: 'Daya lensa -0.5 Dioptri'
  },
  quickTrick: {
    title: 'Mata Miopi',
    formulaOrMethod: 'P = -1/PR (m)',
    explanation: 'Langsung bagi -1 dengan jarak dalam meter.',
    limitation: 'Hanya untuk penglihatan jauh tak terhingga.'
  },
  keyTakeaway: {
    coreConcept: 'Lensa cekung membentuk bayangan maya di titik jauh.',
    commonPitfall: 'Lupa tanda minus.',
    quote: 'Fisika itu pasti dan logis!'
  },
  animationConfig: {
    type: 'mata-miopi',
    pr: 200,
    description: 'Koreksi lensa cekung pada retina'
  },
  ttsScripts: {
    introAndStimulus: 'Stimulus',
    question: 'Pertanyaan',
    options: 'Opsi',
    clue: 'Petunjuk',
    normalDiscussion: 'Pembahasan',
    quickTrick: 'Cara cepat',
    conclusion: 'Kesimpulan'
  }
};

const samplePGK: Question = {
  ...samplePG,
  id: 2,
  type: 'pgk',
  correctOptions: ['B', 'D']
};

const sampleBS: Question = {
  ...samplePG,
  id: 3,
  type: 'bs',
  statements: [
    { id: 1, statement: 'Lensa cekung bersifat divergen', isCorrect: true },
    { id: 2, statement: 'Titik dekat miopi selalu > 25 cm', isCorrect: false },
    { id: 3, statement: 'Kekuatan lensa bersatuan dioptri', isCorrect: true }
  ]
};

test('evaluateAnswer correctly scores single choice PG', () => {
  const ansCorrect: UserAnswer = { questionId: 1, selectedOption: 'A', isSubmitted: true, earnedScoreRatio: 0 };
  const ansWrong: UserAnswer = { questionId: 1, selectedOption: 'B', isSubmitted: true, earnedScoreRatio: 0 };
  
  assert.deepEqual(evaluateAnswer(samplePG, ansCorrect), { isCorrect: true, ratio: 1.0 });
  assert.deepEqual(evaluateAnswer(samplePG, ansWrong), { isCorrect: false, ratio: 0.0 });
});

test('evaluateAnswer correctly handles complex multiple choice PGK with partial scoring', () => {
  const ansFull: UserAnswer = { questionId: 2, selectedOptions: ['B', 'D'], isSubmitted: true, earnedScoreRatio: 0 };
  const ansPartial: UserAnswer = { questionId: 2, selectedOptions: ['B'], isSubmitted: true, earnedScoreRatio: 0 };
  const ansWrongExtra: UserAnswer = { questionId: 2, selectedOptions: ['B', 'D', 'A'], isSubmitted: true, earnedScoreRatio: 0 };

  const resFull = evaluateAnswer(samplePGK, ansFull);
  assert.equal(resFull.isCorrect, true);
  assert.equal(resFull.ratio, 1.0);

  const resPartial = evaluateAnswer(samplePGK, ansPartial);
  assert.equal(resPartial.isCorrect, false);
  assert.equal(resPartial.ratio, 0.5);

  const resWrongExtra = evaluateAnswer(samplePGK, ansWrongExtra);
  assert.equal(resWrongExtra.isCorrect, false);
  assert.equal(resWrongExtra.ratio < 1.0, true);
});

test('evaluateAnswer correctly handles Benar/Salah with 3 statements', () => {
  const allCorrect: UserAnswer = {
    questionId: 3,
    booleanAnswers: { 1: true, 2: false, 3: true },
    isSubmitted: true,
    earnedScoreRatio: 0
  };
  const twoCorrect: UserAnswer = {
    questionId: 3,
    booleanAnswers: { 1: true, 2: true, 3: true },
    isSubmitted: true,
    earnedScoreRatio: 0
  };

  assert.deepEqual(evaluateAnswer(sampleBS, allCorrect), { isCorrect: true, ratio: 1.0 });
  
  const res2 = evaluateAnswer(sampleBS, twoCorrect);
  assert.equal(res2.isCorrect, false);
  assert.equal(Math.round(res2.ratio * 100) / 100, 0.67);
});

test('calculateOverallScore scales between 200 and 800 correctly', () => {
  const questions = [samplePG, samplePGK, sampleBS];
  
  // Empty answers: score should be 200
  const emptyReport = calculateOverallScore(questions, {});
  assert.equal(emptyReport.scaledScore, 200);
  assert.equal(emptyReport.unattempted, 3);
  assert.equal(emptyReport.attempted, 0);

  // Perfect answers: score should be 800
  const perfectAnswers: { [id: number]: UserAnswer } = {
    1: { questionId: 1, selectedOption: 'A', isSubmitted: true, earnedScoreRatio: 1 },
    2: { questionId: 2, selectedOptions: ['B', 'D'], isSubmitted: true, earnedScoreRatio: 1 },
    3: { questionId: 3, booleanAnswers: { 1: true, 2: false, 3: true }, isSubmitted: true, earnedScoreRatio: 1 }
  };
  const perfectReport = calculateOverallScore(questions, perfectAnswers);
  assert.equal(perfectReport.scaledScore, 800);
  assert.equal(perfectReport.fullyCorrect, 3);
  assert.equal(perfectReport.accuracyPercentage, 100);
});
