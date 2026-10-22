export default function mergeSort(arr, result = []) {
  const length = arr.length;
  if (length <= 1) return arr;

  const divider = Math.floor(length / 2);

  //dividing into equal halves or at least 1 diff
  const left = arr.slice(0, divider);
  const right = arr.slice(divider, length);

  //sorting each halve
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  //merging when both halfs are both not empty
  while (notEmpty(sortedLeft) && notEmpty(sortedRight)) {
    const topLeft = sortedLeft[0];
    const topRight = sortedRight[0];

    //sorting the result while merging
    if (topLeft < topRight) {
      result.push(topLeft);
      sortedLeft.splice(0, 1);
    } else {
      result.push(topRight);
      sortedRight.splice(0, 1);
    }
  }

  //merge the rest of the non empty half into result
  if (notEmpty(sortedLeft)) result.push(...sortedLeft);
  else result.push(...sortedRight);

  return result;
}

const notEmpty = (arr) => !(arr.length === 0);
