const numFactorial = num => {
  for (let index = num - 1; index > 0; index -= 1) {
    num *= index;
  }

  return num;
};

const recursiveNumFactorial = num => num > 1 ? num * recursiveNumFactorial(num - 1) : 1;

console.log(numFactorial(4));
console.log(recursiveNumFactorial(4));