import mergeSort from "./merge-sort.js";

describe("merge sort test", () => {
  const testCases = [
    { arr: [], result: [] },
    { arr: [73], result: [73] },
    { arr: [1, 2, 3, 4, 5], result: [1, 2, 3, 4, 5] },
    { arr: [3, 2, 1, 13, 8, 5, 0, 1], result: [0, 1, 1, 2, 3, 5, 8, 13] },
    { arr: [105, 79, 100, 110], result: [79, 100, 105, 110] },
  ];

  //   test(`mergeSort ([${testCases[2].arr}]) -> [${testCases[2].result}]`, () => {
  //     const received = mergeSort(testCases[2].arr);
  //     expect(received).toEqual(testCases[2].result);
  //   });
  testCases.forEach(({ arr, result }) => {
    const received = mergeSort(arr);

    test(`mergeSort([${arr}]) -> [${result}]`, () => {
      expect(received).toEqual(result);
    });
  });
});
