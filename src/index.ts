import { part1, part2 } from "./day1/solution";
import { readInput } from "./utils/readIinput";

const day = process.argv[2] || "1";
const input = readInput(parseInt(day));

console.log(`Day ${day} Results: `);
console.log("Part 1: ", part1(input));
console.log("Part 2: ", part2(input));
