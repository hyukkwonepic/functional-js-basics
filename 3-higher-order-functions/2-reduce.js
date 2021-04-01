const { length, head, tail } = require("./utils");

function reduce(collection, reducerFn, accumulator) {
  if (length(collection) === 0) {
    return accumulator;
  }

  const newAccumulator = reducerFn(head(collection), accumulator);
  return reduce(tail(collection), reducerFn, newAccumulator);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reducedNumbers = reduce(
  numbers,
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  },
  0
);

console.log(reducedNumbers);

// Array.reduce();
// console.log(
//   numbers.reduce((acc, cv) => acc + cv),
//   0
// );
