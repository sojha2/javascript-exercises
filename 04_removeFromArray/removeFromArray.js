const removeFromArray = function(array, ...itemsToBeRemoved) {

    for (let i = 0; i < itemsToBeRemoved.length; i++) {
        if (array.includes(itemsToBeRemoved[i])) {
            array.splice(array.indexOf(itemsToBeRemoved[i]), 1);
        }
        continue;
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
