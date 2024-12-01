import { mkdir, writeFile } from "fs/promises";
import { join } from "path";

const createDay = async (day: number) => {
  const dayString = `day${day}`;
  const srcPath = join(process.cwd(), "src", dayString);
  const inputPath = join(process.cwd(), "inputs");

  // Create directories
  await mkdir(srcPath, { recursive: true });
  await mkdir(inputPath, { recursive: true });

  // Create solution.ts
  const solutionContent = `
export const parseInput = (input: string): string[] => {
  return input.trim().split('\\n');
};

export const part1 = (input: string): number => {
  const lines = parseInput(input);
  return 0;
};

export const part2 = (input: string): number => {
  const lines = parseInput(input);
  return 0;
};
`.trim();

  // Create test file
  const testContent = `
import { expect, test, describe } from 'vitest';
import { part1, part2 } from './solution';

const SAMPLE_INPUT = \`sample
input
here\`;

describe('Day ${day}', () => {
  test('part 1', () => {
    expect(part1(SAMPLE_INPUT)).toBe(0);
  });

  test('part 2', () => {
    expect(part2(SAMPLE_INPUT)).toBe(0);
  });
});
`.trim();

  // Create empty input file
  await writeFile(join(srcPath, "solution.ts"), solutionContent);
  await writeFile(join(srcPath, "solution.test.ts"), testContent);
  await writeFile(join(inputPath, `day${day}.txt`), "");

  console.log(`Created files for day ${day}`);
};

const day = parseInt(process.argv[2]);
if (isNaN(day)) {
  console.error("Please provide a day number");
  process.exit(1);
}

createDay(day).catch(console.error);
