import { compareLists } from "../utils/findSmallestNumber";
import { parseInput } from "../utils/parseInput";
import { readInput } from "../utils/readInput";

const input = readInput(1);
const { leftList, rightList } = parseInput(input);

//NOTE: compareLists implementation
const difference = compareLists(leftList, rightList, "id", "locationId");
console.log("Total difference: ", difference);
