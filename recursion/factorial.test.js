const { factorial } = require("./factorial");

test("factorial of 5", () => {
  expect(factorial(5)).toBe(120);
});
test("factorial of 0", () => {
  expect(factorial(0)).toBe(1);
});
