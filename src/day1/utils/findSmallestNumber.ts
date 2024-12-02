import { Locations } from "../types/Locations";

// NOTE: Algorithm to find the smalles number in an array recursively
export function findSmallestNumber(list: Locations[]): Locations {
  if (list.length === 0) {
    throw new Error("list cannot be empty");
  }

  return list.reduce((min, current) =>
    current.locationId < min.locationId ? current : min,
  );
}

export function getDifference(
  leftList: Locations[],
  rightList: Locations[],
  idKey: keyof Locations,
  compareKey: keyof Locations,
): number {
  if (leftList.length !== rightList.length) {
    throw new Error("List must be of equal length");
  }

  let totalDifference = 0;
  let remainingLeft = [...leftList];
  let remainingRight = [...rightList];

  while (remainingLeft.length > 0 && remainingRight.length > 0) {
    const minLeft = remainingLeft.reduce((min, curr) =>
      curr.locationId < min.locationId ? curr : min,
    );
    const minRight = remainingRight.reduce((min, curr) =>
      curr.locationId < min.locationId ? curr : min,
    );

    totalDifference += Math.abs(minLeft.locationId - minRight.locationId);

    remainingLeft = remainingLeft.filter(
      (item) => item[idKey] !== minLeft[idKey],
    );
    remainingRight = remainingRight.filter(
      (item) => item[idKey] !== minRight[idKey],
    );
  }
  return totalDifference;
}
