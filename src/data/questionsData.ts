import { Question } from '../types/quiz';
import { questions1to10 } from './questions/questions1to10';
import { questions11to20 } from './questions/questions11to20';
import { questions21to30 } from './questions/questions21to30';

export const allQuestions: Question[] = [
  ...questions1to10,
  ...questions11to20,
  ...questions21to30
];

export function getQuestionById(id: number): Question | undefined {
  return allQuestions.find((q) => q.id === id);
}
