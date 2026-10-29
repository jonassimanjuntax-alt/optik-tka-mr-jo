import test from 'node:test';
import assert from 'node:assert/strict';
import { allQuestions } from './questionsData';

test('Questions repository contains EXACTLY 30 questions', () => {
  assert.equal(allQuestions.length, 30);
});

test('Questions repository has exactly 10 PG, 10 PGK, and 10 BS', () => {
  const pgCount = allQuestions.filter((q) => q.type === 'pg').length;
  const pgkCount = allQuestions.filter((q) => q.type === 'pgk').length;
  const bsCount = allQuestions.filter((q) => q.type === 'bs').length;

  assert.equal(pgCount, 10, 'Expected exactly 10 PG questions');
  assert.equal(pgkCount, 10, 'Expected exactly 10 PGK questions');
  assert.equal(bsCount, 10, 'Expected exactly 10 BS questions');
});

test('All question IDs are consecutive from 1 to 30', () => {
  allQuestions.forEach((q, idx) => {
    assert.equal(q.id, idx + 1);
  });
});

test('All PG questions have 5 options A-E and exactly one correctOption', () => {
  const pgQuestions = allQuestions.filter((q) => q.type === 'pg');
  for (const q of pgQuestions) {
    assert.ok(q.options, `Q${q.id} missing options`);
    assert.equal(q.options?.length, 5, `Q${q.id} should have 5 options`);
    assert.ok(q.correctOption, `Q${q.id} missing correctOption`);
    assert.ok(['A', 'B', 'C', 'D', 'E'].includes(q.correctOption!), `Q${q.id} invalid correctOption`);
  }
});

test('All PGK questions have 5 options A-E and at least 2 correctOptions', () => {
  const pgkQuestions = allQuestions.filter((q) => q.type === 'pgk');
  for (const q of pgkQuestions) {
    assert.ok(q.options, `Q${q.id} missing options`);
    assert.equal(q.options?.length, 5, `Q${q.id} should have 5 options`);
    assert.ok(q.correctOptions, `Q${q.id} missing correctOptions`);
    assert.ok(q.correctOptions!.length >= 2, `Q${q.id} should have >= 2 correct options`);
  }
});

test('All BS questions have exactly 3 statements with boolean isCorrect', () => {
  const bsQuestions = allQuestions.filter((q) => q.type === 'bs');
  for (const q of bsQuestions) {
    assert.ok(q.statements, `Q${q.id} missing statements`);
    assert.equal(q.statements?.length, 3, `Q${q.id} should have 3 statements`);
    for (const stmt of q.statements!) {
      assert.equal(typeof stmt.isCorrect, 'boolean', `Q${q.id} stmt ${stmt.id} isCorrect not boolean`);
    }
  }
});

test('All questions have complete stimulus, clue, discussion, quickTrick, and ttsScripts', () => {
  for (const q of allQuestions) {
    assert.ok(q.stimulus.title.length > 0, `Q${q.id} title empty`);
    assert.ok(q.stimulus.context.length > 20, `Q${q.id} context too short`);
    assert.ok(q.misterJoClue.length > 10, `Q${q.id} clue too short`);
    assert.ok(q.discussion.known.length > 0, `Q${q.id} discussion known empty`);
    assert.ok(q.discussion.solutionSteps.length > 0, `Q${q.id} solution steps empty`);
    assert.ok(q.quickTrick.title.length > 0, `Q${q.id} quickTrick title empty`);
    assert.ok(q.ttsScripts.introAndStimulus.length > 10, `Q${q.id} TTS intro empty`);
    assert.ok(q.ttsScripts.normalDiscussion.length > 10, `Q${q.id} TTS discussion empty`);
  }
});
