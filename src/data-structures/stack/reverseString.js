function reverseString(str) {
  const stack = [];

  // Push each character of the original string onto the stack
  for (let char of str) {
    stack.push(char);
  }

  // Generate the reversed string based on the LIFO principle
  let reversedStr = "";
  while (stack.length) {
    reversedStr += stack.pop();
  }

  // Return the reversed string
  return reversedStr;
}

console.log(reverseString("abcde")); // edcba
