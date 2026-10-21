//fibonnac test
import { fibs, fibsRec } from "./fibonnaci.js";

const testCases = [
  { terms: 1, sequence: [0] },
  { terms: 2, sequence: [0, 1] },
  { terms: 3, sequence: [0, 1, 1] },
  { terms: 5, sequence: [0, 1, 1, 2, 3] },
  { terms: 8, sequence: [0, 1, 1, 2, 3, 5, 8, 13] },
];

describe("testing fibs - fibonnaci iteratively", () => {
  testCases.forEach(({ terms, sequence }) => {
    test(`fibs of ${terms} is ${sequence}`, () => {
      expect(fibs(terms)).toEqual(sequence);
    });
  });
});

describe("testing fibsRec", () => {
  testCases.forEach(({ terms, sequence }) => {
    test(`fibsRec of ${terms} is ${sequence}`, () => {
      expect(fibsRec(terms)).toEqual(sequence);
    });
  });
});
