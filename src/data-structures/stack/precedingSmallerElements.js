function findPrecedingSmallerElements(arr) {
  let stack = [];
  let result = new Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return result;
}

console.log(findPrecedingSmallerElements([1, 3, 2, 5, 4, 7]));
// Output: [ -1, 1, 1, 2, 2, 4 ]
console.log(findPrecedingSmallerElements([5, 4, 3, 2, 1]));
// Output: [ -1, -1, -1, -1, -1 ]
