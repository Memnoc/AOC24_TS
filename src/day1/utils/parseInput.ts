import { Locations } from "../types/Locations";

export function parseInput(input: string): {
  leftList: Locations[];
  rightList: Locations[];
} {
  const lines = input.trim().split("\n");
  const leftList: Locations[] = [];
  const rightList: Locations[] = [];

  lines.forEach((line, index) => {
    const [left, right] = line.replace(/\s+/g, "").trim().split(" ");

    leftList.push({
      id: index,
      locationId: parseInt(left),
    });

    rightList.push({
      id: index,
      locationId: parseInt(right),
    });
  });

  return { leftList, rightList };
}
