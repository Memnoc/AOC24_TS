import { Locations } from "../types/Locations";

export function parseInput(input: string): {
  leftList: Locations[];
  rightList: Locations[];
} {
  const lines = input.trim().split("\n");
  const leftList: Locations[] = [];
  const rightList: Locations[] = [];

  lines.forEach((line, index) => {
    // Split the line into two numbers
    const [left, right] = line.split(/\s+/).map(Number);

    // Create location objects for each side
    leftList.push({
      id: index,
      locationId: left,
    });

    rightList.push({
      id: index,
      locationId: right,
    });
  });

  return { leftList, rightList };
}
