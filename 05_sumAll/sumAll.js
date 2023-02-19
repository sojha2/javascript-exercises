const sumAll = function(num1, num2) {
    let sum = 0;

    if (typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR";
    }

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (num1 < num2) {
        for(let i = 0; num2 - i >= num1; i++) {
            sum += num2 - i;
        }
    }
    else {
        for(let i = 0; num1 - i >= num2; i++) {
            sum += num1 - i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
