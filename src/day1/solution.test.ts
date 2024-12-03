// src/day1/solution.test.ts
import { expect, test, describe } from "vitest";
import { part1, part2 } from "./solution";

const SAMPLE_INPUT = `3 4
4 3
2 5
1 3
3 9
3 3`;

describe("Day 1", () => {
  test("part 1", () => {
    expect(part1(SAMPLE_INPUT)).toBe(11);
  });
});
