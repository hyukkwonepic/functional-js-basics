function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total;
}

const product = sum([1, 2, 3, 4, 5]);
console.log(product); // 15
