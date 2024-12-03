import { readFileSync } from "fs";
import { join } from "path";

export const readInput = (day: number): string => {
  return readFileSync(join(__dirname, `../inputs/day${day}.txt`), "utf8");
};

export default readInput;
