function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.time(factorial);
factorial(10000);
console.timeEnd(factorial);
