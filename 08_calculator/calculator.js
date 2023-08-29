const add = function(x, z) {
  return x+z
	
};

const subtract = function(x, z) {

  return x-z
	
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(item => {
      sum += item;
  });
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  arr.forEach(item => {
      result *= item;
  });
  return result;

};

const power = function(x, y) {

	    return Math.pow(x, y);

};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
}
return n * factorialRecursive(n - 1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
