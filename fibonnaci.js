//fibonnaci.js

function fibs(term, sequence = [0]) {
  while (sequence.length < term) {
    const [prev1, prev2 = 1] = sequence.slice(-2);
    sequence.push(prev1 + prev2);
  }
  return sequence;
}

function fibsRec(term, sequence = [0]) {
  if (term == 1) return sequence;

  sequence = fibsRec(term - 1);

  const [prev1, prev2 = 1] = sequence.slice(-2);
  sequence.push(prev1 + prev2);

  return sequence;
}
export { fibs, fibsRec };
