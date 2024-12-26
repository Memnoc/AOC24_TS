import { expect, test, describe } from 'vitest';
import { part1, part2 } from './solution';

const SAMPLE_INPUT = `sample
input
here`;

describe('Day 3', () => {
  test('part 1', () => {
    expect(part1(SAMPLE_INPUT)).toBe(0);
  });

  test('part 2', () => {
    expect(part2(SAMPLE_INPUT)).toBe(0);
  });
});