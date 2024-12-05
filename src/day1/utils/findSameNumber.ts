import { Locations } from "../types/Locations";

export function calculateMultipleOccurrences(
  leftList: Locations[],
  rightList: Locations[],
): number {
  let totalSum = 0;

  leftList.forEach((leftItem) => {
    const occurrences = rightList.filter(
      (rightItem) => rightItem.locationId === leftItem.locationId,
    ).length;

    totalSum += leftItem.locationId * occurrences;
  });

  return totalSum;
}
