// Find the peak in a bitonic array
function findPeak(arr) {
  let low = 0,
    high = arr.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[mid + 1]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

// Binary search in either ascending or descending order
function binarySearch(arr, target, low, high, ascending = true) {
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;

    if (ascending) {
      if (arr[mid] < target) low = mid + 1;
      else high = mid - 1;
    } else {
      if (arr[mid] > target) low = mid + 1;
      else high = mid - 1;
    }
  }
  return -1;
}

// Combined function to search in a bitonic array
function findInBitonicArray(arr, target) {
  const peak = findPeak(arr);

  const left = binarySearch(arr, target, 0, peak, true);
  if (left !== -1) return left;

  const right = binarySearch(arr, target, peak + 1, arr.length - 1, false);
  return right;
}

// Example usage
const bitonic = [-3, -2, 4, 6, 10, 8, 7, 1];
console.log(findInBitonicArray(bitonic, -2)); // Output: 1

module.exports = { findInBitonicArray, findPeak, binarySearch };
