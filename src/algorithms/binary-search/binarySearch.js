function binarySearch(arr, target) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}

function binaryDescending(arr, target) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}

function binarySearchFlexible(arr, x, low, high, ascending) {
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) return mid;

    if (ascending) {
      if (arr[mid] < x) low = mid + 1;
      else high = mid - 1;
    } else {
      if (arr[mid] > x) low = mid + 1;
      else high = mid - 1;
    }
  }

  return -1;
}

module.exports = { binarySearch, binaryDescending, binarySearchFlexible };
