function memoize(fn) {
  const cache = new Map();

  return function (arg) {
    if (cache.has(arg)) return arg;
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}
function memoizedFib() {
  const cache = { 0: 0, 1: 1 };

  return function fib(n) {
    if (n in cache) return cache[n];
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const slowFib = (n) => (n < 2 ? n : slowFib(n - 1) + slowFib(n - 2));
const fastFib = memoize(slowFib);

console.log("\n--- top-level memoize demo ---");
console.time("first top fib");
console.log(fastFib(35));
console.timeEnd("first top fib");
console.time("second top fib");
console.log(fastFib(35));
console.timeEnd("second top fib");

// Recursive memoize (one-call demo)
const fib = memoizedFib();

console.log("\n--- recursive memoize demo ---");
console.time("memoized fib");
console.log(fib(100));
console.timeEnd("memoized fib");
