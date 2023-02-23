const palindromes = function(string) {
    let lowerCase = string.toLowerCase();
    let reversedString = '';
    const regEx = /[^a-z]/g;

    lowerCase = lowerCase.replaceAll(regEx, '');

    for(let i = 0; i < lowerCase.length; i++) {
        reversedString += lowerCase[lowerCase.length - i - 1];
    }

    const parsedReversedString = reversedString.replaceAll(regEx, '');

    if (parsedReversedString == lowerCase) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = palindromes;
