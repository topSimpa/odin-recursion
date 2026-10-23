export default function mergeSort(arr, result = []) {
  const length = arr.length;
  if (length <= 1) return arr;

  const mid = Math.floor(length / 2);

  //dividing into equal halves or at least 1 diff
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, length);

  //sorting each halve
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  //merging
  let [l, r] = [0, 0];
  while (l < sortedLeft.length && r < sortedRight.length) {
    //sorting the result while merging
    if (sortedLeft[l] < sortedRight[r]) {
      result.push(sortedLeft[l++]);
    } else {
      result.push(sortedRight[r++]);
    }
  }

  //return the result merge to the array with
  return result.concat(sortedLeft.slice(l), sortedRight.slice(r));
}
