import { readFileSync } from "fs";
import { join } from "path";

export const readInput = (day: number) => {
  return readFileSync(join(__dirname, `../../inputs/day1.txt`));
};
