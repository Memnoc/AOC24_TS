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
