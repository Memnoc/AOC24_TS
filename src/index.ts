import { readInput } from "../utils/readInput";
async function runDay(day: string) {
  try {
    const { part1, part2 } = await import(`./day${day}/solution.ts`);
    const input = readInput(parseInt(day));

    console.log(`\n🎄 Day ${day} Solutions:`);
    console.log("Part 1:", part1(input));
    console.log("Part 2:", part2(input));
  } catch (e) {
    console.error(`Failed to run day ${day}:`, e);
  }
}

const day = process.argv[2] || "1";
runDay(day);
