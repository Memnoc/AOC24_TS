// INFO: Just a bit of a dip dive into monotone arrays

// Single pass comparison
function isMonotonic(array: number[]): boolean {
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      isNonIncreasing = false;
    }
    if (array[i] < array[i - 1]) {
      isNonDecreasing = false;
    }
  }
  return isNonIncreasing || isNonDecreasing;
}

function isStrictlyMonotonic(array: number[]): boolean {
  let isStrictlyIncreasing = true;
  let isStrictlyDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= array[i - 1]) {
      isStrictlyIncreasing = false;
    }
    if (array[i] >= array[i - 1]) {
      isStrictlyDecreasing = false;
    }
  }
  return isStrictlyIncreasing || isStrictlyDecreasing;
}

// test
console.log(isMonotonic([1, 2, 2, 4]));
console.log(isMonotonic([3, 2, 5]));
console.log(isMonotonic([1, 3, 9]));
console.log(isMonotonic([2, 2, 2, 2]));

// test
console.log("==============================");
console.log(isStrictlyMonotonic([1, 2, 2, 4])); // should be false
console.log(isStrictlyMonotonic([3, 2, 5])); // should be false
console.log(isStrictlyMonotonic([1, 3, 9])); // should be true
console.log(isStrictlyMonotonic([2, 2, 2, 2])); // should be false
console.log(isStrictlyMonotonic([1, 2, 3])); // should be true
console.log(isStrictlyMonotonic([3, 2, 1])); // should be true
