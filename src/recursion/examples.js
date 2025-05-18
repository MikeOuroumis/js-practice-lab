function countCakeLayers(layers) {
  if (layers === 1) {
    return 1; // Only one layer
  } else {
    return 1 + countCakeLayers(layers - 1); // Count this layer plus the rest
  }
}

console.log(countCakeLayers(5)); // Example call with layers = 5

function sumUpTo(n) {
  if (n === 1) {
    console.log(`Base case reached: n = ${n}, returning 1`);
    return 1; // Base case: when n is 1, return 1
  } else {
    let result = n + sumUpTo(n - 1);
    console.log(`n = ${n}, current result = ${result}`);
    return result; // Recursive case: sum up to n
  }
}

console.log(sumUpTo(5));

function sumDigits(number) {
  if (number < 10) {
    return number;
  } else {
    return (number % 10) + sumDigits(Math.floor(number / 10));
  }
}

console.log(sumDigits(54321)); // Should print 15 (5+4+3+2+1)

function sumUpTo(n) {
  if (n === 1) {
    console.log(`Base case reached: n = ${n}, returning 1`);
    return 1; // Base case: when n is 1, return 1
  } else {
    let result = n + sumUpTo(n - 1);
    console.log(`n = ${n}, current result = ${result}`);
    return result; // Recursive case: sum up to n
  }
}

console.log(sumUpTo(5)); // Example call to sum up to 5

function sumDigits(number) {
  if (number < 10) {
    return number;
  } else {
    return (number % 10) + sumDigits(Math.floor(number / 10));
  }
}

console.log(sumDigits(54321)); // Should print 15 (5+4+3+2+1)
