export type QuestionType = 'pg' | 'pgk' | 'bs';
export type Difficulty = 'Menengah' | 'Sulit' | 'Sangat Sulit';
export type OptionId = 'A' | 'B' | 'C' | 'D' | 'E';

export interface StimulusTable {
  headers: string[];
  rows: (string | number)[][];
}

export interface QuestionOption {
  id: OptionId;
  text: string;
}

export interface TrueFalseStatement {
  id: number;
  statement: string;
  isCorrect: boolean;
}

export interface NormalDiscussion {
  known: string[];
  asked: string;
  physicsConcept: string;
  solutionSteps: string[];
  optionsAnalysis: string[];
  conclusion: string;
}

export interface QuickTrick {
  title: string;
  formulaOrMethod: string;
  explanation: string;
  limitation: string;
}

export interface KeyTakeaway {
  coreConcept: string;
  commonPitfall: string;
  quote: string;
}

export interface AnimationConfig {
  type: 'lensa-cembung' | 'lensa-cekung' | 'mata-miopi' | 'mata-hipermetropi' | 'mata-presbiopi' | 'lup' | 'mikroskop' | 'teropong-bintang' | 'teropong-bumi' | 'teropong-panggung';
  focalLength?: number; // cm
  objectDistance?: number; // cm
  fob?: number; // cm
  fok?: number; // cm
  fp?: number; // cm (lensa pembalik)
  sob?: number; // cm
  sn?: number; // cm titik dekat
  pr?: number; // cm titik jauh
  isAccommodating?: boolean;
  description: string;
}

export interface TtsScripts {
  introAndStimulus: string;
  question: string;
  options: string;
  clue: string;
  normalDiscussion: string;
  quickTrick: string;
  conclusion: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  difficulty: Difficulty;
  topic: string;
  topicGroup: 'Miopi' | 'Hipermetropi' | 'Presbiopi' | 'Lup' | 'Mikroskop' | 'Teropong';
  competency: string;
  stimulus: {
    title: string;
    context: string;
    table?: StimulusTable;
    diagramDescription?: string;
  };
  misterJoClue: string;
  questionText: string;
  options?: QuestionOption[]; // PG & PGK
  correctOption?: OptionId; // PG
  correctOptions?: OptionId[]; // PGK
  statements?: TrueFalseStatement[]; // BS
  discussion: NormalDiscussion;
  quickTrick: QuickTrick;
  keyTakeaway: KeyTakeaway;
  animationConfig: AnimationConfig;
  ttsScripts: TtsScripts;
}

export interface UserAnswer {
  questionId: number;
  selectedOption?: OptionId; // PG
  selectedOptions?: OptionId[]; // PGK
  booleanAnswers?: { [statementId: number]: boolean }; // BS
  isSubmitted: boolean;
  isCorrect?: boolean;
  earnedScoreRatio: number; // 0.0 to 1.0
}

export interface ScoreReport {
  totalQuestions: number;
  attempted: number;
  unattempted: number;
  fullyCorrect: number;
  partialCorrect: number;
  incorrect: number;
  accuracyPercentage: number;
  scaledScore: number; // 200 - 800
  topicBreakdown: {
    [topic: string]: {
      total: number;
      earned: number;
      accuracy: number;
    };
  };
  recommendations: string[];
}
