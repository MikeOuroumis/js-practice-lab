function countTopsyTurvys(arr) {
  if (arr.length === 1) return [arr, 0];

  const mid = Math.floor(arr.length / 2);
  const [left, leftCount] = countTopsyTurvys(arr.slice(0, mid));
  const [right, rightCount] = countTopsyTurvys(arr.slice(mid));
  const [merged, mergeCount] = mergeAndCount(left, right);

  return [merged, leftCount + rightCount + mergeCount];
}

function mergeAndCount(left, right) {
  const result = [];
  let i = 0,
    j = 0,
    count = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else {
      result.push(right[j++]);
      count += left.length - i;
    }
  }

  return [result.concat(left.slice(i), right.slice(j)), count];
}

module.exports = { countTopsyTurvys };
