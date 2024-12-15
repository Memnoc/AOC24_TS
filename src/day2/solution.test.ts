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

  test("part 2", () => {
    expect(part2(SAMPLE_INPUT)).toBe(0);
  });
});
