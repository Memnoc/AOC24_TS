console.log("=== DAY 2 WIP Solutions ===");

// INFO: there are many reports and you have to deem which one is "safe"
// Safe means that they are either all increasing or all decreasing
// any two adjacent levels differ by at least one and most three
//
// Based on the table:
/*
7 6 4 2 1 -- safe
1 2 7 8 9 -- unsafe
9 7 6 2 1 -- unsafe
1 3 2 4 5 -- unsafe
8 6 4 4 1 -- unsafe
1 3 6 7 9 -- safe

Answer = 2 reports are safe
*
*/

export enum ReportStatus {
  SAFE = "safe",
  UNSAFE = "unsafe",
}
export interface SecurityReport {
  id: number;
  readings: number[];
  status?: ReportStatus;
  timestamp?: Date;
}

export function findIncreasingOccurrences(
  reports: SecurityReport[],
): SecurityReport[] {
  return reports.filter((report) => {
    let isIncreasing = true;
    let isDecreasing = true;
    let isValidDifferences = true;

    console.log(`\nChecking Report ${report.id}:`);
    console.log(`Readings: ${report.readings.join(", ")}`);

    for (let i = 0; i < report.readings.length - 1; i++) {
      const diff = Math.abs(report.readings[i] - report.readings[i + 1]);
      console.log(`Comparing positions ${i} and ${i + 1}:`);
      console.log(
        `Difference between ${report.readings[i]} and ${report.readings[i + 1]} is ${diff}`,
      );

      if (diff < 1 || diff > 3) {
        isValidDifferences = false;
        console.log("❌ Adjacent difference not between 1-3");
      }

      if (report.readings[i] >= report.readings[i + 1]) {
        isIncreasing = false;
        console.log("Not increasing");
      }
      if (report.readings[i] <= report.readings[i + 1]) {
        isDecreasing = false;
        console.log("Not decreasing");
      }
    }

    const isSafe = (isIncreasing || isDecreasing) && isValidDifferences;
    report.status = isSafe ? ReportStatus.SAFE : ReportStatus.UNSAFE;
    console.log(`Result: ${isSafe ? "SAFE ✅" : "UNSAFE ❌"}`);
    return isSafe;
  });
}

// Test
const reports: SecurityReport[] = [
  { id: 1, readings: [7, 6, 4, 2, 1] },
  { id: 2, readings: [1, 2, 7, 8, 9] },
  { id: 3, readings: [9, 7, 6, 2, 1] },
  { id: 4, readings: [1, 3, 2, 4, 5] },
  { id: 5, readings: [8, 6, 4, 4, 1] },
  { id: 6, readings: [1, 3, 6, 7, 9] },
];

console.log(findIncreasingOccurrences(reports).length); // Should output 2
