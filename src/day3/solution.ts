import { readInput } from "../../utils/readInput";
import { parseInput } from "./utils/parseInput3";
import { Multiplication } from "./types/Multiplications";

export const part1 = (input: string): number => {
  const multiplications: Multiplication[] = parseInput(input);

  return multiplications.reduce((acc, multiplications) => {
    return acc + multiplications.result;
  }, 0);
};

const input = readInput(3);
console.log("Part 1:", part1(input));

export const part2 = (input: string): number => {
  const lines = parseInput(input);
  return 0;
};
