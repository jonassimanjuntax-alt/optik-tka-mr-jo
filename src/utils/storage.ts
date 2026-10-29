import { UserAnswer } from '../types/quiz';

const STORAGE_KEY = 'fisika_jenius_alat_optik_progress_v1';

export interface AppProgress {
  userAnswers: { [questionId: number]: UserAnswer };
  currentQuestionId: number;
  lastUpdated: string;
  hasVisitedBefore: boolean;
  ttsRate: number;
  ttsMuted: boolean;
}

const defaultProgress: AppProgress = {
  userAnswers: {},
  currentQuestionId: 1,
  lastUpdated: new Date().toISOString(),
  hasVisitedBefore: false,
  ttsRate: 1.0,
  ttsMuted: false,
};

export function loadProgress(): AppProgress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw);
    return {
      ...defaultProgress,
      ...parsed,
    };
  } catch (e) {
    console.warn('Gagal membaca penyimpanan lokal:', e);
    return defaultProgress;
  }
}

export function saveProgress(progress: Partial<AppProgress>): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const current = loadProgress();
    const updated: AppProgress = {
      ...current,
      ...progress,
      lastUpdated: new Date().toISOString(),
      hasVisitedBefore: true,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (e) {
    console.error('Gagal menyimpan progres:', e);
    return false;
  }
}

export function resetProgress(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (e) {
    console.error('Gagal mereset progres:', e);
    return false;
  }
}
