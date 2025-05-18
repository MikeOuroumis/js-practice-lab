function areBracketsBalanced(s) {
  const stack = [];

  const brackets = { "[": "]", "{": "}", "(": ")" };

  for (let char of s) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else {
      if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(areBracketsBalanced("[({})]")); // true
console.log(areBracketsBalanced("[(]")); // false
console.log(areBracketsBalanced("[]{}()")); // true
console.log(areBracketsBalanced("[])")); // false
