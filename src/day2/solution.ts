import { readInput } from "../../utils/readInput";
import { parseInput } from "./utils/parseInput2";
import { ReportStatus, SecurityReport } from "./wip/wip-solution-2";

export function findIncreasingOccurrences(
  reports: SecurityReport[],
): SecurityReport[] {
  return reports.filter((report) => {
    let isIncreasing = true;
    let isDecreasing = true;
    let isValidDifferences = true;

    for (let i = 0; i < report.readings.length - 1; i++) {
      const diff = Math.abs(report.readings[i] - report.readings[i + 1]);

      if (diff < 1 || diff > 3) {
        isValidDifferences = false;
      }

      if (report.readings[i] >= report.readings[i + 1]) {
        isIncreasing = false;
      }
      if (report.readings[i] <= report.readings[i + 1]) {
        isDecreasing = false;
      }
    }

    const isSafe = (isIncreasing || isDecreasing) && isValidDifferences;
    report.status = isSafe ? ReportStatus.SAFE : ReportStatus.UNSAFE;
    return isSafe;
  });
}

export function part1(input: string): number {
  const reports = parseInput(input);
  return findIncreasingOccurrences(reports).length;
}

export function part2(input: string): number {
  // Placeholder for part 2
  return 0;
}

const input = readInput(2);
console.log("Part 1:", part1(input));
