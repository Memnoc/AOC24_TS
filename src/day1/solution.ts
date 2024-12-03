import { getDifference } from "./utils/findSmallestNumber";
import { Locations } from "./types/Locations";

// Parse input function specific to this day's format
export function parseInput(input: string): {
  leftList: Locations[];
  rightList: Locations[];
} {
  if (!input || typeof input !== "string") {
    throw new Error(`Invalid input: ${JSON.stringify(input)}`);
  }

  const lines = input.trim().split("\n");
  const leftList: Locations[] = [];
  const rightList: Locations[] = [];

  lines.forEach((line, index) => {
    const [left, right] = line.split(/\s+/).map(Number);
    leftList.push({ id: index, locationId: left });
    rightList.push({ id: index, locationId: right });
  });

  return { leftList, rightList };
}

// Part 1 solution
export function part1(input: string): number {
  const { leftList, rightList } = parseInput(input);
  return getDifference(leftList, rightList, "id", "locationId");
}

// Leave part 2 as placeholder for now
export function part2(input: string): number {
  return 0;
}
