import { expect, test, describe } from "vitest";
import { part1, part2 } from "./solution";

const SAMPLE_INPUT = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

describe("Day 2", () => {
  test("part 1", () => {
    expect(part1(SAMPLE_INPUT)).toBe(2);
  });

  test("part 2 with problem dampener", () => {
    expect(part2(SAMPLE_INPUT)).toBe(4);
  });

  test("problem dampener specific cases", () => {
    const input = "1 3 2 4 5"; // should be safe when removing 3
    expect(part2(input)).toBe(1);
  });

  test("example from problem", () => {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
    expect(part2(input)).toBe(4);
  });
});
