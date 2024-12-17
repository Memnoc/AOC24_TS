import { readInput } from "../../utils/readInput";
import { parseInput } from "./utils/parseInput2";
import { ReportStatus, SecurityReport } from "./types/SecurityReports";

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

function isValidSequence(readings: number[]): boolean {
  if (readings.length < 2) return true;

  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 0; i < readings.length - 1; i++) {
    const diff = Math.abs(readings[i] - readings[i + 1]);
    if (diff < 1 || diff > 3) return false;

    if (readings[i] >= readings[i + 1]) isIncreasing = false;
    if (readings[i] <= readings[i + 1]) isDecreasing = false;
  }

  return isIncreasing || isDecreasing;
}

export function part2(input: string): number {
  const reports = parseInput(input);
  return reports.filter((report) => {
    if (isValidSequence(report.readings)) return true;

    for (let i = 0; i < report.readings.length; i++) {
      const modified = [...report.readings];
      modified.splice(i, 1);
      if (isValidSequence(modified)) return true;
    }

    return false;
  }).length;
}

const input = readInput(2);
console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
