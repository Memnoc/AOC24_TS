import { Multiplication } from "../types/Multiplications";

export function parseInput(input: string): Multiplication[] {
  return Array.from(input.matchAll(/(?:mul|do_not_mul)\((\d+),(\d+)\)/g)).map(
    (match) => {
      const [_, num1, num2] = match;
      return {
        num1: Number(num1),
        num2: Number(num2),
        result: Number(num1) * Number(num2),
      };
    },
  );
}

export function parseInput2(input: string): number {
  let isMultEnabled = true;
  let sum = 0;

  const regex = /(?:do|don't|mul)\((\d+)?(?:,(\d+))?\)/g;
  let match;

  while ((match = regex.exec(input)) !== null) {
    const [fullMatch, num1, num2] = match;

    if (fullMatch.startsWith("do(")) {
      isMultEnabled = true;
    } else if (fullMatch.startsWith("don't(")) {
      isMultEnabled = false;
    } else if (fullMatch.startsWith("mul(") && isMultEnabled) {
      sum += Number(num1) * Number(num2);
    }
  }

  return sum;
}
