// Intersection algo
interface List {
  id: number;
  listId: number;
}
const listOne = [
  { id: 0, listId: 3 },
  { id: 1, listId: 4 },
  { id: 2, listId: 2 },
  { id: 3, listId: 1 },
  { id: 4, listId: 3 },
  { id: 5, listId: 3 },
];

const listTwo = [
  { id: 0, listId: 4 },
  { id: 1, listId: 3 },
  { id: 2, listId: 5 },
  { id: 3, listId: 3 },
  { id: 4, listId: 9 },
  { id: 5, listId: 3 },
];

// we should get 31

function calculateMultipleOccurrences(
  leftList: List[],
  rightList: List[],
): number {
  let totalSum = 0;

  leftList.forEach((leftItem) => {
    const occurrences = rightList.filter(
      (rightItem) => rightItem.listId === leftItem.listId,
    ).length;

    totalSum += leftItem.listId * occurrences;
  });

  return totalSum;
}

const result = calculateMultipleOccurrences(listOne, listTwo);
console.log(result);
