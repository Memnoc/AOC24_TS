// We have to isolate a pattern in an input that is riddled with inaccuracies and invalid characters

// INPUT string
// xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
// should return 161 (2*4 + 5*5 + 11*8 + 8*5)

const input =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

const betterRegex = /(?:mul|do_not_mul)\((\d+),(\d+)\)/g;

const matches = input.matchAll(betterRegex);
// acc = accumulator
const sum = Array.from(matches).reduce((acc, match) => {
  const [_, num1, num2] = match;
  return acc + Number(num1) * Number(num2);
}, 0);

console.log(sum); // 161 so we are good
