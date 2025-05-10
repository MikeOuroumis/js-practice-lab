const { flattenArray } = require("./flattenArray");

test("flatten array", () => {
  expect(flattenArray([1, [2, 3, [4, 5]]])).toEqual([1, 2, 3, 4, 5]);
});
