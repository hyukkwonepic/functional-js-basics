const { length, head, tail, concat } = require("./utils");

function filter(collection, predicateFn) {
  if (length(collection) === 0) {
    return [];
  }
  const firstItem = head(collection);
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
  return concat(filteredFirst, filter(tail(collection), predicateFn));
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filter(numbers, (number) => {
  return number % 2 === 0;
});
const oddNumbers = filter(numbers, (number) => {
  return number % 2 === 1;
});

console.log(evenNumbers);
console.log(oddNumbers);

// Array.filter();
// console.log(numbers.filter((number) => number % 2 === 0));
