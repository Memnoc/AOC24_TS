import { ReportStatus, SecurityReport } from "../types/SecurityReports";

export function parseInput(input: string): SecurityReport[] {
  return input
    .trim()
    .split("\n")
    .map((line, index) => ({
      id: index + 1,
      readings: line.trim().split(/\s+/).map(Number),
    }));
}
