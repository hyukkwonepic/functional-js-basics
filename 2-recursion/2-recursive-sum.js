function sum(numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }

  return numbers[0] + sum(numbers.slice(1));
}

const product = sum([1, 2, 3, 4, 5]);
console.log(product);
