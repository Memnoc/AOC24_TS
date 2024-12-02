import { getDifference } from "./utils/findSmallestNumber";
import { parseInput } from "./utils/parseInput";
import { readInput } from "./utils/readInput";

const input = readInput(1);
const { leftList, rightList } = parseInput(input);

//NOTE: getDifference implementation
const difference = getDifference(leftList, rightList, "id", "locationId");
console.log("Total difference: ", difference);
