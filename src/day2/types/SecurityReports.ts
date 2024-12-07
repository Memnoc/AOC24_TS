export enum ReportStatus {
  SAFE = "safe",
  UNSAFE = "unsafe",
}

export interface SecurityReport {
  id: number;
  readings: number[];
  status?: ReportStatus;
}
