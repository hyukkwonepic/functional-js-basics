function factorial(n) {
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}

console.time(factorial);
factorial(10000);
console.timeEnd(factorial);
