function findKthSmallest(arr, k) {
  return kthSmallest(arr, 0, arr.length - 1, k - 1);
}

function kthSmallest(arr, start, end, k) {
  if (start <= end) {
    const pi = partition(arr, start, end);
    if (k === pi) return arr[k];
    if (k < pi) return kthSmallest(arr, start, pi - 1, k);
    else return kthSmallest(arr, pi + 1, end, k);
  }
  return Number.MIN_SAFE_INTEGER;
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
  return i + 1;
}

module.exports = { findKthSmallest };
