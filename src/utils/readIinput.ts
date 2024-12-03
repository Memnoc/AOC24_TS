import { readFileSync } from "fs";
import { join } from "path";

export const readInput = (day: number): string => {
  try {
    const buffer = readFileSync(join(__dirname, `../../inputs/day${day}.txt`));
    return buffer.toString("utf-8");
  } catch (error) {
    console.error("Error reading file: ", error);
    throw error;
  }
};
