function countCharacters(str) {
  let charCount = new Map();
  for (let char of str) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }
  return charCount;
}

console.log(countCharacters("hello")); // Output: Map(4) { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
