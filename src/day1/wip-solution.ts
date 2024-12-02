import { findSmallestNumber } from "./utils/findSmallestNumber";
import { getDifference } from "./utils/findSmallestNumber";
// left list 3, 4, 2, 1, 3, 3
// right list 4, 3, 5, 3, 9, 3

const leftList = [
  { id: 0, locationId: 3 },
  { id: 1, locationId: 4 },
  { id: 2, locationId: 2 },
  { id: 3, locationId: 1 },
  { id: 4, locationId: 3 },
  { id: 5, locationId: 3 },
];

const rightList = [
  { id: 0, locationId: 4 },
  { id: 1, locationId: 3 },
  { id: 2, locationId: 5 },
  { id: 3, locationId: 3 },
  { id: 4, locationId: 9 },
  { id: 5, locationId: 3 },
];

//NOTE: getDifference implementation
const difference = getDifference(leftList, rightList, "id", "locationId");
console.log("Total difference: ", difference);
