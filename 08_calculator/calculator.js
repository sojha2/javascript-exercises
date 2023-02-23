const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arrayToBeSummed) {
	const total = arrayToBeSummed.reduce((currentSum, item) => {
    return currentSum + item;
  }, 0);
  return total;
};

const multiply = function(arrayToBeMultiplied) {
  const product = arrayToBeMultiplied.reduce((currentProduct, itemInArray) => {
    return currentProduct*itemInArray;
  }, 1);
  return product;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);	
};

const factorial = function(num1) {
  let answer = 1;
	for(let i = 1; i <= num1; i++) {
    answer *= i;
  }
  return answer;
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
