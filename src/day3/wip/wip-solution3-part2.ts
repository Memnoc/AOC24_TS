// NOTE: now we need to handle new cases in the input, which are:
// do()
// don't()
// WARN: xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
// Considering the new instructions = 48

const input2 =
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

function calculateSum(input: string): number {
  let isMultEnabled = true;
  let sum = 0;

  const regex = /(?:do|don't|mul)\((\d+)?(?:,(\d+))?\)/g;
  let match;

  while ((match = regex.exec(input)) !== null) {
    const [fullMatch, num1, num2] = match;

    if (fullMatch.startsWith("do(")) {
      isMultEnabled = true;
    } else if (fullMatch.startsWith("don't(")) {
      isMultEnabled = false;
    } else if (fullMatch.startsWith("mul(") && isMultEnabled) {
      sum += Number(num1) * Number(num2);
    }
  }

  return sum;
}

console.log(calculateSum(input2)); // 48 we good
