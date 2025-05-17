function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      result.push(...flattenArray(item));
    }
  }
  return result;
}

module.exports = { flattenArray };
