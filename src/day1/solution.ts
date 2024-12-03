import { compareLists } from "./utils/findSmallestNumber";
import { Locations } from "./types/Locations";

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
  return compareLists(leftList, rightList, "id", "locationId");
}

// Part 2 solution
export function part2(input: string): number {
  return 0;
}
