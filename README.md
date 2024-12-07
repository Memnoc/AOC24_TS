## Starter TypeScript Template - Advent Of Code 2024

Use this template to keep organised and automated while solving AOC24 puzzles

### Commands:

1. Run tests:

```bash
npm test                # Run all tests once
npm run test:watch     # Run tests in watch mode
```

2. Solve specific day:

```bash
npm run solve 1        # Solve day 1
npm run solve 2        # Solve day 2
```

3. Create new day (optional script):
   Assuming that:

1) Your solution code in `src/day1/solution.ts`
2) Your puzzle input in `inputs/day1.txt`

```bash
npm run new-day 3      # Create template for day 3
```

will show you both solutions for that day's puzzle.

### TypeScript commands useful for this project

1. Create a tsconfig

```bash
npx tsc --init
```

2. Running Typescript with Node

```bash
npx ts-node file.ts
```
