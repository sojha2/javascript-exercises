const fibonacci = function(n) {
    fibNMinus1 = 1;
    fibNMinus2 = 1;
    let fibN = 1;

    if (n < 0) {
        return "OOPS";
    }

    if (n == 1 || n == 2) {
        return 1;
    }

    for (let i = 3; i <= n; i++) {
        fibN = fibNMinus1 + fibNMinus2;

        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN; 
    }
    return fibN;
};

// Do not edit below this line
module.exports = fibonacci;
