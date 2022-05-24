const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

const multiply = (arr) => {
  let output = 1;
  return arr.reduce((output, a) => (output *= a));
};

const power = (a, b) => a**b;

const factorial = (n) => {
  if (n < 0) return;
  if (n < 2) return 1;
  return n * factorial(n - 1);
}



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
